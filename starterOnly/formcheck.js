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
  }
  if (first.nextSibling) {
    removeAlert(first);
    return true;
  }
};

// Validation du nom
let lastIsValid = () => {
  last.value = last.value.trim();
  if (isTooLong(last.value.length)) {
    addAlert(last, messages.caractOuPlus);
    return false;
  }
  if (last.nextSibling) {
    removeAlert(last);
    return true;
  }
};

// Validation du e-mail
let emailIsValid = () => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    addAlert(email, messages.email);
    return false;
  }
  if (email.nextSibling) {
    removeAlert(email);
    return true;
  }
};

// Validation de la date d'anniversaire
let dateIsValid = () => {
  if (birthDate.value.length == 10) {
    return true;
  }
  return false;
};

// Validation des conditions générales
let conditionGeneralIsValid = () => {
  if (!condGen.checked) {
    addAlert(condGen, messages.conditions);
    return false;
  }
  if (condGen.nextSibling) {
    removeAlert(condGen);
    return true;
  }
};

/* 
Validation du formulaire
On test les différents champs et en fonction on active ou pas le bouton de validation
*/
let formIsValid = () => {
  if (
    firstIsValid() &&
    lastIsValid() &&
    emailIsValid() &&
    dateIsValid() &&
    conditionGeneralIsValid()
  ) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "");
  }
};

// Check de longeur d'un nombre
let isTooLong = (nomb) => {
  if (nomb > 1) {
    return false;
  }
  return true;
};

// Affichage du message de remerçiments
let merciInscription = () => {
  merciDiv.style.display = "flex";
  form.style.display = "none";
  merciDivSpan.innerHTML = messages.merci;
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
