// src/service-worker.js

const CACHE_NAME = 'streamList-barbie-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/about',
    '/movies',
    '/cart',
    '/static/css/main.css',
    '/static/js/main.js',
    '/static/media/logo192.png',
    
];

// Install events: cache the specified assests
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Service Worker: Caching Files');
            return 
        cache.addAll(ASSETS_TO_CACHE);
        })
        .then(() => self.skipWaiting())
    );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) => {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Fetch event: serve cached content when offline
self.addEventListener('fetch', (event) => {
    event.respondWith( 
        caches.match(event.request)
        .then((cachedResponse) => {
            if (cachedResponse) {
                console.log('Service Worker: Serving from Cache', event.request.url);
            return cachedResponse;
            }
            console.log('Service Worker: Fetching from Network', event.request.url);
            return fetch(event.request);
        })
    );
});
