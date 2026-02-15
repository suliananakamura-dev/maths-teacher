
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open('mm-static-v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/manifest.webmanifest',
      '/icons/icon-192.png',
      '/icons/icon-512.png'
    ]))
  );
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !['mm-static-v1'].includes(k)).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      if (req.method === 'GET' && (resp.status === 200 || resp.type === 'opaque')) {
        const copy = resp.clone();
        caches.open('mm-static-v1').then(cache => cache.put(req, copy));
      }
      return resp;
    }).catch(() => caches.match('/index.html')))
  );
});
