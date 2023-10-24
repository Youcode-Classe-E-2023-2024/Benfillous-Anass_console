const headerHtml = `<!-- This is the search pop up -->
<div class="search-background search-off">
  <img
        class="close-icon close-icon-light close-search"
        src="img/close-icon-white.png"
        alt=""
        onclick="closeSearch();"
      />
  <div class="search-bar">
    <img class="search-icon-white search-icon search-fixed" src="img/search-icon-white.png" alt="">
    <input class="search-input" type="text" name="search" placeholder="Search" id="searching">
  </div>
</div>
<!-- This is the login pop up -->
<div class="login-bg login-off">
  <img
        class="close-icon close-icon-light login-close"
        src="img/close-icon-white.png"
        alt=""
        onclick="toggleLogin();"
      />
      <form class="login-popup" action="login.php" method="post">
        <h2>log In</h2>
        <input placeholder="Email Address" type="email" name="email">
        <input placeholder="Enter password" type="password" name="passwd">
        <p> <a href="passwd-recover.html">Forgot your password?</a></p>
        <input type="submit"></input>
        <p>Don’t have an account yet? <span onclick="toggleSignup(); toggleLogin();">Register now</span></p>
        <p>or</p>
        <button><img src="img/Google__G__Logo.svg.png" alt=""><span>Sign in with Google</span></button>
    </form>
</div>
    <!-- This is the signup pop up -->
    <div class="login-bg js-signup login-off">
      <img
            class="close-icon close-icon-light login-close"
            src="img/close-icon-white.png"
            alt=""
            onclick="toggleSignup();"
          />
          <form class="login-popup" action="register.php" method="post">
            <h2>Create your account</h2>
            <input placeholder="Email Address" type="email">
            <input placeholder="Enter password" type="password">
            <p> <a href="passwd-recover.html">*Required: 8 chars, 1 capital letter, 1 number</a></p>
            <input type="submit"></input>
            <p>Already have an account? <span onclick="toggleSignup(); toggleLogin();" style="cursor: pointer;">Login</span></p>
            <p style="color: rgba(0, 0, 0, 0.482); font-size: 14px;">or</p>
            <button><img src="img/Google__G__Logo.svg.png" alt=""><span>Sign in with Google</span></button>
            <p class="conditions">By continuing, you agree to <span style="color: #FF7628;">the Privacy Policy</span> and <span style="color: #FF7628;">Terms of Use.</span> You also agree to receive our newsletters, you can opt-out any time.</p>
        </div>
    </div>
  <ul class="nav-list nav-list-off">
    <li class="nav-list-header">
      <img
        class="search-icon-white search-icon"
        src="img/search-icon-white.png"
        alt=""
        onclick="closeSearch();
          closeNav();
        "
      />
      <button onclick="toggleLogin();
          closeNav();
      " class="login js-login-dark">Log in</button>
      <img
        class="close-icon close-icon-light"
        src="img/close-icon-white.png"
        alt=""
        onclick="closeNav();"
      />
    </li>
    <li class="nav-list-main"><a href="news.html">GAME NEWS</a></li>
    <li class="nav-list-main"><a href="coming.html">Coming Soon</a></li>
    <li class="nav-list-main nav-list-main-light">
      <a href="subscribe.html">
        <img class="bell-icon bell-icon-hover" src="img/notif-icon.png" alt="" />
        Newsletter
      </a>
    </li>
    <li class="nav-list-main" onclick="
    changeMode();
    ">
        <img
        style="cursor: pointer;"
          class="light-mode"
          src="img/light-mode.png"
          alt=""
        />
        <span style="cursor: pointer;" class="js-dark-light-2">Light Mode</span>
        <span style="cursor: pointer;" class="js-dark-light close-off">Dark Mode</span>
      </li>
      </a>
    <li class="nav-list-main"><a href="about.html" class="nav-about">About Us</a></li>
  </ul>
  <nav class="nav-bar">
    <span>
      <img
      class="menu-icon js-menu-dark"
      onclick="toggleNav()"
      src="img/menu-icon.jpg"
      alt=""
      />
      <img
      style="width: 22px; height: 25px; margin-left: 10px"
      class="menu-icon js-menu-light menuOff"
      src="img/menu-light.png"
      alt=""
      onclick="toggleNav();"
      />
    </span>
    <a href="index.html">
      <img class="logo js-logo-dark logo-off" src="img/logo-dark.png" alt="" />
      <img class="logo js-logo-bleu" src="img/logo.png" alt="" />
    </a>
    <div class="nav-right">
      <a href="subscribe.html">
      <div class="newsletter">
          <img
            class="bell-icon-hover js-bell-dark js-bell-dark-list"
            src="img/notif-icon.png"
            alt=""
          />
          <img
            class="bell-icon-hover js-bell-light js-bell-light-list bellOff"
            src="img/bell-light.png"
            alt=""
          />
          <p class="js-news">Newsletter</p>
        </div>
      </a>
      <button onclick="toggleLogin(); closeNav();" class="login js-login">Log in</button>
      <div class="light-li">
        <img
          class="light-mode js-light light-mode-phone"
          src="img/light-mode.png"
          alt=""
          onclick="
                changeMode();
            "
        />
        <img
          class="light-mode js-dark lightOff light-mode-phone"
          src="img/dark-mode.png"
          alt=""
          onclick="
                changeMode();
          "
        />
      </div>
    </div>
  </nav>`;
const footerHtml = `<img class="logo" src="img/logo-dark.png" alt="">
<p>Copyright © 2023 Consoleplus.com</p>`;

const generatingHeader = document.getElementsByClassName("headerGen");

for (let i = 0; i < generatingHeader.length; i++) {
  generatingHeader[i].innerHTML = headerHtml;
}

const generatingFooter = document.getElementsByClassName("js-footer");

for(let i = 0; i < generatingFooter.length; i++) {
    generatingFooter[i].innerHTML = footerHtml;
}
