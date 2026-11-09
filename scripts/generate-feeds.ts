import * as fs from 'fs';
import * as path from 'path';
import { CABIVELLA_PAGES } from '../src/seo/registry';
import { buildRssFeed, buildAtomFeed, buildJsonFeed, buildMobileFeed } from '../src/seo/feed-builder';

const publicDir = path.resolve(process.cwd(), 'public');
const mobileDir = path.join(publicDir, 'mobile');

if (!fs.existsSync(mobileDir)) {
  fs.mkdirSync(mobileDir, { recursive: true });
}

// Generate feeds
fs.writeFileSync(path.join(publicDir, 'feed.xml'), buildRssFeed(CABIVELLA_PAGES), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'atom.xml'), buildAtomFeed(CABIVELLA_PAGES), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'feed.json'), buildJsonFeed(CABIVELLA_PAGES), 'utf-8');
fs.writeFileSync(path.join(mobileDir, 'feed.xml'), buildMobileFeed(CABIVELLA_PAGES), 'utf-8');

console.log('✅ Generated feed.xml, atom.xml, feed.json, and mobile/feed.xml from SSOT registry.');
