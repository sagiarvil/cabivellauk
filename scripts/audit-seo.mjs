import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

const EXPECTED_ROUTES = [
  "/",
  "/collections/",
  "/collections/bathrooms/",
  "/collections/bathrooms/aydos-compact-vanity/",
  "/collections/bathrooms/beat-ribbed-vanity/",
  "/collections/bathrooms/belgravia-double-140/",
  "/collections/bathrooms/chelsea-monolith-100/",
  "/collections/bathrooms/daisy-reeded-console/",
  "/collections/bathrooms/design-monolith-vanity/",
  "/collections/bathrooms/fluted-vanities/",
  "/collections/bathrooms/integra-square-tower/",
  "/collections/bathrooms/kensington-artisan-80/",
  "/collections/bathrooms/knightsbridge-master-160/",
  "/collections/bathrooms/malta-vanity-console/",
  "/collections/bathrooms/mayfair-cloakroom-65/",
  "/collections/bathrooms/root-groove-tall-unit/",
  "/collections/bathrooms/root-groove-vanity/",
  "/collections/bathrooms/st-james-reeded-120/",
  "/collections/bathrooms/tall-bathroom-storage/",
  "/collections/bathrooms/wall-hung-vanities/",
  "/collections/coffee-stations/",
  "/collections/coffee-stations/breakfast-armoire-coffee-stations/",
  "/collections/coffee-stations/ervin-breakfast-bar/",
  "/collections/coffee-stations/hawa-retractable-station/",
  "/collections/coffee-stations/illuminated-beverage-stations/",
  "/collections/coffee-stations/open-shelf-coffee-cabinets/",
  "/collections/coffee-stations/pocket-door-coffee-stations/",
  "/collections/fitted-storage/",
  "/collections/fitted-storage/alcove-cupboards/",
  "/collections/fitted-storage/bespoke-alcove-units/",
  "/collections/fitted-storage/boot-room-cabinetry/",
  "/collections/fitted-storage/bosco-utility-cabinet/",
  "/collections/fitted-storage/panelled-wardrobe-run/",
  "/collections/fitted-storage/utility-room-cabinets/",
  "/collections/fitted-storage/walkin-dressing-suite/",
  "/collections/kitchen-doors/",
  "/collections/kitchen-doors/axis-shadow-fronts/",
  "/collections/kitchen-doors/chillingham-timber-shaker/",
  "/collections/kitchen-doors/fluted-wave-panels/",
  "/collections/kitchen-doors/handleless-cabinet-fronts/",
  "/collections/kitchen-doors/lea-framed-fronts/",
  "/collections/kitchen-doors/paint-ready-raw-mdf/",
  "/collections/kitchen-doors/shaker-replacement-doors/",
  "/collections/kitchen-doors/slimline-micro-shaker-fronts/",
  "/collections/kitchen-doors/vera-silk-slab/",
  "/collections/kitchens/",
  "/collections/kitchens/arya-classic-shaker/",
  "/collections/kitchens/axis-handleless-shadow/",
  "/collections/kitchens/belgravia-grand-380/",
  "/collections/kitchens/compact-kitchens/",
  "/collections/kitchens/contemporary-kitchens/",
  "/collections/kitchens/cotswold-classic-280/",
  "/collections/kitchens/kensington-linear-240/",
  "/collections/kitchens/lea-bevelled-shaker/",
  "/collections/kitchens/lora-contemporary-slab/",
  "/collections/kitchens/luna-micro-shaker/",
  "/collections/kitchens/mayfair-pantry-320/",
  "/collections/kitchens/richmond-studio-200/",
  "/collections/kitchens/shaker-kitchens/",
  "/collections/kitchens/urban-compact-160/",
  "/collections/kitchens/vega-ergonomic-suite/",
  "/collections/kitchens/vera-architectural-kitchen/",
  "/collections/pantry-larder/",
  "/collections/pantry-larder/carousel-blind-corner/",
  "/collections/pantry-larder/chefs-double-armoire/",
  "/collections/pantry-larder/corner-pantry-storage/",
  "/collections/pantry-larder/lemans-corner-swivel/",
  "/collections/pantry-larder/pullout-larder-tower/",
  "/collections/pantry-larder/tall-larder-cupboards/",
  "/collections/pantry-larder/tandem-tall-larder/",
  "/collections/pantry-larder/walkin-step-pantry/",
  "/cookies/",
  "/enquire/",
  "/image-credits/",
  "/materials/",
  "/our-story/",
  "/privacy/",
  "/thank-you/",
  "/trade/"
];

console.log(`[SEO-AUDIT] Commencing verification of ${EXPECTED_ROUTES.length} static routes...`);

let failed = false;

for (const route of EXPECTED_ROUTES) {
  const filePath = route === '/'
    ? path.join(DIST_DIR, 'index.html')
    : path.join(DIST_DIR, route.replace(/^\//, '').replace(/\/$/, ''), 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static HTML for route: ${route} (checked: ${filePath})`);
    failed = true;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Verify Single H1
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?<\/h1>)/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ Route ${route} MUST have exactly 1 <h1>, found: ${h1Matches.length}`);
    failed = true;
  }

  // Verify Title
  if (!html.includes('<title>') || !html.includes('</title>')) {
    console.error(`❌ Route ${route} missing <title> tag`);
    failed = true;
  }

  // Verify Meta Description
  if (!html.includes('name="description"')) {
    console.error(`❌ Route ${route} missing meta description`);
    failed = true;
  }

  // Verify Canonical
  if (!html.includes('rel="canonical"')) {
    console.error(`❌ Route ${route} missing canonical link`);
    failed = true;
  }

  // Verify Language is en-GB
  if (!html.includes('lang="en-GB"')) {
    console.error(`❌ Route ${route} does not specify lang="en-GB"`);
    failed = true;
  }
}

if (failed) {
  console.error('\n🚨 SEO AUDIT FAILED: One or more routes failed validation.');
  process.exit(1);
} else {
  console.log(`\n✅ SEO AUDIT PASSED: All ${EXPECTED_ROUTES.length} routes verified with perfect structure.`);
}
