(() => {
  const config = window.MERCHANT_ALERT_CONFIG || {};

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const verification = String(config.searchConsoleVerification || "").trim();
  if (verification) {
    const head = document.head;
    if (!head.querySelector('meta[name="google-site-verification"]')) {
      const tag = document.createElement("meta");
      tag.name = "google-site-verification";
      tag.content = verification;
      head.appendChild(tag);
    }
  }

  const siteUrl = String(config.siteUrl || "").trim().replace(/\/$/, "");
  if (siteUrl) {
    document.querySelectorAll("[data-canonical]").forEach((link) => {
      link.href = `${siteUrl}/${link.dataset.canonical || ""}`.replace(/([^:]\/)\/+/g, "$1");
    });
  }

  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    const email = String(config.contactEmail || "").trim();
    if (email) {
      link.href = `mailto:${email}`;
      link.removeAttribute("aria-disabled");
      link.textContent = link.dataset.contactLabel || "Contact the team";
    } else {
      link.href = "contact.html";
      link.setAttribute("aria-label", "Open the contact setup page");
    }
  });

  const contactForm = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = String(config.contactEmail || "").trim();
      if (!email) {
        formStatus.className = "form-status error";
        formStatus.textContent = "The owner-controlled contact inbox is not configured yet. No form data was sent. Please use the launch checklist to connect one before publishing this page.";
        return;
      }
      const form = new FormData(contactForm);
      const subject = encodeURIComponent(`MerchantAlert early access — ${form.get("store") || "Shopify store"}`);
      const body = encodeURIComponent([
        `Name: ${form.get("name") || ""}`,
        `Email: ${form.get("email") || ""}`,
        `Store: ${form.get("store") || ""}`,
        "",
        String(form.get("message") || "")
      ].join("\n"));
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      formStatus.className = "form-status";
      formStatus.textContent = "Your email client should open with the request ready to send.";
    });
  }

  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = String(year); });

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();

