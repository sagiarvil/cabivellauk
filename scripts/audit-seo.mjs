import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

const EXPECTED_ROUTES = [
  "/",
  "/collections/",
  "/collections/bathrooms/",
  "/collections/bathrooms/dulwich-compact-65/",
  "/collections/bathrooms/wimbledon-clay-80/",
  "/collections/bathrooms/chiswick-walnut-100/",
  "/collections/bathrooms/greenwich-cherry-100/",
  "/collections/bathrooms/pimlico-navaro-100/",
  "/collections/bathrooms/richmond-legnano-100/",
  "/collections/bathrooms/bloomsbury-minimalist-80/",
  "/collections/bathrooms/fitzrovia-noir-90/",
  "/collections/bathrooms/hampstead-contrast-100/",
  "/collections/bathrooms/marylebone-lumiere-80/",
  "/collections/bathrooms/knightsbridge-noir-135/",
  "/collections/bathrooms/westminster-suite-135/",
  "/collections/bathrooms/st-james-trio-100/",
  "/collections/bathrooms/chelsea-compact-85/",
  "/collections/bathrooms/cotswold-suite-115/",
  "/collections/bathrooms/mayfair-floating-80/",
  "/collections/bathrooms/belgravia-monolith-100/",
  "/collections/bathrooms/kensington-reeded-100/",
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
  "/collections/kitchens/belgravia-executive-kitchen-310/",
  "/collections/kitchens/belgravia-grand-380/",
  "/collections/kitchens/belgravia-island-olive-240/",
  "/collections/kitchens/chelsea-dualtone-highgloss-410/",
  "/collections/kitchens/compact-kitchens/",
  "/collections/kitchens/contemporary-kitchens/",
  "/collections/kitchens/cotswold-classic-280/",
  "/collections/kitchens/cotswold-fullheight-suite-400/",
  "/collections/kitchens/hampstead-contemporary-suite-400/",
  "/collections/kitchens/kensington-culinary-suite-310/",
  "/collections/kitchens/kensington-linear-240/",
  "/collections/kitchens/knightsbridge-tall-larder-410/",
  "/collections/kitchens/lea-bevelled-shaker/",
  "/collections/kitchens/lora-contemporary-slab/",
  "/collections/kitchens/luna-micro-shaker/",
  "/collections/kitchens/mayfair-monolith-highgloss-410/",
  "/collections/kitchens/mayfair-pantry-320/",
  "/collections/kitchens/richmond-dualtower-kitchen-400/",
  "/collections/kitchens/richmond-studio-200/",
  "/collections/kitchens/shaker-kitchens/",
  "/collections/kitchens/st-james-integrated-tower-410/",
  "/collections/kitchens/urban-compact-160/",
  "/collections/kitchens/vega-ergonomic-suite/",
  "/collections/kitchens/vera-architectural-kitchen/",
  "/collections/kitchens/westminster-chef-suite-310/",
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
