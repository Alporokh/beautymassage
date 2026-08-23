/* Validates every generated page across all three languages.
   Run: node tools/check.js */
const fs = require('fs');
const path = require('path');
const R = require('./render.js');
const { listed } = require('./render-hub.js');

const ROOT = path.join(__dirname, '..');
const { LANGS, ORIGIN, pageUrl, hubUrl } = R;

let fail = 0;
const bad = m => { console.log('   FAIL  ' + m); fail++; };

function pageFile(lang, slug) {
  return lang === 'cs'
    ? path.join(ROOT, 'masaze', slug, 'index.html')
    : path.join(ROOT, lang, 'masaze', slug, 'index.html');
}
function hubFile(lang) {
  return lang === 'cs'
    ? path.join(ROOT, 'sluzby', 'index.html')
    : path.join(ROOT, lang, 'sluzby', 'index.html');
}

function checkCommon(file, lang, expectCanonical, label) {
  if (!fs.existsSync(file)) { bad(label + ': file missing'); return null; }
  const html = fs.readFileSync(file, 'utf8');

  // language declared correctly
  const decl = (html.match(/<html lang="([^"]+)"/) || [])[1];
  if (decl !== lang) bad(label + ': <html lang> is "' + decl + '", expected "' + lang + '"');
  if (!html.includes('data-lang-fixed="' + lang + '"')) bad(label + ': missing data-lang-fixed');

  // canonical + full hreflang set incl. x-default
  const canon = (html.match(/rel="canonical" href="([^"]+)"/) || [])[1];
  if (canon !== expectCanonical) bad(label + ': canonical is ' + canon + ', expected ' + expectCanonical);
  for (const l of LANGS) {
    if (!html.includes(`hreflang="${l}"`)) bad(label + ': missing hreflang=' + l);
  }
  if (!html.includes('hreflang="x-default"')) bad(label + ': missing x-default');

  // the tag must be present and detectable
  if (!html.includes('script async src="https://www.googletagmanager.com/gtag/js?id=G-XW10FL0HCW"'))
    bad(label + ': Google tag loader missing');

  // no leftover JS-i18n plumbing
  if (html.includes('data-i18n')) bad(label + ': still carries data-i18n (text should be baked)');

  // JSON-LD
  const ldm = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ldm) { bad(label + ': no JSON-LD'); return html; }
  let graph;
  try { graph = JSON.parse(ldm[1]); } catch (e) { bad(label + ': JSON-LD parse: ' + e.message); return html; }
  for (const node of graph['@graph']) {
    if (node.inLanguage && node.inLanguage !== lang) bad(label + ': JSON-LD inLanguage=' + node.inLanguage);
  }

  // one h1
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad(label + ': h1 count = ' + h1);

  // local refs resolve (comments stripped: they hold the photo example)
  const live = html.replace(/<!--[\s\S]*?-->/g, '');
  for (const m of live.matchAll(/(?:src|href)="(\.\.\/[^"]+)"/g)) {
    if (!fs.existsSync(path.join(path.dirname(file), m[1]))) bad(label + ': broken ref ' + m[1]);
  }
  for (const m of live.matchAll(/href="(\/[^"#]*)"/g)) {
    const p = m[1] === '/' ? 'index.html' : m[1].replace(/\/$/, '') + '/index.html';
    const target = path.join(ROOT, p.startsWith('/') ? p.slice(1) : p);
    if (!fs.existsSync(target)) bad(label + ': broken internal link ' + m[1]);
  }
  return html;
}

console.log(listed.length + ' treatments x ' + LANGS.length + ' languages + ' + LANGS.length + ' hubs\n');

for (const slug of listed) {
  const marks = [];
  for (const lang of LANGS) {
    const before = fail;
    const html = checkCommon(pageFile(lang, slug), lang, pageUrl(lang, slug), slug + '/' + lang);
    if (html) {
      // FAQ answers must appear verbatim in the visible copy
      const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
      const faq = graph['@graph'].find(n => n['@type'] === 'FAQPage');
      const text = html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ');
      for (const q of faq.mainEntity) {
        if (!text.includes(q.acceptedAnswer.text.replace(/\s+/g, ' ')))
          bad(slug + '/' + lang + ': FAQ answer not visible — "' + q.name + '"');
      }
    }
    marks.push(lang + (fail === before ? ' ok' : ' FAIL'));
  }
  console.log('  ' + slug.padEnd(30) + marks.join('  '));
}

console.log('');
for (const lang of LANGS) {
  const before = fail;
  checkCommon(hubFile(lang), lang, hubUrl(lang), 'sluzby/' + lang);
  console.log('  ' + ('sluzby (' + lang + ')').padEnd(30) + (fail === before ? 'ok' : 'FAIL'));
}

console.log('\n' + (fail ? fail + ' FAILURES' : 'all checks passed'));
process.exit(fail ? 1 : 0);
