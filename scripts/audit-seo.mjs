import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

const requiredPages = [
  '',
  'collections',
  'our-story',
  'trade',
  'enquire',
  'privacy',
  'cookies',
  'image-credits',
  'materials',
  'collections/kitchens',
  'collections/kitchens/shaker-kitchens',
  'collections/kitchens/contemporary-kitchens',
  'collections/kitchens/compact-kitchens',
  'collections/kitchen-doors',
  'collections/kitchen-doors/shaker-replacement-doors',
  'collections/kitchen-doors/handleless-cabinet-fronts',
  'collections/bathrooms',
  'collections/bathrooms/wall-hung-vanities',
  'collections/bathrooms/fluted-vanities',
  'collections/bathrooms/tall-bathroom-storage',
  'collections/coffee-stations',
  'collections/coffee-stations/pocket-door-coffee-stations',
  'collections/coffee-stations/open-shelf-coffee-cabinets',
  'collections/pantry-larder',
  'collections/pantry-larder/tall-larder-cupboards',
  'collections/pantry-larder/corner-pantry-storage',
  'collections/fitted-storage',
  'collections/fitted-storage/alcove-cupboards',
  'collections/fitted-storage/utility-room-cabinets'
];

let failed = 0;
console.log('Verifying generated static pages and SEO compliance...');

for (const p of requiredPages) {
  const filePath = p === '' 
    ? path.join(distDir, 'index.html') 
    : path.join(distDir, p, 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static page: ${p}/index.html`);
    failed++;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check H1
  const h1Matches = content.match(/<h1[\s>]/gi);
  if (!h1Matches || h1Matches.length === 0) {
    console.error(`❌ Page ${p} is missing <h1>`);
    failed++;
  } else if (h1Matches.length > 1) {
    console.error(`❌ Page ${p} has multiple <h1> tags (${h1Matches.length})`);
    failed++;
  }

  // Check lang="en-GB"
  if (!content.includes('lang="en-GB"')) {
    console.error(`❌ Page ${p} missing lang="en-GB"`);
    failed++;
  }

  // Check canonical link
  if (!content.includes('rel="canonical"')) {
    console.error(`❌ Page ${p} missing canonical link`);
    failed++;
  }

  // Check JSON-LD schema
  if (!content.includes('application/ld+json')) {
    console.error(`❌ Page ${p} missing structured data (JSON-LD)`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\nAudit failed with ${failed} issues.`);
  process.exit(1);
}

console.log(`✅ All ${requiredPages.length} production routes verified successfully with full SEO compliance.`);
