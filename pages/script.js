let editProfileButton = document.querySelector(".profile__info-up-edit-button");
let closeModalButton = document.querySelector(".close-icon");
let submitButton = document.querySelector(".modal__box-form-button");
let modal = document.querySelector(".modal");
let nameInput = document.querySelector("#name");
let professionInput = document.querySelector("#profession");
let newName = document.querySelector(".profile__info-up-name");
let newProfession = document.querySelector(".profile__info-down-profession");

let postsCardsContainer = document.querySelector(".posts");
let cardTemplate = document.querySelector(".post__template");
let cardContainer = document.querySelector(".post");

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

editProfileButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", submitInputInfo);
