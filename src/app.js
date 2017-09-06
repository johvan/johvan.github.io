// Checks to see if the service workern is avaible or supported in the browser.
if ('serviceWorker' in navigator) {
    // Registers the service worker for use for this site.
    // The first paremter is the URL to of the service worker script.
    // The Second paramter sets the scope of the `sw.js`
    // Example if this code were included in a page called example.com/product/description.html, the scope of 
    //'./' would mean that the service worker only applies to resources under example.com/product. 
    //If I needed to register a service worker on example.com/product/description.html that applied to 
    //all of example.com, I would simply exclude the scope (as is done above).
  navigator.serviceWorker.register('sw.js')
  // Next checks to see if it succesed or failed.
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
    //return value is a Promise  that resolves with a ServiceWorkerRegistration object.
  });

}