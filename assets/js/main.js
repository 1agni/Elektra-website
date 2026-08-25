/* Elektra Mechanical — site behavior */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("header");
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.getElementById("mobile-nav");

  /* Current nav */
  const page = document.body.dataset.nav;
  if (page) {
    document.querySelectorAll("[data-nav='" + page + "']").forEach(function (a) {
      a.classList.add("is-active");
    });
  }

  /* Header solid on scroll / inner pages */
  function onScroll() {
    if (!header) return;
    const solid = document.body.classList.contains("solid-nav") || window.scrollY > 24;
    header.classList.toggle("is-scrolled", solid);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  if (toggle && mobile) {
    const open = function (yes) {
      toggle.classList.toggle("is-open", yes);
      mobile.classList.toggle("is-open", yes);
      toggle.setAttribute("aria-expanded", yes ? "true" : "false");
      document.body.style.overflow = yes ? "hidden" : "";
      if (yes) mobile.removeAttribute("hidden"); else mobile.setAttribute("hidden", "");
    };
    toggle.addEventListener("click", function () {
      open(!toggle.classList.contains("is-open"));
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { open(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") open(false);
    });
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");
  if (reduce) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Number counters */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const dur = reduce ? 0 : 1400;
        const start = performance.now();
        const tick = function (now) {
          const t = dur === 0 ? 1 : Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = target * eased;
          const shown = target % 1 === 0 ? Math.round(val) : val.toFixed(0);
          el.textContent = prefix + shown + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* Work filters */
  const filters = document.querySelector("[data-filters]");
  if (filters) {
    const items = document.querySelectorAll("[data-cat]");
    filters.addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      filters.querySelectorAll("button").forEach(function (b) { b.classList.remove("is-on"); });
      btn.classList.add("is-on");
      const cat = btn.dataset.filter;
      items.forEach(function (it) {
        const show = cat === "all" || it.dataset.cat === cat;
        it.style.display = show ? "" : "none";
      });
    });
  }

  /* Form */
  const form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        const wrap = field.closest(".field");
        const valid = field.value && field.value.trim().length > 0;
        const emailOk = field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        const good = valid && emailOk;
        if (wrap) wrap.classList.toggle("is-invalid", !good);
        if (!good) ok = false;
      });
      if (!ok) return;
      form.classList.add("is-sent");
      const done = document.querySelector("[data-form-ok]");
      if (done) done.classList.add("is-show");
    });
  }

  /* Custom cursor disabled */
})();
