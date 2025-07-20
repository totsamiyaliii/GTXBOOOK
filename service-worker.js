const CACHE_NAME = "kutubxona-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/saved.html",
  "/style.css",
  "/saved.css",
  "/books.js",
  "/script.js",
  "/saved.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// 1) install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 2) fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// 3) activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});