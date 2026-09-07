/* ==========================================================================
   Mr Frank Building Supply — script.js
   Vanilla JS only. No dependencies.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Current year in footer ---------- */
  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Sticky / compact header ---------- */
  function initStickyHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var ticking = false;

    function update() {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    function openMenu() {
      menu.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", function () {
      if (menu.classList.contains("open")) closeMenu();
      else openMenu();
    });

    // Close when a link is tapped.
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close if resized up to desktop.
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Active nav highlight ---------- */
  function initActiveNav() {
    var sections = document.querySelectorAll("main section[id]");
    var links = document.querySelectorAll(".nav-desktop a");
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (link) {
      map[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) {
              l.classList.remove("active");
            });
            var active = map[entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      },
      { threshold: 0.5, rootMargin: "-30% 0px -50% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function init() {
    setYear();
    initStickyHeader();
    initMobileMenu();
    initReveal();
    initActiveNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
