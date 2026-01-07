const CACHE_NAME = 'quiz-cache-v1';
const urlsToCache = [
  '/quiz/',
  '/quiz/index.html',
  // Add links to your CSS or JS files here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
