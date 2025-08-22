// Service Worker for The Global Limo
const CACHE_NAME = 'global-limo-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/tailwind.css',
  '/css/styles.css',
  '/js/feature-detection.js',
  '/js/mobile-menu.js',
  '/js/carousel.js',
  '/js/active-navigation.js',
  '/js/link-validation.js',
  '/assets/ic_logo.svg',
  '/assets/hero-image.webp'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update cache when service worker is updated
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});