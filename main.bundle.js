!function(){"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var r=0,i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=n,this.elem=t,this.sliderElem={}}var t,i;return t=e,(i=[{key:"removeSlider",value:function(){!window.TOUCH&&this.sliderElem&&this.sliderElem.parentNode.removeChild(this.sliderElem)}},{key:"createSlider",value:function(){for(var e="",t=1;t<25;t+=1)e+='<div class="wrap">\n                                    <p>'.concat(new Date(1e3*this.options[t].dt).getHours(),":00</p>"),this.options[t].pop>.45?e+="<p>".concat(Math.round(100*this.options[t].pop),"%</p>"):e+="<p>&nbsp;</p>",e+='<img src="./icons/'.concat(this.options[t].weather[0].icon,'_icon.png" alt="">\n                       <p>').concat(Math.round(this.options[t].temp-273.15),"°</p>\n                                </div>");if(window.TOUCH){var n=document.getElementById("slider");return n.innerHTML="",n.dataset.name=this.options.name,void n.insertAdjacentHTML("afterbegin",e)}var r=document.createElement("section");r.dataset.name=this.elem.dataset.name,r.classList.add("slider"),r.id="slider_d",r.insertAdjacentHTML("afterbegin",e),document.body.insertAdjacentElement("afterbegin",r);var i=this.elem.getBoundingClientRect(),o=i.left+(i.width-r.offsetWidth)/2,c=i.top+window.pageYOffset-r.offsetHeight-5;o+r.offsetWidth>window.innerWidth&&(o=window.innerWidth-r.offsetWidth-5),c<5&&(c=5),r.style.left="".concat(o,"px"),r.style.top="".concat(c,"px")}},{key:"renderSlider",value:function(){var e=document.getElementById("slider_d");if(e){var t=e.getBoundingClientRect(),n=e.offsetLeft,i=t.right;e.addEventListener("selectstart",o),e.addEventListener("dragstart",o),e.addEventListener("pointerdown",(function(t){if(!window.TOUCH&&t.target.closest("div")){var c=e.querySelectorAll("div"),a=t.pageX,u=0,_=0;s="shiftX",d=t.clientX-c[0].getBoundingClientRect().left+n+e.clientLeft,void 0===(y=l())[s]?function(e,t){if("shiftX"===e)r=t}(s,d):y[s]=d,document.addEventListener("pointermove",m),document.addEventListener("pointerup",(function t(){document.removeEventListener("pointermove",m),e.removeEventListener("scroll",o),document.addEventListener("pointerup",t)})),E(t.pageX)}var s,d,y;function E(e){u<_&&c[c.length-1].getBoundingClientRect().right<i||u>_&&c[0].getBoundingClientRect().left>n||(_=u,c.forEach((function(t){t.style.left="".concat(e-f("shiftX"),"px")})))}function m(e){u=e.pageX-a,E(e.pageX)}})),this.sliderElem=e}function o(){return!1}}}])&&n(t.prototype,i),e}();function o(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}var c,a=null;function u(){if(null===a){var e=o();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),a=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return a}function _(){var e=o();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function l(){var e=u(),t=_(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}(c=o()).__rewire_reset_all__||(c.__rewire_reset_all__=function(){c.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)});var s="__INTENTIONAL_UNDEFINED__",d={};function f(e){var t=l();if(void 0===t[e])return function(e){if("shiftX"===e)return r}(e);var n=t[e];return n===s?void 0:n}function y(e,n){var r=l();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){E(e)}))}):(r[e]=void 0===n?s:n,function(){E(e)})}function E(e){var t=l();delete t[e],0==Object.keys(t).length&&delete _()[u]}function m(e){var t=l(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(d,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",f),e("__GetDependency__",f),e("__Rewire__",y),e("__set__",y),e("__reset__",E),e("__ResetDependency__",E),e("__with__",m)}();var p=t(i);function h(e,t){Object.defineProperty(i,e,{value:t,enumerable:!1,configurable:!0})}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function w(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}"object"!==p&&"function"!==p||!Object.isExtensible(i)||(h("__get__",f),h("__GetDependency__",f),h("__Rewire__",y),h("__set__",y),h("__reset__",E),h("__ResetDependency__",E),h("__with__",m),h("__RewireAPI__",d));var R=document.getElementById("current-city"),O=document.getElementById("current-city-img"),L=document.getElementById("current-city-wind"),I=document.getElementById("current-city-weather"),b=document.getElementById("current-city-celsius"),T=document.getElementById("current-temp-max"),D=document.getElementById("current-temp-min"),S=document.getElementById("current-city-pressure"),C=document.getElementById("current-city-humidity"),$=document.getElementById("current-city-sunset"),j=document.getElementById("current-city-sunrise"),B=document.getElementById("day"),G=60*(new Date).getTimezoneOffset();function A(e){var t=["north","north-north-east","north-east","east-north-east","east","east-south-east","south-east","south-south-east","south","south-south-west","south-west","west-south-west","west","west-north-west","north-west","north-north-west"];return t[Math.floor((e+11)/(360/t.length))%t.length]}function N(e){if(e){H("currentCity").textContent=e.name;var t=e.current.weather[0].icon;H("currentCityImg").src="./icons/".concat(t,"_icon.png");var n=H("getWindDirection")(e.current.wind_deg);H("currentCityWind").children[0].src="./icons/wind/icons8-".concat(n,"-80.png");var r=n.split("-").map((function(e){switch(e[0]){case"n":return"С";case"s":return"Ю";case"w":return"З";case"e":return"В";default:return""}})).join("");H("currentCityWind").children[1].innerHTML="".concat(e.current.wind_speed.toFixed(1)," м/с ").concat(r),H("day").textContent=(new Date).toLocaleDateString("ru-RU",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),H("currentCityWeather").textContent=e.current.weather[0].description[0].toUpperCase()+e.current.weather[0].description.substr(1),H("currentCityCelsius").textContent="".concat((e.current.temp-273.15).toFixed(0),"°");var i=Math.max.apply(Math,w(e.hourly.slice(0,25).map((function(e){return e.temp})))),o=Math.min.apply(Math,w(e.hourly.slice(0,25).map((function(e){return e.temp}))));H("currentCityMax").innerHTML="".concat(Math.round(i-273.15).toFixed(0),"° "),H("currentCityMin").innerHTML="/ ".concat(Math.round(o-273.15).toFixed(0),"°"),H("currentCityPressure").textContent="".concat((e.current.pressure/1.36).toFixed(0)," мм рт. ст."),H("currentCityHumidity").textContent="".concat(e.current.humidity," %");var c={hour:new Date(1e3*(e.current.sunrise+e.timezone_offset+H("initialTimeZone"))).getHours(),minute:new Date(1e3*(e.current.sunrise+e.timezone_offset+H("initialTimeZone"))).getMinutes()},a={hour:new Date(1e3*(e.current.sunset+e.timezone_offset+H("initialTimeZone"))).getHours(),minute:new Date(1e3*(e.current.sunset+e.timezone_offset+H("initialTimeZone"))).getMinutes()};H("currentCitySunrise").textContent="".concat("0".concat(c.hour).slice(-2),":").concat("0".concat(c.minute).slice(-2)),H("currentCitySunset").textContent="".concat("0".concat(a.hour).slice(-2),":").concat("0".concat(a.minute).slice(-2))}}function k(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}var W=null;function M(){if(null===W){var e=k();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),W=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return W}function U(){var e=k();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function x(){var e=M(),t=U(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}!function(){var e=k();e.__rewire_reset_all__||(e.__rewire_reset_all__=function(){e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)})}();var X="__INTENTIONAL_UNDEFINED__",Y={};function H(e){var t=x();if(void 0===t[e])return function(e){switch(e){case"currentCity":return R;case"currentCityImg":return O;case"getWindDirection":return A;case"currentCityWind":return L;case"day":return B;case"currentCityWeather":return I;case"currentCityCelsius":return b;case"currentCityMax":return T;case"currentCityMin":return D;case"currentCityPressure":return S;case"currentCityHumidity":return C;case"initialTimeZone":return G;case"currentCitySunrise":return j;case"currentCitySunset":return $}}(e);var n=t[e];return n===X?void 0:n}function P(e,n){var r=x();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){F(e)}))}):(r[e]=void 0===n?X:n,function(){F(e)})}function F(e){var t=x();delete t[e],0==Object.keys(t).length&&delete U()[M]}function z(e){var t=x(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(Y,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",H),e("__GetDependency__",H),e("__Rewire__",P),e("__set__",P),e("__reset__",F),e("__ResetDependency__",F),e("__with__",z)}();var J=document.getElementById("city-list");function Z(e){var t=!1,n=re("cityListElem").querySelector(".city_list__profile[data-name=".concat(e.name,"]"));Object.prototype.hasOwnProperty.call(localStorage,e.name)&&n&&(t=!0),localStorage.setItem(e.name,JSON.stringify(e));var r=Math.max.apply(Math,w(e.hourly.slice(0,25).map((function(e){return e.temp})))),i=Math.min.apply(Math,w(e.hourly.slice(0,25).map((function(e){return e.temp})))),o="./icons/".concat(e.current.weather[0].icon,"_icon.png"),c='<article class="city_list__profile" data-name="'.concat(e.name,'">\n                        <h4 class="city_list__name">').concat(e.name,'</h4>\n                        <img src="').concat(o,'" alt="" class="city_list__picture">\n                        <span class="city_list__value">').concat(+(r-273.15).toFixed(),"&deg\n                        / ").concat(+(i-273.15).toFixed(),"&deg</span>\n                    </article>");return Object.keys(localStorage).length&&(re("cityListElem").style.display="flex"),Object.keys(localStorage).length>5&&(localStorage.removeItem(re("cityListElem").firstElementChild.dataset.name),re("cityListElem").firstElementChild.remove()),t?(n.insertAdjacentHTML("afterend",c),n.remove(),!1):(re("cityListElem").insertAdjacentHTML("beforeend",c),!0)}function q(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}var K=null;function V(){if(null===K){var e=q();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),K=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return K}function Q(){var e=q();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function ee(){var e=V(),t=Q(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}!function(){var e=q();e.__rewire_reset_all__||(e.__rewire_reset_all__=function(){e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)})}();var te="__INTENTIONAL_UNDEFINED__",ne={};function re(e){var t=ee();if(void 0===t[e])return function(e){if("cityListElem"===e)return J}(e);var n=t[e];return n===te?void 0:n}function ie(e,n){var r=ee();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){oe(e)}))}):(r[e]=void 0===n?te:n,function(){oe(e)})}function oe(e){var t=ee();delete t[e],0==Object.keys(t).length&&delete Q()[V]}function ce(e){var t=ee(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(ne,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",re),e("__GetDependency__",re),e("__Rewire__",ie),e("__set__",ie),e("__reset__",oe),e("__ResetDependency__",oe),e("__with__",ce)}();var ae=t(Z);function ue(e,t){Object.defineProperty(Z,e,{value:t,enumerable:!1,configurable:!0})}"object"!==ae&&"function"!==ae||!Object.isExtensible(Z)||(ue("__get__",re),ue("__GetDependency__",re),ue("__Rewire__",ie),ue("__set__",ie),ue("__reset__",oe),ue("__ResetDependency__",oe),ue("__with__",ce),ue("__RewireAPI__",ne));var _e,le,se=document.getElementById("map"),de="";function fe(e,t){if(Le("marker"))return Le("marker").setLatLng([e.latitude,e.longitude]),void Le("marker").bindPopup('<h4 class="marker">'.concat(t,"</h4>"),{closeButton:!1}).openPopup();Le("mapElem").style.overflow="visible",Ie("marker",window.WE.marker([e.latitude,e.longitude]).addTo(Le("map"))),Le("marker").bindPopup('<h4 class="marker">'.concat(t,"</h4>"),{closeButton:!1}).openPopup()}function ye(e){Le("map")&&(Le("map").fitBounds([[e.latitude-90,e.longitude-90],[e.latitude+90,e.longitude+90]]),Le("map").panInsideBounds([[e.latitude-89,e.longitude-89],[e.latitude+89,e.longitude+89]],{heading:1,tilt:0,duration:1.5}))}function Ee(e){var t=window.WE.tileLayer("https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg",{tileSize:1024,bounds:[[-90,-180],[90,180]],minZoom:0,maxZoom:1,tms:!0});Le("map")||Ie("map",window.WE.map("map",{center:[e.latitude,e.longitude],zoom:1,tilting:!0,scrollWheelZoom:!1})),t.addTo(Le("map")),Le("map").setView([e.latitude,e.longitude],1)}function me(e,t,n,r){Le("currentCityImg").src="icons/load.gif",t&&(alert(t+" "+n),fetch("https://api.openweathermap.org/data/2.5/onecall"+"?lat=".concat(e.latitude,"&lon=").concat(e.longitude)+"&exclude=minutely,daily,alerts&lang=ru&appid=".concat(Le("WEATHER_API_KEY"))).then((function(e){return e.json()})).then((function(r){var i=r;i.name=t,n&&(alert(i.name),Le("setCurrentCityWeather")(i)),Le("addCityToList")(i),window.TOUCH&&n&&new(Le("Slider"))(null,i.hourly).createSlider(),!window.TOUCH&&i.name!==Le("lastCity")&&n&&(Le("flyToCity")(e),Le("createMarker")(e,i.name),Ie("lastCity",i.name))})))}function pe(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}var he=null;function ve(){if(null===he){var e=pe();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),he=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return he}function ge(){var e=pe();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function we(){var e=ve(),t=ge(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}!function(){var e=pe();e.__rewire_reset_all__||(e.__rewire_reset_all__=function(){e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)})}();var Re="__INTENTIONAL_UNDEFINED__",Oe={};function Le(e){var t=we();if(void 0===t[e])return function(e){switch(e){case"marker":return _e;case"mapElem":return se;case"map":return le;case"currentCityImg":return O;case"WEATHER_API_KEY":return"5df917b322441cc9e193178bf51efa31";case"setCurrentCityWeather":return N;case"addCityToList":return Z;case"Slider":return i;case"lastCity":return de;case"flyToCity":return ye;case"createMarker":return fe}}(e);var n=t[e];return n===Re?void 0:n}function Ie(e,t){var n=we();return void 0===n[e]?function(e,t){switch(e){case"marker":return _e=t;case"map":return le=t;case"lastCity":return de=t}}(e,t):n[e]=t}function be(e,n){var r=we();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){Te(e)}))}):(r[e]=void 0===n?Re:n,function(){Te(e)})}function Te(e){var t=we();delete t[e],0==Object.keys(t).length&&delete ge()[ve]}function De(e){var t=we(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(Oe,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",Le),e("__GetDependency__",Le),e("__Rewire__",be),e("__set__",be),e("__reset__",Te),e("__ResetDependency__",Te),e("__with__",De)}();var Se=document.getElementById("search"),Ce=document.getElementById("search-button"),$e=document.getElementById("search-form");function je(e){(new window.google.maps.Geocoder).geocode({address:e},(function(t,n){if(e){if(n===window.google.maps.GeocoderStatus.OK){var r={latitude:t[0].geometry.location.lat(),longitude:t[0].geometry.location.lng()},i=t[0].address_components[0].long_name;Ue("createMap")(r,i,!0,!1)}else alert("Неправильный город");Ue("input")&&(Ue("input").value="",Ue("input").blur(),Ue("input").focus(),Ue("searchBtn").style.display="none")}}))}function Be(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}window.googleAutoComplete=function(){Ue("input").value="";var e=!1,t=new window.google.maps.places.Autocomplete(Ue("input"),{fields:["formatted_address","geometry","name"],strictBounds:!1,types:["(cities)"]});Ue("input").addEventListener("input",(function(){Ue("input").value?Ue("searchBtn").style.display="flex":Ue("searchBtn").style.display="none"})),Ue("searchForm").addEventListener("keydown",(function(t){Ue("input").value&&"Enter"===t.key&&(Ue("getCityByName")(Ue("input").value),e=!0)})),Ue("searchBtn").addEventListener("click",(function(){Ue("input").value&&(Ue("getCityByName")(Ue("input").value),e=!0)})),t.addListener("place_changed",(function(){Ue("input").value&&(e?e=!e:Ue("getCityByName")(Ue("input").value))}))};var Ge=null;function Ae(){if(null===Ge){var e=Be();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),Ge=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return Ge}function Ne(){var e=Be();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function ke(){var e=Ae(),t=Ne(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}!function(){var e=Be();e.__rewire_reset_all__||(e.__rewire_reset_all__=function(){e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)})}();var We="__INTENTIONAL_UNDEFINED__",Me={};function Ue(e){var t=ke();if(void 0===t[e])return function(e){switch(e){case"createMap":return me;case"input":return Se;case"searchBtn":return Ce;case"searchForm":return $e;case"getCityByName":return je}}(e);var n=t[e];return n===We?void 0:n}function xe(e,n){var r=ke();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){Xe(e)}))}):(r[e]=void 0===n?We:n,function(){Xe(e)})}function Xe(e){var t=ke();delete t[e],0==Object.keys(t).length&&delete Ne()[Ae]}function Ye(e){var t=ke(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(Me,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",Ue),e("__GetDependency__",Ue),e("__Rewire__",xe),e("__set__",xe),e("__reset__",Xe),e("__ResetDependency__",Xe),e("__with__",Ye)}();var He=document.getElementById("search-form");function Pe(e){var t=document.getElementById("loading");e<=0?t.style.display="none":(t.style.opacity=e,setTimeout((function(){et("loadNow")(e-.1)}),200))}function Fe(){if(!window.TOUCH){var e=document.getElementById("weather-items");e.firstElementChild.remove(),et("currentCityWeather").insertAdjacentElement("afterend",e)}et("loadNow")(1);var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFgn8EeO8dUIZuqg7AD-lnG_Yc5jCT4Ek&libraries=places&callback=googleAutoComplete",document.head.append(t);var n={latitude:55.7558,longitude:37.6173};function r(){var e;if(localStorage.length){var t=JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1)));n={latitude:t.lat,longitude:t.lon},e=t.name}window.TOUCH||et("initMap")(n),e||(e="Москва"),alert("error"),et("createMap")(n,e,!0,!1),i()}function i(){localStorage.length>5&&localStorage.clear(),Object.entries(localStorage).forEach((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){a=!0,i=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw i}}return o}}(t,n)||g(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],o=r[1],c={latitude:JSON.parse(o).lat,longitude:JSON.parse(o).lon};et("createMap")(c,i,!1,!1)}))}navigator.geolocation?navigator.geolocation.watchPosition((function(e){alert("position.coords.longitude "+e.coords.longitude),window.TOUCH||et("initMap")(e.coords),n={latitude:e.coords.latitude,longitude:e.coords.longitude},alert("success"+n.latitude),i()}),r,{timeout:36e5}):r()}function ze(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}window.TOUCH=window.matchMedia("(any-hover:none").matches;var Je=null;function Ze(){if(null===Je){var e=ze();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),Je=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return Je}function qe(){var e=ze();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function Ke(){var e=Ze(),t=qe(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}!function(){var e=ze();e.__rewire_reset_all__||(e.__rewire_reset_all__=function(){e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)})}();var Ve="__INTENTIONAL_UNDEFINED__",Qe={};function et(e){var t=Ke();if(void 0===t[e])return function(e){switch(e){case"loadNow":return Pe;case"currentCityWeather":return I;case"initMap":return Ee;case"createMap":return me}}(e);var n=t[e];return n===Ve?void 0:n}function tt(e,n){var r=Ke();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){nt(e)}))}):(r[e]=void 0===n?Ve:n,function(){nt(e)})}function nt(e){var t=Ke();delete t[e],0==Object.keys(t).length&&delete qe()[Ze]}function rt(e){var t=Ke(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(Qe,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",et),e("__GetDependency__",et),e("__Rewire__",tt),e("__set__",tt),e("__reset__",nt),e("__ResetDependency__",nt),e("__with__",rt)}();var it=document.querySelector(".header__title"),ot=null;function ct(){try{if(e.g)return e.g}catch(e){try{if(window)return window}catch(e){return this}}}document.addEventListener("DOMContentLoaded",ft("init")),document.addEventListener("pointerdown",(function(e){var t=e.target.closest(".city_list__profile");if(t){if(window.TOUCH&&ft("currentCity").textContent!==t.dataset.name&&new(ft("Slider"))(t,JSON.parse(localStorage[t.dataset.name]).hourly).createSlider(),ft("setCurrentCityWeather")(JSON.parse(localStorage[t.dataset.name])),window.TOUCH)return;var n=!1;if(ft("sliderDesktop")&&(ft("sliderDesktop").removeSlider(),ft("sliderDesktop").sliderElem.dataset.name===t.dataset.name&&(n=!0,yt("sliderDesktop",null))),document.addEventListener("dragstart",(function(e){return e.preventDefault()})),localStorage.length>1){var r=t.getBoundingClientRect(),i=e.clientX,o=e.pageX;t.style="",t.style.position="relative",t.style.zIndex=1e3;var c=function(e){t.style.left="".concat(e.pageX-i,"px"),t.style.opacity=1-2*Math.abs((r.left-t.getBoundingClientRect().left)/(r.left-r.width/2))};document.addEventListener("pointermove",c),document.addEventListener("pointerup",(function e(n){if(document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",e),Math.abs(o-n.clientX)>r.width/2)return Object.prototype.hasOwnProperty.call(localStorage,t.dataset.name)&&delete localStorage[t.dataset.name],Object.keys(localStorage).length||(document.querySelector(".city_list").style.display="none"),ft("sliderDesktop")&&!window.TOUCH&&(ft("sliderDesktop").removeSlider(),yt("sliderDesktop",null)),window.TOUCH&&t.classList.toggle("city_list__profile_no-scroll"),void t.remove();t.style.transition="left 0.5s, opacity 0.5s",t.style.left="".concat(0,"px"),t.style.opacity=1,t.style=""})),t.addEventListener("contextmenu",(function(e){return e.preventDefault()}))}n||window.TOUCH||(yt("sliderDesktop",new(ft("Slider"))(t,JSON.parse(localStorage[t.dataset.name]).hourly)),ft("sliderDesktop").createSlider.call(ft("sliderDesktop")),ft("sliderDesktop").renderSlider.call(ft("sliderDesktop")))}else window.TOUCH||t||!ft("sliderDesktop")||e.target.closest(".slider")===ft("sliderDesktop").sliderElem||(ft("sliderDesktop").removeSlider(),yt("sliderDesktop",null))})),document.body.addEventListener("selectstart",(function(e){return e.preventDefault()})),ft("searchForm").addEventListener("submit",(function(e){return e.preventDefault()})),ft("headerTitle").addEventListener("pointerenter",(function(){ft("headerTitle").querySelector("img").src="icons/header_over_icon.png"})),ft("headerTitle").addEventListener("pointerleave",(function(){ft("headerTitle").querySelector("img").src="icons/header_out_icon.png"})),ft("headerTitle").addEventListener("click",(function(){localStorage[ft("currentCity").textContent]&&ft("createMap")({latitude:JSON.parse(localStorage[ft("currentCity").textContent]).lat,longitude:JSON.parse(localStorage[ft("currentCity").textContent]).lon},JSON.parse(localStorage[ft("currentCity").textContent]).name,!0,!1)}));var at=null;function ut(){if(null===at){var e=ct();e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__||(e.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__=0),at=__$$GLOBAL_REWIRE_NEXT_MODULE_ID__++}return at}function _t(){var e=ct();return e.__$$GLOBAL_REWIRE_REGISTRY__||(e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)),e.__$$GLOBAL_REWIRE_REGISTRY__}function lt(){var e=ut(),t=_t(),n=t[e];return n||(t[e]=Object.create(null),n=t[e]),n}!function(){var e=ct();e.__rewire_reset_all__||(e.__rewire_reset_all__=function(){e.__$$GLOBAL_REWIRE_REGISTRY__=Object.create(null)})}();var st="__INTENTIONAL_UNDEFINED__",dt={};function ft(e){var t=lt();if(void 0===t[e])return function(e){switch(e){case"init":return Fe;case"currentCity":return R;case"Slider":return i;case"setCurrentCityWeather":return N;case"sliderDesktop":return ot;case"searchForm":return He;case"headerTitle":return it;case"createMap":return me}}(e);var n=t[e];return n===st?void 0:n}function yt(e,t){var n=lt();return void 0===n[e]?function(e,t){if("sliderDesktop"===e)return ot=t}(e,t):n[e]=t}function Et(e,n){var r=lt();return"object"===t(e)?(Object.keys(e).forEach((function(t){r[t]=e[t]})),function(){Object.keys(e).forEach((function(t){mt(e)}))}):(r[e]=void 0===n?st:n,function(){mt(e)})}function mt(e){var t=lt();delete t[e],0==Object.keys(t).length&&delete _t()[ut]}function pt(e){var t=lt(),n=Object.keys(e),r={};function i(){n.forEach((function(e){t[e]=r[e]}))}return function(o){n.forEach((function(n){r[n]=t[n],t[n]=e[n]}));var c=o();return c&&"function"==typeof c.then?c.then(i).catch(i):i(),c}}!function(){function e(e,t){Object.defineProperty(dt,e,{value:t,enumerable:!1,configurable:!0})}e("__get__",ft),e("__GetDependency__",ft),e("__Rewire__",Et),e("__set__",Et),e("__reset__",mt),e("__ResetDependency__",mt),e("__with__",pt)}()}();