/* ============================================================
   Service page generator - Massage 4 Beauty

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
const clip = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)).replace(/[,;:\u2014-]$/, '') + '…');

/* shared UI strings (nav, footer, cookie banner) come from content.js */
const shared = {};
const CONTENT = {};
{
  const w = {};
  new Function('window', fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'))(w);
  Object.assign(CONTENT, w.CONTENT);
  for (const l of LANGS) shared[l] = w.CONTENT[l].strings;
}

/* ---------- cache busting ----------
   Browsers keep styles.css and the scripts for hours (_headers / Pages
   default), so a page could arrive with new markup and old CSS. Every link
   to these files carries ?v=<content hash>: the URL changes only when the
   file does. stamp() rewrites any existing ?v= too, so it is safe to rerun. */
const crypto = require('crypto');
const VERSIONED = ['styles.css', 'script.js', 'content.js', 'fonts.css'];
const fileVer = {};
for (const f of VERSIONED) {
  fileVer[f] = crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, f))).digest('hex').slice(0, 8);
}
const stampRe = new RegExp('((?:href|src)="[^"]*?)(' + VERSIONED.map(f => f.replace('.', '\\.')).join('|') + ')(\\?v=[^"]*)?"', 'g');
const stamp = html => html.replace(stampRe, (m, pre, f) => `${pre}${f}?v=${fileVer[f]}"`);

/* ---------- URL helpers ---------- */
const pageUrl = (lang, slug) => lang === 'cs'
  ? `${ORIGIN}/masaze/${slug}/`
  : `${ORIGIN}/${lang}/masaze/${slug}/`;
const hubUrl = lang => lang === 'cs' ? `${ORIGIN}/sluzby/` : `${ORIGIN}/${lang}/sluzby/`;
const homeUrl = lang => lang === 'cs' ? `${ORIGIN}/` : `${ORIGIN}/${lang}/`;
const contactUrl = lang => lang === 'cs' ? `${ORIGIN}/kontakt/` : `${ORIGIN}/${lang}/kontakt/`;

/* ---------- studio location (Google Business Profile, 2026-11-06) ----------
   The directions link opens Google Maps in a new tab; nothing loads from
   Google until the visitor clicks it. */
const ADDRESS = 'Děkanská vinice I 819/16, 140 00 Praha 4 - Nusle';
const MAP_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('Massage4beauty, Děkanská vinice I 819/16, 140 00 Praha') +
  '&destination_place_id=ChIJRSlzEwSVC0cRx21OefaxjJg';
const MAP_EMBED = 'https://www.google.com/maps?q=' +
  encodeURIComponent('Massage4beauty, Děkanská vinice I 819/16, 140 00 Praha') + '&output=embed';

function visitBlock(lang, withContactLink = true) {
  const sh = shared[lang];
  return `        <section class="visit" aria-label="${attr(sh.visitH)}">
          <h2>${esc(sh.visitH)}</h2>
          <p class="visit-addr">${esc(ADDRESS)}</p>
          <p class="visit-hours"><span>${esc(sh.visitHoursLbl)}:</span> ${esc(sh.visitHours)}</p>
          <div class="visit-actions">
            <a href="${attr(MAP_DIRECTIONS)}" class="btn-solid" target="_blank" rel="noopener">${esc(sh.visitNav)}</a>
${withContactLink ? `            <a href="${rel(contactUrl(lang))}" class="visit-more">${esc(sh.visitMore)}</a>\n` : ''}          </div>
        </section>`;
}
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

    /* Consent Mode v2 - storage stays denied until the visitor opts in */
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
    '@id': `${ORIGIN}/#business`,
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
      // required for merchant listings; there is no ru artwork, so ru uses en
      image: `${ORIGIN}/assets/11-darkovy-poukaz-hero-${lang === 'cs' ? 'cs' : 'en'}.webp`,
      brand: { '@type': 'Brand', name: 'Massage 4 Beauty' },
      offers: {
        '@type': 'Offer', priceCurrency: 'CZK', price: String(p.price),
        availability: 'https://schema.org/InStock', url,
        // the voucher is e-mailed free within 24 hours, as the page copy says
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'CZK' },
          shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'CZ' },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
            transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' }
          }
        },
        // "poukaz nelze směnit zpět za peníze" - no returns
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'CZ',
          returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted'
        }
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
              <p class="voucher-h">${s.voucherH.map(function (line) {
                return '<span>' + esc(line) + '</span>';
              }).join('\n              ')}</p>
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

/* ---------- services mega menu ----------
   One builder for every header, so the dropdown is identical site-wide.
   The trigger stays a real link to the hub: on touch screens the first tap
   opens the panel (script.js), and without JS it simply goes to the hub. */
const MENU_GROUPS = [
  { key: 'face', slugs: ['autorska-masaz-obliceje', 'masaz-obliceje', 'myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje',
                         'bukalni-masaz', 'lymfaticka-masaz-obliceje', 'vakuova-masaz-obliceje',
                         'gua-sha-masaz-obliceje', 'masaz-krku-dekoltu-a-rukou', 'masaz-hlavy', 'alginatova-maska'] },
  { key: 'body', slugs: ['sportovni-masaz', 'masaz-bambusovymi-metlickami', 'lymfaticka-masaz', 'anticelulitidova-masaz',
                         'medova-masaz', 'klasicka-masaz', 'aroma-masaz', 'vakuova-masaz-tela', 'masaz-zad',
                         'reflexni-masaz-chodidel'] },
  { key: 'other', slugs: ['darkovy-poukaz'] }
];
const MENU_LABEL = { cs: 'Menu', en: 'Menu', ru: 'Меню' };
const MENU_STRINGS = {
  cs: { face: 'Masáže obličeje', body: 'Masáže těla', other: 'Dárkové poukazy', all: 'Všechny masáže' },
  en: { face: 'Facial massages', body: 'Body massages', other: 'Gift vouchers', all: 'All massages' },
  ru: { face: 'Массажи лица', body: 'Массажи тела', other: 'Подарочные сертификаты', all: 'Все массажи' }
};

function servicesMenu(lang, currentSlug, ind = '      ', forLang = false) {
  const t = MENU_STRINGS[lang];
  const hub = rel(hubUrl(lang));
  const cols = MENU_GROUPS.map(g => {
    const items = g.slugs.map(slug => {
      const cur = slug === currentSlug ? ' aria-current="page"' : '';
      return `${ind}        <li><a href="${rel(pageUrl(lang, slug))}"${cur}>${esc(allPages[slug].strings[lang].crumb)}</a></li>`;
    }).join('\n');
    const all = g.key === 'other'
      ? `\n${ind}      <a href="${hub}" class="mega-all">${esc(t.all)} <span aria-hidden="true">→</span></a>`
      : '';
    return `${ind}    <div class="mega-col">
${ind}      <p class="mega-h">${esc(t[g.key])}</p>
${ind}      <ul>
${items}
${ind}      </ul>${all}
${ind}    </div>`;
  }).join('\n');
  const langAttr = forLang ? ` data-menu-lang="${lang}"` : '';
  return `${ind}<div class="nav-services"${langAttr}>
${ind}  <a href="${hub}" class="nav-services-link" aria-haspopup="true" aria-expanded="false">${esc(shared[lang].navServices)}<svg class="nav-chevron" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></a>
${ind}  <div class="mega">
${ind}    <div class="mega-inner">
${cols}
${ind}    </div>
${ind}  </div>
${ind}</div>`;
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

  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" sizes="32x32" href="${up}assets/favicon-32.png" />
  <link rel="apple-touch-icon" href="${up}assets/apple-touch-icon.png" />
  <link rel="manifest" href="${up}site.webmanifest" />

  <link rel="stylesheet" href="${up}fonts.css" />

  <link rel="stylesheet" href="${up}styles.css" />

${jsonLd(p, lang)}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="${home}" class="brand" aria-label="Massage 4 Beauty">
      <img src="${up}assets/logo.png" alt="Massage 4 Beauty" width="806" height="146" />
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Main">
      <a href="${home}">${esc(sh.crumbHome)}</a>
${servicesMenu(lang, p.slug)}
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#about">${esc(sh.navAbout)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
    </nav>
    <div class="header-right">
${langSwitch(lang, p.slug)}
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="${MENU_LABEL[lang]}"><span></span><span></span><span></span></button>
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

${p.hero || p.heroCard ? `        <figure class="service-hero${p.hero ? ' service-hero--card' : ''}">
${heroMedia(p, lang, up)}
          <figcaption>${esc(s.photoCaption)}</figcaption>
        </figure>` : '        <!-- no hero yet: set p.hero once the photo arrives -->'}

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

${visitBlock(lang)}

      </div>
    </article>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="${up}assets/logo-light.png" alt="Massage 4 Beauty" width="806" height="146" loading="lazy" />
      <p class="footer-copy">${esc(sh.footerCopy)}</p>
      <p class="footer-credit">Website developed by <a href="https://imarket2web.com" target="_blank" rel="noopener">imarket2web</a></p>
    </div>
    <div class="footer-right">
      <a href="${home}">${esc(sh.crumbHome)}</a>
      <a href="${hub}">${esc(sh.navServices)}</a>
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
      <a href="${rel(contactUrl(lang))}">${esc(sh.visitMore)}</a>
${langSwitch(lang, p.slug, 'footer-lang')}
    </div>
  </footer>

  <!-- ============ COOKIE BANNER ============ -->
  <div class="cookie-banner" id="cookieBanner" hidden>
    <p class="cookie-text">${esc(sh.cookieText)}</p>
    <div class="cookie-actions">
      <a href="${up}privacy" class="cookie-link">${esc(sh.cookieMore)}</a>
      <button type="button" class="cookie-btn cookie-btn--decline" id="cookieDecline">${esc(sh.cookieDecline)}</button>
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept">${esc(sh.cookieAccept)}</button>
    </div>
  </div>

  <!-- ============ WHATSAPP ============ -->
  <a class="wa-float" href="https://wa.me/420721761411" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3zm0 23.67c-2 0-3.95-.54-5.65-1.55l-.4-.24-3.97 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.4 16c0-5.86 4.77-10.63 10.64-10.63 5.86 0 10.6 4.77 10.6 10.63 0 5.87-4.75 10.67-10.6 10.67zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.6 9.6 0 0 1-1.78-2.2c-.19-.32-.02-.5.14-.65.14-.15.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.2 2 .12.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/></svg>
  </a>

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
      fs.writeFileSync(path.join(dir, 'index.html'), stamp(renderHtml(allPages[slug], lang, allPages)), 'utf8');
      n++;
    }
    console.log('  ' + slug + '  ->  ' + LANGS.join(' + '));
  }

  // privacy.html is hand-written and translated in the browser, so it carries
  // all three menus (CSS shows the one matching <html lang>) between markers
  const privacyFile = path.join(ROOT, 'privacy.html');
  const privacy = fs.readFileSync(privacyFile, 'utf8');
  const marked = /(<!-- services-menu -->)[\s\S]*?([ \t]*<!-- \/services-menu -->)/;
  if (!marked.test(privacy)) throw new Error('privacy.html: services-menu markers missing');
  fs.writeFileSync(privacyFile, stamp(privacy.replace(marked, (m, a, b) =>
    a + '\n' + LANGS.map(l => servicesMenu(l, null, '      ', true)).join('\n') + '\n' + b)), 'utf8');
  console.log('  privacy.html  ->  services menu, asset versions');
  console.log('\n' + n + ' pages (' + Object.keys(allPages).length + ' treatments x ' + LANGS.length + ' languages).');
}

module.exports = { contactUrl, visitBlock, ADDRESS, MAP_DIRECTIONS, MAP_EMBED, allPages, LANGS, ORIGIN, pageUrl, hubUrl, homeUrl, rel, shared, GA, langSwitch, LANG_LABEL, OG_LOCALE, esc, attr, money, voucherCard, servicesMenu, stamp, MENU_LABEL };
