# Google Merchant Center / Merchant API path

Reviewed against official Google documentation on 2026-09-28.

## The dependency chain

```text
real operator identity
        ↓
public HTTPS website + verified domain
        ↓
production Merchant Center account
        ↓
Google Cloud project + Merchant API enabled
        ↓
developer registration (registerGcp)
        ↓
approved auth + secure secret storage
        ↓
first real API call
        ↓
manual pilot → paid pilot
```

The website solves the public-presence and verification surface. It cannot manufacture the identity, account ownership, legal acceptance, credentials, or consent required by Google.

## Official prerequisites that matter to MerchantAlert

Google’s current Merchant API documentation says a request needs a Merchant Center account, a Google Cloud project, and a link between them created by developer registration. The developer registration guide adds these prerequisites:

- a production Merchant Center account; test accounts are not eligible for developer registration;
- a verified website/homepage associated with the Merchant Center account;
- `ADMIN` access on that account;
- a dedicated Google Cloud project ID;
- a valid developer contact email associated with a Google account, not a service-account email.

Google documents OAuth 2.0 for third-party providers/agencies and service accounts for access to an owner’s own account. MerchantAlert should not select one by guesswork; the operator should confirm the actual operating model first.

## Website and Search Console sequence

1. Publish the public site on a domain the owner controls.
2. In Search Console, choose a Domain property for domain-wide coverage and verify it with DNS, or choose a URL-prefix property and use the HTML tag/file method if appropriate.
3. In Merchant Center, verify and claim the website. The Google Help Center defines claiming as proving ownership of the store’s website.
4. Only after the homepage is verified, register the Google Cloud project with `registerGcp`.

The site’s `site-config.js` deliberately starts without a URL or verification token. This prevents a random domain, token, or invented identity from being published.

## What to test once the owner unlocks the path

- Can the owner access the production Merchant Center account with `ADMIN` permissions?
- Is the website verified and claimed in the same account that will be registered?
- Does the dedicated Cloud project have Merchant API enabled?
- Is the developer contact a real monitored Google account email?
- Is the selected auth method consistent with the customer onboarding model?
- Are the credentials in a secure backend secret store and absent from logs, issues, PRs, browser forms, and this repository?
- Does one read-only issue query work before enabling reconciliation or email alerts?

## Official references

- [Merchant API overview](https://developers.google.com/merchant/api/overview)
- [Merchant API quickstart overview](https://developers.google.com/merchant/api/guides/quickstart/overview)
- [Register as a developer](https://developers.google.com/merchant/api/guides/quickstart/registration)
- [Authorize access to a Merchant Center account](https://developers.google.com/merchant/api/guides/authorization/access-your-account)
- [Website claiming](https://support.google.com/merchants/answer/15624943)
- [Online store URL domain requirements](https://support.google.com/merchants/answer/12160471)
- [Verify your site ownership in Search Console](https://support.google.com/webmasters/answer/9008080)
- [Add a website or platform property to Search Console](https://support.google.com/webmasters/answer/34592)

