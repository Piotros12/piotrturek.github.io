const cardNumber = document.querySelector(".card--front__number");
const cardOwner = document.querySelector(".card--front__owner");
const cardDateYear = document.getElementById("card--front__date__year");
const cardDateMonth = document.getElementById("card--front__date__month");
const cardCvc = document.querySelector(".card--back__cvc");

let formNumber = document.getElementById("card__number");
let formOwner = document.getElementById("card__name");
let formDateYear = document.getElementById("card__year");
let formDateMonth = document.getElementById("card__month");
let formCvc = document.getElementById("card__cvc");

function updateCard() {
  if (formDateYear.value != "") {
    cardDateYear.innerText = formDateYear.value;
  } else {
    cardDateYear.innerText = "00";
  }

  if (formDateMonth.value != "") {
    cardDateMonth.innerText = formDateMonth.value;
  } else {
    cardDateMonth.innerText = "00";
  }

  if (formCvc.value != "") {
    cardCvc.innerText = formCvc.value;
  } else {
    cardCvc.innerText = "000";
  }

  if (formNumber.value != "") {
    // cardNumber.innerText = formNumber.value;
    cardNumber.innerText = formNumber.value.replace(/.{4}/g, "$& ");
  } else {
    cardNumber.innerText = "0000 0000 0000 0000";
  }

  if (formOwner.value != "") {
    cardOwner.innerText = formOwner.value;
  } else {
    cardOwner.innerText = "Jane Appleseed";
  }
}

window.addEventListener("input", updateCard);
