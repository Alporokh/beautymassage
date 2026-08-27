/* ============================================================
   Massage 4 Beauty — interactions
   · Language switch (CZ / EN / RU) with localStorage memory
   · Price-list rendering from content.js
   · Contact form (front-end confirmation only)
   ============================================================ */
(function () {
  "use strict";

  var SUPPORTED = ["cs", "en", "ru"];

  /* ---- pick initial language: saved → browser → en ---- */
  function initialLang() {
    var saved = localStorage.getItem("m4b-lang");
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : "en";
  }

  /* ---- build one price row ---- */
  function priceRow(item, locale) {
    var row = document.createElement("div");
    row.className = "price-row";

    var left = document.createElement("div");
    left.style.flex = "1";
    var name = document.createElement("div");
    name.className = "price-name";
    name.textContent = item.name;
    var desc = document.createElement("div");
    desc.className = "price-desc";
    desc.textContent = item.desc;
    left.appendChild(name);
    left.appendChild(desc);

    var meta = document.createElement("div");
    meta.className = "price-meta";
    var val = document.createElement("div");
    val.className = "price-val";
    val.textContent = locale.currency(item.price);
    meta.appendChild(val);
    if (item.min) {
      var min = document.createElement("div");
      min.className = "price-min";
      min.textContent = item.min + " " + locale.minLabel;
      meta.appendChild(min);
    }

    row.appendChild(left);
    row.appendChild(meta);
    return row;
  }

  function renderTreatmentSelect(data) {
    var sel = document.getElementById("treatmentSelect");
    if (!sel) return;
    sel.innerHTML = "";

    var placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = data.strings.fTreatment;
    sel.appendChild(placeholder);

    var groups = [
      { label: data.strings.groupFace, items: data.facial },
      { label: data.strings.groupBody, items: data.body }
    ];
    groups.forEach(function (g) {
      var grp = document.createElement("optgroup");
      grp.label = g.label;
      g.items.forEach(function (item) {
        var opt = document.createElement("option");
        opt.value = item.name;
        opt.textContent = item.name;
        grp.appendChild(opt);
      });
      sel.appendChild(grp);
    });

    sel.style.color = sel.value ? "var(--ink)" : "#9AA093";
    sel.onchange = function () {
      sel.style.color = sel.value ? "var(--ink)" : "#9AA093";
    };
  }

  function renderList(targetId, items, locale) {
    var box = document.getElementById(targetId);
    if (!box) return;
    box.textContent = "";
    items.forEach(function (item) { box.appendChild(priceRow(item, locale)); });
  }

  /* ---- apply a language across the whole page ---- */
  function applyLang(lang) {
    var data = window.CONTENT[lang];
    if (!data) return;

    // service pages ship their own copy in window.PAGE_CONTENT; it is layered
    // over the shared strings so nav, footer and cookie text stay in one place
    var s = data.strings;
    var page = window.PAGE_CONTENT && window.PAGE_CONTENT[lang];
    if (page) {
      s = {};
      Object.keys(data.strings).forEach(function (k) { s[k] = data.strings[k]; });
      Object.keys(page).forEach(function (k) { s[k] = page[k]; });
    }

    document.documentElement.lang = lang;

    // text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (s[key] != null) el.textContent = s[key];
    });

    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (s[key] != null) el.setAttribute("placeholder", s[key]);
    });

    // contact details (shared, not translated)
    var addr = document.getElementById("infoAddress");
    if (addr) addr.textContent = window.CONTENT.contact.address;

    // price lists
    renderList("faceList", data.facial, data);
    renderList("bodyList", data.body, data);

    // treatment dropdown
    renderTreatmentSelect(data);

    // active state on both switchers
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("m4b-lang", lang);
  }

  /* ---- ?treatment=voucher lands on the form with it already chosen ----
     The "order a voucher" buttons link here from the home page and from the
     voucher page, so the visitor does not have to find it in the list. */
  // "voucher" is the one symbolic name; everything else is matched on the
  // treatment's own label, which is exactly what the option values hold
  function chooseTreatment(sel, want) {
    if (!want) return false;
    var opts = sel.options;

    if (want.toLowerCase() === "voucher") {
      // the voucher is appended after both optgroups, so it is the last
      // option whose direct parent is the select itself
      for (var i = opts.length - 1; i >= 0; i--) {
        if (opts[i].parentNode === sel && opts[i].value) { sel.value = opts[i].value; return true; }
      }
      return false;
    }

    var target = want.trim().toLowerCase();
    for (var j = 0; j < opts.length; j++) {
      if (opts[j].value && opts[j].value.trim().toLowerCase() === target) {
        sel.value = opts[j].value;
        return true;
      }
    }
    return false;
  }

  function preselectTreatment(sel) {
    var raw = (location.search.match(/[?&]treatment=([^&]*)/) || [])[1];
    if (raw) {
      try { chooseTreatment(sel, decodeURIComponent(raw.replace(/\+/g, " "))); } catch (e) {}
    }

    // The form is on this page already, so handle the click here rather than
    // reloading just to read the query string back out.
    document.querySelectorAll('a[href*="treatment="]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var wanted = a.getAttribute("data-treatment") ||
                     (a.getAttribute("href").match(/treatment=([^&#]*)/) || [])[1];
        if (!wanted) return;
        if (!a.hasAttribute("data-treatment")) {
          try { wanted = decodeURIComponent(wanted.replace(/\+/g, " ")); } catch (err) {}
        }
        if (!chooseTreatment(sel, wanted)) return;   // fall back to the href
        e.preventDefault();
        sel.dispatchEvent(new Event("change"));
        document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---- cookie banner + Google Consent Mode v2 ---- */
  var COOKIE_KEY = "m4b-cookies";

  function updateConsent(granted) {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied"
    });
  }

  function initCookieBanner() {
    var banner = document.getElementById("cookieBanner");
    if (!banner) return;
    if (!localStorage.getItem(COOKIE_KEY)) banner.hidden = false;

    document.getElementById("cookieAccept").addEventListener("click", function () {
      localStorage.setItem(COOKIE_KEY, "accepted");
      updateConsent(true);
      banner.hidden = true;
    });
    document.getElementById("cookieDecline").addEventListener("click", function () {
      localStorage.setItem(COOKIE_KEY, "declined");
      updateConsent(false);
      banner.hidden = true;
    });

    // privacy page: reopen the banner so consent can be withdrawn (GDPR art. 7(3))
    var reopen = document.getElementById("cookieReopen");
    if (reopen) {
      reopen.addEventListener("click", function () { banner.hidden = false; });
    }
  }

  /* ---- wire up ---- */
  document.addEventListener("DOMContentLoaded", function () {
    // Service pages are generated one per language and carry their text baked
    // in, so applyLang must not overwrite it. They advertise the fact with
    // data-lang-fixed and switch language by navigating, not redrawing.
    var fixed = document.documentElement.getAttribute("data-lang-fixed");
    if (fixed) {
      localStorage.setItem("m4b-lang", fixed);   // carry the choice to the rest of the site

      // the dropdown is baked into the page, so give it the same placeholder
      // colouring renderTreatmentSelect() would have applied
      var baked = document.getElementById("treatmentSelect");
      if (baked) {
        var tint = function () {
          baked.style.color = baked.value ? "var(--ink)" : "#9AA093";
        };
        preselectTreatment(baked);
        tint();
        baked.addEventListener("change", tint);
      }
    } else {
      applyLang(initialLang());

      document.querySelectorAll(".lang-switch button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          applyLang(btn.getAttribute("data-lang"));
        });
      });
    }

    initCookieBanner();

    // contact form — posts to Cloudflare Pages Function (token stays server-side)
    var form = document.getElementById("bookingForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }

        var submitBtn = form.querySelector(".btn-solid");
        var thanks    = document.getElementById("formThanks");
        var lang      = document.documentElement.getAttribute("data-lang-fixed") ||
                        localStorage.getItem("m4b-lang") || "en";

        function fail() {
          submitBtn.disabled = false;
          // let the visitor try again rather than stranding them on a spent token
          if (window.turnstile) window.turnstile.reset();
          var s = window.CONTENT && window.CONTENT[lang] && window.CONTENT[lang].strings;
          thanks.textContent = (s && s.formError) ||
            "Something went wrong. Please try again or call us directly.";
          thanks.hidden = false;
        }

        // Turnstile writes its token into a hidden input inside the form
        var tokenField = form.querySelector("[name=cf-turnstile-response]");

        submitBtn.disabled = true;

        fetch("/api/inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name:      form.querySelector("[name=name]").value.trim(),
            contact:   form.querySelector("[name=contact]").value.trim(),
            treatment: form.querySelector("[name=treatment]").value.trim(),
            message:   form.querySelector("[name=message]").value.trim(),
            website:   form.querySelector("[name=website]").value,
            turnstile: tokenField ? tokenField.value : "",
          })
        })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.ok) {
            Array.prototype.forEach.call(form.querySelectorAll(".field, .btn-solid, .cf-turnstile"), function (el) {
              el.style.display = "none";
            });
            thanks.textContent = window.CONTENT[lang].strings.formThanks;
            thanks.hidden = false;
          } else {
            fail();
          }
        })
        .catch(fail);
      });
    }
  });
})();
