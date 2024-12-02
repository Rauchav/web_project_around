import {
  initialCards,
  cardListSelector,
  formModals,
  pageFrame,
  userInfoButton,
  addCardButton,
  imgModals,
  newCards,
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Card } from "../pages/pruebaCard.js";
import { PopupWithForm } from "../components/Popup.js";
import { PopupWithImage } from "../components/Popup.js";

const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElementInfo = new Card(item.name, item.url);
      const cardElement = cardElementInfo.generateCard();

      defaultCardList.setItem(cardElement);
    },
  },
  cardListSelector
);

const newCardList = new Section(
  {
    data: newCards,
    renderer: (item) => {
      const cardElementInfo = new Card(item.name, item.url);
      const cardElement = cardElementInfo.generateCard();

      defaultCardList.setNewCard(cardElement);
    },
  },
  cardListSelector
);

const userInfoModal = new Section(
  {
    data: formModals[0],
    renderer: () => {
      const newUserInfoModalInfo = new PopupWithForm();
      const newUserInfoModal = newUserInfoModalInfo.generateUserInfoModal();

      userInfoModal.setItem(newUserInfoModal);
    },
  },
  pageFrame
);

const addCardModal = new Section(
  {
    data: formModals[1],
    renderer: () => {
      const newAddCardModalInfo = new PopupWithForm();
      const newAddCardModal = newAddCardModalInfo.generateAddCardModal();

      addCardModal.setItem(newAddCardModal);
    },
  },
  pageFrame
);

const imgModal = new Section(
  {
    data: imgModals[0],
    renderer: () => {
      const newImgModalInfo = new PopupWithImage();
      const newImgModal = newImgModalInfo.generateImgModal();

      imgModal.setItem(newImgModal);
    },
  },
  pageFrame
);

userInfoButton.addEventListener("click", () => {
  userInfoModal.renderItem();
});

addCardButton.addEventListener("click", () => {
  addCardModal.renderItem();
});

export function captureImgInfoEvt() {
  imgModal.renderItem();
}

export function captureNewCardEvt() {
  console.log(newCards);
  newCardList.renderItems();
}

defaultCardList.renderItems();
