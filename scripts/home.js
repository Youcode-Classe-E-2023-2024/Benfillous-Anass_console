const newsElm = document.getElementsByClassName("js-new-news");
const seeMoreBtn = document.getElementsByClassName("js-see-more-btn");
const textColor = document.getElementsByClassName("js-text-light");
const sectionTitle = document.getElementsByClassName("js-section-title");
const newsElmLight = document.getElementsByClassName("js-new-news-light");


const newsArr = [
  {
    img: "img/grand-theft-auto-6.avif",
    game: "GRAND THEFT AUTO 6",
    title:
      "Grand Theft Auto 6 Rumor Is Good News for Fans Disappointed by GTA 5",
    description:
      "A recent rumor suggests that Grand Theft Auto 6 could be getting post-launch content in way that Grand Theft Auto 5 didn't.",
    writer: "Nick Rodriguez",
  },
  {
    img: "img/new-stranger-things-season-5-video-seems-to-include-a-tiny-spoiler.avif",
    game: "STRANGER THINGS",
    title: "New Stranger Things Season 5 Video Seems To Include A Tiny Spoiler",
    description:
      "The Stranger Things season 5 writers continue to release more facts as the writers' strike continues, but does this latest video contain a spoiler?",
    writer: "Carolyn Jenkins",
  },
  {
    img: "img/marvel-spider-man-2-playstation-sales-record.avif",
    game: "SPIDER-MAN 2",
    title: "Spider-Man 2 Smashes PlayStation Record",
    description:
      "Spider-Man 2's massively successful launch is already breaking records for PlayStation within the first few days following its release.",
    writer: "Michael Brandon Ingram",
  },
  {
    img: "img/sonic-superstars_unlock-trip-feature.avif",
    game: "SONIC SUPERSTARS",
    title: "Sonic Superstars: How to Unlock Trip",
    description:
      "Trip the Sungazer is a new character created for Sonic Superstars and can be unlocked as a fifth playable character with some effort.",
    writer: "Thomas Hawkins",
  },
  {
    img: "img/fortnite-zero-build.avif",
    game: "FORTNITE",
    title: "Fortnite Leak Indicates Zero Build Won't Be Vaulted",
    description:
      "It seems that Fortnite's Zero Build game mode might hang around next season, but it raises a few questions regarding another potential removal.",
    writer: "Ashely Claudino",
  },
  {
    img: "img/spider-man-2-cover-2.avif",
    game: "SPIDER-MAN 2",
    title:
      "Spider-Man 2 Players Call Out Devs for Getting an Important Detail Wrong",
    description:
      "Several irate Marvel's Spider-Man 2 players are calling out Insomniac Games for incorrectly representing one important visual detail.",
    writer: "Miguel Luis Llado",
  },
  {
    img: "img/20231018162306_1.avif",
    game: "THE LORDS OF THE FALLEN",
    title: "Lords of the Fallen: Where to Get the Vanguard Armor Set",
    description:
      "The Vanguard set in Lords of the Fallen offers solid protection without weighing players down. Here's where to get it.",
    writer: "Marc Santos",
  },
  {
    img: "img/super-mario-bros-wonder-playable-characters.avif",
    game: "SUPER MARIO",
    title: "13 Longest Mario Games (According To HowLongToBeat)",
    description:
      "With so many games to choose from, the Super Mario franchise has something for everyone to enjoy. These titles take the longest to beat by far.",
    writer: "Tanner Kinney",
  },
  {
    img: "img/playstation-studios-visual-arts-group-layoffs.avif",
    game: "PLAYSTATION",
    title: "PlayStation-Owned Company Hit With Layoffs",
    description:
      "A PlayStation support studio is reportedly hit with a wave of layoffs, seeing several senior employees affected.",
    writer: " Michael Brandon Ingram",
  },
  {
    img: "img/fortnite-franklin-clinton.avif",
    game: "FORTNITE",
    title: "Why a Fortnite x Grand Theft Auto Crossover is Not Off the Table",
    description:
      "Grand Theft Auto feels like it's whole worlds away from Fortnite, but it could still cross over the way many IPs have done before.",
    writer: " Michael Brandon Ingram",
  },
];

let i = 0;
const removeBtn = document.querySelector(".js-remove-btn");
function newsGen() {
  const max = 4 + i;
  for (; i < max && i < newsArr.length; i++) {
    for (let idx = 0; idx < newsElm.length; idx++) {
      newsElm[idx].innerHTML += `<div class="news js-new-news-light">      
      <img src="${newsArr[i].img}" alt="">
      <div class="text-side js-text-light">
        <p>${newsArr[i].game}</p>
        <h2>${newsArr[i].title}</h2>
        <p>${newsArr[i].description}</p>
        <p>By <span>${newsArr[i].writer}</span></p>
      </div>
      </div>`;
    }
  }
  if (i === newsArr.length) {
    removeBtn.classList.add("remove-btn");
  }
}

newsGen();



for (let i = 0; i < seeMoreBtn.length; i++) {
  seeMoreBtn[i].addEventListener("click", function () {
    newsGen();
    checkIfOn();
  });
}
function checkIfOn() {
  if (checker === "on") {
    for (let elm = 0; elm < newsElmLight.length; elm++)
      newsElmLight[elm].classList.add("news-light-mode");

    for (let elm = 0; elm < textColor.length; elm++){
      textColor[elm].classList.add("newsLight");
    }
    for (let elm = 0; elm < sectionTitle.length; elm++) {
      sectionTitle[elm].classList.add("newsLight");
    }
  }
}

checkIfOn();

function mode() {
  for (let elm = 0; elm < newsElmLight.length; elm++)
    newsElmLight[elm].classList.toggle("news-light-mode");
  for (let elm = 0; elm < textColor.length; elm++)
    textColor[elm].classList.toggle("newsLight");
  for (let elm = 0; elm < sectionTitle.length; elm++)
    sectionTitle[elm].classList.toggle("newsLight");
}
