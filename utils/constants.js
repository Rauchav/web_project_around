import { renderedCardPosts } from "../pages/index.js";
import { UserInfo } from "../components/UserInfo.js";

export const initialUserInfo = [];

export function getInitialUserInfo(info) {
  initialUserInfo.push({
    name: `${info.name}`,
    about: `${info.about}`,
    avatar: `${info.avatar}`,
  });
  const userInfo = new UserInfo();
  userInfo.setInitialUserInfo(initialUserInfo);
}

export const cardPosts = [];

export function getInitialCardsInfo(cards) {
  cards.forEach((card) => {
    cardPosts.push({
      name: card.name,
      url: card.link,
      id: card._id,
    });
  });
  renderedCardPosts.renderItems();
}

export function addNewCard(card) {
  cardPosts.unshift({
    name: card.name,
    url: card.link,
    id: card._id,
  });
  renderedCardPosts.renderItems();
}

export function resetCardPosts(card) {
  card.remove();
}

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
  imgModals.unshift({
    src: `${element.src}`,
    alt: `${element.alt}`,
  });
}

export const editProfilePicButton = document.querySelector(
  ".profile__info-picture"
);
export const cardListSelector = ".posts";
export const pageFrame = ".page";
export const userInfoButton = document.querySelector(
  ".profile__info-up-edit-button"
);
export const userProfilePic = document.querySelector(".profile__info-picture");
export const addCardButton = document.querySelector(".add__card-button");
export const userName = document.querySelector(".profile__info-up-name");
export const aboutUser = document.querySelector(
  ".profile__info-down-profession"
);
export const userAvatar = document.querySelector(".profile__info-picture");
export const currentModal = document.querySelector(".modal");
