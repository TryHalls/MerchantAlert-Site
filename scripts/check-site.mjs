import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const expectedPages = [
  "index.html",
  "pricing.html",
  "how-it-works.html",
  "contact.html",
  "privacy.html",
  "terms.html",
  "security.html",
  "404.html"
];

const failures = [];

const existingFiles = new Set(await readdir(root));

for (const file of expectedPages) {
  const source = await readFile(new URL(file, root), "utf8");
  for (const marker of ["<title>", 'name="description"', 'rel="stylesheet"', 'site-config.js']) {
    if (!source.includes(marker)) failures.push(`${file}: missing ${marker}`);
  }
  if (!source.includes('class="site-header"')) failures.push(`${file}: missing shared header`);
  if (!source.includes('class="site-footer"')) failures.push(`${file}: missing shared footer`);

  for (const href of [...source.matchAll(/href="([^"]+)"/g)].map((match) => match[1])) {
    if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    const target = href.split("?")[0].split("#")[0].replace(/^\//, "");
    if (target && !existingFiles.has(target)) failures.push(`${file}: broken local link ${href}`);
  }
}

const rootFiles = [...existingFiles];
if (!rootFiles.includes("robots.txt")) failures.push("robots.txt is missing");
if (!rootFiles.includes("_headers")) failures.push("_headers is missing");
if (!rootFiles.includes("_redirects")) failures.push("_redirects is missing");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${expectedPages.length} pages and deployment metadata.`);
