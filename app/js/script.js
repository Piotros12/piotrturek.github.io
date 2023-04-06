function myFunction() {
  var element = document.getElementById("hamburger__click");
  var element2 = document.getElementById("navigation__click");
  var element3 = document.getElementById("header__logo__click");
  element.classList.toggle("hamburger--active");
  element2.classList.toggle("navigation--active");
  element3.classList.toggle("header__logo--active");
}

function logoClosingMenu() {
  var element = document.getElementById("hamburger__click");
  var element2 = document.getElementById("navigation__click");
  var element3 = document.getElementById("header__logo__click");
  if (element3.classList.contains("header__logo--active")) {
    element.classList.toggle("hamburger--active");
    element2.classList.toggle("navigation--active");
    element3.classList.toggle("header__logo--active");
  }
}

let i = 0;
let isDeleting = false;
let text = "freelancerem";
const delay = 3000;

const typing = setInterval(() => {
  const animatedText = document.querySelector(".animated-text");

  if (isDeleting) {
    animatedText.textContent = text.substring(0, i);
    i--;
    if (i === -1) {
      isDeleting = false;
      text = text === "freelancerem" ? "designerem" : "freelancerem";
      i = 0;
    }
  } else {
    if (i < text.length) {
      animatedText.textContent += text[i];
      i++;
    }
    if (i === text.length) {
      setTimeout(() => {
        isDeleting = true;
      }, delay);
    }
  }
}, 50);
