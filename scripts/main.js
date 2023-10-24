const bleuLogo = document.querySelector(".js-logo-bleu");
const darkLogo = document.querySelector(".js-logo-dark");
const navList = document.querySelector(".nav-list");
const searchBar = document.querySelector(".search-background");
const body = document.querySelector(".body");
const header = document.querySelector(".js-header");
const menuDark = document.querySelector(".js-menu-dark");
const menuLight = document.querySelector(".js-menu-light");
const bellLightList = document.querySelector(".js-bell-light-list");
const bellDarkList = document.querySelector(".js-bell-dark-list");
const bellLight = document.querySelector(".js-bell-light");
const bellDark = document.querySelector(".js-bell-dark");
const login = document.querySelector(".js-login");
const loginDark = document.querySelector(".js-login-dark");
const lightMode = document.querySelector(".js-light");
const darkMode = document.querySelector(".js-dark");
const lightWord = document.querySelector(".js-dark-light-2");
const darkWord = document.querySelector(".js-dark-light");
const news = document.querySelector(".js-news");
const about = document.querySelector(".js-about");
let checker = localStorage.getItem("mode");

if (checker === "on") {
  bleuLogo.classList.toggle("logo-off");
  darkLogo.classList.toggle("logo-off");
  darkMode.classList.toggle("lightOff");
  lightMode.classList.toggle("lightOff");
  menuLight.classList.toggle("menuOff");
  menuDark.classList.toggle("menuOff");
  bellLight.classList.toggle("bellOff");
  bellDark.classList.toggle("bellOff");
  news.classList.toggle("newsLight");
  body.classList.toggle("body-light");
  header.classList.toggle("header-light");
  login.classList.toggle("login-light");
  loginDark.classList.toggle("login-light");
  navList.classList.toggle("nav-list-mode");
  darkWord.classList.toggle("close-off");
  lightWord.classList.toggle("close-off");
}

function changeMode() {
  bleuLogo.classList.toggle("logo-off");
  darkLogo.classList.toggle("logo-off");
  darkMode.classList.toggle("lightOff");
  lightMode.classList.toggle("lightOff");
  menuLight.classList.toggle("menuOff");
  menuDark.classList.toggle("menuOff");
  bellLight.classList.toggle("bellOff");
  bellDark.classList.toggle("bellOff");
  body.classList.toggle("body-light");
  header.classList.toggle("header-light");
  login.classList.toggle("login-light");
  loginDark.classList.toggle("login-light");
  news.classList.toggle("newsLight");
  navList.classList.toggle("nav-list-mode");
  darkWord.classList.toggle("close-off");
  lightWord.classList.toggle("close-off");
  mode();
  savingMode();
}

function savingMode() {
  if (checker === "on") {
    localStorage.setItem("mode", "off");
  } else {
    localStorage.setItem("mode", "on");
  }
}

function toggleNav() {
  navList.classList.toggle("nav-list-off");
}

function closeSearch() {
  searchBar.classList.toggle("search-off");
}
