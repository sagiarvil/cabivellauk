/**
 * Triple-Push Instant Discovery Motoru ($10M Mandate v9.2 - Section VI)
 */
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const CONFIG = {
  host: 'cabivella.co.uk',
  indexNowKey: '9d980417475ac56c8ad72ef2c743e1e5',
  indexNowEndpoints: [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow'
  ],
  webSubHubs: [
    'https://pubsubhubbub.appspot.com/',
    'https://pubsubhubbub.superfeedr.com/'
  ],
  feeds: [
    'https://cabivella.co.uk/feed.xml',
    'https://cabivella.co.uk/mobile/feed.xml'
  ]
};

export async function executeTriplePush(urls) {
  console.log(`🚀 [Triple-Push] Dispatching ${urls.length} canonical URLs to global search & AI hubs...`);

  // 1. IndexNow Multi-Hub PUSH
  const payload = JSON.stringify({
    host: CONFIG.host,
    key: CONFIG.indexNowKey,
    keyLocation: `https://${CONFIG.host}/${CONFIG.indexNowKey}.txt`,
    urlList: urls
  });

  const indexNowPromises = CONFIG.indexNowEndpoints.map(endpoint => {
    return new Promise(resolve => {
      try {
        const u = new URL(endpoint);
        const req = https.request({
          hostname: u.hostname,
          path: u.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 5000
        }, res => {
          console.log(`  ✅ [IndexNow: ${u.hostname}] HTTP ${res.statusCode}`);
          resolve(true);
        });
        req.on('error', err => {
          console.log(`  ⚠️ [IndexNow: ${u.hostname}] Non-fatal network note: ${err.message}`);
          resolve(false);
        });
        req.on('timeout', () => {
          req.destroy();
          resolve(false);
        });
        req.write(payload);
        req.end();
      } catch (e) {
        resolve(false);
      }
    });
  });

  // 2. WebSub Hubs Ping
  const params = CONFIG.feeds.map(f => `hub.url=${encodeURIComponent(f)}`).join('&') + '&hub.mode=publish';
  const webSubPromises = CONFIG.webSubHubs.map(hub => {
    return new Promise(resolve => {
      try {
        const u = new URL(hub);
        const req = https.request({
          hostname: u.hostname,
          path: u.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(params)
          },
          timeout: 5000
        }, res => {
          console.log(`  ✅ [WebSub: ${u.hostname}] HTTP ${res.statusCode}`);
          resolve(true);
        });
        req.on('error', err => {
          console.log(`  ⚠️ [WebSub: ${u.hostname}] Non-fatal network note: ${err.message}`);
          resolve(false);
        });
        req.on('timeout', () => {
          req.destroy();
          resolve(false);
        });
        req.write(params);
        req.end();
      } catch (e) {
        resolve(false);
      }
    });
  });

  await Promise.all([...indexNowPromises, ...webSubPromises]);
  console.log('✅ [Triple-Push] Instant discovery notification cycle completed.');
}

const currentFilePath = fileURLToPath(import.meta.url);
if (process.argv[1] === currentFilePath) {
  const sampleUrls = [
    'https://cabivella.co.uk/',
    'https://cabivella.co.uk/collections/',
    'https://cabivella.co.uk/collections/kitchens/',
    'https://cabivella.co.uk/collections/bathrooms/',
    'https://cabivella.co.uk/collections/fitted-storage/',
    'https://cabivella.co.uk/trade/'
  ];
  executeTriplePush(sampleUrls).catch(console.error);
}
