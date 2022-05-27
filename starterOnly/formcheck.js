// Const pour les éléments du formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const condGen = document.getElementById("checkbox1");
const btnSubmit = document.querySelector("input.btn-submit");
const merciDiv = document.getElementById("merci");
const merciDivSpan = document.querySelector("div#merci span");
const form = document.querySelector(".modal-body form");

// Affichage d'un message d'erreur
let addAlert = (targetDiv, alertText) => {
  let currentDiv = targetDiv.nextElementSibling;
  //console.log("targetDiv:", targetDiv, " - currentDiv:", currentDiv);
  // Ajouter le message d'erreur seulement si il n'y pas déjà un.
  if (currentDiv == null) {
    let divError = document.createElement("div");
    divError.setAttribute("class", "error");
    divError.textContent = alertText;
    targetDiv.after(divError);
    targetDiv.style.borderColor = "red";
  }
};

// Suppression d'un message d'erreur
let removeAlert = (targetDiv) => {
  //console.log("last.nextSibling.className", targetDiv.nextSibling.className);
  if (targetDiv.nextSibling.className == "error") {
    targetDiv.nextSibling.remove();
    targetDiv.style.borderColor = "";
  }
};

// Validation du prénom
let firstIsValid = () => {
  first.value = first.value.trim();
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

// Validation du nom
let lastIsValid = () => {
  last.value = last.value.trim();
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

// Validation du e-mail
let emailIsValid = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    console.log("Email is valid");
    if (email.nextSibling) {
      removeAlert(email);
    }
    return true;
  } else {
    addAlert(email, messages.email);
    console.log("Email is NOT valid");
    return false;
  }
};

// Validation de la date d'anniversaire
let dateIsValid = () => {
  if (birthdate.value.length == 10) {
    return true;
  } else {
    return false;
  }
};

// Validation des conditions générales
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

/* 
Validation du formulaire
On test les différents champs et fonction on active ou pas le bouton de validation
*/
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

// Check de longeur d'un nombre
let isTooLong = (nomb) => {
  if (nomb > 1) {
    return false;
  } else {
    return true;
  }
};

// Affichage du message de remerçiments
let merciInscription = () => {
  merciDiv.style.display = "flex";
  form.style.display = "none";
  merciDivSpan.innerHTML = messages.merci;
  event.preventDefault();
};

let quantityCheck = () => {
  quantity.value = Math.abs(quantity.value);
};

// Ajout des événements sur le formulaire
first.addEventListener("keyup", formIsValid);
last.addEventListener("keyup", formIsValid);
email.addEventListener("keyup", formIsValid);
birthDate.addEventListener("change", formIsValid);
condGen.addEventListener("change", formIsValid);
quantity.addEventListener("keyup", quantityCheck);
btnSubmit.addEventListener("click", merciInscription);
