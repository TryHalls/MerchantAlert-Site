# Cloudflare Pages runbook

This site is plain static HTML and is ready for the Cloudflare Pages Git integration.

## Owner-controlled steps

1. Sign in to the Cloudflare account that will own the Pages project.
2. Open **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Select `TryHalls/MerchantAlert-Site`.
4. Set the production branch to `main`.
5. Set the build command to `exit 0`.
6. Set the build output directory to `.`.
7. Deploy and open the generated `*.pages.dev` URL in an incognito window.
8. Confirm the home page, every footer link, the contact fail-closed state, and the 404 page.

Cloudflare documents this exact static HTML pattern in [Deploy a static HTML site](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/). Git integration also provides preview deployments for pull requests.

## Custom domain handoff

Only do this when the owner controls the domain and has approved publishing the legal/contact pages.

- Open the Pages project and choose **Custom domains → Set up a domain**.
- For an apex domain, add the domain as a Cloudflare zone and point nameservers as Cloudflare requires.
- For a subdomain, add the CNAME at the DNS provider and point it to the assigned Pages hostname.
- Do not add a DNS record alone without first associating the domain in the Pages project; Cloudflare documents that this can result in a 522 error.
- If the DNS zone has restrictive CAA records, review certificate issuance before debugging the Pages project.

See [Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) for the current flow.

## Workers Static Assets fallback

If Pages project creation is unavailable, this repository has a separate static-assets Worker configuration. It uses `wrangler.site.jsonc`, serves only the public site files selected by `.assetsignore`, and applies security headers in `src/site-worker.js`.

```bash
npm run deploy:cloudflare
```

Cloudflare documents Workers Static Assets as the current recommended way to deploy a purely static site. The deployed preview is on the account’s `*.workers.dev` subdomain unless the owner later attaches a controlled custom domain.

See [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) and [Workers Static Assets getting started](https://developers.cloudflare.com/workers/static-assets/get-started/).

The current deployed validation preview is <https://merchantalert-site.tryhalls.workers.dev/>. It is intentionally not used as the final Merchant Center business domain.

## Optional GitHub Actions deployment

The repository contains a manual-only workflow at `.github/workflows/deploy-cloudflare.yml`. Before using it, the owner must add these GitHub Actions secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

The token should be scoped only to the account and Worker deployment required for this site. Do not commit or paste its value into the repository, issues, pull requests, or chat. Start the workflow manually after reviewing the change.

Cloudflare’s [GitHub Actions guide](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/) documents the non-interactive account-ID and API-token model and recommends storing both as CI/CD secrets.

## Post-deploy validation

```bash
curl -fsS https://OWNER_DOMAIN/ | grep -F "MerchantAlert"
curl -fsS -I https://OWNER_DOMAIN/contact.html
curl -fsS -I https://OWNER_DOMAIN/robots.txt
```

Replace `OWNER_DOMAIN` locally with the real domain; do not commit it here until the owner approves the public domain. Then:

1. set `siteUrl` in `site-config.js`;
2. set `contactEmail` only if the inbox is monitored and covered by the privacy notice;
3. complete Search Console verification with the owner’s token or file;
4. add a real sitemap URL to `robots.txt` only after the canonical domain is confirmed;
5. run `npm test` and redeploy.
