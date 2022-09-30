// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "636ab4c68f308cbc4539fecb2e9e9329"
  },
  {
    "url": "appendix/links/index.html",
    "revision": "687ff2350c1f9cd90ebd2084800d7397"
  },
  {
    "url": "basic/array/index.html",
    "revision": "01237ad480ababfcdaaaa3b50e2ff94c"
  },
  {
    "url": "basic/async/img/async-single-thread-tasks.png",
    "revision": "9fb884ff15abc45dfe46c52e70a1f5c6"
  },
  {
    "url": "basic/async/img/block--async-single-thread-tasks.png",
    "revision": "258c557335c93435dbe369c8b4eb148a"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e4cec834ad9a6a99d63d91001dcaa650"
  },
  {
    "url": "basic/async/img/single-thread-tasks.png",
    "revision": "44331a644afe9a76e9ffff8c8dcb4844"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "210afd18eefa172748da7be410597a2f"
  },
  {
    "url": "basic/async/index.html",
    "revision": "26da4eb612d681539cc5b5454614a797"
  },
  {
    "url": "basic/class/index.html",
    "revision": "42349ac5969b12465456442ec561c6ff"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "dcce4a6afbb3180d38d2aa02000ffc3e"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "5dc099ca6f1e2c9cbbe1968d7e6626df"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "1639895b23ab60502295eedff57780ad"
  },
  {
    "url": "basic/date/index.html",
    "revision": "147905863886c35027c34474cba00eef"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "db67637d3c7a54926ef0d3ade96afd62"
  },
  {
    "url": "basic/error-try-catch/img/console.error.png",
    "revision": "d4739aedc8ca6045393bb676760474e1"
  },
  {
    "url": "basic/error-try-catch/img/error.png",
    "revision": "adb2c821a705e6ef2e554922ed1d0ac8"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "5cc90ec779809840e3e22bbee240c2c4"
  },
  {
    "url": "basic/error-try-catch/src/console/index.html",
    "revision": "f1d5ff6a6b82e975f74ac1e3d877f723"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "c7041bcb0595fec173941822edc999f6"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "23467278f73a11ad295c1bf62a74c898"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "e17791bcc5a205628c5833a4962c1dde"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "2858951a885713a1786e9ce3ee1908a5"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "29d7f0c84dde76927ef1c379a87a14e3"
  },
  {
    "url": "basic/index.html",
    "revision": "691b6122bdc5813d2593eb1b85298be1"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "d1dd8f9b6e0e41d518e0c4114849b275"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "62114170e76e5978c89824a19e256139"
  },
  {
    "url": "basic/json/index.html",
    "revision": "a2f8e456c885de1028a4532b491ba0f4"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "f927f1ab54a0604564851f71406d0287"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "abdf8a1ac6968eacdda08b3a7963e66f"
  },
  {
    "url": "basic/math/index.html",
    "revision": "0df715cfb0100458fc736343ccb5b631"
  },
  {
    "url": "basic/module/index.html",
    "revision": "7e8a16c83b1bdcbe170a248ef11181d0"
  },
  {
    "url": "basic/object/index.html",
    "revision": "8ea6a53da03f43c3a2fce086c16028f7"
  },
  {
    "url": "basic/operator/img/0000_0000_0000_0000_0000_0000_0000_0001.png",
    "revision": "6b390264395ab291937db0329f5a8eec"
  },
  {
    "url": "basic/operator/img/1111_1111_1111_1111_1111_1111_1111_1111.png",
    "revision": "8610b114ac684d837756124da4e0f9fd"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "5bba5171eab8b07edb1bca60e5d7c046"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "2ea3d705fc1e799e2085ba7f096f8c9c"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "07ba5046df791f17c71d281c2859ab8a"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "929addad996d0b00b5db6c5385d5de7f"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "d9e59e92e4da54e931d757a2eb36ce49"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "222968a41f4a7d9556e7973e4370e951"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "9671c2ac76c754c62d626695e8ae43c4"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "dd10b4c7b05842820f35ff4cc9368115"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "13a2b195b242923f47d13f9d96f990b5"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "38e8c437c28e8999e3f91b57c799cec8"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "eb6d5284b77b72a8faa2bafa0c18ba14"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "f542eb3751dcea96d66b252689fba9cb"
  },
  {
    "url": "basic/string/index.html",
    "revision": "425a4ac5d0a1156601e7b5c6c2f00490"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "0cfcbf202a91b0873f3544712f0deeab"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "e41c93544cbf012e1c91ec9b0bcc31e6"
  },
  {
    "url": "cheatsheet/index.html",
    "revision": "ea392c02b3d2df410d2d1ba3bbbc19fc"
  },
  {
    "url": "cheetsheet/index.html",
    "revision": "c6c30c5f139f5c4b78ec9d79ad31ef41"
  },
  {
    "url": "gitbook/@honkit/honkit-plugin-highlight/ebook.css",
    "revision": "49282fd7a65a9a3e6eb6021e333bdab7"
  },
  {
    "url": "gitbook/@honkit/honkit-plugin-highlight/website.css",
    "revision": "637413aed3ac91940e57d22879ed68c2"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "8e12063d49ae924cd3480aac1d58f7e9"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "e67751e79ef4d4871dfb02c0a16fa1b4"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "3a881b8d1f7abde533ae746669319b13"
  },
  {
    "url": "gitbook/honkit-plugin-sandpack/honkit-plugin-sandpack.js",
    "revision": "5cb7c7d98a6c9f87b41d072663890366"
  },
  {
    "url": "gitbook/icons/amazon-icon.png",
    "revision": "c6f689c33b509e5718c2fd1e784b28d1"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "eb8a1189f94bf89f92c5e3e6b0b49964"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "931315b259e37675797d3f48f80fa744"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "496c3f17c9e129b65dbf0b9a615a414b"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "edf553155f2da0d9bfbf5d7491ab341b"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "1119408dc608cc71f41b03e295183d81"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "7e86e9ee5b06f968f7739f2dfdcd03b3"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "2f00a83804b18c401b2afd0977113c0a"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "496c3f17c9e129b65dbf0b9a615a414b"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "6d72a59f07e54cc60663a3c397cba063"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "009aa3b765bb34e141bec145c3ce6858"
  },
  {
    "url": "index.html",
    "revision": "f799ef061404830cde3c20b45aeb2587"
  },
  {
    "url": "intro/authors/index.html",
    "revision": "11fd55e3e772091beb5bd10302c19bad"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "7b461b6e149f67c8a7c7c18c5a53e449"
  },
  {
    "url": "intro/index.html",
    "revision": "2f62067140a42190142e9375b70354cf"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "9f56e792d2fe194ba8b50de2e27fa597"
  },
  {
    "url": "landing/css/style.css",
    "revision": "30232f49621b4afedbd4e2d1f0db2d3d"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "8822a90ec70b645fb5055c20169e1df8"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "6a830497c7f617a570db7246e0701495"
  },
  {
    "url": "landing/index.html",
    "revision": "d07910b0a047423b21aade637cb7e75d"
  },
  {
    "url": "outro/index.html",
    "revision": "d824899a24a7cf5e911fbc45e10f8be6"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "58744761afe2ebe70c39ff2b4c61b5aa"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "7c9a830ea60c7f36b7497caf5a8e1b86"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "d3966c68b57ff30ca7c7bd0960797fca"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "c668039b6a80d3a7510d20385f101241"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "feea81bd10ffcd75f0faeed6c1c56cbc"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "1763cb9bc16b6d860badb9583fef1f33"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-1.png",
    "revision": "13663ef2f4142627e67847647642e6d9"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-2.png",
    "revision": "c87b78972104eb082f3d939ec4bc243c"
  },
  {
    "url": "use-case/ajaxapp/http/index.html",
    "revision": "b34179f30072f848a429e548dcde8898"
  },
  {
    "url": "use-case/ajaxapp/http/src/index.html",
    "revision": "20ac665f8c423183077d0c9d96046394"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "ff42d2fbedf3cc6391561598b4401250"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "7efcd647fa24ac88363650c7ab4275d0"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "eadc0029d0e50e8b161d500afd520fed"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "8fabf08afa50f533922ee33519b1f5f8"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "8fabf08afa50f533922ee33519b1f5f8"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "651fa8730a67aa297192718fa96949dd"
  },
  {
    "url": "use-case/index.html",
    "revision": "627f04dc36986f51094f065627d4dc2c"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "703f353c50ea50377deb33029c4d4870"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "4fc90eafb8f07b948d138752a9fcb3ad"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "42769ee7534b2b0ac4a7a6896799aa5f"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "2194980d1105565dc461254011679bc8"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "8eafea51e5af8697473482d937e70f65"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "fdeaab85dc8fb4b6445efb25c1555e42"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected-gfm.html",
    "revision": "bab3ba2ded7964789458b79dea29b6b7"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "3fd11b8807a99394e85b39b332b5fa8b"
  },
  {
    "url": "use-case/setup-local-env/img/index.png",
    "revision": "4d271148cb7c5fb1c549467b1bff5a27"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "a8752c8131dabaf792166410f7969e7b"
  },
  {
    "url": "use-case/setup-local-env/src/index.html",
    "revision": "cc9229dc8c7ec9ed2001348c1deac7fb"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "14eae7c1436054c7fe83d337ecac7d88"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "7ba3436c2edb937bb8de25e2db0bc715"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "38180327a5c28512e55afb67b8b2b64b"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "3f18bd00b8e93877290057512e8eaf32"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "be5eabf9913f6285ec7f4e3d1283553c"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "f2e319b69ef316ddfc03abd42b1becdb"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "3f18bd00b8e93877290057512e8eaf32"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "32cab3b2ed950ab156f898fc679177c2"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "e904efb930b333ad9b2f87de9693d66b"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "511ed06efb3f56bc2075f939912ddab2"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "f55fc6ce38a843014e71993175f8eb89"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "511ed06efb3f56bc2075f939912ddab2"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "9a3d7acd2267a108699033d0c2f9dc95"
  },
  {
    "url": "use-case/todoapp/form-event/img/prevent-event.png",
    "revision": "7b94710d7d89d0541cb9a6ac98026a0a"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "4f0bb90c3c5edc0d908e5726f4ae8e79"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "422fec8fc601410f9fee1a9fe5ab5d87"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "716159606c130aa3813f6e1644960159"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "944f4f5b5d3f34ab48c58f5354129dd6"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "c2402ea91d6e2872bd260a2629b275ae"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "afa24f6d77a10024dec52934ca94e96a"
  }
]);
