import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
createApp(App).use(store).use(router).mount("#app");

// const bars = document.querySelector(".bars");
// const links = document.querySelector(".links");
// bars.addEventListener("click", () => {
//   console.log("I got clicked");
//   links.classList.toggle("active");
//   bars.classList.toggle("is-active");
// });

// let progress = document.querySelector(".progress-bar");
// let totalHeight = document.body.scrollHeight * window.innerHeight;
// window.onscroll = () => {
//   let progressHeight = (window.pageXOffset / totalHeight) * 100;
//   progress.style.height = progressHeight + "%";
// };
// const activePage = window.location.pathname;
// const nav = document.querySelectorAll("nav-item a");

// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", () => {
//   console.log("i got Loaded");
//   preloader.classList.add("fade-out");
// });
