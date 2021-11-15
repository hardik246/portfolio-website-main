var CACHE_NAME = "portfolio-website-main";
var urlsToCache = ["/", "/completed"];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      console.log("2");
      return fetch(event.request);
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["portfolio-website-main"];
  console.log("3");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      console.log(cacheNames);
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log(cacheName);
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
