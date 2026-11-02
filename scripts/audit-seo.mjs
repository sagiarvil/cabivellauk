import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Read all actual static html files in dist
function getAllHtmlRoutes(dir, base = '') {
  let routes = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const rel = path.join(base, f);
    if (fs.statSync(full).isDirectory()) {
      routes = routes.concat(getAllHtmlRoutes(full, rel));
    } else if (f === 'index.html') {
      const route = '/' + base.replace(/\\/g, '/');
      routes.push(route.endsWith('/') ? route : route + '/');
    }
  }
  return routes;
}

const routes = getAllHtmlRoutes(DIST_DIR).filter(r => r !== '/');
routes.unshift('/');

console.log(`[SEO-AUDIT] Commencing verification of ${routes.length} static routes...`);

let failed = false;

for (const route of routes) {
  const filePath = route === '/' 
    ? path.join(DIST_DIR, 'index.html') 
    : path.join(DIST_DIR, route.replace(/^\//, ''), 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static HTML for route: ${route} (checked: ${filePath})`);
    failed = true;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // 1. Verify single H1 tag
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    console.error(`❌ Route ${route} is missing an <h1> tag.`);
    failed = true;
  } else if (h1Matches.length > 1) {
    console.error(`❌ Route ${route} has multiple (${h1Matches.length}) <h1> tags.`);
    failed = true;
  }

  // 2. Verify Canonical Link
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    console.error(`❌ Route ${route} is missing a canonical link.`);
    failed = true;
  }

  // 3. Verify Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ Route ${route} has an empty or missing <title>.`);
    failed = true;
  }

  // 4. Verify Meta Description
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ Route ${route} has an empty or missing meta description.`);
    failed = true;
  }
}

if (failed) {
  console.error('\n🚨 SEO AUDIT FAILED: One or more routes failed validation.');
  process.exit(1);
} else {
  console.log(`\n✅ SEO AUDIT PASSED: All ${routes.length} routes verified with perfect structure.`);
}
