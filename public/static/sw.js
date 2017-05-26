/**
 * Created by pacman29 on 26.05.17.
 */
const CACHE_VERSION = 'app_sw_v0.0.1';

const cacheUrls = [
    '/bundle.js',
];

for (let i = 0; i < 441; ++i) {
    cacheUrls.push(`https://raw.githubusercontent.com/ed-asriyan/joking-hazard-cards/master/pure-cropped/${Math.trunc((i - 1) / 9) + 1}_${i % 9}.jpg`)
}

this.addEventListener('install', function (event) {
    console.log('sw  install', event);
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                return cache.addAll(cacheUrls);
            })
    );
});

this.addEventListener('fetch', function (event) {
    console.log('sw  fetch', event);
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }),
    );
});
