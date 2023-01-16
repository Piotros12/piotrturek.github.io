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
    if (element3.classList.contains('header__logo--active'))
      {
        element.classList.toggle("hamburger--active");
        element2.classList.toggle("navigation--active");
        element3.classList.toggle("header__logo--active");
      }
  }
