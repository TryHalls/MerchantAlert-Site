# MerchantAlert Site

Public-facing website and launch documentation for MerchantAlert:

> Google Merchant Center monitoring for Shopify. Nothing else.

This repository is intentionally separate from the backend repository. It is a dependency-free static site that can be served from Cloudflare Pages at near-zero cost.

## Local preview

```bash
npm test
npm run preview
```

Then open <http://127.0.0.1:4173/>.

The test checks page metadata, shared navigation/footer, required deployment files, and local links. There is no package install step beyond Node.js itself.

## Owner-controlled configuration

Edit [site-config.js](site-config.js) only when the following are real and controlled by the owner:

- `siteUrl`: the final HTTPS domain;
- `contactEmail`: an inbox that is monitored and covered by the published privacy notice;
- `searchConsoleVerification`: the token provided by the owner’s Search Console flow;
- `launchMode`: keep `prelaunch` until the launch checklist is complete.

Do not commit API keys, OAuth secrets, service-account files, payment credentials, identity documents, or legal documents to this repository.

## Cloudflare deployment

The primary hosting path is Cloudflare Pages. In Cloudflare Pages, use:

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`

Cloudflare’s official static HTML guide documents this setup and provides a `*.pages.dev` preview URL. Connect a custom domain only after the owner controls the domain and is ready to publish the legal and contact details.

This repository also includes a Workers Static Assets fallback in `wrangler.site.jsonc`. It is isolated from the MerchantAlert backend Worker, applies the same security headers in `src/site-worker.js`, and can be deployed with `npm run deploy:cloudflare` when Pages project creation is unavailable in the account.

Current public validation preview: <https://merchantalert-site.tryhalls.workers.dev/>. This is an owner-account preview hostname, not a substitute for the final controlled domain.

The repository includes a manual-only [Cloudflare deploy workflow](.github/workflows/deploy-cloudflare.yml). It remains inactive until the owner adds `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub Actions secrets, then starts it with `workflow_dispatch`.

## Launch gates

Read these in order:

1. [Launch checklist](docs/launch-checklist.md)
2. [Google Merchant API path](docs/google-merchant-api-path.md)
3. [Manual outreach playbook](docs/outreach-playbook.md)
4. [First pilot plan](docs/first-pilot-plan.md)
5. [Decision log](docs/decision-log.md)

The privacy and terms pages are explicit drafts until the owner supplies the real controller identity, contact details, jurisdictions, processing design, billing rules, and legal review.

The Search Console sitemap is prepared as [a domain-neutral template](docs/sitemap.xml.template); publish it only after replacing the placeholder with the approved HTTPS domain.
