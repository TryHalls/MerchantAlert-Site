# Decision log

## 2026-09-28 — Static site first

Use dependency-free static HTML/CSS/JS so the site can deploy on Cloudflare Pages with no build service, database, or paid plan. Cloudflare documents static HTML deployment with `exit 0` and the repository root as the output directory.

## 2026-09-28 — No invented identity

The repository contains no legal entity, address, tax number, domain, email inbox, Merchant ID, or Google credential. Empty owner-controlled configuration is safer than plausible-looking placeholders that could be mistaken for facts.

## 2026-09-28 — Contact form fails closed

The form prepares a `mailto:` handoff only after a real `contactEmail` is configured. Until then it explains that no data was sent. This avoids collecting personal data without a controller, destination, retention rule, or support process.

## 2026-09-28 — Pricing is non-transactional

Pricing is shown as provisional validation pricing. There is no checkout, payment collection, or billing promise until the owner decides entity, currency, tax, refunds, customer terms, and payment provider.

## 2026-09-28 — No analytics by default

The public site has no analytics or advertising scripts. Measurement can be added later only with an approved privacy and data-processing design.

## 2026-09-28 — Product boundary is explicit

Copy repeatedly says MerchantAlert monitors Merchant Center for Shopify and is not a feed manager. This keeps the public promise aligned with the narrow route to the first customer.

