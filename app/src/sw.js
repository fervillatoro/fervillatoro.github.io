/*! Copyright (c) 2022 Alejandro VIllatoro. All Rights Reserved. */

let CACHE_VERSION = "v1.0.1";

let CACHE_ASSETS = [
  '/assets/img/avatar.webp',
  '/favicon.ico',
  '/offline.html',

  //
  'main.e9681dc205fbdc96.js',
  'styles.54344284321dfc7b.css',
  'polyfills.8c6c730588edec17.js',
  'runtime.1c9f5c85f124eb51.js'
];

self.addEventListener('install', function(event) {
if ( self.skipWaiting ) { self.skipWaiting(); }//instalar de inmediato
  event.waitUntil(
    caches.open( CACHE_VERSION ).then(function(cache) {
      return cache.addAll( CACHE_ASSETS );
    })
  );
});

//Cache, falling back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response ||
      fetch(event.request)
      .catch(err => caches.open( CACHE_VERSION ).then( cache => cache.match("/offline.html") ) )
    })
  );
});

var cacheWhitelist = [ CACHE_VERSION ];
caches.keys().then(function(cacheNames) {
  return Promise.all(
    cacheNames.map(function(cacheName) {
      if (cacheWhitelist.indexOf(cacheName) === -1) {
        return caches.delete(cacheName);
      }
    })
  );
});

caches.keys().then(function(cacheKeys) {
  console.log('Versión SW: ' + cacheKeys);
});

// importScripts('https://cdn.webpushr.com/sw-server.min.js');
