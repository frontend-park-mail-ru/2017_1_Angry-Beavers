/**
 * Created by pacman29 on 26.05.17.
 */
const CACHE_VERSION = 'app_sw_v0.0.1';

const cacheUrls = [
    '/bundle.js',
    '/images/Game.webp',
    '/images/About_rules.webp',
    '/images/Score_btn.webp',
    '/images/Game_hold.webp',
    '/images/Login_btn.webp',
    '/images/Scorelist.webp',
    '/images/Score_btn_hold.webp',
    '/images/We_do_it.webp',
    '/images/GOODFACE.webp',
    '/images/Rules_page.webp',
    '/images/Dance.webp',
    '/images/add_your_data.webp',
    '/images/About_us.webp',
    '/images/About_rules_2.webp',
    '/images/Users-Exit-icon.webp',
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
        })
    );
});
