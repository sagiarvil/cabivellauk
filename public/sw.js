// Cabivella UK Offline-First Service Worker (Mandate v9.2)
const CACHE_NAME = 'cabivella-v9-static';
const OFFLINE_URL = '/offline.html';

const ASSETS_TO_CACHE = [
  '/',
  '/offline.html',
  '/favicon-48x48.png',
  '/favicon-192x192.png',
  '/site.webmanifest',
  '/assets/img/cabivella-crest-transparent.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL) || caches.match('/');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // If offline and requesting an image, return cached crest if available
          if (event.request.destination === 'image') {
            return caches.match('/assets/img/cabivella-crest-transparent.webp');
          }
        })
      );
    })
  );
});
