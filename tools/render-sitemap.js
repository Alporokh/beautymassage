/* Regenerates sitemap.xml from the page data. Run: node tools/render-sitemap.js
   Pass a date as argv[2] to override lastmod (defaults to today). */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://beautymassage.cz';
const today = process.argv[2] || new Date().toISOString().slice(0, 10);

const pages = fs.readdirSync(path.join(__dirname, 'pages'))
  .filter(f => f.endsWith('.js'))
  .map(f => require(path.join(__dirname, 'pages', f)));

// hub order, so the sitemap reads in the same order as the site
const ORDER = ['masaz-obliceje', 'myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje',
  'bukalni-masaz', 'lymfaticka-masaz-obliceje',
  'lymfaticka-masaz', 'masaz-celeho-tela', 'masaz-zad-a-sije', 'relaxacni-masaz',
  'darkovy-poukaz'];

for (const p of pages) if (!ORDER.includes(p.slug)) throw new Error('sitemap order missing: ' + p.slug);

const urls = [
  { loc: ORIGIN + '/', freq: 'monthly', pri: '1.0' },
  { loc: ORIGIN + '/sluzby/', freq: 'monthly', pri: '0.9' },
  ...ORDER.map(s => ({ loc: ORIGIN + '/masaze/' + s + '/', freq: 'monthly', pri: '0.8' })),
  { loc: ORIGIN + '/privacy.html', freq: 'yearly', pri: '0.3' }
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
console.log('  wrote sitemap.xml — ' + urls.length + ' URLs, lastmod ' + today);
