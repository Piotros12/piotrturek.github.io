const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);



function myFunction() {
    var element = document.getElementById("hamburger__click");
    var element2 = document.getElementById("navigation__click");
    element.classList.toggle("hamburger--active");
    element2.classList.toggle("navigation--active");
  }