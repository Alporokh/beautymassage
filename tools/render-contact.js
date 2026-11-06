/* ============================================================
   Contact page generator - one page per language:

     kontakt/index.html        cs   (canonical, x-default)
     en/kontakt/index.html     en
     ru/kontakt/index.html     ru

   The Google map is click-to-load: the page ships a placeholder with
   data-map-src, and script.js creates the iframe only after the visitor
   presses the button, so a normal page view sends nothing to Google.

   Run:  node tools/render-contact.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const R = require('./render.js');

const ROOT = path.join(__dirname, '..');
const { contactUrl, ADDRESS, MAP_DIRECTIONS, MAP_EMBED, LANGS, ORIGIN, hubUrl, homeUrl, rel, shared, GA,
        LANG_LABEL, OG_LOCALE, esc, attr, servicesMenu, stamp, MENU_LABEL } = R;

const PHONE = '+420 721 761 411';
const PHONE_HREF = '+420721761411';
const EMAIL = 'beautymassage.prague@gmail.com';

function contactLangSwitch(lang, extraClass) {
  const links = LANGS.map(l => {
    const href = rel(contactUrl(l));
    return l === lang
      ? `        <a href="${href}" class="active" aria-current="true" hreflang="${l}">${LANG_LABEL[l]}</a>`
      : `        <a href="${href}" hreflang="${l}">${LANG_LABEL[l]}</a>`;
  }).join('\n');
  return `      <div class="lang-switch${extraClass ? ' ' + extraClass : ''}" role="group" aria-label="Language">\n${links}\n      </div>`;
}

function renderContact(lang) {
  const sh = shared[lang];
  const up = lang === 'cs' ? '../' : '../../';
  const home = rel(homeUrl(lang));
  const hub = rel(hubUrl(lang));
  const url = contactUrl(lang);

  const alternates = LANGS.map(l =>
    `  <link rel="alternate" hreflang="${l}" href="${contactUrl(l)}" />`).join('\n') +
    `\n  <link rel="alternate" hreflang="x-default" href="${contactUrl('cs')}" />`;

  const graph = [
    {
      '@type': 'ContactPage',
      '@id': url + '#page',
      url,
      name: sh.contactH1,
      inLanguage: lang,
      about: { '@id': ORIGIN + '/#business' }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: sh.crumbHome, item: homeUrl(lang) },
        { '@type': 'ListItem', position: 2, name: sh.visitMore }
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

  <title>${esc(sh.contactTitle)}</title>
  <meta name="description" content="${attr(sh.contactDesc)}" />
  <link rel="canonical" href="${url}" />
${alternates}

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta property="og:site_name" content="Massage 4 Beauty" />
  <meta property="og:title" content="${attr(sh.contactTitle)}" />
  <meta property="og:description" content="${attr(sh.contactDesc)}" />
  <meta property="og:url" content="${url}" />

  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" sizes="32x32" href="${up}assets/favicon-32.png" />
  <link rel="apple-touch-icon" href="${up}assets/apple-touch-icon.png" />
  <link rel="manifest" href="${up}site.webmanifest" />

  <link rel="stylesheet" href="${up}fonts.css" />

  <link rel="stylesheet" href="${up}styles.css" />

${ld}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="${home}" class="brand" aria-label="Massage 4 Beauty">
      <img src="${up}assets/logo.png" alt="Massage 4 Beauty" width="806" height="146" />
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Main">
      <a href="${home}">${esc(sh.crumbHome)}</a>
${servicesMenu(lang)}
      <a href="${home}#prices">${esc(sh.navPrices)}</a>
      <a href="${home}#about">${esc(sh.navAbout)}</a>
      <a href="${home}#contact">${esc(sh.navContact)}</a>
    </nav>
    <div class="header-right">
${contactLangSwitch(lang)}
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="${MENU_LABEL[lang]}"><span></span><span></span><span></span></button>
    </div>
  </header>

  <main>
    <section class="service-page">
      <div class="hub-wrap">

        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${home}">${esc(sh.crumbHome)}</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${esc(sh.visitMore)}</span>
        </nav>

        <p class="eyebrow">${esc(sh.contactEyebrow)}</p>
        <h1>${esc(sh.contactH1)}</h1>
        <p class="service-lead">${esc(sh.contactLead)}</p>

        <div class="contact-details">
          <div class="info-block">
            <p class="info-label">${esc(sh.lblAddress)}</p>
            <p class="info-value">${esc(ADDRESS)}</p>
          </div>
          <div class="info-block">
            <p class="info-label">${esc(sh.visitHoursLbl)}</p>
            <p class="info-value">${esc(sh.visitHours)}</p>
          </div>
          <div class="info-block">
            <p class="info-label">${esc(sh.lblPhone)}</p>
            <a class="info-value" href="tel:${PHONE_HREF}">${PHONE}</a>
          </div>
          <div class="info-block">
            <p class="info-label">${esc(sh.lblEmail)}</p>
            <a class="info-value" href="mailto:${EMAIL}">${EMAIL}</a>
          </div>
        </div>

        <div class="visit-actions">
          <a href="${attr(MAP_DIRECTIONS)}" class="btn-solid" target="_blank" rel="noopener">${esc(sh.visitNav)}</a>
          <a href="${home}#contact" class="visit-more">${esc(sh.contactBookH)}</a>
        </div>

        <div class="map-embed" data-map-src="${attr(MAP_EMBED)}" data-map-title="${attr(ADDRESS)}">
          <button type="button" class="btn-solid map-load">${esc(sh.mapBtn)}</button>
          <p class="map-note">${esc(sh.mapNote)} <a href="${up}privacy">${esc(sh.privacyLink)}</a></p>
        </div>

      </div>
    </section>
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
      <a href="${up}privacy">${esc(sh.privacyLink)}</a>
${contactLangSwitch(lang, 'footer-lang')}
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

for (const lang of LANGS) {
  const dir = lang === 'cs' ? path.join(ROOT, 'kontakt') : path.join(ROOT, lang, 'kontakt');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), stamp(renderContact(lang)), 'utf8');
  console.log('  wrote  ' + (lang === 'cs' ? 'kontakt/' : lang + '/kontakt/') + 'index.html');
}
