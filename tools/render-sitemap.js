/* Regenerates sitemap.xml with all three language trees and hreflang
   alternates on every entry. Run: node tools/render-sitemap.js [YYYY-MM-DD] */
const fs = require('fs');
const path = require('path');
const R = require('./render.js');
const { listed } = require('./render-hub.js');

const ROOT = path.join(__dirname, '..');
const { LANGS, ORIGIN, pageUrl, hubUrl, homeUrl } = R;
const today = process.argv[2] || new Date().toISOString().slice(0, 10);

// each entry carries the full alternate set, as Google requires
function entry(urls, freq, pri) {
  return LANGS.map(l => `  <url>
    <loc>${urls[l]}</loc>
${LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a}" href="${urls[a]}" />`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urls.cs}" />
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${pri}</priority>
  </url>`).join('\n');
}

const byLang = fn => Object.fromEntries(LANGS.map(l => [l, fn(l)]));

const blocks = [
  entry(byLang(homeUrl), 'monthly', '1.0'),
  entry(byLang(hubUrl), 'monthly', '0.9'),
  ...listed.map(s => entry(byLang(l => pageUrl(l, s)), 'monthly', '0.8')),
  `  <url>
    <loc>${ORIGIN}/privacy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
console.log('  wrote sitemap.xml — ' + (xml.match(/<loc>/g) || []).length + ' URLs, lastmod ' + today);
