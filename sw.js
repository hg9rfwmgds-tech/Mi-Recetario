/* Mi Recetario 1.5.1 — shell sin conexión. IndexedDB no se modifica. */
const CACHE='mi-recetario-shell-v1-5-1-espresso-20261108';
const REQUIRED=['./','./index.html','./manifest.webmanifest'];
const OPTIONAL=['./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./favicon-32.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(async cache=>{
  await cache.addAll(REQUIRED);
  await Promise.allSettled(OPTIONAL.map(async url=>{try{await cache.add(url)}catch(err){/* Los iconos pueden no estar presentes en una subida parcial */}}));
 }).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('mi-recetario-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith(fetch(req).then(response=>{
  if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy)).catch(()=>{})}
  return response;
 }).catch(()=>caches.match(req).then(cached=>cached||(req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
