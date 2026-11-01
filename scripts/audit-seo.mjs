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
  
  // Kitchens
  'collections/kitchens',
  'collections/kitchens/shaker-kitchens',
  'collections/kitchens/contemporary-kitchens',
  'collections/kitchens/compact-kitchens',
  'collections/kitchens/slim-frame-shaker-kitchens',
  'collections/kitchens/island-suite-kitchens',

  // Bathrooms
  'collections/bathrooms',
  'collections/bathrooms/wall-hung-vanities',
  'collections/bathrooms/fluted-vanities',
  'collections/bathrooms/tall-bathroom-storage',
  'collections/bathrooms/double-basin-vanities',
  'collections/bathrooms/slim-mirror-storage-cabinets',

  // Pantry & Larder
  'collections/pantry-larder',
  'collections/pantry-larder/tall-larder-cupboards',
  'collections/pantry-larder/corner-pantry-storage',
  'collections/pantry-larder/chefs-double-larder',
  'collections/pantry-larder/pullout-larder-tower',

  // Coffee Stations
  'collections/coffee-stations',
  'collections/coffee-stations/pocket-door-coffee-stations',
  'collections/coffee-stations/open-shelf-coffee-cabinets',
  'collections/coffee-stations/breakfast-armoire-coffee-stations',
  'collections/coffee-stations/illuminated-beverage-stations',

  // Fitted Storage
  'collections/fitted-storage',
  'collections/fitted-storage/alcove-cupboards',
  'collections/fitted-storage/utility-room-cabinets',
  'collections/fitted-storage/boot-room-cabinetry',
  'collections/fitted-storage/dressing-room-wardrobes',

  // Kitchen Doors
  'collections/kitchen-doors',
  'collections/kitchen-doors/shaker-replacement-doors',
  'collections/kitchen-doors/handleless-cabinet-fronts',
  'collections/kitchen-doors/slimline-micro-shaker-fronts',
  'collections/kitchen-doors/fluted-reeded-fronts'
];

let failed = 0;
console.log('Verifying generated static pages and SEO compliance...');

for (const p of requiredPages) {
  const filePath = p === '' 
    ? path.join(distDir, 'index.html') 
    : path.join(distDir, p, 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static page: ${p}`);
    failed++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Verify single H1
  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ Page ${p} does not have exactly 1 <h1> tag (found ${h1Matches.length})`);
    failed++;
  }

  // Verify en-GB
  if (!html.includes('lang="en-GB"')) {
    console.error(`❌ Page ${p} does not declare lang="en-GB"`);
    failed++;
  }

  // Verify canonical
  if (!html.includes('<link rel="canonical"')) {
    console.error(`❌ Page ${p} missing canonical link tag`);
    failed++;
  }

  // Verify meta description
  if (!html.includes('<meta name="description"')) {
    console.error(`❌ Page ${p} missing meta description`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`Audit failed with ${failed} errors.`);
  process.exit(1);
}

console.log(`✅ All ${requiredPages.length} production routes verified successfully with full SEO compliance.`);
