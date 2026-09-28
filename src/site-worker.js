const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-Frame-Options": "DENY",
  "Content-Security-Policy": "default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self' mailto:; base-uri 'self'; frame-ancestors 'none'"
};

const redirects = new Map([
  ["/home", "/"],
  ["/index", "/"],
  ["/pricing", "/pricing.html"],
  ["/how-it-works", "/how-it-works.html"],
  ["/contact", "/contact.html"],
  ["/privacy", "/privacy.html"],
  ["/terms", "/terms.html"],
  ["/security", "/security.html"]
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const redirectTarget = redirects.get(url.pathname);
    if (redirectTarget && request.method === "GET") {
      return Response.redirect(new URL(redirectTarget, url), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    Object.entries(securityHeaders).forEach(([name, value]) => headers.set(name, value));
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }
};
