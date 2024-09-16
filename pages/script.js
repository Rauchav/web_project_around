let editProfileButton = document.querySelector(".profile__info-up-edit-button");
let closeModalButton = document.querySelector(".close-icon");
let submitButton = document.querySelector(".modal__box-form-button");
let modal = document.querySelector(".modal");
let nameInput = document.querySelector("#name");
let professionInput = document.querySelector("#profession");
let newName = document.querySelector(".profile__info-up-name");
let newProfession = document.querySelector(".profile__info-down-profession");

function openModal() {
  modal.classList.add("modal-toggle");
}

function closeModal() {
  modal.classList.remove("modal-toggle");
}

function submitInputInfo(event) {
  event.preventDefault();
  newName.textContent = nameInput.value;
  newProfession.textContent = professionInput.value;
  closeModal();
}

editProfileButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", submitInputInfo);
