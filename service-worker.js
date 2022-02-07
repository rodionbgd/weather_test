/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-37481be9'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "0942d1e1c447d6ce3ffc.ttf",
    "revision": null
  }, {
    "url": "0ad5cebc20253f0446de.jpeg",
    "revision": null
  }, {
    "url": "1197a2e2549c82db3ea1.gif",
    "revision": null
  }, {
    "url": "1341a15172cec8dae06e.svg",
    "revision": null
  }, {
    "url": "2444fb020cac574a99df.jpeg",
    "revision": null
  }, {
    "url": "32716b7390213982a8e3.jpeg",
    "revision": null
  }, {
    "url": "371511ddba5fdac0538c.woff",
    "revision": null
  }, {
    "url": "404.html",
    "revision": "5450f1348e9a5c59a5d0bdace1cc19d2"
  }, {
    "url": "43d94a89678da3e8584b.gif",
    "revision": null
  }, {
    "url": "44f3be2317f0127e1bd4.gif",
    "revision": null
  }, {
    "url": "54bd7f0d5eab9620878d.gif",
    "revision": null
  }, {
    "url": "9e17a68119ddd26983d2.gif",
    "revision": null
  }, {
    "url": "aa4da52146270883f691.jpeg",
    "revision": null
  }, {
    "url": "aee1ee7e25b83d899f00.png",
    "revision": null
  }, {
    "url": "bb2ec001c20cf752f852.eot",
    "revision": null
  }, {
    "url": "e218aee6928fe3da9ed6.woff2",
    "revision": null
  }, {
    "url": "e3e1a81cada630ef3a8e.gif",
    "revision": null
  }, {
    "url": "font/weathericons-regular-webfont.eot",
    "revision": "4b658767da6bd92ce2addb3ce512784d"
  }, {
    "url": "font/weathericons-regular-webfont.svg",
    "revision": "ecaf8b481729b18f6a8494d9f691cdae"
  }, {
    "url": "font/weathericons-regular-webfont.ttf",
    "revision": "4618f0de2a818e7ad3fe880e0b74d04a"
  }, {
    "url": "font/weathericons-regular-webfont.woff",
    "revision": "8cac70ebda3f23ce472110d9f21e8593"
  }, {
    "url": "font/weathericons-regular-webfont.woff2",
    "revision": "1cd48d78f06d33973d9d761d426e69bf"
  }, {
    "url": "images/bg/01d_bg.png",
    "revision": "aaa609dcb2a4fe65fe7d9a6744761ed2"
  }, {
    "url": "images/bg/01n_bg.gif",
    "revision": "72ca05d90d7bf8a9d8fb4fee9ddd49b0"
  }, {
    "url": "images/bg/02d_bg.webm",
    "revision": "61afdcb5ea17d0ee341b0385487a4dd3"
  }, {
    "url": "images/bg/02n_bg.jpeg",
    "revision": "93da895506e0b4efeed889d7f5bab843"
  }, {
    "url": "images/bg/03n_bg.gif",
    "revision": "5cc8ce025711473d5769e603aa99df59"
  }, {
    "url": "images/bg/09d_bg.jpeg",
    "revision": "f2f006be6c41c69da4fb033254850e87"
  }, {
    "url": "images/bg/10d_bg.gif",
    "revision": "c51615ea1d2f7e4b73fcf96c68b47635"
  }, {
    "url": "images/bg/10n_bg.gif",
    "revision": "c51615ea1d2f7e4b73fcf96c68b47635"
  }, {
    "url": "images/bg/11d_bg.gif",
    "revision": "1edf90cd0f887e29a54224a105b778d7"
  }, {
    "url": "images/bg/11n_bg.gif",
    "revision": "1edf90cd0f887e29a54224a105b778d7"
  }, {
    "url": "images/bg/13d_bg.gif",
    "revision": "3d140c3259901bb91715871bce0a001c"
  }, {
    "url": "images/bg/50d_bg.jpeg",
    "revision": "d58fd54d23fbc28146ea5d538cf22801"
  }, {
    "url": "images/bg/50n_bg.jpeg",
    "revision": "df0803704e6da0b0651c831e7c70ed12"
  }, {
    "url": "images/header_out_icon.png",
    "revision": "5911ff71429e367351774cc929a948a3"
  }, {
    "url": "images/header_over_icon.png",
    "revision": "ea81a319adfcfec57140b68243a58359"
  }, {
    "url": "images/load.gif",
    "revision": "e817279537a0417d042f62fbb1b99eea"
  }, {
    "url": "images/location_1.png",
    "revision": "823a4146fce91cfbbe13418595924553"
  }, {
    "url": "images/location_2.png",
    "revision": "3ec09fd2915cd69179db77d24805e639"
  }, {
    "url": "images/moon_phase.png",
    "revision": "08127b2a24a281f8ca883c3ac110e78d"
  }, {
    "url": "images/spinner.gif",
    "revision": "c59ccd93342633ab1880475d6e8f2c22"
  }, {
    "url": "images/sun_phase.png",
    "revision": "1fde42cd937408e6e7470a7ef9c38ce2"
  }, {
    "url": "images/verbose/feels_like.png",
    "revision": "c1f284883586443f12deed8f139559d1"
  }, {
    "url": "images/verbose/humidity.png",
    "revision": "94fee0046a1c0b1959b9f121f6d949b0"
  }, {
    "url": "images/verbose/pressure.png",
    "revision": "a9993894cb7ab6faa36fb36b4ec596a9"
  }, {
    "url": "images/verbose/uvi.png",
    "revision": "f1ab7dd0e14dd1544edd0a26f928cffa"
  }, {
    "url": "images/verbose/wind_dir.png",
    "revision": "d5e258894af8f5ef953b4de27fab71a4"
  }, {
    "url": "images/verbose/wind_speed.png",
    "revision": "ad0fa161c1b0d7ae87848eb9c65380e3"
  }, {
    "url": "images/weather/01d_icon.png",
    "revision": "ed4ab79e4b69cd6611ea3c2e3f3ec116"
  }, {
    "url": "images/weather/01n_icon.png",
    "revision": "daf271e38d0dd7529b60e6be1e272180"
  }, {
    "url": "images/weather/02d_icon.png",
    "revision": "aeb1f3f89479a6fbcc93771c44f65b74"
  }, {
    "url": "images/weather/02n_icon.png",
    "revision": "200bb3738f65fdc0602a6193cd281790"
  }, {
    "url": "images/weather/03d_icon.png",
    "revision": "7355edfa7767bcf27b2733cbd946ef64"
  }, {
    "url": "images/weather/03n_icon.png",
    "revision": "c48f2f8279995054d9cd72149539e320"
  }, {
    "url": "images/weather/04d_icon.png",
    "revision": "c4f5f089fcf37901e817fe86ff4eb19d"
  }, {
    "url": "images/weather/04n_icon.png",
    "revision": "0c0eb961eb54d458fb6f24a5376bf23e"
  }, {
    "url": "images/weather/09d_icon.png",
    "revision": "fce89c779e793832044a31ea6300699f"
  }, {
    "url": "images/weather/09n_icon.png",
    "revision": "795be0c26d010a8e38cd5bf62e81090c"
  }, {
    "url": "images/weather/10d_icon.png",
    "revision": "7b84187f2a4f8e133e23716a5a4fad0e"
  }, {
    "url": "images/weather/10n_icon.png",
    "revision": "c3ccb495e81f36f0a0f1f14c71ff9657"
  }, {
    "url": "images/weather/11d_icon.png",
    "revision": "0cb6a13d658d35e9e7204f44feb28230"
  }, {
    "url": "images/weather/11n_icon.png",
    "revision": "ad07a0a132f3cf5ce5547d1e89edf8de"
  }, {
    "url": "images/weather/13d_icon.png",
    "revision": "ddc59d810c62fd37e9588995089fd518"
  }, {
    "url": "images/weather/13n_icon.png",
    "revision": "27d6ec16a521e90e18e8389f69db59a8"
  }, {
    "url": "images/weather/50d_icon.png",
    "revision": "a4e3ca43134f903376365c160b5616bd"
  }, {
    "url": "images/weather/50n_icon.png",
    "revision": "d8bf6b400b10787d46e4f740c4c01789"
  }, {
    "url": "index.html",
    "revision": "5450f1348e9a5c59a5d0bdace1cc19d2"
  }, {
    "url": "main.bundle.js",
    "revision": "53bc9d978201f51d7eb316c7af76c828"
  }, {
    "url": "main.css",
    "revision": "5c8493f66a5c5c3f05d09b15faacfd58"
  }, {
    "url": "manifest.json",
    "revision": "90716e0e7b8af0ba294161cec0bba28f"
  }, {
    "url": "sw.js",
    "revision": "607040a4c0041d478f0393bb18741806"
  }], {});

}));
