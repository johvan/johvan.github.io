this.addEventListener("install", function(event) {
    //this ensures that the service worker will not install 
    //until the code inside waitUntil() has successfully occurred.
    event.waitUntil(
        // create a new cache. This returns a promise for a created cache;
        caches.open("v1").then(function(cache) {
            // origin-relative urls; Add the resources you want to cache.
            return cache.addAll([
                "https://johvan.github.io/src",
                "index.html",
                "style.css",
                "src/app.js",
                "src/imgs/img-1.jpg",
                "src/imgs/img-2.png",
                "src/imgs/img-3.png"
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
 //respondWith() method on the event to hijack our HTTP responses 
 //and update them with your the cached files.
  event.respondWith(
 // with the resource whose url matches that of the network request ` caches.match(event.request)`.
 // If a match wasn't found in the cache, you tell the browser to simply fetch the
 // default network request for that resource, to get the new resource if was available `fetch(event.request)`.
    caches.match(event.request).then(function(response) {
 // If we were being really clever, we would not only request the resource from the network; we 
 // would also save it into the cache so that later requests for that resource could be retrieved offline too!
      return response || fetch(event.request).then(function(response) {
          // We the open the `v1` cache. Next `cache.put` is used to add the resource to the cache.
          // Next grab the resource from `event.request`, then it is cloned with `response.clone()` and added to the cache. 
          // The clone is put in the cache, and the original response is returned 
          // to the browser to be given to the page that called it.
        return caches.open("v1").then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      }).catch(function(){
          return caches.match("/src/img-1.jpg");
      });
    })
  );
});
