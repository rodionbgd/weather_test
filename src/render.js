import "./css/cities.css";
import "./css/search.css";
import "./css/slider.css";
import "./css/style.css";

import { getCityByCoords } from "./get_city";
import { createMap, initMap } from "./map";
import { currentCityWeather } from "./city_weather";

export const searchForm = document.getElementById("search-form");

window.TOUCH = Object.hasOwnProperty.call(
  document.documentElement,
  "ontouchstart"
);

function getCityList() {
  if (localStorage.length > 5) localStorage.clear();
  Object.entries(localStorage).forEach(([key, value]) => {
    const cityListCoords = {
      latitude: JSON.parse(value).lat,
      longitude: JSON.parse(value).lon,
    };
    createMap(cityListCoords, key, false, false);
  });
}

function loadNow(opacity) {
  const loading = document.getElementById("loading");
  if (opacity <= 0) {
    loading.style.display = "none";
  } else {
    loading.style.opacity = opacity;
    setTimeout(() => {
      loadNow(opacity - 0.1);
    }, 200);
  }
}

export function init() {
  if (!window.TOUCH) {
    const weatherItems = document.getElementById("weather-items");
    weatherItems.firstElementChild.remove();
    currentCityWeather.insertAdjacentElement("afterend", weatherItems);
  }
  loadNow(1);
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://maps.googleapis.com/maps/api/js" +
    "?key=AIzaSyCFgn8EeO8dUIZuqg7AD-lnG_Yc5jCT4Ek&libraries=places" +
    "&callback=googleAutoComplete";
  document.head.append(script);

  let coords = {
    latitude: 55.7558,
    longitude: 37.6173,
  };

  function success(position) {
    alert(`position.coords.longitude ${position.coords.longitude}`);
    if (!window.TOUCH) {
      initMap(position.coords);
    }
    coords = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    // alert("success"+ coords.latitude);
    getCityByCoords(position.coords);
    getCityList();
  }

  function error() {
    let city;
    if (localStorage.length) {
      const cityData = JSON.parse(
        localStorage.getItem(localStorage.key(localStorage.length - 1))
      );
      coords = {
        latitude: cityData.lat,
        longitude: cityData.lon,
      };
      city = cityData.name;
    }
    if (!window.TOUCH) {
      initMap(coords);
    }
    if (!city) city = "Москва";
    // alert("error");
    createMap(coords, city, true, false);
    getCityList();
  }

  if (!navigator.geolocation) {
    error();
  } else {
    const options = {
      enableHighAccuracy: false,
      timeout: 10000,
    };
    const watchId = navigator.geolocation.watchPosition(
      success,
      error,
      options
    );
    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 10000);
  }
}
