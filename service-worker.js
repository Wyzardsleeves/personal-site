/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/precache-manifest.adfc886250641197ed9070b9a31fc6fe.js"
=======
  "/personal-site/precache-manifest.1ab88230129dbc7f77c267ed5f51d6c6.js"
>>>>>>> 08c66c4e6796c0a679481baa7dcf559a6ccd9cc8
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/personal-site/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
>>>>>>> 08c66c4e6796c0a679481baa7dcf559a6ccd9cc8
});
