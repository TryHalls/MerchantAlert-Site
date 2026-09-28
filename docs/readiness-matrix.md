# MerchantAlert readiness matrix

Last checked: 28 September 2026.

This matrix is the source of truth for the public-site lane. “Ready” means there is current evidence in this repository or in the deployed preview. It does not mean that an external account, legal decision, or commercial result has been completed.

| Requirement | Current evidence | Status | Owner action | Next safe continuation |
| --- | --- | --- | --- | --- |
| Separate public-site repository | `TryHalls/MerchantAlert-Site`, `main` clean and synced | Ready | None | Keep site changes isolated from `TryHalls/MerchantAlert` |
| Public website | Worker preview returns 200 for the main pages and 404 for an unknown path | Ready for validation | Review copy before final launch | Validate again after attaching the final domain |
| Cloudflare hosting | `merchantalert-site.tryhalls.workers.dev` deployed with static assets and security headers | Ready for validation | None | Use the manual CI workflow after adding owner secrets |
| Custom domain | Cloudflare account currently has zero zones | Pending owner | Control a domain and attach it to the Worker/Pages project | Set `siteUrl`, publish the sitemap, and verify canonical URLs |
| Public contact channel | `site-config.js` intentionally has no contact inbox; form is fail-closed | Pending owner | Provide a monitored support/founder inbox and approve its privacy treatment | Activate the mail handoff and test it without exposing credentials |
| Legal identity and privacy notice | Privacy/terms pages are clearly marked drafts | Pending owner/legal review | Supply the real controller identity, contact details, jurisdiction, retention, recipients, and rights process | Replace draft placeholders and review before collecting personal data |
| Search Console | Sitemap template exists; no property or token is configured | Pending owner | Verify the final domain in Search Console | Add the exact owner token/file and publish the real sitemap |
| Merchant Center website | No legitimate production account or verified/claimed homepage is available | Blocked by external prerequisite | Create/use the real production account and verify/claim the final website | Confirm the account/domain pairing before API registration |
| Merchant API developer registration | No production Merchant Center account, Cloud project, or `registerGcp` result in this lane | Blocked by external prerequisite | Create the dedicated Cloud project, enable Merchant API, confirm `ADMIN`, and register the project | Coordinate with the backend lane using approved secret storage |
| First pilot | Outreach and pilot plan are documented; no message has been sent | Pending owner/channel | Choose the audience/channel and approve manual outreach | Run workflow interviews, then onboard one consenting pilot |
| First payment | Pricing is provisional; no checkout or invoice flow exists | Pending owner/legal/fiscal | Approve entity, taxes, currency, billing, refunds, terms, and payment method | Add only the approved payment/invoice CTA |

## Evidence links

- [Public preview](https://merchantalert-site.tryhalls.workers.dev/)
- [Google Merchant API path](google-merchant-api-path.md)
- [Launch checklist](launch-checklist.md)
- [First pilot plan](first-pilot-plan.md)
- [Cloudflare runbook](cloudflare-pages-runbook.md)

## Do not send to Codex

Passwords, DNS credentials, recovery codes, identity documents, tax IDs, Merchant IDs when not needed, OAuth secrets, service-account private keys, access tokens, payment credentials, prospect lists, or customer data.

