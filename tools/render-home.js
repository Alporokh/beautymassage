/* ============================================================
   Homepage generator — one page per language:

     index.html        cs   (canonical, x-default)
     en/index.html     en
     ru/index.html     ru

   Text, price lists and the treatment dropdown are baked in from
   content.js, so each language is real HTML a crawler can read.
   script.js still wires the booking form and cookie banner.

   Run:  node tools/render-home.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const R = require('./render.js');

const ROOT = path.join(__dirname, '..');
const { LANGS, ORIGIN, hubUrl, homeUrl, rel, GA, LANG_LABEL, OG_LOCALE, esc, attr } = R;

const PHONE = '+420 721 761 411';
const PHONE_HREF = '+420721761411';
const EMAIL = 'beautymassage.prague@gmail.com';

const CONTENT = {};
{
  const w = {};
  new Function('window', fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'))(w);
  Object.assign(CONTENT, w.CONTENT);
}

const META = {
  cs: {
    title: 'Masáže Praha 4 — obličej i tělo | Massage 4 Beauty',
    desc: 'Ruční masáže obličeje a těla v Praze 4 — Nusle. Liftingová, myofasciální a lymfatická masáž, masáže zad i relaxace. Ceník a online rezervace.'
  },
  en: {
    title: 'Massage Prague 4 — facial and body massage | Massage 4 Beauty',
    desc: 'Massage in Prague 4 (Praha 4, Nusle). Facial massage, lymphatic drainage, deep tissue, back and relaxing massage. Price list and online booking.'
  },
  ru: {
    title: 'Массаж Прага 4 — массаж лица и тела | Massage 4 Beauty',
    desc: 'Массаж в Праге 4 (Нусле). Массаж лица, лимфодренажный массаж, массаж спины и расслабляющий массаж. Прайс-лист и запись онлайн.'
  }
};

const upTo = lang => (lang === 'cs' ? '' : '../');

function homeLangSwitch(lang, extraClass) {
  const links = LANGS.map(l => {
    const href = rel(homeUrl(l));
    return l === lang
      ? `        <a href="${href}" class="active" aria-current="true" hreflang="${l}">${LANG_LABEL[l]}</a>`
      : `        <a href="${href}" hreflang="${l}">${LANG_LABEL[l]}</a>`;
  }).join('\n');
  return `      <div class="lang-switch${extraClass ? ' ' + extraClass : ''}" role="group" aria-label="Language">\n${links}\n      </div>`;
}

/* price rows, matching what script.js used to build at runtime */
function priceRows(items, data) {
  return items.map(it => `          <div class="price-row">
            <div style="flex:1">
              <div class="price-name">${esc(it.name)}</div>
              <div class="price-desc">${esc(it.desc)}</div>
            </div>
            <div class="price-meta">
              <div class="price-val">${esc(data.currency(it.price))}</div>${it.min ? `
              <div class="price-min">${it.min} ${esc(data.minLabel)}</div>` : ''}
            </div>
          </div>`).join('\n');
}

function treatmentOptions(data) {
  const s = data.strings;
  const group = (label, items) => `            <optgroup label="${attr(label)}">
${items.map(i => `              <option value="${attr(i.name)}">${esc(i.name)}</option>`).join('\n')}
            </optgroup>`;
  return `            <option value="">${esc(s.fTreatment)}</option>
${group(s.groupFace, data.facial)}
${group(s.groupBody, data.body)}`;
}

function renderHome(lang) {
  const data = CONTENT[lang];
  const s = data.strings;
  const m = META[lang];
  const up = upTo(lang);
  const url = homeUrl(lang);
  const hub = rel(hubUrl(lang));

  const alternates = LANGS.map(l =>
    `  <link rel="alternate" hreflang="${l}" href="${homeUrl(l)}" />`).join('\n') +
    `\n  <link rel="alternate" hreflang="x-default" href="${homeUrl('cs')}" />`;

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'HealthAndBeautyBusiness',
      '@id': ORIGIN + '/#business',
      name: 'Massage 4 Beauty',
      description: m.desc,
      inLanguage: lang,
      url,
      image: ORIGIN + '/assets/signature.png',
      telephone: PHONE_HREF,
      email: EMAIL,
      priceRange: '250–1600 CZK',
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
      ],
      founder: { '@type': 'Person', name: 'Ludmila Yemelianova' }
    }]
  };
  const ldBlock = '  <script type="application/ld+json">\n  ' +
    JSON.stringify(ld, null, 2).split('\n').join('\n  ') + '\n  </script>';

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

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta property="og:site_name" content="Massage 4 Beauty" />
  <meta property="og:title" content="${attr(m.title)}" />
  <meta property="og:description" content="${attr(m.desc)}" />
  <meta property="og:url" content="${url}" />

  <!-- Favicon: the green 'L.' circle mark -->
  <link rel="icon" type="image/png" href="${up}assets/mark.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="${up}styles.css" />

${ldBlock}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="${rel(url)}" class="brand" aria-label="Massage 4 Beauty">
      <img src="${up}assets/signature.png" alt="Ludmila Yemelianova" />
    </a>

    <nav class="main-nav" aria-label="Main">
      <a href="#top">${esc(s.crumbHome)}</a>
      <a href="${hub}">${esc(s.navServices)}</a>
      <a href="#prices">${esc(s.navPrices)}</a>
      <a href="#about">${esc(s.navAbout)}</a>
      <a href="#contact">${esc(s.navContact)}</a>
    </nav>

    <div class="header-right">
${homeLangSwitch(lang)}
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
    </div>
  </header>

  <main>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="hero-text">
        <p class="eyebrow">${esc(s.heroEyebrow)}</p>
        <h1>${esc(s.heroH1)}</h1>
        <p class="hero-sub">${esc(s.heroSub)}</p>
        <div class="cta-row">
          <a href="#contact" class="btn-solid">${esc(s.ctaBook)}</a>
          <a href="#prices" class="link-underline">${esc(s.ctaPrices)}</a>
        </div>
      </div>
      <div class="hero-img">
        <video src="${up}oil-miracle.mp4" autoplay muted loop playsinline></video>
      </div>
    </section>

    <!-- ============ ABOUT ============ -->
    <section class="about" id="about">
      <div class="about-photo">
        <span class="about-frame" aria-hidden="true"></span>
        <img src="${up}assets/ludmila-portrait.png" alt="${attr(s.aboutName)}" />
      </div>
      <div class="about-text">
        <p class="eyebrow">${esc(s.aboutEyebrow)}</p>
        <h2>${esc(s.aboutName)}</h2>
        <p class="about-welcome">${esc(s.aboutWelcome)}</p>
        <p>${esc(s.aboutP1)}</p>
        <p>${esc(s.aboutP2)}</p>
        <p>${esc(s.aboutP3)}</p>
        <img src="${up}assets/signature.png" alt="" class="about-sig" />
        <p class="caption">${esc(s.aboutCaption)}</p>
      </div>
    </section>

    <!-- ============ PRICE LIST ============ -->
    <section class="prices" id="prices">
      <div class="prices-head">
        <p class="eyebrow">${esc(s.pricesEyebrow)}</p>
        <h2>${esc(s.pricesH2)}</h2>
        <p class="prices-hub-link"><a href="${hub}">${esc(s.pricesHubLink)}</a></p>
      </div>
      <div class="prices-grid">
        <div class="price-col">
          <div class="group-head"><span>${esc(s.groupFace)}</span><span class="group-rule"></span></div>
          <div id="faceList">
${priceRows(data.facial, data)}
          </div>
        </div>
        <div class="price-col">
          <div class="group-head"><span>${esc(s.groupBody)}</span><span class="group-rule"></span></div>
          <div id="bodyList">
${priceRows(data.body, data)}
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section class="contact" id="contact">
      <div class="contact-info">
        <p class="eyebrow">${esc(s.contactEyebrow)}</p>
        <h2>${esc(s.contactH2)}</h2>
        <p class="contact-sub">${esc(s.contactSub)}</p>

        <div class="info-block">
          <p class="info-label">${esc(s.lblAddress)}</p>
          <p class="info-value" id="infoAddress">${esc(CONTENT.contact.address)}</p>
        </div>
        <div class="info-block">
          <p class="info-label">${esc(s.lblPhone)}</p>
          <a class="info-value" href="tel:${PHONE_HREF}">${PHONE}</a>
        </div>
        <div class="info-block">
          <p class="info-label">${esc(s.lblEmail)}</p>
          <a class="info-value" href="mailto:${EMAIL}">${EMAIL}</a>
        </div>
      </div>

      <form class="form-card" id="bookingForm" novalidate>
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none" />
        <input class="field" type="text" name="name" placeholder="${attr(s.fName)}" required />
        <input class="field" type="text" name="contact" placeholder="${attr(s.fContact)}" required />
        <select class="field" name="treatment" id="treatmentSelect">
${treatmentOptions(data)}
        </select>
        <textarea class="field" name="message" rows="4" placeholder="${attr(s.fMessage)}"></textarea>
        <button type="submit" class="btn-solid">${esc(s.fSend)}</button>
        <p class="form-thanks" id="formThanks" hidden></p>
      </form>
    </section>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="${up}assets/signature.png" alt="Ludmila Yemelianova" />
      <p class="footer-copy">${esc(s.footerCopy)}</p>
    </div>
    <div class="footer-right">
      <a href="#top">${esc(s.crumbHome)}</a>
      <a href="${hub}">${esc(s.navServices)}</a>
      <a href="#prices">${esc(s.navPrices)}</a>
      <a href="#contact">${esc(s.navContact)}</a>
      <a href="${up}privacy.html">${esc(s.privacyLink)}</a>
${homeLangSwitch(lang, 'footer-lang')}
    </div>
  </footer>

  <!-- ============ COOKIE BANNER ============ -->
  <div class="cookie-banner" id="cookieBanner" hidden>
    <p class="cookie-text">${esc(s.cookieText)}</p>
    <div class="cookie-actions">
      <a href="${up}privacy.html" class="cookie-link">${esc(s.cookieMore)}</a>
      <button type="button" class="cookie-btn cookie-btn--decline" id="cookieDecline">${esc(s.cookieDecline)}</button>
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept">${esc(s.cookieAccept)}</button>
    </div>
  </div>

  <script src="${up}content.js"></script>
  <script src="${up}script.js"></script>
</body>
</html>
`;
}

for (const lang of LANGS) {
  const file = lang === 'cs'
    ? path.join(ROOT, 'index.html')
    : path.join(ROOT, lang, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, renderHome(lang), 'utf8');
  console.log('  wrote  ' + (lang === 'cs' ? 'index.html' : lang + '/index.html'));
}
console.log('\n' + LANGS.length + ' homepages.');
