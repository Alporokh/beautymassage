/* Regenerates llms.txt from content.js (prices) and the page data, listing all
   three language URLs. Run: node tools/render-llms.js */
const fs = require('fs');
const path = require('path');
const R = require('./render.js');
const { listed } = require('./render-hub.js');

const ROOT = path.join(__dirname, '..');
const { ORIGIN, pageUrl, hubUrl, allPages } = R;

const w = {};
new Function('window', fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'))(w);
const EN = w.CONTENT.en;

const item = t => `- ${t.name} (${t.min} min, ${t.price} CZK)`;

const lines = listed.map(slug => {
  const en = allPages[slug].strings.en;
  return `- [${en.crumb}](${pageUrl('cs', slug)}): ${en.lead}\n` +
         `  English: ${pageUrl('en', slug)} — Russian: ${pageUrl('ru', slug)}`;
}).join('\n');

const out = `# Massage 4 Beauty

> Facial and body massage studio in Prague run by Ludmila Yemelianova, a certified massage therapist with over ten years of experience. Treatments include lifting, myofascial, lymphatic drainage and relaxation massage for both face and body.

Massage 4 Beauty (Beauty Massage) is a home-based massage studio located in Praha 4 – Nusle. Treatment pages are published in Czech, English and Russian, each language on its own URL and linked by hreflang. Czech is canonical.

## Business info

- Address: Děkanská vinice I 819/16, Praha 4 – Nusle, Czech Republic
- Phone: +420 721 761 411
- Email: beautymassage.prague@gmail.com

## Pages

- [Home](${ORIGIN}/): Services overview, about the therapist, full price list and booking form. Available in all three languages via an on-page switch.
- [All massages](${hubUrl('cs')}): Index of every treatment, grouped into facial massage, body massage and gift vouchers. English: ${hubUrl('en')} — Russian: ${hubUrl('ru')}
- [Privacy Policy](${ORIGIN}/privacy.html): Data processing, analytics and cookie policy.

## Treatment pages

Each page covers one treatment in depth — what it is, how the session runs, its effects, who it suits, contraindications, price and FAQs.

${lines}

## Services (Face)

${EN.facial.map(item).join('\n')}

## Services (Body)

${EN.body.map(item).join('\n')}

## Notes

- Prices and treatment names are maintained in content.js and may change; treat the numbers above as indicative and point users to the live price list for current pricing.
- Bookings are made via the contact form on the homepage, by phone, or by email.
- The studio serves Praha 4 and the surrounding districts of Nusle, Pankrác and Vyšehrad.
`;

fs.writeFileSync(path.join(ROOT, 'llms.txt'), out, 'utf8');
console.log('  wrote llms.txt — ' + listed.length + ' treatments x 3 languages, ' +
  (EN.facial.length + EN.body.length) + ' price-list entries');
