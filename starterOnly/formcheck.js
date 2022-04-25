const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const btnSubmit = document.querySelector("input.btn-submit");

function addAlert(targetDiv, alertText) {
  let divError = document.createElement("div");
  divError.setAttribute("class", "error");
  divError.textContent = alertText;
  targetDiv.after(divError);
}

function removeAlert(targetDiv) {
  targetDiv.nextSibling.remove();
}

first.addEventListener("change", formIsValid);
last.addEventListener("change", formIsValid);
email.addEventListener("change", formIsValid);

function firstIsValid() {
  if (isTooLong(first.value.length)) {
    addAlert(first, messages.caractOuPlus);
    return false;
  } else {
    if (first.nextSibling) {
      removeAlert(first);
    }
    return true;
  }
}
function lastIsValid() {
  if (isTooLong(last.value.length)) {
    addAlert(last, messages.caractOuPlus);
    return false;
  } else {
    if (last.nextSibling) {
      removeAlert(last);
    }
    return true;
  }
}

function conditionGeneralIsValid() {
  addAlert(last, messages.conditions);
}

function emailIsValid() {
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
}

function dateIsValid() {}

function isTooLong(nomb) {
  if (nomb > 1) {
    return false;
  } else {
    return true;
  }
}

function formIsValid() {
  if (firstIsValid() && lastIsValid() && emailIsValid()) {
    console.log("Is valid");
    btnSubmit.removeAttribute("disabled");
  } else {
    console.log("Is NOT valid");
    btnSubmit.setAttribute("disabled", "");
  }
}
