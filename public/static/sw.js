/**
 * Created by pacman29 on 26.05.17.
 */
const CACHE_NAME = 'app_sw_v0.0.1';

const cacheUrls = [
    '/',
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
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(cacheUrls);
            })
    );
});

var MAX_AGE = 86400000;

self.addEventListener('fetch', function(event) {

    event.respondWith(
        // ищем запрошенный ресурс среди закэшированных
        caches.match(event.request).then(function(cachedResponse) {
            var lastModified, fetchRequest;

            // если ресурс есть в кэше
            if (cachedResponse) {
                // получаем дату последнего обновления
                lastModified = new Date(cachedResponse.headers.get('last-modified'));
                // и если мы считаем ресурс устаревшим
                if (lastModified && (Date.now() - lastModified.getTime()) > MAX_AGE) {

                    fetchRequest = event.request.clone();
                    // создаём новый запрос
                    return fetch(fetchRequest).then(function(response) {
                        // при неудаче всегда можно выдать ресурс из кэша
                        if (!response || response.status !== 200) {
                            return cachedResponse;
                        }
                        // обновляем кэш
                        caches.open(CACHE_NAME).then(function(cache) {
                            cache.put(event.request, response.clone());
                        });
                        // возвращаем свежий ресурс
                        return response;
                    }).catch(function() {
                        return cachedResponse;
                    });
                }
                return cachedResponse;
            }

            // запрашиваем из сети как обычно
            return fetch(event.request);
        })
    );
});
