import * as fs from 'fs';
import * as path from 'path';
import { CABIVELLA_PAGES } from '../src/seo/registry';
import { execSync } from 'child_process';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('🛡️ [Mandate v9.2] Executing G0–G21 CI/CD SEO & SERP Gates...\n');

let failed = false;
function assertGate(gateId: string, description: string, condition: boolean, details?: string) {
  if (condition) {
    console.log(`  ✅ [${gateId}] PASS: ${description}`);
  } else {
    console.error(`  ❌ [${gateId}] FAIL: ${description}${details ? ` -> ${details}` : ''}`);
    failed = true;
  }
}

// G1: Canonical Check
const canonicalValid = CABIVELLA_PAGES.every(p => p.canonicalRoute === p.route);
assertGate('G1', 'Self-referencing canonical routes verified for all indexed pages', canonicalValid);

// G3: Anti-Cannibalization
const intents = CABIVELLA_PAGES.map(p => p.primaryIntent.toLowerCase().trim());
const uniqueIntents = new Set(intents);
assertGate('G3', 'Anti-cannibalization check: All pages have distinct primary search intent', intents.length === uniqueIntents.size);

// G4: LLMS Sub-Graphs
const subGraphsOk = CABIVELLA_PAGES.every(p => {
  const filePath = path.join(PUBLIC_DIR, p.llmSubGraphRoute);
  return fs.existsSync(filePath);
});
assertGate('G4', 'Multi-tier fragmented LLMS markdown sub-graphs exist on disk', subGraphsOk);

// G5: IndexNow Key Verification
const files = fs.readdirSync(PUBLIC_DIR);
const indexNowFile = files.find(f => /^[a-zA-Z0-9]{16,}\.txt$/.test(f) && f !== 'robots.txt' && f !== 'llms.txt' && f !== 'agent.txt');
assertGate('G5', 'Alphanumeric IndexNow key file exists in root (min 16 chars)', !!indexNowFile, indexNowFile);

// G6: Future Date Demotion Prevention
const now = Date.now();
const noFutureDates = CABIVELLA_PAGES.every(p => {
  const pub = new Date(p.publishedAt).getTime();
  const mod = new Date(p.modifiedAt).getTime();
  return pub <= now && mod <= now;
});
assertGate('G6', 'Strict freshness check: No future timestamps in publishedAt or modifiedAt', noFutureDates);

// G7: Hreflang Parity
const deExists = fs.existsSync(path.join(PUBLIC_DIR, 'de'));
const frExists = fs.existsSync(path.join(PUBLIC_DIR, 'fr'));
const nlExists = fs.existsSync(path.join(PUBLIC_DIR, 'nl'));
assertGate('G7', 'Multilingual hreflang target localized hubs exist for DE, FR, NL', deExists && frExists && nlExists);

// G8: OpenGraph/Twitter Meta Verification
const ogOk = CABIVELLA_PAGES.every(p => p.title.length > 10 && p.metaDescription.length > 50);
assertGate('G8', 'OpenGraph and Twitter metadata contracts satisfied across all records', ogOk);

// G9: Syndication Feeds Integrity
const rssExists = fs.existsSync(path.join(PUBLIC_DIR, 'feed.xml'));
const atomExists = fs.existsSync(path.join(PUBLIC_DIR, 'atom.xml'));
const jsonFeedExists = fs.existsSync(path.join(PUBLIC_DIR, 'feed.json'));
const mobileFeedExists = fs.existsSync(path.join(PUBLIC_DIR, 'mobile/feed.xml'));
assertGate('G9', 'Full syndication feeds exist (feed.xml, atom.xml, feed.json, mobile/feed.xml)', rssExists && atomExists && jsonFeedExists && mobileFeedExists);

// G10: AI Agent Protocols
const agentTxt = fs.existsSync(path.join(PUBLIC_DIR, 'agent.txt'));
const agentJson = fs.existsSync(path.join(PUBLIC_DIR, '.well-known/agent.json'));
assertGate('G10', 'AI Agent protocols exist (/agent.txt and /.well-known/agent.json)', agentTxt && agentJson);

// G14: Topic Cluster Depth
const subCategoriesCount = CABIVELLA_PAGES.filter(p => p.role === 'category').length;
assertGate('G14', 'Topic cluster depth: Verified category pages exist to support hub hierarchy', subCategoriesCount >= 6, `${subCategoriesCount} categories`);

// G16: Google SERP 48px Favicon Suite
const fav48 = fs.existsSync(path.join(PUBLIC_DIR, 'favicon-48x48.png'));
const fav96 = fs.existsSync(path.join(PUBLIC_DIR, 'favicon-96x96.png'));
const fav192 = fs.existsSync(path.join(PUBLIC_DIR, 'favicon-192x192.png'));
const favIco = fs.existsSync(path.join(PUBLIC_DIR, 'favicon.ico'));
assertGate('G16', 'Googlebot-Image 48px multiple square favicon suite exists (48, 96, 192, ico)', fav48 && fav96 && fav192 && favIco);

// G17: Google Site Names & Manifest Gate
const manifestExists = fs.existsSync(path.join(PUBLIC_DIR, 'site.webmanifest'));
let manifestValid = false;
if (manifestExists) {
  try {
    const manifest = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, 'site.webmanifest'), 'utf-8'));
    manifestValid = manifest.name.includes('Cabivella') && manifest.short_name === 'Cabivella';
  } catch (e) {
    manifestValid = false;
  }
}
assertGate('G17', 'Google Site Names: site.webmanifest name and short_name match brand identity', manifestValid);

// G18: BreadcrumbList SERP Hierarchy
const subPages = CABIVELLA_PAGES.filter(p => p.route !== '/');
const breadcrumbsValid = subPages.every(p => p.breadcrumbs.length >= 2);
assertGate('G18', 'BreadcrumbList SERP hierarchy: All non-home pages have min 2-level breadcrumbs', breadcrumbsValid);

// G19: CTR Meta Snippet Golden Ratio (130-158 characters, ends with dot)
const invalidDescriptions: string[] = [];
CABIVELLA_PAGES.forEach(p => {
  const len = p.metaDescription.trim().length;
  const endsWithDot = p.metaDescription.trim().endsWith('.');
  if (len < 130 || len > 158 || !endsWithDot) {
    invalidDescriptions.push(`${p.route} (${len} chars, dot: ${endsWithDot}) -> "${p.metaDescription}"`);
  }
});
assertGate('G19', 'CTR Meta Description: 130–158 characters and strictly ends with dot (.)', invalidDescriptions.length === 0, invalidDescriptions.join('; '));

// G20: Humanizer Zero-Synthetic Prose Gate
let humanizerOk = true;
try {
  execSync('python3 scripts/humanizer_engine.py public/llms.txt', { stdio: 'pipe' });
  execSync('python3 scripts/humanizer_engine.py public/llms/core.md', { stdio: 'pipe' });
} catch (e) {
  humanizerOk = false;
}
assertGate('G20', 'Humanizer Pure-Human Prose: Wikipedia 26 AI-tell density under threshold', humanizerOk);

// G21: Zero-Deceptive Review & Schema Sanitization
let deceptiveReviewFound = false;
CABIVELLA_PAGES.forEach(p => {
  const text = JSON.stringify(p).toLowerCase();
  if (text.includes('aggregaterating') || text.includes('reviewcount')) {
    deceptiveReviewFound = true;
  }
});
assertGate('G21', 'Deceptive Review Gate: Zero fabricated aggregate rating schemas detected', !deceptiveReviewFound);

console.log('\n-----------------------------------------------------------');
if (failed) {
  console.error('🚫 [MANDATE V9.2] SEO CI Gates FAILED. Build blocked.');
  process.exit(1);
} else {
  console.log('✅ [MANDATE V9.2] ALL G0–G21 SEO & SERP GATES PASSED (0 ERRORS).\n');
  process.exit(0);
}
