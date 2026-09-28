# Asynchronous first-user playbook

The owner does not want sales calls, demos, or personal prospect conversations. Validation must therefore happen asynchronously, through channels where product feedback/self-promotion is explicitly permitted or where people opt in to engage.

## Primary audience

Prioritise:

1. Small ecommerce/PPC agencies that actively manage Shopify + Google Shopping / Merchant Center for multiple clients.
2. Shopify merchants already spending meaningfully on Google Shopping or Performance Max.
3. Operators who can describe recurring Merchant Center issue triage as an operational problem.

Avoid broad audiences that mainly need feed creation, catalog editing, bid management, or general SEO.

## Legal and platform constraint

Do not default to unsolicited commercial email.

For Spain/EU operation, promotional email and equivalent electronic communications must respect LSSI Article 21 and its consent/existing-customer rules. This repository therefore treats cold email as out of scope for the validation sprint unless a lawful basis and exact workflow are separately approved.

Do not scrape contact lists, automate bulk DMs, or hide the builder relationship.

## Preferred validation channels

Use only channels whose current rules permit the intended behavior.

- **r/ShopifyApps**: its current developer guidance explicitly allows app sharing and idea validation, with one promo/validation post per month per developer and a required structured template. This is the best current fit for a public validation post.
- **Shopify Community — Ask and Offer**: Shopify's current Community Guidelines say this board may be used for general information about an app/service or to solicit feedback. However, the same guidelines say AI-produced content is highly discouraged, so do not publish generated copy there without a genuine human review/edit.
- **Indie Hackers**: acceptable as a secondary founder-feedback channel, especially for landing-page/idea feedback, but it is not the target-customer channel and should not be treated as demand proof by itself.

Avoid r/Shopify and r/ecommerce for direct app promotion unless their current rules explicitly allow the exact post; their moderation rules are restrictive and account-gated.

## Validation questions

A public validation post should make it easy to answer in writing:

- How do you notice a new Merchant Center issue today?
- Does anyone on your team manually check Merchant Center?
- When many products are affected, do clicks/impressions change what you fix first?
- Would a read-only alerting layer be useful if it did not touch feeds or products?
- If useful, would this be a store-level purchase or something an agency would want across accounts?

No call is required. Public comments or asynchronous replies are sufficient.

## Agency-facing draft

> I am validating MerchantAlert, a narrow monitoring tool for Shopify stores using Google Merchant Center.
>
> The premise is: detect new disapprovals or visibility limitations without relying on someone manually checking Merchant Center, then prioritise the affected products using recent clicks/impressions where the match is deterministic.
>
> It is read-only. It does not rewrite feeds, edit products, or promise to fix Google policy issues.
>
> I am specifically trying to learn whether agencies that manage multiple Shopify + Google Shopping accounts see this as a recurring operational problem.
>
> Written feedback is enough:
> 1. How do you notice these issues today?
> 2. Is manual Merchant Center checking still part of the workflow?
> 3. Would traffic-aware prioritisation change what gets fixed first?
> 4. Would you test this across one or more client accounts if the integration were ready?
>
> No credentials, exports, client data, or meeting required.

## Merchant-facing draft

> I am validating a small Shopify + Google Merchant Center monitoring product.
>
> The idea is to alert when product status changes or visibility is limited, then surface the affected products that were actually receiving traffic first. It is intentionally not a feed manager and does not edit your catalog.
>
> I am trying to understand whether this solves a real problem before building anything else.
>
> If you manage Google Shopping for a Shopify store, written feedback on these would help:
> 1. How do you currently notice Merchant Center problems?
> 2. Have you ever discovered a disapproval/limitation later than you wanted?
> 3. Would ranking affected products by recent clicks/impressions be useful?
> 4. Would you consider a paid pilot if the integration were read-only?
>
> No login, store access, call, or sensitive data needed.

## What counts as evidence

Count:

- a target user describing the problem in their own words;
- explicit written interest in trying a pilot;
- explicit willingness to pay or a plausible price reaction;
- an agency willing to test on more than one real client account;
- repeated objections that reveal a better wedge.

Do not count:

- generic founder compliments;
- likes/upvotes without target-user context;
- comments from people outside the target workflow;
- traffic to the landing page by itself.

## Decision rule

Do not buy a domain, start paid acquisition, or add major product features just because a post gets attention.

Proceed to owner spend only after at least one of:

- 2+ serious written pilot candidates at a plausible paid price;
- 1 agency willing to test with multiple real client accounts;
- repeated explicit willingness-to-pay around the monitoring workflow.

If a meaningful sample of qualified, permissioned exposure produces no problem recognition or pilot intent, reassess positioning or pivot instead of polishing the product.

## Sources checked 28 September 2026

- Shopify Community Guidelines: https://community.shopify.com/guidelines
- r/ShopifyApps developer rules/template: https://www.reddit.com/r/ShopifyApps/comments/1p28k3m/welcome_to_rshopifyapps_read_before_posting_get/
- LSSI consolidated text, Article 21: https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
