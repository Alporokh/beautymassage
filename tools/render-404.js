/* Generates 404.html at the site root.
   GitHub Pages (today) and Cloudflare Pages (after the move) both serve a root
   404.html for any missing URL. Without one, Cloudflare Pages answers every
   unknown address with the home page and a 200, which search engines treat as
   duplicate content. The page is served at arbitrary depths, so every asset
   path here is root-absolute rather than relative.
   Run: node tools/render-404.js */
const fs = require('fs');
const path = require('path');
const { GA, esc } = require('./render.js');

const ROOT = path.join(__dirname, '..');

const COPY = {
  cs: {
    eyebrow: 'Chyba 404',
    h1: 'Tuto stránku jsme nenašli',
    text: 'Odkaz je možná zastaralý, nebo stránka změnila adresu. Pokračujte na úvodní stránku nebo do přehledu masáží.',
    home: 'Úvodní stránka', hub: 'Přehled masáží',
    homeUrl: '/', hubUrl: '/sluzby/'
  },
  en: {
    eyebrow: 'Error 404',
    h1: 'We couldn’t find this page',
    text: 'The link may be out of date, or the page has moved. Continue to the home page or to the list of massages.',
    home: 'Home page', hub: 'All massages',
    homeUrl: '/en/', hubUrl: '/en/sluzby/'
  },
  ru: {
    eyebrow: 'Ошибка 404',
    h1: 'Страница не найдена',
    text: 'Возможно, ссылка устарела или страница переехала. Перейдите на главную или к списку массажей.',
    home: 'Главная', hub: 'Все массажи',
    homeUrl: '/ru/', hubUrl: '/ru/sluzby/'
  }
};

const blocks = Object.entries(COPY).map(([lang, c]) => `      <section class="nf" lang="${lang}" data-nf="${lang}">
        <p class="eyebrow">${esc(c.eyebrow)}</p>
        <h1>${esc(c.h1)}</h1>
        <p class="service-lead">${esc(c.text)}</p>
        <div class="cta-row">
          <a href="${c.homeUrl}" class="btn-solid">${esc(c.home)}</a>
          <a href="${c.hubUrl}" class="link-underline">${esc(c.hub)}</a>
        </div>
      </section>`).join('\n');

const html = `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />

${GA}

  <title>Stránka nenalezena · Massage 4 Beauty</title>
  <link rel="icon" type="image/png" href="/assets/mark.png" />
  <link rel="stylesheet" href="/fonts.css" />
  <link rel="stylesheet" href="/styles.css" />
  <style>
    .nf:not([hidden]) ~ .nf:not([hidden]) { margin-top: 72px; padding-top: 56px; border-top: 1px solid var(--line); }
    .nf .cta-row { margin-top: 34px; }
  </style>
</head>
<body>

  <header class="site-header">
    <a href="/" class="brand" aria-label="Massage 4 Beauty">
      <img src="/assets/signature.png" alt="Ludmila Yemelianova" />
    </a>
  </header>

  <main class="service-page">
    <div class="service-wrap">
${blocks}
    </div>
  </main>

  <script>
    // show the language the missing URL was in; without JS all three stay visible
    (function () {
      var m = location.pathname.match(/^\\/(en|ru)(\\/|$)/);
      var lang = m ? m[1] : "cs";
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-nf]").forEach(function (s) {
        s.hidden = s.getAttribute("data-nf") !== lang;
      });
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, '404.html'), html, 'utf8');
console.log('  wrote 404.html');
