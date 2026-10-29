import { cp, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));
const htmlEscape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const jsonEscape = text => JSON.stringify(text).slice(1, -1);

// Keep the captured markup and its hydration payload in sync. Only exact text
// tokens are changed; words such as "X" must never touch SVG paths or code.
export function adaptContent(source, content) {
  for (const [before, after] of Object.entries(content).sort((a, b) => b[0].length - a[0].length)) {
    if (before.length > 48 || (before.includes(" ") && before.length > 10)) {
      source = source.replaceAll(before, after);
      source = source.replaceAll(htmlEscape(before), htmlEscape(after));
      source = source.replaceAll(jsonEscape(before), jsonEscape(after));
    } else {
      source = source.replaceAll(`>${htmlEscape(before)}<`, `>${htmlEscape(after)}<`);
      source = source.replaceAll(`>${before}<`, `>${htmlEscape(after)}<`);
      source = source.replaceAll(`\\"${jsonEscape(before)}\\"`, `\\"${jsonEscape(after)}\\"`);
      source = source.replaceAll(JSON.stringify(before), JSON.stringify(after));
    }
  }
  return source;
}

export function localImages(source) {
  return source.replace(/\/_next\/image\?url=([^&"\\\s<>]+)(?:(?:&amp;|&)w=\d+)(?:(?:&amp;|&)q=\d+)(?:(?:&amp;|&)dpl=[\w-]+)?/g,
    (_, encoded) => decodeURIComponent(encoded));
}

export async function build() {
  const dist = path.join(root, 'dist');
  await mkdir(dist, { recursive: true });
  await cp(path.join(root, 'public'), dist, { recursive: true });
  const content = JSON.parse(await readFile(path.join(root, 'src/content.json'), 'utf8'));
  let page = adaptContent(await readFile(path.join(root, 'src/template.html'), 'utf8'), content);
  page = localImages(page);
  // Preserve the original illustration emblem; adapt only textual brand nodes.
  page = page.replaceAll('>Operate<', '>NutriMesh<').replaceAll('>OPERATE<', '>NUTRIMESH<')
    .replaceAll('\\"Operate\\"', '\\"NutriMesh\\"').replaceAll('\\"OPERATE\\"', '\\"NUTRIMESH\\"');
  // Use the real NutriMesh application for all acquisition links, including RSC.
  page = page.replaceAll('"/sign-up"', '"https://nutri-mesh-flow.base44.app/"')
    .replaceAll('\\"/sign-up\\"', '\\"https://nutri-mesh-flow.base44.app/\\"');
  const links = { '/privacy': '#problem', '/terms': '#catalogue', 'https://www.linkedin.com/company/operatehq': '#stories', 'https://linkedin.com/company/operatehq': '#stories', 'https://x.com/operate_gtm': '#faq' };
  for (const [before, after] of Object.entries(links)) page = page.replaceAll(before, after);
  page = page.replaceAll('https://operate.so/operate-og.png', '/operate-og.png');
  page = page.replaceAll('https://operate.so', 'https://nutrimesh-xi.vercel.app');
  page = page.replaceAll('@operate_gtm', '').replaceAll('1986123781476401152', '');
  page = page.replaceAll('/favicon.ico', '/favicon.svg');
  page = page.replace('</head>', '<link rel="stylesheet" href="/enhancements.css"/></head>');
  page = page.replace('</body>', '<script src="/enhancements.js" defer></script></body>');
  await writeFile(path.join(dist, 'index.html'), page);

  const chunks = path.join(dist, '_next/static/immutable/chunks');
  for (const filename of await readdir(chunks)) {
    if (!filename.endsWith('.js')) continue;
    const file = path.join(chunks, filename);
    let js = adaptContent(await readFile(file, 'utf8'), content);
    // Static files already hold the full resolution originals; no Next server required.
    js = js.replace('return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${u}${t.startsWith("/")&&l?`&dpl=${l}`:""}`', 'return t');
    // Reference analytics must not send visitor events to Operate's account.
    js = js.replace(/s\.default\.init\("phc_[^;]+?\}\);/, 'void 0;');
    js = js.replaceAll('href:"/sign-up"', 'href:"https://nutri-mesh-flow.base44.app/"');
    await writeFile(file, js);
  }
  await cp(path.join(root, 'src/details.html'), path.join(dist, 'details.html'));
  console.log(`Built NutriMesh: ${Object.keys(content).length} content mappings; local reference assets; dist/ ready.`);
  return dist;
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await build();
