let currentTab = 0;
let tabs = document.getElementsByClassName("step0");

window.onload = showTab(currentTab);

function showTab(n) {
  tabs[n].style.display = "block";
}
