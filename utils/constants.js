export const initialCards = [
  {
    name: "Valle de Yosemite",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const formModals = [
  {
    title: "Editar Perfil",
    input1: "Nombre",
    input2: "Acerca de ti",
  },
  {
    title: "Nuevo Lugar",
    input1: "Título",
    input2: "URL de la imagen",
  },
];

export const imgModals = [];
export function captureImgModalElement(element) {
  imgModals.push({
    src: `${element.src}`,
    alt: `${element.alt}`,
  });
}

export const newCards = [];
export function captureNewCardElement(element) {
  newCards.push({
    name: `${element.closest(".modal").querySelector("#input1").value}`,
    url: `${element.closest(".modal").querySelector("#input2").value}`,
  });
}

export const cardListSelector = ".posts";
export const pageFrame = ".page";
export const userInfoButton = document.querySelector(
  ".profile__info-up-edit-button"
);
export const addCardButton = document.querySelector(".add__card-button");
export const userName = document.querySelector(".profile__info-up-name");
export const aboutUser = document.querySelector(
  ".profile__info-down-profession"
);
export const currentModal = document.querySelector(".modal");
