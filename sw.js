/* 오프라인에서도 열리도록 파일을 저장해 둡니다. 파일을 고쳤다면 VERSION 숫자를 올리세요. */
const VERSION = 'hr-portal-v4';
const FILES = ['./', 'index.html', 'diagnosis.html', 'calculators.html', 'calendar.html', 'laws.html', 'childcare.html', 'config.js', 'manifest.json', 'icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
