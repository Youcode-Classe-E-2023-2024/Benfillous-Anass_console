const comingCard = document.getElementsByClassName("card");
const heroContainer = document.querySelector(".container");

if (checker === "on") {
  for(let i = 0; i < comingCard.length; i++) {
    comingCard[i].classList.toggle("card-light-mode");
  }
   heroContainer.classList.toggle("container-light");
}

  function mode(){
    for(let i = 0; i < comingCard.length; i++) {
    comingCard[i].classList.toggle("card-light-mode")
    }
    heroContainer.classList.toggle("container-light");

  }