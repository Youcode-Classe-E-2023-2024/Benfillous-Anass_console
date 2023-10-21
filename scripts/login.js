const loginPopup = document.querySelector(".login-bg");
const signupPopup = document.querySelector(".js-signup");
const Navclosed = document.querySelector(".nav-list");

function toggleLogin() {
    loginPopup.classList.toggle("login-off");
}

function toggleSignup() {
    signupPopup.classList.toggle("login-off");
}

function closeNav() {
    Navclosed.classList.add("nav-list-off");
}

