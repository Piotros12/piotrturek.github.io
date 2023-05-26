let currentTab = 0;
let tabs = document.getElementsByClassName("step0");
let number = document.getElementsByClassName("number");
const previousButton = document.getElementById("button-previous");
const nextButton = document.getElementById("button-next");

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
