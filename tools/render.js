/* ============================================================
   Service page generator — Massage 4 Beauty

   Reads tools/pages/<slug>.js and writes:
     masaze/<slug>.html   static page (committed, no build step to deploy)
     masaze/<slug>.js     window.PAGE_CONTENT for cs/en/ru

   Run:  node tools/render.js          (all pages)
         node tools/render.js <slug>   (one page)
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(__dirname, 'pages');
const OUT_DIR = path.join(ROOT, 'masaze');
const GA_ID = 'G-XW10FL0HCW';
const ORIGIN = 'https://beautymassage.cz';
const PHONE = '+420 721 761 411';
const PHONE_HREF = '+420721761411';
const LANGS = ['cs', 'en', 'ru'];

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const czk = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // 1500 -> 1 500

/* ---------- the consent-gated Google tag, identical on every page ---------- */
function gaSnippet() {
  return `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    /* Consent Mode v2 — storage stays denied until the visitor opts in */
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });

    /* replay a stored opt-in so returning visitors are measured from the first hit.
       key must stay in sync with COOKIE_KEY in script.js */
    try {
      if (localStorage.getItem('m4b-cookies') === 'accepted') {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
    } catch (e) {}

    gtag('js', new Date());

    gtag('config', '${GA_ID}');
  </script>`;
}

/* ---------- structured data ---------- */
function jsonLd(p) {
  const url = `${ORIGIN}/masaze/${p.slug}/`;
  const cs = p.strings.cs;

  const graph = [];

  if (p.kind === 'voucher') {
    graph.push({
      '@type': 'Product',
      '@id': url + '#product',
      name: p.schema.name,
      description: p.schema.description,
      url,
      brand: { '@type': 'Brand', name: 'Massage 4 Beauty' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CZK',
        price: String(p.price),
        availability: 'https://schema.org/InStock',
        url
      }
    });
  } else {
    graph.push({
      '@type': 'Service',
      '@id': url + '#service',
      name: p.schema.name,
      alternateName: p.schema.alternateName,
      serviceType: p.schema.serviceType,
      description: p.schema.description,
      url,
      provider: {
        '@type': 'HealthAndBeautyBusiness',
        name: 'Massage 4 Beauty',
        image: `${ORIGIN}/assets/signature.png`,
        telephone: PHONE_HREF,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Děkanská vinice I 819/16',
          addressLocality: 'Praha 4',
          postalCode: '14000',
          addressCountry: 'CZ'
        }
      },
      areaServed: [
        { '@type': 'City', name: 'Praha' },
        { '@type': 'Place', name: 'Praha 4' },
        { '@type': 'Place', name: 'Nusle' },
        { '@type': 'Place', name: 'Pankrác' },
        { '@type': 'Place', name: 'Vyšehrad' }
      ],
      offers: {
        '@type': 'Offer',
        price: String(p.price),
        priceCurrency: 'CZK',
        availability: 'https://schema.org/InStock',
        url
      }
    });
  }

  graph.push({
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Domů', item: ORIGIN + '/' },
      { '@type': 'ListItem', position: 2, name: 'Masáže', item: ORIGIN + '/sluzby/' },
      { '@type': 'ListItem', position: 3, name: cs.crumb }
    ]
  });

  // Every answer is verbatim visible page copy — required by Google's FAQ rules.
  graph.push({
    '@type': 'FAQPage',
    mainEntity: cs.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  });

  const body = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)
    .split('\n').join('\n  ');
  return '  <script type="application/ld+json">\n  ' + body + '\n  </script>';
}

/* ---------- shared chrome ---------- */
function header() {
  return `  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="/" class="brand" aria-label="Massage 4 Beauty — úvodní stránka">
      <img src="../../assets/signature.png" alt="Ludmila Yemelianova" />
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="/sluzby/" data-i18n="navServices">Služby</a>
      <a href="/#prices" data-i18n="navPrices">Ceník</a>
      <a href="/#about" data-i18n="navAbout">O mně</a>
      <a href="/#contact" data-i18n="navContact">Kontakt</a>
    </nav>
    <div class="header-right">
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="cs">CZ</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ru">RU</button>
      </div>
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
    </div>
  </header>`;
}

function footer(slug) {
  return `  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="../../assets/signature.png" alt="Ludmila Yemelianova" />
      <p class="footer-copy" data-i18n="footerCopy">© 2026 Beauty Massage · Ludmila Yemelianova</p>
    </div>
    <div class="footer-right">
      <a href="/sluzby/" data-i18n="navServices">Služby</a>
      <a href="/#prices" data-i18n="navPrices">Ceník</a>
      <a href="/#contact" data-i18n="navContact">Kontakt</a>
      <div class="lang-switch footer-lang" role="group" aria-label="Language">
        <button type="button" data-lang="cs">CZ</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="ru">RU</button>
      </div>
    </div>
  </footer>

  <!-- ============ COOKIE BANNER ============ -->
  <div class="cookie-banner" id="cookieBanner" hidden>
    <p class="cookie-text" data-i18n="cookieText">Tento web používá soubory cookie pro zlepšení vašeho zážitku z prohlížení. Vyberte prosím svou preferenci.</p>
    <div class="cookie-actions">
      <a href="../../privacy.html" class="cookie-link" data-i18n="cookieMore">Ochrana osobních údajů</a>
      <button type="button" class="cookie-btn cookie-btn--decline" id="cookieDecline" data-i18n="cookieDecline">Odmítnout</button>
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept" data-i18n="cookieAccept">Přijmout</button>
    </div>
  </div>

  <script src="../../content.js"></script>
  <script src="page.js"></script>
  <script src="../../script.js"></script>`;
}

/* ---------- the page body ---------- */
function renderHtml(p, allPages) {
  const cs = p.strings.cs;
  const url = `${ORIGIN}/masaze/${p.slug}/`;
  const m = p.meta.cs;

  const steps = cs.steps.map((s, i) => `          <li>
            <strong data-i18n="svcStep${i + 1}T">${esc(s.t)}</strong>
            <span data-i18n="svcStep${i + 1}D">${esc(s.d)}</span>
          </li>`).join('\n');

  const effects = cs.effects.map((e, i) =>
    `          <li data-i18n="svcEff${i + 1}">${esc(e)}</li>`).join('\n');

  const contra = cs.contra.map((c, i) =>
    `          <li data-i18n="svcContra${i + 1}">${esc(c)}</li>`).join('\n');

  const what = cs.what.map((t, i) =>
    `        <p data-i18n="svcWhat${i + 1}">${esc(t)}</p>`).join('\n');

  const faq = cs.faq.map((f, i) => `          <details>
            <summary data-i18n="faqQ${i + 1}">${esc(f.q)}</summary>
            <p data-i18n="faqA${i + 1}">${esc(f.a)}</p>
          </details>`).join('\n');

  const related = p.related.map((slug, i) => {
    const target = allPages[slug];
    if (!target) throw new Error(`${p.slug}: related slug "${slug}" has no page`);
    return `          <li><a href="/masaze/${slug}/" data-i18n="rel${i + 1}">${esc(target.strings.cs.crumb)}</a></li>`;
  }).join('\n');

  const priceBlock = p.kind === 'voucher' ? '' : `
        <h2 data-i18n="svcH2Price">${esc(cs.h2Price)}</h2>
        <div class="service-price-row">
          <div>
            <div class="price-name" data-i18n="svcPriceName">${esc(cs.priceName)}</div>
            <div class="price-desc" data-i18n="svcPriceDesc">${esc(cs.priceDesc)}</div>
          </div>
          <div class="price-meta">
            <div class="price-val">${czk(p.price)}&nbsp;Kč</div>
            <div class="price-min" data-i18n="svcPriceMin">${p.minutes} min</div>
          </div>
        </div>
`;

  const facts = p.kind === 'voucher'
    ? `          <div class="service-fact">
            <span class="service-fact-k" data-i18n="svcFactPriceK">Cena</span>
            <span class="service-fact-v" data-i18n="svcFactPriceV">${esc(cs.factPriceV)}</span>
          </div>
          <div class="service-fact">
            <span class="service-fact-k" data-i18n="svcFactPlaceK">Kde</span>
            <span class="service-fact-v" data-i18n="svcFactPlaceV">${esc(cs.factPlaceV)}</span>
          </div>`
    : `          <div class="service-fact">
            <span class="service-fact-k" data-i18n="svcFactDurationK">Délka</span>
            <span class="service-fact-v" data-i18n="svcFactDurationV">${esc(cs.factDurationV)}</span>
          </div>
          <div class="service-fact">
            <span class="service-fact-k" data-i18n="svcFactPriceK">Cena</span>
            <span class="service-fact-v">${czk(p.price)}&nbsp;Kč</span>
          </div>
          <div class="service-fact">
            <span class="service-fact-k" data-i18n="svcFactPlaceK">Kde</span>
            <span class="service-fact-v" data-i18n="svcFactPlaceV">${esc(cs.factPlaceV)}</span>
          </div>`;

  return `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

${gaSnippet()}

  <title>${esc(m.title)}</title>
  <meta name="description" content="${attr(m.desc)}" />
  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="article" />
  <meta property="og:locale" content="cs_CZ" />
  <meta property="og:site_name" content="Massage 4 Beauty" />
  <meta property="og:title" content="${attr(m.ogTitle)}" />
  <meta property="og:description" content="${attr(m.ogDesc)}" />
  <meta property="og:url" content="${url}" />
  <!-- až doplníte fotografii, přidejte:
       <meta property="og:image" content="${ORIGIN}/assets/${p.slug}.jpg" /> -->

  <link rel="icon" type="image/png" href="../../assets/mark.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="../../styles.css" />

${jsonLd(p)}
</head>
<body>

${header()}

  <main>
    <article class="service-page">
      <div class="service-wrap">

        <!-- ---------- breadcrumb ---------- -->
        <nav class="breadcrumb" aria-label="Drobečková navigace">
          <a href="/" data-i18n="crumbHome">Domů</a>
          <span aria-hidden="true">›</span>
          <a href="/sluzby/" data-i18n="crumbServices">Masáže</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page" data-i18n="svcCrumb">${esc(cs.crumb)}</span>
        </nav>

        <!-- ---------- intro ---------- -->
        <p class="eyebrow" data-i18n="svcEyebrow">${esc(cs.eyebrow)}</p>
        <h1 data-i18n="svcH1">${esc(cs.h1)}</h1>
        <p class="service-lead" data-i18n="svcLead">${esc(cs.lead)}</p>

        <!-- ---------- photo canvas — nahraďte vlastní fotografií ----------
          AŽ BUDETE MÍT FOTOGRAFII, nahraďte celý <div class="photo-canvas"> tímto:

          <img src="../../assets/${p.slug}.jpg"
               alt="${attr(cs.photoAlt)}"
               width="1320" height="742" loading="lazy" decoding="async" />

          Doporučený poměr stran 16:9, šířka alespoň 1320 px.
        -->
        <figure class="service-figure">
          <div class="photo-canvas" role="img" aria-label="${attr(cs.photoAlt)}">
            <span class="photo-canvas-label" data-i18n="svcPhotoPlaceholder">Místo pro fotografii · 16:9</span>
          </div>
          <figcaption data-i18n="svcPhotoCaption">${esc(cs.photoCaption)}</figcaption>
        </figure>

        <!-- ---------- fact strip ---------- -->
        <div class="service-facts">
${facts}
          <a href="/#contact" class="btn-solid service-fact-cta" data-i18n="svcBookBtn">Rezervovat termín</a>
        </div>

        <!-- ---------- co je ---------- -->
        <h2 data-i18n="svcH2What">${esc(cs.h2What)}</h2>
${what}

        <!-- ---------- jak probíhá ---------- -->
        <h2 data-i18n="svcH2How">${esc(cs.h2How)}</h2>
        <ol class="service-steps">
${steps}
        </ol>

        <!-- ---------- účinky ---------- -->
        <h2 data-i18n="svcH2Effects">${esc(cs.h2Effects)}</h2>
        <ul class="service-benefits">
${effects}
        </ul>

        <!-- ---------- pro koho / kontraindikace ---------- -->
        <h2 data-i18n="svcH2Who">${esc(cs.h2Who)}</h2>
        <p data-i18n="svcWho1">${esc(cs.who)}</p>

        <h3 data-i18n="svcH3Contra">${esc(cs.h3Contra)}</h3>
        <ul class="service-benefits service-benefits--warn">
${contra}
        </ul>
        <p class="service-note" data-i18n="svcContraNote">${esc(cs.contraNote)}</p>
${priceBlock}
        <!-- ---------- FAQ ---------- -->
        <h2 data-i18n="svcH2Faq">${esc(cs.h2Faq)}</h2>
        <div class="service-faq">
${faq}
        </div>

        <!-- ---------- CTA ---------- -->
        <div class="service-cta">
          <h2 data-i18n="svcH2Book">${esc(cs.h2Book)}</h2>
          <p data-i18n="svcBookText">${esc(cs.bookText)}</p>
          <div class="service-cta-actions">
            <a href="/#contact" class="btn-solid" data-i18n="svcBookBtn2">Rezervovat termín</a>
            <a href="tel:${PHONE_HREF}" class="service-cta-phone">${PHONE}</a>
          </div>
        </div>

        <!-- ---------- related ---------- -->
        <h2 class="service-related-h" data-i18n="svcH2Related">${esc(cs.h2Related)}</h2>
        <ul class="service-related">
${related}
        </ul>

      </div>
    </article>
  </main>

${footer(p.slug)}
</body>
</html>
`;
}

/* ---------- window.PAGE_CONTENT for the three languages ---------- */
function renderStrings(p, allPages) {
  const out = {};

  for (const lang of LANGS) {
    const s = p.strings[lang];
    if (!s) throw new Error(`${p.slug}: missing strings for "${lang}"`);
    const o = {};

    o.svcCrumb = s.crumb;
    o.svcEyebrow = s.eyebrow;
    o.svcH1 = s.h1;
    o.svcLead = s.lead;
    o.svcPhotoCaption = s.photoCaption;

    if (p.kind === 'voucher') o.svcFactPriceV = s.factPriceV;
    else o.svcFactDurationV = s.factDurationV;
    o.svcFactPlaceV = s.factPlaceV;

    o.svcH2What = s.h2What;
    s.what.forEach((t, i) => { o['svcWhat' + (i + 1)] = t; });

    o.svcH2How = s.h2How;
    s.steps.forEach((st, i) => {
      o['svcStep' + (i + 1) + 'T'] = st.t;
      o['svcStep' + (i + 1) + 'D'] = st.d;
    });

    o.svcH2Effects = s.h2Effects;
    s.effects.forEach((e, i) => { o['svcEff' + (i + 1)] = e; });

    o.svcH2Who = s.h2Who;
    o.svcWho1 = s.who;
    o.svcH3Contra = s.h3Contra;
    s.contra.forEach((c, i) => { o['svcContra' + (i + 1)] = c; });
    o.svcContraNote = s.contraNote;

    if (p.kind !== 'voucher') {
      o.svcH2Price = s.h2Price;
      o.svcPriceName = s.priceName;
      o.svcPriceDesc = s.priceDesc;
      o.svcPriceMin = s.priceMin;
    }

    o.svcH2Faq = s.h2Faq;
    s.faq.forEach((f, i) => {
      o['faqQ' + (i + 1)] = f.q;
      o['faqA' + (i + 1)] = f.a;
    });

    o.svcH2Book = s.h2Book;
    o.svcBookText = s.bookText;

    o.svcH2Related = s.h2Related;
    p.related.forEach((slug, i) => {
      o['rel' + (i + 1)] = allPages[slug].strings[lang].crumb;
    });

    out[lang] = o;
  }

  const body = LANGS.map(l => {
    const entries = Object.keys(out[l])
      .map(k => `    ${k}: ${JSON.stringify(out[l][k])},`)
      .join('\n');
    return `  ${l}: {\n${entries}\n  },`;
  }).join('\n\n');

  return `/* ============================================================
   Page copy — ${p.strings.cs.crumb}
   GENERATED by tools/render.js from tools/pages/${p.slug}.js
   Edit the source file and re-run, do not edit this file by hand.
   ============================================================ */
window.PAGE_CONTENT = {

${body}

};
`;
}

/* ---------- main ---------- */
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.js'));
const allPages = {};
for (const f of files) {
  const p = require(path.join(PAGES_DIR, f));
  if (p.slug + '.js' !== f) throw new Error(`${f}: slug "${p.slug}" does not match filename`);
  allPages[p.slug] = p;
}

const only = process.argv[2];
const targets = only ? [only] : Object.keys(allPages);
if (only && !allPages[only]) throw new Error(`unknown slug "${only}"`);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

for (const slug of targets) {
  const p = allPages[slug];
  const pageDir = path.join(OUT_DIR, slug);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'index.html'), renderHtml(p, allPages), 'utf8');
  fs.writeFileSync(path.join(pageDir, 'page.js'), renderStrings(p, allPages), 'utf8');
  console.log('  wrote  masaze/' + slug + '/index.html  +  page.js');
}

console.log('\n' + targets.length + ' page(s) generated.');
module.exports = { allPages, ORIGIN };
