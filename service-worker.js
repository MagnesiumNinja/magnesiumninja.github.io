"use strict";var precacheConfig=[["/magnesiumninja.github.io/index.html","26ca38e891c881c3848d88f8c69d0f1c"],["/magnesiumninja.github.io/static/css/main.3e3a57a0.css","f00fe46de06b5a592c398df4d103f1d8"],["/magnesiumninja.github.io/static/js/main.0b42a2f7.js","27fac74e0ea19c7ed2341daa5db6fea2"],["/magnesiumninja.github.io/static/media/Dialogue.ef4e8dd6.gif","ef4e8dd652e3b4ba308a4108b786c85e"],["/magnesiumninja.github.io/static/media/Logo.7de7ea89.psd","7de7ea895de25ce5f9b55334a355c8e9"],["/magnesiumninja.github.io/static/media/MainCapsule.d5948bd4.png","d5948bd44c2044a73fb0f2274a745cdb"],["/magnesiumninja.github.io/static/media/divider.f9c09135.png","f9c09135a7267384858219ce57bf0b8f"],["/magnesiumninja.github.io/static/media/footer.d8e10988.png","d8e1098841d83bd7c405c90625a37669"],["/magnesiumninja.github.io/static/media/gobold_regular.480ddcdb.ttf","480ddcdbf6e34bde73dfaed605fafcb3"],["/magnesiumninja.github.io/static/media/logo-background.6792a41e.png","6792a41efeb7f961193a75f4d7618c95"],["/magnesiumninja.github.io/static/media/logo-left.2508e010.psd","2508e01005b25d68b13e0af90999b41a"],["/magnesiumninja.github.io/static/media/logo-left.b6bfa105.png","b6bfa1051c97dd8b756c70ce7d1dc27f"],["/magnesiumninja.github.io/static/media/logo-right.33e265ca.png","33e265ca28a3d22ec77bcd6dc6074478"],["/magnesiumninja.github.io/static/media/logo-right.c5847cd9.psd","c5847cd9993f0bdab6d5f56b977a9fc2"],["/magnesiumninja.github.io/static/media/logo.f8e6fb7b.gif","f8e6fb7bc8580c0b971f737f7022d43e"],["/magnesiumninja.github.io/static/media/sky.b1eb123c.png","b1eb123cdc85f9f6f3aef923e813cca3"],["/magnesiumninja.github.io/static/media/steam_launch1.e6622a08.png","e6622a081b2ca9225b9d5082d2b4b769"],["/magnesiumninja.github.io/static/media/steam_launch2.8a798d19.png","8a798d194e348965fb2431dcf12a5092"],["/magnesiumninja.github.io/static/media/steam_launch3.08b596a6.png","08b596a681acfb93094e7da182d935ec"],["/magnesiumninja.github.io/static/media/steam_launch4.29ae1c8a.png","29ae1c8a61aa1344c42635ceb0ec739d"],["/magnesiumninja.github.io/static/media/steam_launch5.898f3951.png","898f3951cf697639b1ce0618c9d5dee7"],["/magnesiumninja.github.io/static/media/steam_launch6.8294695a.png","8294695aa3c451533dfe53bec5188c5a"],["/magnesiumninja.github.io/static/media/steam_launch7.1f4ffc23.png","1f4ffc236f12147af6369f1a435f811e"],["/magnesiumninja.github.io/static/media/steam_launch8.631ed016.png","631ed016268c9526d62358d1045734ed"],["/magnesiumninja.github.io/static/media/sui_generis.5a7db2db.ttf","5a7db2db0a7c1a9f98bfad78893257cd"],["/magnesiumninja.github.io/static/media/trainingRoom.da1c967b.png","da1c967b251c79394380beaf92287c84"],["/magnesiumninja.github.io/static/media/tumblr.61af08fe.psd","61af08fe1a361cf2632377b213ff1a09"],["/magnesiumninja.github.io/static/media/tumblr.af96aa10.png","af96aa10f302780f162b6c047ba98ef7"],["/magnesiumninja.github.io/static/media/tumblr_hover.35bf2969.png","35bf2969558b33293d2596e3ed3c1ac5"],["/magnesiumninja.github.io/static/media/twitter.019034ac.psd","019034ac2af07dc93ba81dcc10be4451"],["/magnesiumninja.github.io/static/media/twitter.1a49d497.png","1a49d497d1351df6974c6f237891f3b3"],["/magnesiumninja.github.io/static/media/twitter_hover.c1ae6e73.png","c1ae6e73c91abc18b3f8ebc6d81964d0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,n,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return n.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,n=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var i="/magnesiumninja.github.io/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(n=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});