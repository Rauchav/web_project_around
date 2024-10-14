const pageFrame = document.querySelector(".page");

//Tarjetas iniciales

const postsCardsContainer = document.querySelector(".posts");
const cardTemplate = document.querySelector(".post__template");
const cardContainer = document.querySelector(".post");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((card) => {
  const clonedCard = cardTemplate.cloneNode(true).content;
  const cardPicture = clonedCard.querySelector(".post__picture");
  const cardTitle = clonedCard.querySelector(".post__info-bar-name");
  cardPicture.src = card.link;
  cardPicture.alt = card.name;
  cardTitle.textContent = card.name;

  postsCardsContainer.append(clonedCard);
});

//Abrrir y cerrar modal de información de usuario

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
  pageFrame.append(modalUserInfo);
}

function closeModalUserInfo() {
  modalUserInfo.remove();
}

editProfileButton.addEventListener("click", openModalUserInfo);
closeModalButtonUserInfo.addEventListener("click", closeModalUserInfo);

//Cambiar información de usuario

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

//Abrrir y cerrar modal para ańadir tarjeta

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
  pageFrame.append(modalAddCard);
}

function closeModalAddCard() {
  modalAddCard.remove();
}

addCardButton.addEventListener("click", openModalAddCard);
closeModalButtonAddCard.addEventListener("click", closeModalAddCard);

//Crear tarjetas nuevas

const titleInput = modalAddCard.querySelector("#input1");
const urlLinkInput = modalAddCard.querySelector("#input2");
const templateAddCard = document.querySelector(".post__template");
const cloneAddCard = templateAddCard.cloneNode(true).content;
const newTitle = cloneAddCard.querySelector(".post__info-bar-name");
const newImage = cloneAddCard.querySelector(".post__picture");
const cardsContainer = document.querySelector(".posts");
const submitButtonAddCard = modalAddCard.querySelector(
  ".modal__box-form-button"
);

function submitCardInfo(event) {
  event.preventDefault();

  newTitle.textContent = titleInput.value;
  newImage.src = urlLinkInput.value;

  cardsContainer.prepend(cloneAddCard);

  closeModalAddCard();
}

submitButtonAddCard.addEventListener("click", submitCardInfo);

//Borrar tarjetas

const trashButtons = Array.from(document.querySelectorAll(".trash-icon"));

trashButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.currentTarget.parentElement.remove();
  });
});

//Darle Like o dislike a una tarjeta

const heartButtons = Array.from(document.querySelectorAll(".heart-icon"));

const hearts = [
  {
    alt: "Not liked",
    src: "./images/heart-icon.svg",
  },

  {
    class: "Liked",
    src: "./images/heart-icon-black.svg",
  },
];

heartButtons.forEach((heart) => {
  heart.addEventListener("click", (event) => {
    let currentIcon = event.currentTarget;

    if (currentIcon.alt === "Not liked") {
      currentIcon.alt = hearts[1].alt;
      currentIcon.src = hearts[1].src;
    } else {
      currentIcon.alt = hearts[0].alt;
      currentIcon.src = hearts[0].src;
    }
  });
});

//Abrir modal con información de cada tarjeta

const modalCardTemplate = document.querySelector(".modal__card-template");
const modalCardClone = modalCardTemplate.cloneNode(true).content;
const modalCard = modalCardClone.querySelector(".modal");
const cardsList = document.querySelectorAll(".post");
const cardsArray = Array.from(cardsList);
const cardImagesList = document.querySelectorAll(".post__picture");
const cardImagesArray = Array.from(cardImagesList);
const cardImage = modalCardClone.querySelector(".modal__card-image");
const cardTitle = modalCardClone.querySelector(".modal__card-title");
const closeCardModalButton = modalCardClone.querySelector(".close-icon");

console.log(cardsList);

cardImagesArray.forEach((card) => {
  card.addEventListener("click", (event) => {
    let currentCardImage = event.currentTarget;
    let currentCardTitle =
      event.currentTarget.nextElementSibling.firstElementChild.textContent;

    cardImage.src = currentCardImage.src;
    cardTitle.textContent = currentCardTitle;

    pageFrame.append(modalCard);
  });
});

function closeCardModal() {
  modalCard.remove();
}
closeCardModalButton.addEventListener("click", closeCardModal);
