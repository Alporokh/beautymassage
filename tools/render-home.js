/* ============================================================
   Homepage generator - one page per language:

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
const { contactUrl, MAP_DIRECTIONS, LANGS, ORIGIN, hubUrl, homeUrl, rel, GA, LANG_LABEL, OG_LOCALE, esc, attr, voucherCard, servicesMenu, stamp, MENU_LABEL } = R;

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
    title: 'Masáže Praha 4 Nusle - obličej i tělo | Massage 4 Beauty',
    desc: 'Ruční masáže obličeje a těla v Praze 4 - Nusle. Liftingová, myofasciální a lymfatická masáž, masáže zad i relaxace. Ceník a online rezervace.'
  },
  en: {
    title: 'Massage Prague 4 - facial and body massage | Massage 4 Beauty',
    desc: 'Massage in Prague 4 (Praha 4, Nusle). Facial massage, lymphatic drainage, deep tissue, back and relaxing massage. Price list and online booking.'
  },
  ru: {
    title: 'Массаж Прага 4 - массаж лица и тела | Massage 4 Beauty',
    desc: 'Массаж в Праге 4 (Нусле). Массаж лица, лимфодренажный массаж, массаж спины и расслабляющий массаж. Прайс-лист и запись онлайн.'
  }
};

// Turnstile: Cloudflare's CAPTCHA. No cookies and no cross-site tracking, so
// unlike reCAPTCHA it needs no consent and can run for every visitor.
//
// Site Key for the beautymassage.cz widget (public by design). Its Secret Key
// must be set as TURNSTILE_SECRET wherever functions/api/inquiry.js runs, and
// both must come from the same widget or every submission is rejected.
const TURNSTILE_SITE_KEY = '0x4AAAAAAE17s4jikfB9lNDQ';

const upTo = lang => (lang === 'cs' ? '' : '../');
const voucherPageUrl = lang => (lang === 'cs'
  ? ORIGIN + '/masaze/darkovy-poukaz/'
  : ORIGIN + '/' + lang + '/masaze/darkovy-poukaz/');

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
  const s = data.strings;
  return items.map(it => `          <div class="price-row">
            <div style="flex:1">
              <div class="price-name">${esc(it.name)}</div>
              <div class="price-desc">${esc(it.desc)}</div>
            </div>
            <div class="price-meta">
              <div class="price-val">${esc(data.currency(it.price))}</div>${it.min ? `
              <div class="price-min">${it.min} ${esc(data.minLabel)}</div>` : ''}
              <a class="price-order" href="?treatment=${encodeURIComponent(it.name)}#contact"
                 data-treatment="${attr(it.name)}"
                 aria-label="${attr(s.orderAria + ' ' + it.name)}">${esc(s.orderCta)}</a>
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
${group(s.groupBody, data.body)}
            <option value="${attr(s.fVoucherOption)}">${esc(s.fVoucherOption)}</option>`;
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
      priceRange: '250–1 600 CZK',
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
      founder: { '@type': 'Person', name: 'Liudmyla Yemelianova' },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '17:00' }
      ],
      hasMap: 'https://maps.google.com/maps?cid=10992356462659792327',
      sameAs: ['https://maps.google.com/maps?cid=10992356462659792327']
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
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" sizes="32x32" href="${up}assets/favicon-32.png" />
  <link rel="apple-touch-icon" href="${up}assets/apple-touch-icon.png" />
  <link rel="manifest" href="${up}site.webmanifest" />

  <!-- Fonts -->
  <link rel="stylesheet" href="${up}fonts.css" />

  <link rel="stylesheet" href="${up}styles.css" />

${ldBlock}
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a href="${rel(url)}" class="brand" aria-label="Massage 4 Beauty">
      <img src="${up}assets/logo.png" alt="Massage 4 Beauty" width="806" height="146" />
    </a>

    <nav class="main-nav" id="main-nav" aria-label="Main">
      <a href="#top">${esc(s.crumbHome)}</a>
${servicesMenu(lang)}
      <a href="#prices">${esc(s.navPrices)}</a>
      <a href="#about">${esc(s.navAbout)}</a>
      <a href="#contact">${esc(s.navContact)}</a>
    </nav>

    <div class="header-right">
${homeLangSwitch(lang)}
      <span class="v-line" aria-hidden="true"></span>
      <a href="tel:${PHONE_HREF}" class="header-phone">${PHONE}</a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="${MENU_LABEL[lang]}"><span></span><span></span><span></span></button>
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
        <img src="${up}assets/signature.svg" alt="" class="about-sig" width="714" height="213" />
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

    <!-- ============ GIFT VOUCHER ============ -->
    <section class="voucher-band" id="poukaz">
      <div class="voucher-band-text">
        <p class="eyebrow">${esc(s.voucherEyebrow)}</p>
        <h2>${esc(s.voucherHomeH2)}</h2>
        <p>${esc(s.voucherHomeText)}</p>
        <div class="voucher-actions">
          <a href="?treatment=voucher#contact" class="btn-solid">${esc(s.voucherCta)}</a>
          <a href="${rel(voucherPageUrl(lang))}" class="link-underline">${esc(s.voucherMore)}</a>
        </div>
      </div>
      <div class="voucher-band-card">
${voucherCard(lang)}
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
        <div class="info-block">
          <p class="info-label">${esc(s.visitHoursLbl)}</p>
          <p class="info-value">${esc(s.visitHours)}</p>
        </div>
        <div class="visit-actions">
          <a href="${attr(MAP_DIRECTIONS)}" class="btn-solid" target="_blank" rel="noopener">${esc(s.visitNav)}</a>
          <a href="${rel(contactUrl(lang))}" class="visit-more">${esc(s.visitMore)}</a>
        </div>
      </div>

      <form class="form-card" id="bookingForm" novalidate>
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none" />
        <input class="field" type="text" name="name" placeholder="${attr(s.fName)}" required />
        <input class="field" type="tel" name="phone" placeholder="${attr(s.fPhone)}" autocomplete="tel" inputmode="tel"
               data-invalid="${attr(s.fPhoneInvalid)}" required />
        <input class="field" type="email" name="email" placeholder="${attr(s.fEmail)}" autocomplete="email"
               data-invalid="${attr(s.fEmailInvalid)}" required />
        <select class="field" name="treatment" id="treatmentSelect">
${treatmentOptions(data)}
        </select>
        <textarea class="field" name="message" rows="4" placeholder="${attr(s.fMessage)}"></textarea>
        <div class="cf-turnstile" data-sitekey="${TURNSTILE_SITE_KEY}" data-language="${lang}" data-theme="light"></div>
        <button type="submit" class="btn-solid">${esc(s.fSend)}</button>
        <p class="form-thanks" id="formThanks" hidden></p>
      </form>
    </section>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="${up}assets/logo-light.png" alt="Massage 4 Beauty" width="806" height="146" loading="lazy" />
      <p class="footer-copy">${esc(s.footerCopy)}</p>
      <p class="footer-credit">Website developed by <a href="https://imarket2web.com" target="_blank" rel="noopener">imarket2web</a></p>
    </div>
    <div class="footer-right">
      <a href="#top">${esc(s.crumbHome)}</a>
      <a href="${hub}">${esc(s.navServices)}</a>
      <a href="#prices">${esc(s.navPrices)}</a>
      <a href="#contact">${esc(s.navContact)}</a>
      <a href="${rel(contactUrl(lang))}">${esc(s.visitMore)}</a>
      <a href="${up}privacy">${esc(s.privacyLink)}</a>
${homeLangSwitch(lang, 'footer-lang')}
    </div>
  </footer>

  <!-- ============ COOKIE BANNER ============ -->
  <div class="cookie-banner" id="cookieBanner" hidden>
    <p class="cookie-text">${esc(s.cookieText)}</p>
    <div class="cookie-actions">
      <a href="${up}privacy" class="cookie-link">${esc(s.cookieMore)}</a>
      <button type="button" class="cookie-btn cookie-btn--decline" id="cookieDecline">${esc(s.cookieDecline)}</button>
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept">${esc(s.cookieAccept)}</button>
    </div>
  </div>

  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <script src="${up}content.js"></script>
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
  const file = lang === 'cs'
    ? path.join(ROOT, 'index.html')
    : path.join(ROOT, lang, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, stamp(renderHome(lang)), 'utf8');
  console.log('  wrote  ' + (lang === 'cs' ? 'index.html' : lang + '/index.html'));
}
console.log('\n' + LANGS.length + ' homepages.');
