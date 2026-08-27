/* ============================================================
   Service page generator — Massage 4 Beauty

   Emits one static page PER LANGUAGE, each on its own URL:

     masaze/<slug>/index.html        cs   (canonical, x-default)
     en/masaze/<slug>/index.html     en
     ru/masaze/<slug>/index.html     ru

   Text is baked into the HTML rather than swapped by JS, so each
   language is independently indexable and carries its own <title>,
   description, canonical, hreflang set and JSON-LD. The language
   switcher navigates between them instead of redrawing the page.

   Run:  node tools/render.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(__dirname, 'pages');
const GA_ID = 'G-XW10FL0HCW';
const ORIGIN = 'https://beautymassage.cz';
const PHONE = '+420 721 761 411';
const PHONE_HREF = '+420721761411';
const LANGS = ['cs', 'en', 'ru'];
const LANG_LABEL = { cs: 'CZ', en: 'EN', ru: 'RU' };
const OG_LOCALE = { cs: 'cs_CZ', en: 'en_GB', ru: 'ru_RU' };

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
// one formatter for every figure on the site, taken from content.js
const money = (n, lang) => CONTENT[lang].currency(n);
const clip = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)).replace(/[,;:—-]$/, '') + '…');

/* shared UI strings (nav, footer, cookie banner) come from content.js */
const shared = {};
const CONTENT = {};
{
  const w = {};
  new Function('window', fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'))(w);
  Object.assign(CONTENT, w.CONTENT);
  for (const l of LANGS) shared[l] = w.CONTENT[l].strings;
}

/* ---------- URL helpers ---------- */
const pageUrl = (lang, slug) => lang === 'cs'
  ? `${ORIGIN}/masaze/${slug}/`
  : `${ORIGIN}/${lang}/masaze/${slug}/`;
const hubUrl = lang => lang === 'cs' ? `${ORIGIN}/sluzby/` : `${ORIGIN}/${lang}/sluzby/`;
const homeUrl = lang => lang === 'cs' ? `${ORIGIN}/` : `${ORIGIN}/${lang}/`;
const pagePath = (lang, slug) => lang === 'cs' ? ['masaze', slug] : [lang, 'masaze', slug];
const rel = u => u.replace(ORIGIN, '');
// depth from the page directory back to the repo root
const upTo = lang => lang === 'cs' ? '../../' : '../../../';

/* ---------- per-language meta ---------- */
function metaFor(p, lang) {
  if (p.meta[lang]) return p.meta[lang];
  // cs is hand-authored; en/ru derive from the page's own headline and lead
  const s = p.strings[lang];
  const t = clip(s.h1 + ' | Massage 4 Beauty', 65);
  const d = clip(s.lead, 158);
  return { title: t, desc: d, ogTitle: t, ogDesc: d };
}

/* ---------- the consent-gated Google tag ---------- */
const GA = `  <!-- Google tag (gtag.js) -->
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

/* ---------- structured data, in the page's own language ---------- */
function jsonLd(p, lang) {
  const url = pageUrl(lang, p.slug);
  const s = p.strings[lang];
  const graph = [];

  const business = {
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
  };

  if (p.kind === 'voucher') {
    graph.push({
      '@type': 'Product', '@id': url + '#product',
      name: s.crumb, description: s.lead, url, inLanguage: lang,
      brand: { '@type': 'Brand', name: 'Massage 4 Beauty' },
      offers: {
        '@type': 'Offer', priceCurrency: 'CZK', price: String(p.price),
        availability: 'https://schema.org/InStock', url
      }
    });
  } else {
    const svc = {
      '@type': 'Service', '@id': url + '#service',
      name: s.crumb,
      serviceType: lang === 'cs' ? p.schema.serviceType : s.crumb,
      description: s.lead,
      url, inLanguage: lang,
      provider: business,
      areaServed: [
        { '@type': 'City', name: 'Praha' },
        { '@type': 'Place', name: 'Praha 4' },
        { '@type': 'Place', name: 'Nusle' },
        { '@type': 'Place', name: 'Pankrác' },
        { '@type': 'Place', name: 'Vyšehrad' }
      ],
      offers: {
        '@type': 'Offer', price: String(p.price), priceCurrency: 'CZK',
        availability: 'https://schema.org/InStock', url
      }
    };
    if (lang === 'cs') svc.alternateName = p.schema.alternateName;
    graph.push(svc);
  }

  graph.push({
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: shared[lang].crumbHome, item: homeUrl(lang) },
      { '@type': 'ListItem', position: 2, name: shared[lang].crumbServices, item: hubUrl(lang) },
      { '@type': 'ListItem', position: 3, name: s.crumb }
    ]
  });

  // answers are verbatim visible copy, as Google's FAQ rules require
  graph.push({
    '@type': 'FAQPage', inLanguage: lang,
    mainEntity: s.faq.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  });

  const body = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)
    .split('\n').join('\n  ');
  return '  <script type="application/ld+json">\n  ' + body + '\n  </script>';
}

/* ---------- gift voucher card ----------
   Built in markup rather than exported as an image, so it exists in all
   three languages, stays sharp at any size and needs no re-export when
   the copy changes. */
function voucherCard(lang) {
  const s = shared[lang];
  return `          <div class="voucher-card">
            <div class="voucher-top">
              <span class="voucher-brand">Massage 4 Beauty</span>
              <span class="voucher-label">${esc(s.voucherLabel)}</span>
            </div>
            <div class="voucher-body">
              <p class="voucher-eyebrow">${esc(s.voucherEyebrow)}</p>
              <p class="voucher-h">${esc(s.voucherH)}</p>
            </div>
          </div>`;
}

/* ---------- hero banner ----------
   p.hero names a file in assets/ (1920x800 WebP). Pages without one keep the
   dashed canvas so the layout is identical when the image arrives. */
function heroMedia(p, lang, up) {
  if (p.heroCard === 'voucher') return voucherCard(lang);
  const alt = attr(p.heroAlt || p.strings[lang].photoAlt);
  if (!p.hero) {
    return `          <div class="photo-canvas" role="img" aria-label="${alt}">
            <span class="photo-canvas-label">${esc(shared[lang].svcPhotoPlaceholder)}</span>
          </div>`;
  }
  return `          <img src="${up}assets/${p.hero}" alt="${alt}"
               width="${p.heroW || 1920}" height="${p.heroH || 800}" loading="eager" fetchpriority="high" decoding="async" />`;
}

/* ---------- language switcher: real links, not a JS redraw ---------- */
function langSwitch(lang, slug, extraClass) {
  const links = LANGS.map(l => {
    const href = rel(pageUrl(l, slug));
    return l === lang
      ? `        <a href="${href}" class="active" aria-current="true" hreflang="${l}">${LANG_LABEL[l]}</a>`
      : `        <a href="${href}" hreflang="${l}">${LANG_LABEL[l]}</a>`;
  }).join('\n');
  return `      <div class="lang-switch${extraClass ? ' ' + extraClass : ''}" role="group" aria-label="Language">\n${links}\n      </div>`;
}

/* ---------- page ---------- */
function renderHtml(p, lang, allPages) {
  const s = p.strings[lang];
  const sh = shared[lang];
  const m = metaFor(p, lang);
  const url = pageUrl(lang, p.slug);
  const up = upTo(lang);
  const home = rel(homeUrl(lang));
  const hub = rel(hubUrl(lang));

  const alternates = LANGS.map(l =>
    `  <link rel="alternate" hreflang="${l}" href="${pageUrl(l, p.slug)}" />`).join('\n') +
    `\n  <link rel="alternate" hreflang="x-default" href="${pageUrl('cs', p.slug)}" />`;

  const steps = s.steps.map(st => `          <li>
            <strong>${esc(st.t)}</strong>
            <span>${esc(st.d)}</span>
          </li>`).join('\n');

  const effects = s.effects.map(e => `          <li>${esc(e)}</li>`).join('\n');
  const contra = s.contra.map(c => `          <li>${esc(c)}</li>`).join('\n');
  const what = s.what.map(t => `        <p>${esc(t)}</p>`).join('\n');

  const faq = s.faq.map(f => `          <details>
            <summary>${esc(f.q)}</summary>
            <p>${esc(f.a)}</p>
          </details>`).join('\n');

  const related = p.related.map(rslug => {
    const t = allPages[rslug];
    if (!t) throw new Error(`${p.slug}: related slug "${rslug}" has no page`);
    return `          <li><a href="${rel(pageUrl(lang, rslug))}">${esc(t.strings[lang].crumb)}</a></li>`;
  }).join('\n');

  const priceBlock = p.kind === 'voucher' ? '' : `
        <h2>${esc(s.h2Price)}</h2>
        <div class="service-price-row">
          <div>
            <div class="price-name">${esc(s.priceName)}</div>
            <div class="price-desc">${esc(s.priceDesc)}</div>
          </div>
          <div class="price-meta">
            <div class="price-val">${esc(money(p.price, lang))}</div>
            <div class="price-min">${esc(s.priceMin)}</div>
          </div>
        </div>
`;

  const facts = p.kind === 'voucher'
    ? `          <div class="service-fact">
            <span class="service-fact-k">${esc(sh.svcFactPriceK)}</span>
            <span class="service-fact-v">${esc(s.factPriceV)}</span>
          </div>
          <div class="service-fact">
            <span class="service-fact-k">${esc(sh.svcFactPlaceK)}</span>
            <span class="service-fact-v">${esc(s.factPlaceV)}</span>
          </div>`
    : `          <div class="service-fact">
            <span class="service-fact-k">${esc(sh.svcFactDurationK)}</span>
            <span class="service-fact-v">${esc(s.factDurationV)}</span>
          </div>
          <div class="service-fact">
            <span class="service-fact-k">${esc(sh.svcFactPriceK)}</span>
            <span class="service-fact-v">${esc(money(p.price, lang))}</span>
          </div>
          <div class="service-fact">
            <span class="service-fact-k">${esc(sh.svcFactPlaceK)}</span>
            <span class="service-fact-v">${esc(s.factPlaceV)}</span>
          </div>`;

  return `<!DOCTYPE html>
<html lang="${lang}" data-lang-fixed="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

${GA}

  <title>${esc(m.title)}</title>
  <meta name="description" content="${attr(m.desc)}" />
  <link rel="canonical" href="${url}" />
${alternates}

  <meta property="og:type" content="article" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta property="og:site_name" content="Massage 4 Beauty" />
  <meta property="og:title" content="${attr(m.ogTitle)}" />
  <meta property="og:description" content="${attr(m.ogDesc)}" />
  <meta property="og:url" content="${url}" />
${p.hero ? `  <meta property="og:image" content="${ORIGIN}/assets/${p.hero}" />
  <meta property="og:image:width" content="${p.heroW || 1920}" />
  <meta property="og:image:height" content="${p.heroH || 800}" />` : '  <!-- og:image až bude banner -->'}

  <link rel="icon" type="image/png" href="${up}assets/mark.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="${up}styles.css" />

${jsonLd(p, lang)}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="${home}" class="brand" aria-label="Massage 4 Beauty">
      <img src="${up}assets/signature.png" alt="Ludmila Yemelianova" />
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="${home}">${esc(sh.crumbHome)}</a>
      <a href="${hub}">${esc(sh.navServices)}</a>
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#about">${esc(sh.navAbout)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
    </nav>
    <div class="header-right">
${langSwitch(lang, p.slug)}
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
    </div>
  </header>

  <main>
    <article class="service-page">
      <div class="service-wrap">

        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${home}">${esc(sh.crumbHome)}</a>
          <span aria-hidden="true">›</span>
          <a href="${hub}">${esc(sh.crumbServices)}</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${esc(s.crumb)}</span>
        </nav>

        <figure class="service-hero${p.hero ? ' service-hero--card' : ''}">
${heroMedia(p, lang, up)}
          <figcaption>${esc(s.photoCaption)}</figcaption>
        </figure>

        <p class="eyebrow">${esc(s.eyebrow)}</p>
        <h1>${esc(s.h1)}</h1>
        <p class="service-lead">${esc(s.lead)}</p>

        <div class="service-facts">
${facts}
          <a href="${home}#contact" class="btn-solid service-fact-cta">${esc(sh.svcBookBtn)}</a>
        </div>

        <h2>${esc(s.h2What)}</h2>
${what}

        <h2>${esc(s.h2How)}</h2>
        <ol class="service-steps">
${steps}
        </ol>

        <h2>${esc(s.h2Effects)}</h2>
        <ul class="service-benefits">
${effects}
        </ul>

        <h2>${esc(s.h2Who)}</h2>
        <p>${esc(s.who)}</p>

        <h3>${esc(s.h3Contra)}</h3>
        <ul class="service-benefits service-benefits--warn">
${contra}
        </ul>
        <p class="service-note">${esc(s.contraNote)}</p>
${priceBlock}
        <h2>${esc(s.h2Faq)}</h2>
        <div class="service-faq">
${faq}
        </div>

        <div class="service-cta">
          <h2>${esc(s.h2Book)}</h2>
          <p>${esc(s.bookText)}</p>
          <div class="service-cta-actions">
            <a href="${home}#contact" class="btn-solid">${esc(sh.svcBookBtn)}</a>
            <a href="tel:${PHONE_HREF}" class="service-cta-phone">${PHONE}</a>
          </div>
        </div>

        <h2 class="service-related-h">${esc(s.h2Related)}</h2>
        <ul class="service-related">
${related}
        </ul>

      </div>
    </article>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="${up}assets/signature.png" alt="Ludmila Yemelianova" />
      <p class="footer-copy">${esc(sh.footerCopy)}</p>
    </div>
    <div class="footer-right">
      <a href="${home}">${esc(sh.crumbHome)}</a>
      <a href="${hub}">${esc(sh.navServices)}</a>
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
${langSwitch(lang, p.slug, 'footer-lang')}
    </div>
  </footer>

  <!-- ============ COOKIE BANNER ============ -->
  <div class="cookie-banner" id="cookieBanner" hidden>
    <p class="cookie-text">${esc(sh.cookieText)}</p>
    <div class="cookie-actions">
      <a href="${up}privacy.html" class="cookie-link">${esc(sh.cookieMore)}</a>
      <button type="button" class="cookie-btn cookie-btn--decline" id="cookieDecline">${esc(sh.cookieDecline)}</button>
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept">${esc(sh.cookieAccept)}</button>
    </div>
  </div>

  <script src="${up}script.js"></script>
</body>
</html>
`;
}

/* ---------- main ---------- */
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.js'));
const allPages = {};
for (const f of files) {
  const p = require(path.join(PAGES_DIR, f));
  if (p.slug + '.js' !== f) throw new Error(`${f}: slug "${p.slug}" does not match filename`);
  for (const l of LANGS) if (!p.strings[l]) throw new Error(`${p.slug}: missing strings for "${l}"`);
  allPages[p.slug] = p;
}

if (require.main === module) {
  let n = 0;
  for (const slug of Object.keys(allPages)) {
    for (const lang of LANGS) {
      const dir = path.join(ROOT, ...pagePath(lang, slug));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), renderHtml(allPages[slug], lang, allPages), 'utf8');
      n++;
    }
    console.log('  ' + slug + '  ->  ' + LANGS.join(' + '));
  }
  console.log('\n' + n + ' pages (' + Object.keys(allPages).length + ' treatments x ' + LANGS.length + ' languages).');
}

module.exports = { allPages, LANGS, ORIGIN, pageUrl, hubUrl, homeUrl, rel, shared, GA, langSwitch, LANG_LABEL, OG_LOCALE, esc, attr, money, voucherCard };
