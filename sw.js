navigator.serviceWorker.getRegistrations().then((function(e){for(let o of e)o.unregister()})),importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.routing.registerRoute(/\.(?:js|css|json5)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"static-resources"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&("SKIP_WAITING"===e.data.type||console.warn(`SW: Invalid message type: ${e.data.type}`))})),workbox.precaching.precacheAndRoute([{'revision':null,'url':'/10.bundle.fc9cf147423209771094.js'},{'revision':'540d18901934be6818d7267d8b7a3265','url':'/10.bundle.fc9cf147423209771094.js.LICENSE.txt'},{'revision':'e4c081cb4c54cc016473f94db664b8a6','url':'/10.bundle.fc9cf147423209771094.js.map'},{'revision':null,'url':'/12.bundle.e6c2bb75c0635d875a8f.js'},{'revision':'fccc4f292a2ceee7801499745989e034','url':'/12.bundle.e6c2bb75c0635d875a8f.js.map'},{'revision':null,'url':'/125.bundle.0f57f50493a080ff2dba.js'},{'revision':'534c207dafb2dfb31b267f93b2d0d779','url':'/125.bundle.0f57f50493a080ff2dba.js.map'},{'revision':null,'url':'/128.bundle.d5f59094149d723a8f7f.js'},{'revision':'70a15434a60d4a64c7303737500264c8','url':'/128.bundle.d5f59094149d723a8f7f.js.map'},{'revision':null,'url':'/154.bundle.0b791144d2f5a13ceef1.js'},{'revision':'c9a667e9595fb608c72048e8f108bc07','url':'/154.bundle.0b791144d2f5a13ceef1.js.map'},{'revision':null,'url':'/160.bundle.a7db3ac37dfd57e9208d.js'},{'revision':'ba2c86f52ea091e7bb7474e23553c8a5','url':'/160.bundle.a7db3ac37dfd57e9208d.js.LICENSE.txt'},{'revision':'0e0fef54832270af0d0c82d7bb5f9746','url':'/160.bundle.a7db3ac37dfd57e9208d.js.map'},{'revision':null,'url':'/170.bundle.25057724ed71c8126c33.js'},{'revision':'36259b7a551d87534133f3882886f0fb','url':'/170.bundle.25057724ed71c8126c33.js.map'},{'revision':null,'url':'/181.bundle.3a4b78263a48e9813c38.js'},{'revision':'9921f71803590321ca574e3938469539','url':'/181.bundle.3a4b78263a48e9813c38.js.map'},{'revision':'3ec5d244dfe2973e9ba32c3a624544f9','url':'/181.css'},{'revision':'cca4b05654f55976d7d5b1edb15c5a3f','url':'/181.css.map'},{'revision':null,'url':'/19.bundle.1f951799aed0162e7c62.js'},{'revision':'42cefef01933e32bfc2ea1d6dfa024ed','url':'/19.bundle.1f951799aed0162e7c62.js.map'},{'revision':'a37c67d7435f6a3306cfb08caed030c0','url':'/19.css'},{'revision':'85d9a0fdaac6b35bea2e2e8217c4ade4','url':'/19.css.map'},{'revision':null,'url':'/220.bundle.558ece074ec74b27208b.js'},{'revision':'ab19565c3c271f425eace54a300bccb4','url':'/220.bundle.558ece074ec74b27208b.js.LICENSE.txt'},{'revision':'b3ae70e361f2c4f54736d7c9bd6c264e','url':'/220.bundle.558ece074ec74b27208b.js.map'},{'revision':null,'url':'/23.bundle.77d9f024d19998c09588.js'},{'revision':'6a64c367103dd53444c072d3ec3a6bd0','url':'/23.bundle.77d9f024d19998c09588.js.map'},{'revision':null,'url':'/236.bundle.6d55e16f81315f84c56e.js'},{'revision':'c6a68195dce8d5b77f0a94a699c6857f','url':'/236.bundle.6d55e16f81315f84c56e.js.map'},{'revision':null,'url':'/250.bundle.ed5533070e4e2028838e.js'},{'revision':'400dcebdaeddd4858c60642f8cb55d50','url':'/250.bundle.ed5533070e4e2028838e.js.map'},{'revision':'fae0898b7f424a92fe03176f870d75a7','url':'/250.css'},{'revision':'d125ae3202f88a549940685097175b43','url':'/250.css.map'},{'revision':null,'url':'/281.bundle.bfbd480fecb96f8e5139.js'},{'revision':'efdd87dc692d0f933e427ec9780d7544','url':'/281.bundle.bfbd480fecb96f8e5139.js.map'},{'revision':null,'url':'/296.bundle.10d6c73c346434953c40.js'},{'revision':'03d40bb7d7bf7b2974747fa48a171631','url':'/296.bundle.10d6c73c346434953c40.js.map'},{'revision':null,'url':'/342.bundle.3ff0ec0f409e69759c24.js'},{'revision':'a3ba7bcf296aa66c71c06bd8df37b8d2','url':'/342.bundle.3ff0ec0f409e69759c24.js.map'},{'revision':null,'url':'/348.bundle.97b882aa3d0d20021728.js'},{'revision':'16511d9de06ce62bc00bcdd211ae5d7b','url':'/348.bundle.97b882aa3d0d20021728.js.map'},{'revision':null,'url':'/359.bundle.3eae9322e9986046c58c.js'},{'revision':'c8c2be69e5fb3b17d3469d6f313ff776','url':'/359.bundle.3eae9322e9986046c58c.js.map'},{'revision':'c4ea120c6da08aa75348edfa3e57ece9','url':'/36785fbd89b0e17f6099.wasm'},{'revision':null,'url':'/370.bundle.e5043ec1c50b45721acc.js'},{'revision':'2614cf7562b26b4223cff8f09f97caa1','url':'/370.bundle.e5043ec1c50b45721acc.js.map'},{'revision':null,'url':'/379.bundle.0f8519d98c21020067a9.js'},{'revision':'275fe79abee3b697f1673c8bd9c58856','url':'/379.bundle.0f8519d98c21020067a9.js.LICENSE.txt'},{'revision':'52a87c3fc3bf914a171c4b3559bce35f','url':'/379.bundle.0f8519d98c21020067a9.js.map'},{'revision':null,'url':'/410.bundle.ab79b1f18860c05cac3a.js'},{'revision':'2cb9d0f75f6b19fc75ece4014889ef94','url':'/410.bundle.ab79b1f18860c05cac3a.js.map'},{'revision':null,'url':'/417.bundle.4859557c3e7e4e3ca348.js'},{'revision':'f21750a3bb7a5b6971421db2e725e98e','url':'/417.bundle.4859557c3e7e4e3ca348.js.map'},{'revision':null,'url':'/451.bundle.36bfea92c0ee38301506.js'},{'revision':'c9e8f6d3743b589d62f8e3e80ed0fb88','url':'/451.bundle.36bfea92c0ee38301506.js.map'},{'revision':null,'url':'/455.bundle.3f81579ad67c19b04859.js'},{'revision':'01aaa77009503538df04b80e240ee9b9','url':'/455.bundle.3f81579ad67c19b04859.js.map'},{'revision':null,'url':'/466.bundle.4e2c300eb67119db0522.js'},{'revision':'c2f26432a0f58353491784e166e2d05d','url':'/466.bundle.4e2c300eb67119db0522.js.map'},{'revision':'61acdf0f062c0a50c90d7f38b4fec522','url':'/466.css'},{'revision':'a9d8c9ebb10533f6cd761340e5fc4ab8','url':'/466.css.map'},{'revision':null,'url':'/471.bundle.04b9796903ddc131f56e.js'},{'revision':'f4499f9ec113c07458deb6cab2bc8f96','url':'/471.bundle.04b9796903ddc131f56e.js.map'},{'revision':'c377e1f5fe4a207d270c3f7a8dd3e3ca','url':'/5004fdc02f329ce53b69.wasm'},{'revision':null,'url':'/506.bundle.0099800ba5f720de9650.js'},{'revision':'0360d24f754251792a2fd5fc129434d6','url':'/506.bundle.0099800ba5f720de9650.js.map'},{'revision':null,'url':'/513.bundle.dca17d81e7e0ff548f61.js'},{'revision':'3df54bba2137ec524f3fb39f2c61461a','url':'/513.bundle.dca17d81e7e0ff548f61.js.LICENSE.txt'},{'revision':'50d5fb01cfe6de594f85666df5aaccc7','url':'/513.bundle.dca17d81e7e0ff548f61.js.map'},{'revision':null,'url':'/515.bundle.73c16ae90052d97429a8.js'},{'revision':'b77f7a57a358ff7a9e4d341060ea79de','url':'/515.bundle.73c16ae90052d97429a8.js.map'},{'revision':null,'url':'/516.bundle.9443d533ac4271a94485.js'},{'revision':'8c98a84a2ccc5680e085e268054d0d4d','url':'/516.bundle.9443d533ac4271a94485.js.map'},{'revision':'b6f996e49917edb0fd252bc164244af3','url':'/516.css'},{'revision':'f8a19c0b0f74e0e815277e3d73ac741f','url':'/516.css.map'},{'revision':'c8bd83bb3850741e0139036d4f0d8754','url':'/579.css'},{'revision':'5946d43625bddb16d3b57432589b548e','url':'/579.css.map'},{'revision':null,'url':'/604.bundle.9477bed4d89c962cb3df.js'},{'revision':'cd6c925fd44d3eb01c4b35f8a08469e6','url':'/604.bundle.9477bed4d89c962cb3df.js.map'},{'revision':'adfcdf177b2a25b4861c65ec3055f98b','url':'/610.min.worker.js'},{'revision':'3c2206525c18cd87dd28082949a4e43e','url':'/610.min.worker.js.map'},{'revision':null,'url':'/613.bundle.8034ffb4351b7cfae63b.js'},{'revision':'aef5256979e64f10e768571e34b40e9c','url':'/613.bundle.8034ffb4351b7cfae63b.js.map'},{'revision':null,'url':'/617.bundle.bb4da559329456302199.js'},{'revision':'841120d76f76e268dceda4d47c60aa40','url':'/617.bundle.bb4da559329456302199.js.LICENSE.txt'},{'revision':null,'url':'/627.bundle.bf5c203823fc686cfbb7.js'},{'revision':'3df54bba2137ec524f3fb39f2c61461a','url':'/627.bundle.bf5c203823fc686cfbb7.js.LICENSE.txt'},{'revision':'b5b9dacac632b406fbf2d02f27361e65','url':'/627.bundle.bf5c203823fc686cfbb7.js.map'},{'revision':'5800265b6831396572fb5d32c6bd8eef','url':'/62ab5d58a2bea7b5a1dc.wasm'},{'revision':'ce10eced3ce34e663d86569b27f5bffb','url':'/65916ef3def695744bda.wasm'},{'revision':null,'url':'/662.bundle.754b8ca2d8c075e19f7d.js'},{'revision':'13cfbc37217ba8f9532d71de28809d8c','url':'/662.bundle.754b8ca2d8c075e19f7d.js.LICENSE.txt'},{'revision':'931c0c31158b7f1f6e934b66d1fd65cc','url':'/662.bundle.754b8ca2d8c075e19f7d.js.map'},{'revision':null,'url':'/686.bundle.136a556fcef6a9db2bb3.js'},{'revision':'e347b47bca447ff7783dd64f376fc116','url':'/686.bundle.136a556fcef6a9db2bb3.js.map'},{'revision':null,'url':'/687.bundle.006b8b8b82afe8944700.js'},{'revision':'098f375eda6679030850053cf6bb9b71','url':'/687.bundle.006b8b8b82afe8944700.js.map'},{'revision':null,'url':'/740.bundle.ac401c35db436cdbb297.js'},{'revision':'57076409cdf698531a0a6eda55be8d94','url':'/740.bundle.ac401c35db436cdbb297.js.map'},{'revision':'cf3e4d4fa8884275461c195421812256','url':'/75788f12450d4c5ed494.wasm'},{'revision':'cc4a3a4da4ac1b863a714f93c66c6ef2','url':'/75a0c2dfe07b824c7d21.wasm'},{'revision':null,'url':'/77.bundle.47c6ed5d12bd9f06f05a.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'/77.bundle.47c6ed5d12bd9f06f05a.js.LICENSE.txt'},{'revision':'11daa77cc6b1c2ef818d6514a504f35c','url':'/77.bundle.47c6ed5d12bd9f06f05a.js.map'},{'revision':null,'url':'/775.bundle.f8f6f70fabcf5cbbd7db.js'},{'revision':'a43adbe15fbbf09e693ed665d9929bdf','url':'/775.bundle.f8f6f70fabcf5cbbd7db.js.map'},{'revision':null,'url':'/814.bundle.e47c78fe3ace5befa760.js'},{'revision':'4b5fc9d676bff0989f2b3ac62e031155','url':'/814.bundle.e47c78fe3ace5befa760.js.map'},{'revision':null,'url':'/816.bundle.0042f6cce47392021ea2.js'},{'revision':'f1b5cada84288d935a25a83bb5b12d62','url':'/816.bundle.0042f6cce47392021ea2.js.LICENSE.txt'},{'revision':'111f2575a004d28457eff586f3a8e7ee','url':'/816.bundle.0042f6cce47392021ea2.js.map'},{'revision':null,'url':'/822.bundle.ef76b6cb5806fe19c592.js'},{'revision':'506594502744069d859e527c9571e1c0','url':'/822.bundle.ef76b6cb5806fe19c592.js.map'},{'revision':null,'url':'/851.bundle.5fa9e1900a04c13d2f10.js'},{'revision':'572c3fa82cc19719c058602871eff676','url':'/851.bundle.5fa9e1900a04c13d2f10.js.map'},{'revision':null,'url':'/886.bundle.d68697b276587bd5b96b.js'},{'revision':'f02c7c98e69191b0144c137963839392','url':'/886.bundle.d68697b276587bd5b96b.js.map'},{'revision':null,'url':'/940.bundle.68d15615f24fbc19531a.js'},{'revision':'ab9809b3e19db4cb7ceb747e76cee855','url':'/940.bundle.68d15615f24fbc19531a.js.map'},{'revision':'30ca7c265a7fdd034b427b49882e69c9','url':'/945.min.worker.js'},{'revision':'cdf6f0457d4af2cef04fc41816241bc1','url':'/945.min.worker.js.map'},{'revision':'d1895aa7a4595dc279c382e5a31ef9f4','url':'/_headers'},{'revision':'e3bf0f3e9c34f51ad59836ae8e8eaf43','url':'/_redirects'},{'revision':'4d0c260277803517074a7250cc793fb9','url':'/app-config.js'},{'revision':'48a8208f0d9cedef1be7e42094925f79','url':'/app.bundle.css'},{'revision':'6cf3e6629537265252d49dbf0e849a69','url':'/app.bundle.css.map'},{'revision':null,'url':'/app.bundle.ee798c7d499e12f5d4b8.js'},{'revision':'388a650c20361f8874418200d3e89307','url':'/app.bundle.ee798c7d499e12f5d4b8.js.LICENSE.txt'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'/assets/android-chrome-144x144.png'},{'revision':'5cde390de8a619ebe55a669d2ac3effd','url':'/assets/android-chrome-192x192.png'},{'revision':'e7466a67e90471de05401e53b8fe20be','url':'/assets/android-chrome-256x256.png'},{'revision':'9bbe9b80156e930d19a4e1725aa9ddae','url':'/assets/android-chrome-36x36.png'},{'revision':'5698b2ac0c82fe06d84521fc5482df04','url':'/assets/android-chrome-384x384.png'},{'revision':'56bef3fceec344d9747f8abe9c0bba27','url':'/assets/android-chrome-48x48.png'},{'revision':'3e8b8a01290992e82c242557417b0596','url':'/assets/android-chrome-512x512.png'},{'revision':'517925e91e2ce724432d296b687d25e2','url':'/assets/android-chrome-72x72.png'},{'revision':'4c3289bc690f8519012686888e08da71','url':'/assets/android-chrome-96x96.png'},{'revision':'cf464289183184df09292f581df0fb4f','url':'/assets/apple-touch-icon-1024x1024.png'},{'revision':'0857c5282c594e4900e8b31e3bade912','url':'/assets/apple-touch-icon-114x114.png'},{'revision':'4208f41a28130a67e9392a9dfcee6011','url':'/assets/apple-touch-icon-120x120.png'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'/assets/apple-touch-icon-144x144.png'},{'revision':'977d293982af7e9064ba20806b45cf35','url':'/assets/apple-touch-icon-152x152.png'},{'revision':'6de91b4d2a30600b410758405cb567b4','url':'/assets/apple-touch-icon-167x167.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'/assets/apple-touch-icon-180x180.png'},{'revision':'647386c34e75f1213830ea9a38913525','url':'/assets/apple-touch-icon-57x57.png'},{'revision':'0c200fe83953738b330ea431083e7a86','url':'/assets/apple-touch-icon-60x60.png'},{'revision':'517925e91e2ce724432d296b687d25e2','url':'/assets/apple-touch-icon-72x72.png'},{'revision':'c9989a807bb18633f6dcf254b5b56124','url':'/assets/apple-touch-icon-76x76.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'/assets/apple-touch-icon-precomposed.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'/assets/apple-touch-icon.png'},{'revision':'05fa74ea9c1c0c3931ba96467999081d','url':'/assets/apple-touch-startup-image-1182x2208.png'},{'revision':'9e2cd03e1e6fd0520eea6846f4278018','url':'/assets/apple-touch-startup-image-1242x2148.png'},{'revision':'5591e3a1822cbc8439b99c1a40d53425','url':'/assets/apple-touch-startup-image-1496x2048.png'},{'revision':'337de578c5ca04bd7d2be19d24d83821','url':'/assets/apple-touch-startup-image-1536x2008.png'},{'revision':'cafb4ab4eafe6ef946bd229a1d88e7de','url':'/assets/apple-touch-startup-image-320x460.png'},{'revision':'d9bb9e558d729eeac5efb8be8d6111cc','url':'/assets/apple-touch-startup-image-640x1096.png'},{'revision':'038b5b02bac8b82444bf9a87602ac216','url':'/assets/apple-touch-startup-image-640x920.png'},{'revision':'2177076eb07b1d64d663d7c03268be00','url':'/assets/apple-touch-startup-image-748x1024.png'},{'revision':'4fc097443815fe92503584c4bd73c630','url':'/assets/apple-touch-startup-image-750x1294.png'},{'revision':'2e29914062dce5c5141ab47eea2fc5d9','url':'/assets/apple-touch-startup-image-768x1004.png'},{'revision':'f692ec286b3a332c17985f4ed38b1076','url':'/assets/browserconfig.xml'},{'revision':'f3d9a3b647853c45b0e132e4acd0cc4a','url':'/assets/coast-228x228.png'},{'revision':'ad6e1def5c66193d649a31474bbfe45d','url':'/assets/favicon-16x16.png'},{'revision':'84d1dcdb6cdfa55e2f46be0c80fa5698','url':'/assets/favicon-32x32.png'},{'revision':'ee9447b7bb87e0e8c3e64f2b44dc388f','url':'/assets/favicon.ico'},{'revision':'5df2a5b0cee399ac0bc40af74ba3c2cb','url':'/assets/firefox_app_128x128.png'},{'revision':'11fd9098c4b07c8a07e1d2a1e309e046','url':'/assets/firefox_app_512x512.png'},{'revision':'27cddfc922dca3bfa27b4a00fc2f5e36','url':'/assets/firefox_app_60x60.png'},{'revision':'a7535d890a3207a508f86061600a138d','url':'/assets/gradient.svg'},{'revision':'4ba612482debeec96808b5fd52c12534','url':'/assets/loader.gif'},{'revision':'2017d95fae79dcf34b5a5b52586d4763','url':'/assets/manifest.webapp'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'/assets/mstile-144x144.png'},{'revision':'334895225e16a7777e45d81964725a97','url':'/assets/mstile-150x150.png'},{'revision':'e295cca4af6ed0365cf7b014d91b0e9d','url':'/assets/mstile-310x150.png'},{'revision':'cbefa8c42250e5f2443819fe2c69d91e','url':'/assets/mstile-310x310.png'},{'revision':'aa411a69df2b33a1362fa38d1257fa9d','url':'/assets/mstile-70x70.png'},{'revision':'5609af4f69e40e33471aee770ea1d802','url':'/assets/yandex-browser-50x50.png'},{'revision':'dd001f21b3970d5a7f3e245cc10d21df','url':'/assets/yandex-browser-manifest.json'},{'revision':'52b9a07fe0541fe8c313d9788550bf51','url':'/b6b803111e2d06a825bd.wasm'},{'revision':'7edb59d2be7c993050cb31ded36afa31','url':'/c22b37c3488e1d6c3aa4.wasm'},{'revision':'e907ee4e70158e12c509fc86ab408cc2','url':'/cornerstoneDICOMImageLoader.min.js'},{'revision':'f1b5cada84288d935a25a83bb5b12d62','url':'/cornerstoneDICOMImageLoader.min.js.LICENSE.txt'},{'revision':'c6e241f89065e71d3854ac66720ab5d0','url':'/cornerstoneDICOMImageLoader.min.js.map'},{'revision':null,'url':'/dicom-microscopy-viewer.bundle.891b86d0c0df9ca3fe6b.js'},{'revision':'a32734d2bcb762bc2576581869d2a32c','url':'/dicom-microscopy-viewer.bundle.891b86d0c0df9ca3fe6b.js.LICENSE.txt'},{'revision':'fa4dc6d260154109a901a1ac672bd6d2','url':'/dicomMicroscopyViewer.min.js'},{'revision':'450494c199cf8dd8e8c34d5e98bf5334','url':'/dicomMicroscopyViewer.min.js.LICENSE.txt'},{'revision':'8a01f4e4374adc87eb07850f350aea8f','url':'/es6-shim.min.js'},{'revision':'020680fc0de257a26ef6c1df902f8d8f','url':'/es6-shim.min.js.LICENSE.txt'},{'revision':'e6d1707b32d2dee763af9be4012050a7','url':'/google.js'},{'revision':'08ba2153be0fd046a149d6ae54449730','url':'/index.html'},{'revision':'2c706eca5d5ca74fcddc81692e392176','url':'/index.worker.e62ecca63f1a2e124230.worker.js'},{'revision':'beaf37c564436e46bbcd825f0330cdbf','url':'/index.worker.e62ecca63f1a2e124230.worker.js.map'},{'revision':'dea2eed78c84c32cf7a90d565a289883','url':'/index.worker.min.worker.js'},{'revision':'fd1116add443fee52a935df926396e0f','url':'/index.worker.min.worker.js.map'},{'revision':'96664560310999eea0795ed980d33a97','url':'/init-service-worker.js'},{'revision':'74fc9658b62903be2048c1f82a22b4d4','url':'/manifest.json'},{'revision':'3fa71aa0af3e34b4ebd9a71eee0f4bdd','url':'/ohif-logo-light.svg'},{'revision':'7e81da785c63e75650101db6c5d7560e','url':'/ohif-logo.svg'},{'revision':'8032232e4e08184ee8a9e4c018c8ba55','url':'/oidc-client.min.js'},{'revision':'4b43be1f14657780d4b120e50d8fee65','url':'/oidc-client.min.js.LICENSE.txt'},{'revision':'f5fd3850f3da362de535533e3803383f','url':'/polyfill.min.js'},{'revision':'b1e488d9955b62bd2858874df11d5223','url':'/silent-refresh.html'},{'revision':'454a9caed5bf6cbe789d4dc58619fed0','url':'/sw.js.map'}]);
//# sourceMappingURL=sw.js.map