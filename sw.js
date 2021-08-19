/*! Copyright (c) 2021 Alejandro Villatoro. All Rights Reserved. */

let CACHE_VERSION = "v1";
let viewOffline = '/';

let CACHE_ASSETS = [
  '/favicon.ico',
  'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css',
  '/assets/css/index.min.css?v=1',
  '/assets/js/index.min.js',
  '/assets/img/avatar2.jpg',
  '/assets/img/avatar.png',
  '/assets/img/fondo-bio.jpg',
  '/assets/img/fondo-contact.jpg',
  // experiencia offline
  viewOffline
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
      .catch(err => caches.open( CACHE_VERSION ).then( cache => cache.match(viewOffline) ) )
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
  console.log('Versión SW: '+cacheKeys);
});

// importScripts('https://cdn.webpushr.com/sw-server.min.js');
