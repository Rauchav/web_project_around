const pageFrame = document.querySelector(".page");
const postsCardsContainer = document.querySelector(".posts");

//Open and close modal for adding new cards

const addCardButton = document.querySelector(".add__card-button");
const modalTemplateAddCard = document.querySelector(".modal__box-template");
const modalCloneAddCard = modalTemplateAddCard.cloneNode(true).content;
const modalAddCard = modalCloneAddCard.querySelector(".modal");
const modalAddCardTitle = modalAddCard.querySelector(".modal__box-title");
const closeModalButtonAddCard = modalCloneAddCard.querySelector(".close-icon");

function openModalAddCard() {
  modalAddCardTitle.textContent = "Nuevo Lugar";
  modalAddCard.querySelector("#input1").placeholder = "Título";
  modalAddCard.querySelector("#input2").placeholder = "URL de la imagen";
  modalAddCard.querySelector("#input2").type = "url";
  pageFrame.append(modalAddCard);

  //validateForm(modalAddCard);
}

modalAddCard.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("close-icon")
  ) {
    closeModalAddCard();
  }
});

export function closeModalAddCard() {
  modalAddCard.remove();
}

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeModalAddCard();
  }
});

addCardButton.addEventListener("click", openModalAddCard);
closeModalButtonAddCard.addEventListener("click", closeModalAddCard);

//Open and close editing user info modal

const editProfileButton = document.querySelector(
  ".profile__info-up-edit-button"
);
const modalTemplateUserInfo = document.querySelector(".modal__box-template");
const modalCloneUserInfo = modalTemplateUserInfo.cloneNode(true).content;
const modalUserInfo = modalCloneUserInfo.querySelector(".modal");
const modalUserInfoTitle = modalUserInfo.querySelector(".modal__box-title");
const modalUserInfoForm = modalUserInfo.querySelector(".modal__box-form");
const closeModalButtonUserInfo =
  modalCloneUserInfo.querySelector(".close-icon");

function openModalUserInfo() {
  modalUserInfoTitle.textContent = "Editar Perfil";
  modalUserInfoForm.querySelector("#input1").placeholder = "Nombre";
  modalUserInfoForm.querySelector("#input2").placeholder = "Acerca de mí";
  modalUserInfoForm.name = "UserInfoForm";
  pageFrame.append(modalUserInfo);

  validateForm(modalUserInfo);
}

modalUserInfo.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("close-icon")
  ) {
    closeModalUserInfo();
  }
});

function closeModalUserInfo() {
  modalUserInfo.remove();
}

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeModalUserInfo();
  }
});

editProfileButton.addEventListener("click", openModalUserInfo);
closeModalButtonUserInfo.addEventListener("click", closeModalUserInfo);

//Change user info

const nameInput = modalUserInfo.querySelector("#input1");
const professionInput = modalUserInfo.querySelector("#input2");
const newName = document.querySelector(".profile__info-up-name");
const newProfession = document.querySelector(".profile__info-down-profession");
const submitButtonUserInfo = modalUserInfo.querySelector(
  ".modal__box-form-button"
);

function submitUserInfo(event) {
  event.preventDefault();

  newName.textContent = nameInput.value;
  newProfession.textContent = professionInput.value;
  closeModalUserInfo();
}

submitButtonUserInfo.addEventListener("click", submitUserInfo);

//Erase cards

postsCardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("trash-button")) {
    const eraseCardButton = event.target;
    eraseCardButton.closest(".post").remove();
  }
});

//Open and close expanded post picture

const modalCardTemplate = document.querySelector(".modal__card-template");
const modalCardClone = modalCardTemplate.cloneNode(true).content;
const modalCard = modalCardClone.querySelector(".modal");
const cardImagesList = document.querySelectorAll(".post__picture");
const cardImagesArray = Array.from(cardImagesList);
const cardImage = modalCardClone.querySelector(".modal__card-image");
const cardTitle = modalCardClone.querySelector(".modal__card-title");
const closeCardModalButton = modalCardClone.querySelector(".close-icon");

postsCardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("post__picture")) {
    const currentCardImage = event.target;
    const currentCardTitle =
      currentCardImage.nextElementSibling.firstElementChild.textContent;

    cardImage.src = currentCardImage.src;
    cardImage.alt = currentCardTitle;
    cardTitle.textContent = currentCardTitle;

    pageFrame.append(modalCard);
  }
});

closeCardModalButton.addEventListener("click", function () {
  modalCard.remove();
});

modalCard.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("close-icon")
  ) {
    modalCard.remove();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    modalCard.remove();
  }
});

export { modalAddCard };
