import { configureStore } from "@reduxjs/toolkit";
import Swiper, { History, Pagination } from "swiper";
import { citySlice } from "./reducers/cities";
import addGoogleScript from "./utils";
import listeners from "./listeners";
import { BeforeInstallPromptEvent } from "./types";

Swiper.use([Pagination, History]);

// window.TOUCH = true;
window.TOUCH = window.matchMedia("(any-hover:none)").matches;

const divInstall = <HTMLDivElement>document.getElementById("installContainer");
const butInstall = <HTMLButtonElement>document.getElementById("butInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  // Запрет показа информационной мини-панели на мобильных устройствах.
  localStorage.clear();
  alert(`${"👍" + "beforeinstallprompt"}${  event}`);
  // Убираем событие, чтобы его можно было активировать позже.
  (event as any).userChoice.then((choiceResult: any) => {
    alert(choiceResult.outcome); // either "accepted" or "dismissed"
  });
  window.deferredPrompt = <BeforeInstallPromptEvent>event;
  // Убираем класс «hidden» из контейнера кнопки установки.
  divInstall.classList.toggle("hidden", false);
});

if (window.location.protocol === "http:") {
  const requireHTTPS = <HTMLElement>document.getElementById("requireHTTPS");
  const link = <HTMLAnchorElement>requireHTTPS.querySelector("a");
  link.href = window.location.href.replace("http://", "https://");
  requireHTTPS.classList.remove("hidden");
}

butInstall.addEventListener("click", async () => {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // Отложенный запрос недоступен.
    return;
  }
  // Показать запрос на установку.
  await promptEvent.prompt();
  // Записать результат в журнал.
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Сбросить переменную отложенного запроса:
  // prompt() можно вызвать только один раз.
  window.deferredPrompt = <BeforeInstallPromptEvent>(<unknown>null);
  // Скрыть кнопку установки.
  divInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", () => {
  alert("Thank you for installing our app!");
  window.deferredPrompt = <BeforeInstallPromptEvent>(<unknown>null);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

export const store = configureStore({
  reducer: {
    cities: citySlice.reducer,
  },
});

export let mainSwiper: Swiper;

export let app: HTMLDivElement;
export let bgContainer: HTMLDivElement;
export let menuEl: HTMLDivElement;
export let menuCityList: HTMLUListElement;
export let cityListEl: HTMLDivElement;
export let showCity: HTMLDivElement;
export let updateLocation: HTMLElement;

export function createSwiper() {
  // const originLocation = window.location.origin;
  mainSwiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
    watchOverflow: true,
    // history: {
    //     key: "city",
    //     root: originLocation,
    // },
  });
  mainSwiper.on("slideChange", () => {
    const { cities } = store.getState();
    const currentSlide = <HTMLElement>cityListEl.children[mainSwiper.realIndex];
    const currentCity = cities.filter(
      (city) => city.name === currentSlide.dataset.name
    )[0];
    const imgList = Array.from(bgContainer.children);
    const isSameWeather = imgList.filter(
      (el) =>
        el.className === `bg-${currentCity.weather.current.weather[0].icon}`
    ).length;
    if (isSameWeather) {
      return;
    }
    Array.from(bgContainer.children as unknown as HTMLDivElement[]).forEach(
      (img) => {
        img.classList.toggle("hidden");
        img.classList.remove("default-bg");
        if (img.classList.contains("hidden")) {
          img.style.setProperty("opacity", "0");
        } else {
          img.style.setProperty("opacity", "1");
          img.setAttribute(
            "class",
            `bg-${currentCity.weather.current.weather[0].icon}`
          );
        }
      }
    );
  });
}

export function initializeElements() {
  app = <HTMLDivElement>document.getElementById("app");
  bgContainer = <HTMLDivElement>document.getElementById("bg-container");
  menuEl = <HTMLDivElement>document.getElementById("menu");
  menuCityList = <HTMLUListElement>document.getElementById("menu-city-list");
  cityListEl = <HTMLDivElement>document.getElementById("city-list");
  showCity = <HTMLDivElement>document.getElementById("show-last-city");
  updateLocation = <HTMLElement>document.getElementById("update-location");

  addGoogleScript();
  listeners();
  if (window.TOUCH) {
    createSwiper();
  }
}
