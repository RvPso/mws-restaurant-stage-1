self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-static-v1').then(function(cache) {
      return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'/restaurant.html?id=1',
                '/restaurant.html?id=2',
                '/restaurant.html?id=3',
                '/restaurant.html?id=4',
                '/restaurant.html?id=5',
                '/restaurant.html?id=6',
                '/restaurant.html?id=7',
                '/restaurant.html?id=8',
                '/restaurant.html?id=9',
                '/restaurant.html?id=10',
				'css/styles.css',
				'js/main.js',
				'js/restaurant_info.js',
				'js/dbhelper.js',
				'data/restaurants.json'
]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
