"use strict";var precacheConfig=[["/magnesiumninja.github.io/index.html","46a5e3d2d5ecaa6ce5dec6e9a63787d0"],["/magnesiumninja.github.io/static/css/main.d5fda75b.css","402a2512f7ef8cb74a5514363e4a96fa"],["/magnesiumninja.github.io/static/js/main.8311c2ef.js","52a45e611c1a1d483f8cebf33ae9c8b3"],["/magnesiumninja.github.io/static/media/Dialogue.ef4e8dd6.gif","ef4e8dd652e3b4ba308a4108b786c85e"],["/magnesiumninja.github.io/static/media/Gobold Regular.480ddcdb.ttf","480ddcdbf6e34bde73dfaed605fafcb3"],["/magnesiumninja.github.io/static/media/Logo.7de7ea89.psd","7de7ea895de25ce5f9b55334a355c8e9"],["/magnesiumninja.github.io/static/media/TrainingRoom.20d0aa12.png","20d0aa12465f0f7bc0cb2205ca8f3975"],["/magnesiumninja.github.io/static/media/footer.d8e10988.png","d8e1098841d83bd7c405c90625a37669"],["/magnesiumninja.github.io/static/media/logo-background.6792a41e.png","6792a41efeb7f961193a75f4d7618c95"],["/magnesiumninja.github.io/static/media/logo-left.2508e010.psd","2508e01005b25d68b13e0af90999b41a"],["/magnesiumninja.github.io/static/media/logo-left.b6bfa105.png","b6bfa1051c97dd8b756c70ce7d1dc27f"],["/magnesiumninja.github.io/static/media/logo-right.33e265ca.png","33e265ca28a3d22ec77bcd6dc6074478"],["/magnesiumninja.github.io/static/media/logo-right.c5847cd9.psd","c5847cd9993f0bdab6d5f56b977a9fc2"],["/magnesiumninja.github.io/static/media/logo.f8e6fb7b.gif","f8e6fb7bc8580c0b971f737f7022d43e"],["/magnesiumninja.github.io/static/media/sky.c0615bbb.png","c0615bbb2bdc0473caa5bb1a8eaa5637"],["/magnesiumninja.github.io/static/media/steam_store1.4fe0598b.png","4fe0598b86260ac5c1a7ebd15e3716d3"],["/magnesiumninja.github.io/static/media/steam_store2.092c25a5.png","092c25a543bfc705e94dd32b16cd7eca"],["/magnesiumninja.github.io/static/media/steam_store3.810dbbab.png","810dbbab7c9adcaf2e4ce1b13806b669"],["/magnesiumninja.github.io/static/media/steam_store4.2667898f.png","2667898f9256af1aaeff864022171339"],["/magnesiumninja.github.io/static/media/steam_store5.2f87c312.png","2f87c31260bf78822c15961804312d4d"],["/magnesiumninja.github.io/static/media/steam_store6.509afb2a.png","509afb2ae6c2e05817b38aecd3c1fa2f"],["/magnesiumninja.github.io/static/media/steam_store7.eb15022d.png","eb15022d7718d42795ee8ef709943da1"],["/magnesiumninja.github.io/static/media/steam_store8.0125fa89.png","0125fa89d9a61410bc518339578cf228"],["/magnesiumninja.github.io/static/media/sui generis rg.5a7db2db.ttf","5a7db2db0a7c1a9f98bfad78893257cd"],["/magnesiumninja.github.io/static/media/twitter.116bea77.svg","116bea7712832bf2769cad5167d550a5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),i=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var i="/magnesiumninja.github.io/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});