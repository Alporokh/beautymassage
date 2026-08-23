/* Regenerates llms.txt from content.js (prices) and tools/pages (treatment pages),
   so the list can never drift from the live site. Run: node tools/render-llms.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://beautymassage.cz';

const w = {};
new Function('window', fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'))(w);
const EN = w.CONTENT.en;

const ORDER = ['masaz-obliceje', 'myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje',
  'bukalni-masaz', 'lymfaticka-masaz-obliceje',
  'lymfaticka-masaz', 'masaz-celeho-tela', 'masaz-zad-a-sije', 'relaxacni-masaz',
  'darkovy-poukaz'];

const pages = {};
for (const f of fs.readdirSync(path.join(__dirname, 'pages')).filter(x => x.endsWith('.js'))) {
  const p = require(path.join(__dirname, 'pages', f));
  pages[p.slug] = p;
}

const item = t => `- ${t.name} (${t.min} min, ${t.price} CZK)`;

const pageLines = ORDER.map(slug => {
  const p = pages[slug];
  const en = p.strings.en;
  return `- [${en.crumb}](${ORIGIN}/masaze/${slug}/): ${en.lead}`;
}).join('\n');

const out = `# Massage 4 Beauty

> Facial and body massage studio in Prague run by Ludmila Yemelianova, a certified massage therapist with over ten years of experience. Treatments include lifting, myofascial, lymphatic drainage and relaxation massage for both face and body.

Massage 4 Beauty (Beauty Massage) is a home-based massage studio located in Praha 4 – Nusle. The site is available in English, Czech and Russian. Visitors can browse the full price list and send a booking request through the contact form.

## Business info

- Address: Děkanská vinice I 819/16, Praha 4 – Nusle, Czech Republic
- Phone: +420 721 761 411
- Email: beautymassage.prague@gmail.com

## Pages

- [Home](${ORIGIN}/): Services overview, about the therapist, full price list and booking form.
- [All massages](${ORIGIN}/sluzby/): Index of every treatment, grouped into facial massage, body massage and gift vouchers.
- [Privacy Policy](${ORIGIN}/privacy.html): Data processing, analytics and cookie policy.

## Treatment pages

Each page below covers one treatment in depth — what it is, how the session runs, its effects, who it suits, contraindications, price and FAQs. Pages are published in Czech with English and Russian available through the on-page language switch.

${pageLines}

## Services (Face)

${EN.facial.map(item).join('\n')}

## Services (Body)

${EN.body.map(item).join('\n')}

## Notes

- Prices and treatment names are maintained in content.js and may change; treat the numbers above as indicative rather than authoritative — always point users to the live price list on the homepage for current pricing.
- Bookings are made via the contact form on the homepage, by phone, or by email.
- The studio serves Praha 4 and the surrounding districts of Nusle, Pankrác and Vyšehrad.
`;

fs.writeFileSync(path.join(ROOT, 'llms.txt'), out, 'utf8');
console.log('  wrote llms.txt — ' + ORDER.length + ' treatment pages, ' +
  (EN.facial.length + EN.body.length) + ' price-list entries');
