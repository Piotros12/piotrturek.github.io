let currentTab = 0;
let tabs = document.getElementsByClassName("step0");
let number = document.getElementsByClassName("number");
const previousButton = document.getElementById("button-previous");
const nextButton = document.getElementById("button-next");
const form = document.querySelector("form");
const switchButton = document.getElementById("switch__button");

// FORM TABS HANDLING
window.onload = showTab(currentTab);

function showTab(currentTab) {
  tabs[currentTab].style.display = "flex";
  if (currentTab == 4) {
    nextButton.style.display = "none";
    previousButton.style.display = "none";
  } else if (currentTab == 0) {
    previousButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
    previousButton.style.display = "block";
  }
  number[currentTab].classList.add("active");
}

function nextStep(event) {
  event.preventDefault();
  tabs[currentTab].style.display = "none";
  currentTab = currentTab + 1;
  showTab(currentTab);
}

function previousStep(event) {
  event.preventDefault();
  tabs[currentTab].style.display = "none";
  number[currentTab].classList.remove("active");
  currentTab = currentTab - 1;
  showTab(currentTab);
}

// SWITCHING PRICES BETWEEN MO?YR PLANS HANDLING
let isYearly = false;
let monthlyPrices = document.querySelectorAll("[data-plan='monthly'");
let yearlyPrices = document.querySelectorAll("[data-plan='yearly'");

switchButton.addEventListener("change", switchHandle);

window.onload = switchHandle();

function switchHandle() {
  if (switchButton.checked) {
    isYearly = true;
    console.log("isYearly? " + isYearly);
  } else if (!switchButton.checked) {
    isYearly = false;
    console.log("isYearly? " + isYearly);
  }
  changePrices();
}

function changePrices() {
  if (isYearly) {
    monthlyPrices.forEach((i) => {
      i.style.display = "none";
    });
    yearlyPrices.forEach((i) => {
      i.style.display = "block";
    });
  } else if (!isYearly) {
    monthlyPrices.forEach((i) => {
      i.style.display = "block";
    });
    yearlyPrices.forEach((i) => {
      i.style.display = "none";
    });
  }
}

// SUMMARY GENERATING HANDLING
