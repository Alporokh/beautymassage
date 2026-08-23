/* ============================================================
   Services hub generator — one page per language:

     sluzby/index.html        cs   (canonical, x-default)
     en/sluzby/index.html     en
     ru/sluzby/index.html     ru

   Cards are built from the same tools/pages/*.js data as the detail
   pages, so the hub can never drift out of sync.

   Run:  node tools/render-hub.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const R = require('./render.js');

const ROOT = path.join(__dirname, '..');
const { allPages, LANGS, ORIGIN, pageUrl, hubUrl, homeUrl, rel, shared, GA,
        LANG_LABEL, OG_LOCALE, esc, attr, czk } = R;

const PHONE = '+420 721 761 411';
const PHONE_HREF = '+420721761411';

const HUB = {
  cs: {
    title: 'Masáže Praha 4 — obličeje i těla, ceník | Massage 4 Beauty',
    desc: 'Přehled všech masáží ve studiu Massage 4 Beauty v Praze 4 — Nusle. Masáže obličeje, masáže těla a dárkové poukazy s cenami a online rezervací.',
    eyebrow: 'Massage 4 Beauty · Praha 4',
    h1: 'Masáže Praha',
    lead: 'Ruční masáže obličeje i těla ve studiu v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Vyberte si ošetření a rezervujte termín online.',
    groupFace: 'Masáže obličeje', groupBody: 'Masáže těla', groupOther: 'Dárkové poukazy',
    more: 'Více o masáži',
    h2Book: 'Nevíte, kterou masáž zvolit?',
    bookText: 'Zavolejte mi na +420 721 761 411 a společně vybereme to, co vašemu tělu právě teď udělá nejlíp.'
  },
  en: {
    title: 'Massages in Prague 4 — face and body | Massage 4 Beauty',
    desc: 'All massages at the Massage 4 Beauty studio in Prague 4 — Nusle. Facial massages, body massages and gift vouchers with prices and online booking.',
    eyebrow: 'Massage 4 Beauty · Prague 4',
    h1: 'Massages in Prague',
    lead: 'Manual face and body massage at the studio in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Choose a treatment and book online.',
    groupFace: 'Facial massages', groupBody: 'Body massages', groupOther: 'Gift vouchers',
    more: 'More about it',
    h2Book: 'Not sure which massage to choose?',
    bookText: 'Call me on +420 721 761 411 and we will work out together what your body needs most right now.'
  },
  ru: {
    title: 'Массажи в Праге 4 — лицо и тело | Massage 4 Beauty',
    desc: 'Все массажи студии Massage 4 Beauty в Праге 4 — Нусле. Массажи лица, массажи тела и подарочные сертификаты с ценами и записью онлайн.',
    eyebrow: 'Massage 4 Beauty · Прага 4',
    h1: 'Массажи в Праге',
    lead: 'Ручные массажи лица и тела в студии в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Выберите процедуру и запишитесь онлайн.',
    groupFace: 'Массажи лица', groupBody: 'Массажи тела', groupOther: 'Подарочные сертификаты',
    more: 'Подробнее',
    h2Book: 'Не знаете, какой массаж выбрать?',
    bookText: 'Позвоните мне по номеру +420 721 761 411, и мы вместе подберём то, что вашему телу нужнее всего.'
  }
};

const ORDER = {
  face: ['masaz-obliceje', 'myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje',
         'bukalni-masaz', 'lymfaticka-masaz-obliceje'],
  body: ['lymfaticka-masaz', 'masaz-celeho-tela', 'masaz-zad-a-sije', 'relaxacni-masaz'],
  other: ['darkovy-poukaz']
};

for (const g of Object.keys(ORDER)) {
  for (const s of ORDER[g]) if (!allPages[s]) throw new Error('hub order references missing page: ' + s);
}
const listed = Object.values(ORDER).flat();
for (const slug of Object.keys(allPages)) {
  if (!listed.includes(slug)) throw new Error('page missing from hub order: ' + slug);
}

/* hub switcher links between the three hub URLs */
function hubLangSwitch(lang, extraClass) {
  const links = LANGS.map(l => {
    const href = rel(hubUrl(l));
    return l === lang
      ? `        <a href="${href}" class="active" aria-current="true" hreflang="${l}">${LANG_LABEL[l]}</a>`
      : `        <a href="${href}" hreflang="${l}">${LANG_LABEL[l]}</a>`;
  }).join('\n');
  return `      <div class="lang-switch${extraClass ? ' ' + extraClass : ''}" role="group" aria-label="Language">\n${links}\n      </div>`;
}

function cardsFor(group, lang, h) {
  return ORDER[group].map(slug => {
    const p = allPages[slug];
    const s = p.strings[lang];
    const meta = p.kind === 'voucher'
      ? esc(s.factPriceV)
      : czk(p.price) + '&nbsp;Kč · ' + p.minutes + ' min';
    return `          <li class="svc-card">
            <a href="${rel(pageUrl(lang, slug))}">
              <h3>${esc(s.crumb)}</h3>
              <p class="svc-card-meta">${meta}</p>
              <p class="svc-card-text">${esc(s.lead)}</p>
              <span class="svc-card-more">${esc(h.more)}</span>
            </a>
          </li>`;
  }).join('\n');
}

function renderHub(lang) {
  const h = HUB[lang];
  const sh = shared[lang];
  const up = lang === 'cs' ? '../' : '../../';
  const home = rel(homeUrl(lang));
  const url = hubUrl(lang);

  const alternates = LANGS.map(l =>
    `  <link rel="alternate" hreflang="${l}" href="${hubUrl(l)}" />`).join('\n') +
    `\n  <link rel="alternate" hreflang="x-default" href="${hubUrl('cs')}" />`;

  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: sh.crumbHome, item: homeUrl(lang) },
        { '@type': 'ListItem', position: 2, name: sh.crumbServices }
      ]
    },
    {
      '@type': 'ItemList',
      name: h.h1,
      inLanguage: lang,
      itemListElement: listed.map((slug, i) => ({
        '@type': 'ListItem', position: i + 1,
        name: allPages[slug].strings[lang].crumb,
        url: pageUrl(lang, slug)
      }))
    },
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': ORIGIN + '/#business',
      name: 'Massage 4 Beauty',
      image: ORIGIN + '/assets/signature.png',
      telephone: PHONE_HREF,
      url: ORIGIN + '/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Děkanská vinice I 819/16',
        addressLocality: 'Praha 4',
        postalCode: '14000',
        addressCountry: 'CZ'
      },
      areaServed: [
        { '@type': 'City', name: 'Praha' },
        { '@type': 'Place', name: 'Praha 4' },
        { '@type': 'Place', name: 'Nusle' },
        { '@type': 'Place', name: 'Pankrác' },
        { '@type': 'Place', name: 'Vyšehrad' }
      ]
    }
  ];

  const ld = '  <script type="application/ld+json">\n  ' +
    JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)
      .split('\n').join('\n  ') + '\n  </script>';

  return `<!DOCTYPE html>
<html lang="${lang}" data-lang-fixed="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

${GA}

  <title>${esc(h.title)}</title>
  <meta name="description" content="${attr(h.desc)}" />
  <link rel="canonical" href="${url}" />
${alternates}

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta property="og:site_name" content="Massage 4 Beauty" />
  <meta property="og:title" content="${attr(h.title)}" />
  <meta property="og:description" content="${attr(h.desc)}" />
  <meta property="og:url" content="${url}" />

  <link rel="icon" type="image/png" href="${up}assets/mark.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="${up}styles.css" />

${ld}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="${home}" class="brand" aria-label="Massage 4 Beauty">
      <img src="${up}assets/signature.png" alt="Ludmila Yemelianova" />
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="${rel(url)}">${esc(sh.navServices)}</a>
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#about">${esc(sh.navAbout)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
    </nav>
    <div class="header-right">
${hubLangSwitch(lang)}
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
    </div>
  </header>

  <main>
    <section class="service-page">
      <div class="hub-wrap">

        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${home}">${esc(sh.crumbHome)}</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${esc(sh.crumbServices)}</span>
        </nav>

        <p class="eyebrow">${esc(h.eyebrow)}</p>
        <h1>${esc(h.h1)}</h1>
        <p class="service-lead">${esc(h.lead)}</p>

        <h2>${esc(h.groupFace)}</h2>
        <ul class="svc-grid">
${cardsFor('face', lang, h)}
        </ul>

        <h2>${esc(h.groupBody)}</h2>
        <ul class="svc-grid">
${cardsFor('body', lang, h)}
        </ul>

        <h2>${esc(h.groupOther)}</h2>
        <ul class="svc-grid">
${cardsFor('other', lang, h)}
        </ul>

        <div class="service-cta">
          <h2>${esc(h.h2Book)}</h2>
          <p>${esc(h.bookText)}</p>
          <div class="service-cta-actions">
            <a href="${home}#contact" class="btn-solid">${esc(sh.svcBookBtn)}</a>
            <a href="tel:${PHONE_HREF}" class="service-cta-phone">${PHONE}</a>
          </div>
        </div>

      </div>
    </section>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="${up}assets/signature.png" alt="Ludmila Yemelianova" />
      <p class="footer-copy">${esc(sh.footerCopy)}</p>
    </div>
    <div class="footer-right">
      <a href="${rel(url)}">${esc(sh.navServices)}</a>
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
${hubLangSwitch(lang, 'footer-lang')}
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

for (const lang of LANGS) {
  const dir = lang === 'cs' ? path.join(ROOT, 'sluzby') : path.join(ROOT, lang, 'sluzby');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderHub(lang), 'utf8');
  console.log('  wrote  ' + (lang === 'cs' ? 'sluzby/' : lang + '/sluzby/') + 'index.html');
}
console.log('\n' + LANGS.length + ' hub pages, ' + listed.length + ' cards each.');

module.exports = { ORDER, listed };
