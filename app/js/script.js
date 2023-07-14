let hamburgerIsOpened = false;
let hamburgerButton = document.getElementById("hamburger__click");
let navigationList = document.getElementById("navigation__click");
let logo = document.getElementById("header__logo__click");
function handleHamburgerButton() {
  if (hamburgerIsOpened) {
    hamburgerButton.classList.remove("hamburger--active");
    navigationList.classList.remove("navigation--active");
    logo.classList.remove("header__logo--active");
    hamburgerIsOpened = false;
  } else {
    hamburgerButton.classList.add("hamburger--active");
    navigationList.classList.add("navigation--active");
    logo.classList.add("header__logo--active");
    hamburgerIsOpened = true;
  }
}

function closeHamburger() {
  hamburgerButton.classList.remove("hamburger--active");
  navigationList.classList.remove("navigation--active");
  logo.classList.remove("header__logo--active");
  hamburgerIsOpened = false;
}

// let i = 0;
// let isDeleting = false;
// let text = "freelancerem";
// const delay = 3000;

// const typing = setInterval(() => {
//   const animatedText = document.querySelector(".animated-text");

//   if (isDeleting) {
//     animatedText.textContent = text.substring(0, i);
//     i--;
//     if (i === -1) {
//       isDeleting = false;
//       text = text === "freelancerem" ? "designerem" : "freelancerem";
//       i = 0;
//     }
//   } else {
//     if (i < text.length) {
//       animatedText.textContent += text[i];
//       i++;
//     }
//     if (i === text.length) {
//       setTimeout(() => {
//         isDeleting = true;
//       }, delay);
//     }
//   }
// }, 50);

// PROJECTS CARRUSEL
const projectsList = document.querySelector("#projects-carusell ul");
const projectItems = document.querySelectorAll("#projects-carusell ul li");
const arrowLeft = document.querySelector("#projects-arrow--left");
const arrowRight = document.querySelector("#projects-arrow--right");
let itemWidth = projectItems[0].offsetWidth; // szerokość pojedynczego elementu

window.onresize = function () {
  itemWidth = projectItems[0].offsetWidth;
};

let currentPosition = 0;

arrowLeft.addEventListener("click", () => {
  if (currentPosition <= 0) {
    // przesuwamy na koniec
    currentPosition = projectsList.scrollWidth - projectsList.offsetWidth;
  } else {
    // przesuwamy o szerokość pojedynczego elementu
    currentPosition -= itemWidth;
  }
  projectsList.scrollTo({
    left: currentPosition,
  });
});

arrowRight.addEventListener("click", () => {
  if (currentPosition >= projectsList.scrollWidth - projectsList.offsetWidth) {
    // przesuwamy na początek
    currentPosition = 0;
  } else {
    // przesuwamy o szerokość pojedynczego elementu
    currentPosition += itemWidth;
  }
  projectsList.scrollTo({
    left: currentPosition,
  });
});
