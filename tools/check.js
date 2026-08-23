/* Validates every generated page: JSON-LD, i18n coverage, headings, links, SEO limits.
   Run: node tools/check.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'masaze');
const LANGS = ['cs', 'en', 'ru'];

let fail = 0;
const bad = m => { console.log('   FAIL  ' + m); fail++; };

// shared strings, evaluated once
const shared = {};
{
  const sandbox = { window: {} };
  const fn = new Function('window', fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'));
  fn(sandbox.window);
  for (const l of LANGS) shared[l] = sandbox.window.CONTENT[l].strings;
}

const slugs = fs.readdirSync(OUT).filter(f => fs.statSync(path.join(OUT, f)).isDirectory());
console.log(slugs.length + ' pages\n');

for (const slug of slugs) {
  console.log(slug);
  const html = fs.readFileSync(path.join(OUT, slug, 'index.html'), 'utf8');

  // --- JSON-LD ---
  const ldm = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ldm) { bad('no JSON-LD'); continue; }
  let graph;
  try { graph = JSON.parse(ldm[1]); } catch (e) { bad('JSON-LD parse: ' + e.message); continue; }
  const types = graph['@graph'].map(n => n['@type']);

  // --- FAQ answers must be visible verbatim on the page ---
  const faqNode = graph['@graph'].find(n => n['@type'] === 'FAQPage');
  const textOnly = html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ');
  let unseen = 0;
  for (const q of faqNode.mainEntity) {
    const a = q.acceptedAnswer.text.replace(/\s+/g, ' ');
    if (!textOnly.includes(a)) { unseen++; bad('FAQ answer not visible on page: "' + q.name + '"'); }
  }

  // --- i18n coverage ---
  const keys = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]))];
  const pageStrings = {};
  {
    const sandbox = { window: {} };
    const fn = new Function('window', fs.readFileSync(path.join(OUT, slug, 'page.js'), 'utf8'));
    fn(sandbox.window);
    for (const l of LANGS) pageStrings[l] = sandbox.window.PAGE_CONTENT[l];
  }
  for (const l of LANGS) {
    const merged = Object.assign({}, shared[l], pageStrings[l]);
    const missing = keys.filter(k => merged[k] == null);
    if (missing.length) bad(l + ' missing keys: ' + missing.join(', '));
  }
  const parity = LANGS.map(l => Object.keys(pageStrings[l]).sort().join('|'));
  if (new Set(parity).size !== 1) bad('PAGE_CONTENT key sets differ across languages');

  // --- headings ---
  const hs = [...html.matchAll(/<(h[123])[\s>]/g)].map(m => m[1]);
  if (hs.filter(h => h === 'h1').length !== 1) bad('h1 count = ' + hs.filter(h => h === 'h1').length);
  if (hs[0] !== 'h1') bad('first heading is ' + hs[0] + ', not h1');

  // --- local links resolve ---
  // strip HTML comments first — they hold the example <img> for the photo swap
  const live = html.replace(/<!--[\s\S]*?-->/g, '');
  for (const m of live.matchAll(/(?:src|href)="(\.\.?\/[^"]+|[a-z0-9-]+\.js)"/g)) {
    const target = path.join(OUT, slug, m[1]);
    if (!fs.existsSync(target)) bad('broken local ref: ' + m[1]);
  }
  for (const m of live.matchAll(/href="\/masaze\/([a-z0-9-]+)\/"/g)) {
    if (!slugs.includes(m[1])) bad('related link to missing page: ' + m[1]);
  }

  // --- SEO limits ---
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  const desc = html.match(/name="description" content="(.*?)"/)[1];
  const canon = html.match(/rel="canonical" href="(.*?)"/)[1];
  if (canon !== 'https://beautymassage.cz/masaze/' + slug + '/') bad('canonical mismatch: ' + canon);
  const warn = [];
  if (title.length > 65) warn.push('title ' + title.length + ' chars');
  if (desc.length > 160) warn.push('desc ' + desc.length + ' chars');

  console.log('   schema: ' + types.join(' + ') + '  |  FAQ ' + faqNode.mainEntity.length +
    ' (visible: ' + (faqNode.mainEntity.length - unseen) + ')  |  i18n ' + keys.length + ' keys x3' +
    (warn.length ? '  |  note: ' + warn.join(', ') : ''));
}

console.log('\n' + (fail ? fail + ' FAILURES' : 'all checks passed'));
process.exit(fail ? 1 : 0);
