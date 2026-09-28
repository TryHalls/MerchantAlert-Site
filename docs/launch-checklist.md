# MerchantAlert: launch checklist

This checklist is the handoff between the public site lane and owner-controlled external setup. It is deliberately explicit so no one mistakes a coded page for a completed legal, Google, or billing prerequisite.

Status at 2026-09-28: website code is ready for review; external owner actions are pending.

## 1. Publish a truthful public presence

| State | Owner action | Why it is necessary | Do not share with Codex | What this lane continues doing |
| --- | --- | --- | --- | --- |
| Pending | Choose a domain the owner actually controls, or intentionally use the free Pages preview during validation. | Google verification and customer trust require a reachable, owned web presence. | Registrar password, DNS credentials, or account recovery codes. | Keep the site deployable on `*.pages.dev` and document the exact DNS/CNAME handoff. |
| Pending | Add the real operator/legal identity, business address or required public details, support inbox, and security contact after taking legal advice. | A legitimate SaaS presence cannot rely on invented identity or contact data. | Identity documents, tax IDs, personal address, or private legal files. | Keep draft privacy/terms pages conservative and flag every placeholder. |
| Pending | Review the provisional pricing and replace it or approve it as a clearly labelled pilot offer. | Price, tax, refunds, and billing are commercial decisions, not UI decoration. | Bank details, payment credentials, or payment-provider secrets. | Keep pricing as non-transactional copy with no checkout. |
| Pending | Configure `site-config.js` with the real HTTPS URL and monitored contact inbox. | This activates canonical URLs and the contact handoff. | Email passwords, API tokens, or inbox credentials. | Keep the form fail-closed until a real destination exists. |

## 2. Search Console and website verification

1. The owner creates a Search Console property for the controlled domain. Use a Domain property if the goal is to cover the full domain and its subdomains; Google says Domain properties require DNS verification. A URL-prefix property can use HTML tag/file methods.
2. The owner completes verification in Search Console, then either adds the provided verification token to `site-config.js` or adds the exact file Google supplies at the site root. Do not modify the token.
3. The owner submits the real sitemap only after the final domain and canonical URL are known. The current repository intentionally does not publish a fake `Sitemap:` URL.
4. The owner completes the Merchant Center website verification/claim flow on the same controlled domain.

**Human stop point:** the owner must log in to Search Console/DNS and click the verification controls.

**Do not share:** Search Console credentials, DNS credentials, verification tokens in chat, or account recovery material.

**Afterward:** this lane can validate the deployed URL, add the exact public verification artifact, review robots/canonical behavior, and update the checklist.

## 3. Legitimate Merchant Center and Merchant API setup

1. Create or use a real production Merchant Center account that represents the actual operator/business. Do not invent a Merchant ID or business identity.
2. Complete any Google business identity verification using the owner’s real documents and matching legal information.
3. Create a dedicated Google Cloud project and enable Merchant API.
4. Choose the auth route: service account for the owner’s own Merchant Center account, or OAuth for a third-party app managing merchant accounts. Confirm the permission model before onboarding a customer.
5. Register the Google Cloud project with the production Merchant Center account using `registerGcp`. Google’s current prerequisites include a verified homepage, `ADMIN` access, a dedicated Cloud project, and a valid non-service-account developer contact email.
6. Store credentials only in the backend’s approved secret store. Never put them in this website repo, browser form, issue, PR, or chat.
7. Run the first real API call with the owner’s test plan, then onboard one consenting pilot merchant manually.

**Human stop point:** account creation, business identity verification, acceptance of Google terms, OAuth consent, secret creation, and any login/2FA/CAPTCHA require the owner.

**Do not share:** Merchant ID, OAuth client secret, service-account JSON/private key, access tokens, Google account credentials, business documents, or recovery codes.

**Afterward:** this lane can update public copy, onboarding instructions, and pilot messaging from observed reality without exposing the secrets.

## 4. Paid pilot and first revenue

Before accepting money, the owner must decide:

- contracting entity, jurisdiction, currency, tax/VAT handling, invoices;
- billing provider and customer terms;
- refund/cancellation policy and support expectations;
- data-processing terms, subprocessors, retention, and deletion;
- what success means for the first paid pilot.

**Human stop point:** bank/payment setup, accepting legal terms, and fiscal decisions.

**Do not share:** card or bank data, payment-provider secret keys, tax IDs, or signed contracts.

**Afterward:** the site can add a real checkout or invoice CTA only when the owner explicitly supplies the approved public-facing details and the implementation boundary.

## Current launch decision

The site should be treated as a public validation asset until Sections 1–3 are complete. It is safe to review the copy and design now, but it must not imply that Merchant API is already connected, that a business entity is already verified, or that payment is already available.

