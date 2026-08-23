/* ============================================================
   Services hub generator — writes sluzby.html + sluzby.js
   Cards are built from the same tools/pages/*.js data as the
   detail pages, so the hub can never drift out of sync.

   Run:  node tools/render-hub.js
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

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const czk = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const HUB = {
  cs: {
    title: 'Masáže Praha 4 — obličeje i těla, ceník | Massage 4 Beauty',
    desc: 'Přehled všech masáží ve studiu Massage 4 Beauty v Praze 4 — Nusle. Masáže obličeje, masáže těla a dárkové poukazy s cenami a online rezervací.',
    eyebrow: 'Massage 4 Beauty · Praha 4',
    h1: 'Masáže Praha',
    lead: 'Ruční masáže obličeje i těla ve studiu v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Vyberte si ošetření a rezervujte termín online.',
    groupFace: 'Masáže obličeje',
    groupBody: 'Masáže těla',
    groupOther: 'Dárkové poukazy',
    more: 'Více o masáži',
    h2Book: 'Nevíte, kterou masáž zvolit?',
    bookText: 'Zavolejte mi na +420 721 761 411 a společně vybereme to, co vašemu tělu právě teď udělá nejlíp.'
  },
  en: {
    title: 'Massages in Prague 4 — face and body, price list | Massage 4 Beauty',
    desc: 'All massages at the Massage 4 Beauty studio in Prague 4 — Nusle. Facial massages, body massages and gift vouchers with prices and online booking.',
    eyebrow: 'Massage 4 Beauty · Prague 4',
    h1: 'Massages in Prague',
    lead: 'Manual face and body massage at the studio in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Choose a treatment and book online.',
    groupFace: 'Facial massages',
    groupBody: 'Body massages',
    groupOther: 'Gift vouchers',
    more: 'More about it',
    h2Book: 'Not sure which massage to choose?',
    bookText: 'Call me on +420 721 761 411 and we will work out together what your body needs most right now.'
  },
  ru: {
    title: 'Массажи в Праге 4 — лицо и тело, прайс | Massage 4 Beauty',
    desc: 'Все массажи студии Massage 4 Beauty в Праге 4 — Нусле. Массажи лица, массажи тела и подарочные сертификаты с ценами и записью онлайн.',
    eyebrow: 'Massage 4 Beauty · Прага 4',
    h1: 'Массажи в Праге',
    lead: 'Ручные массажи лица и тела в студии в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Выберите процедуру и запишитесь онлайн.',
    groupFace: 'Массажи лица',
    groupBody: 'Массажи тела',
    groupOther: 'Подарочные сертификаты',
    more: 'Подробнее',
    h2Book: 'Не знаете, какой массаж выбрать?',
    bookText: 'Позвоните мне по номеру +420 721 761 411, и мы вместе подберём то, что вашему телу нужнее всего.'
  }
};

/* ---------- load pages, keep a stable order ---------- */
const pages = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.js'))
  .map(f => require(path.join(PAGES_DIR, f)));

const ORDER = {
  face: ['masaz-obliceje', 'myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje',
         'bukalni-masaz', 'lymfaticka-masaz-obliceje'],
  body: ['lymfaticka-masaz', 'masaz-celeho-tela', 'masaz-zad-a-sije', 'relaxacni-masaz'],
  other: ['darkovy-poukaz']
};

const bySlug = {};
pages.forEach(p => { bySlug[p.slug] = p; });
for (const g of Object.keys(ORDER)) {
  for (const s of ORDER[g]) if (!bySlug[s]) throw new Error('hub order references missing page: ' + s);
}
const listed = Object.values(ORDER).flat();
for (const p of pages) if (!listed.includes(p.slug)) throw new Error('page missing from hub order: ' + p.slug);

/* ---------- cards ---------- */
let cardIndex = 0;
const cardKey = {};   // slug -> index, so PAGE_CONTENT keys line up with the markup

function cardsFor(group) {
  return ORDER[group].map(slug => {
    const p = bySlug[slug];
    const i = ++cardIndex;
    cardKey[slug] = i;
    const cs = p.strings.cs;
    const meta = p.kind === 'voucher'
      ? esc(cs.factPriceV)
      : czk(p.price) + '&nbsp;Kč · ' + p.minutes + ' min';
    return `          <li class="svc-card">
            <a href="/masaze/${slug}/">
              <h3 data-i18n="card${i}Title">${esc(cs.crumb)}</h3>
              <p class="svc-card-meta">${meta}</p>
              <p class="svc-card-text" data-i18n="card${i}Text">${esc(cs.lead)}</p>
              <span class="svc-card-more" data-i18n="cardMore">Více o masáži</span>
            </a>
          </li>`;
  }).join('\n');
}

const faceCards = cardsFor('face');
const bodyCards = cardsFor('body');
const otherCards = cardsFor('other');

/* ---------- structured data ---------- */
const graph = [
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Domů', item: ORIGIN + '/' },
      { '@type': 'ListItem', position: 2, name: 'Masáže' }
    ]
  },
  {
    '@type': 'ItemList',
    name: 'Masáže — Massage 4 Beauty Praha 4',
    itemListElement: listed.map((slug, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: bySlug[slug].strings.cs.crumb,
      url: ORIGIN + '/masaze/' + slug + '/'
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

/* ---------- page ---------- */
const html = `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Google tag (gtag.js) -->
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
  </script>

  <title>${esc(HUB.cs.title)}</title>
  <meta name="description" content="${attr(HUB.cs.desc)}" />
  <link rel="canonical" href="${ORIGIN}/sluzby/" />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="cs_CZ" />
  <meta property="og:site_name" content="Massage 4 Beauty" />
  <meta property="og:title" content="${attr(HUB.cs.title)}" />
  <meta property="og:description" content="${attr(HUB.cs.desc)}" />
  <meta property="og:url" content="${ORIGIN}/sluzby/" />

  <link rel="icon" type="image/png" href="../assets/mark.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="../styles.css" />

${ld}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="/" class="brand" aria-label="Massage 4 Beauty — úvodní stránka">
      <img src="../assets/signature.png" alt="Ludmila Yemelianova" />
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
  </header>

  <main>
    <section class="service-page">
      <div class="hub-wrap">

        <nav class="breadcrumb" aria-label="Drobečková navigace">
          <a href="/" data-i18n="crumbHome">Domů</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page" data-i18n="crumbServices">Masáže</span>
        </nav>

        <p class="eyebrow" data-i18n="hubEyebrow">${esc(HUB.cs.eyebrow)}</p>
        <h1 data-i18n="hubH1">${esc(HUB.cs.h1)}</h1>
        <p class="service-lead" data-i18n="hubLead">${esc(HUB.cs.lead)}</p>

        <h2 data-i18n="hubGroupFace">${esc(HUB.cs.groupFace)}</h2>
        <ul class="svc-grid">
${faceCards}
        </ul>

        <h2 data-i18n="hubGroupBody">${esc(HUB.cs.groupBody)}</h2>
        <ul class="svc-grid">
${bodyCards}
        </ul>

        <h2 data-i18n="hubGroupOther">${esc(HUB.cs.groupOther)}</h2>
        <ul class="svc-grid">
${otherCards}
        </ul>

        <div class="service-cta">
          <h2 data-i18n="hubH2Book">${esc(HUB.cs.h2Book)}</h2>
          <p data-i18n="hubBookText">${esc(HUB.cs.bookText)}</p>
          <div class="service-cta-actions">
            <a href="/#contact" class="btn-solid" data-i18n="svcBookBtn">Rezervovat termín</a>
            <a href="tel:${PHONE_HREF}" class="service-cta-phone">${PHONE}</a>
          </div>
        </div>

      </div>
    </section>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="../assets/signature.png" alt="Ludmila Yemelianova" />
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
      <a href="../privacy.html" class="cookie-link" data-i18n="cookieMore">Ochrana osobních údajů</a>
      <button type="button" class="cookie-btn cookie-btn--decline" id="cookieDecline" data-i18n="cookieDecline">Odmítnout</button>
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept" data-i18n="cookieAccept">Přijmout</button>
    </div>
  </div>

  <script src="../content.js"></script>
  <script src="page.js"></script>
  <script src="../script.js"></script>
</body>
</html>
`;

/* ---------- translations ---------- */
const out = {};
for (const lang of LANGS) {
  const h = HUB[lang];
  const o = {
    hubEyebrow: h.eyebrow,
    hubH1: h.h1,
    hubLead: h.lead,
    hubGroupFace: h.groupFace,
    hubGroupBody: h.groupBody,
    hubGroupOther: h.groupOther,
    cardMore: h.more,
    hubH2Book: h.h2Book,
    hubBookText: h.bookText
  };
  for (const slug of listed) {
    const i = cardKey[slug];
    o['card' + i + 'Title'] = bySlug[slug].strings[lang].crumb;
    o['card' + i + 'Text'] = bySlug[slug].strings[lang].lead;
  }
  out[lang] = o;
}

const strings = `/* ============================================================
   Page copy — Služby (hub)
   GENERATED by tools/render-hub.js. Do not edit by hand.
   ============================================================ */
window.PAGE_CONTENT = {

${LANGS.map(l => '  ' + l + ': {\n' +
  Object.keys(out[l]).map(k => '    ' + k + ': ' + JSON.stringify(out[l][k]) + ',').join('\n') +
  '\n  },').join('\n\n')}

};
`;

const hubDir = path.join(ROOT, 'sluzby');
if (!fs.existsSync(hubDir)) fs.mkdirSync(hubDir, { recursive: true });
fs.writeFileSync(path.join(hubDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(hubDir, 'page.js'), strings, 'utf8');
console.log('  wrote  sluzby/index.html  +  page.js  (' + listed.length + ' cards)');
