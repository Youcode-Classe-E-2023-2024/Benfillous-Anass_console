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
const news = document.querySelector(".js-news");
const sectionTitle = document.querySelector(".js-section-title");
const sectionTitle2 = document.querySelector(".js-section-title2");
checker = 0;
checker = Number(localStorage.getItem("mode"));
console.log(checker);

if (checker === 0) {
  checker = 1;
  changeMode();
  localStorage.setItem("mode", String(checker));
}

function changeMode() {
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
    sectionTitle.classList.toggle("sectionTitleOff");
    sectionTitle2.classList.toggle("sectionTitleOff");
    navList.classList.toggle("nav-list-mode");
    checker = 0;
    localStorage.setItem("mode", String(checker)); 
}

function toggleNav() {
  navList.classList.toggle("nav-list-off");
}

function closeSearch() {
  searchBar.classList.toggle("search-off");
}