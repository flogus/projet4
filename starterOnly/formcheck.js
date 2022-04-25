// Const pour les éléments du formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const condGen = document.getElementById("checkbox1");
const btnSubmit = document.querySelector("input.btn-submit");

// Ajout des evenemts sur le formulaire
first.addEventListener("change", formIsValid);
last.addEventListener("change", formIsValid);
email.addEventListener("change", formIsValid);
birthDate.addEventListener("change", formIsValid);
condGen.addEventListener("change", formIsValid);

let addAlert = (targetDiv, alertText) => {
  let divError = document.createElement("div");
  divError.setAttribute("class", "error");
  divError.textContent = alertText;
  targetDiv.after(divError);
};

let removeAlert = (targetDiv) => {
  targetDiv.nextSibling.remove();
};

let firstIsValid = () => {
  if (isTooLong(first.value.length)) {
    addAlert(first, messages.caractOuPlus);
    return false;
  } else {
    if (first.nextSibling) {
      removeAlert(first);
    }
    return true;
  }
};
let lastIsValid = () => {
  if (isTooLong(last.value.length)) {
    addAlert(last, messages.caractOuPlus);
    return false;
  } else {
    if (last.nextSibling) {
      removeAlert(last);
    }
    return true;
  }
};
let emailIsValid = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
    console.log("Email is valid");
    addAlert(email, messages.email);
  } else {
    if (email.nextSibling) {
      removeAlert(email);
    }
    return false;
    console.log("Email is NOT valid");
  }
};
let dateIsValid = () => {
  if (birthdate.value.length == 10) {
    return true;
  } else {
    return false;
  }
};
let conditionGeneralIsValid = () => {
  if (condGen.checked) {
    if (condGen.nextSibling) {
      removeAlert(condGen);
    }
    return true;
  } else {
    addAlert(condGen, messages.conditions);

    return false;
  }
};

let formIsValid = () => {
  if (
    firstIsValid() &&
    lastIsValid() &&
    emailIsValid() &&
    dateIsValid() &&
    conditionGeneralIsValid()
  ) {
    console.log("Is valid");
    btnSubmit.removeAttribute("disabled");
  } else {
    console.log("Is NOT valid");
    btnSubmit.setAttribute("disabled", "");
  }
};

let isTooLong = (nomb) => {
  if (nomb > 1) {
    return false;
  } else {
    return true;
  }
};
