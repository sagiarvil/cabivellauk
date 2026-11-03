import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Read all actual static html files in dist
function getAllHtmlRoutes(dir, base = '') {
  let routes = [];
  if (!fs.existsSync(dir)) return routes;
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

let mainRoutesFailed = false;

for (const route of routes) {
  const filePath = route === '/' 
    ? path.join(DIST_DIR, 'index.html') 
    : path.join(DIST_DIR, route.replace(/^\//, ''), 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static HTML for route: ${route}`);
    mainRoutesFailed = true;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Verify critical pages
  const isMaterialsSupply = route.startsWith('/materials-supply/');
  
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    if (!isMaterialsSupply) {
      console.error(`❌ Route ${route} is missing an <h1> tag.`);
      mainRoutesFailed = true;
    }
  }

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    if (!isMaterialsSupply) {
      console.error(`❌ Route ${route} has an empty or missing <title>.`);
      mainRoutesFailed = true;
    }
  }

  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  if (!canonicalMatch) {
    if (!isMaterialsSupply) {
      console.error(`❌ Route ${route} is missing a canonical link.`);
      mainRoutesFailed = true;
    }
  }
}

if (mainRoutesFailed) {
  console.error('🚨 SEO AUDIT FAILED for main website routes.');
  process.exit(1);
} else {
  console.log(`✅ SEO AUDIT PASSED: Core routes validated successfully.`);
  process.exit(0);
}
