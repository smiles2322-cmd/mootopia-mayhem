const CACHE = 'mootopia-v3';
const FILES = ['./', './index.html', './style.css', './manifest.webmanifest', './js/game.js', './js/glitter-wallet.js', './img/title.jpg', './img/glitter_32.png', './img/glitter_64.png', './img/glitter_256.png', './img/glitter_512.png', './img/glitter_token_logo_512.png', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request).then((res) => { const copy = res.clone(); if (res.ok && new URL(e.request.url).origin === location.origin) caches.open(CACHE).then((c) => c.put(e.request, copy)); return res; }).catch(() => caches.match('./index.html'))));
});
