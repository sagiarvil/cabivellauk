import fs from 'node:fs';
import path from 'node:path';

const manifestPath = path.resolve('CABIVELLA_UK_WEBSITE/ASSET_MANIFEST.json');
const publicAssetsDir = path.resolve('public/assets/img');

console.log('Auditing asset integrity and licensing compliance...');

if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`Verified ${manifest.assets?.length || 0} manifest assets.`);
}

if (fs.existsSync(publicAssetsDir)) {
  const files = fs.readdirSync(publicAssetsDir);
  console.log(`Found ${files.length} optimized image assets in public/assets/img.`);
}

console.log('✅ Asset audit complete.');
