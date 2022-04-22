const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const date = document.getElementById("date");
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
    addAlert(first, messages[0]);
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
    addAlert(last, messages[0]);
    return false;
  } else {
    if (last.nextSibling) {
      removeAlert(last);
    }
    return true;
  }
}

function conditionGeneralIsValid() {
  addAlert(last, messages[1]);
}

function emailIsValid() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}

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
