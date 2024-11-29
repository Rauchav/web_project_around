import {
  initialCards,
  cardListSelector,
  formModals,
  pageFrame,
  userInfoButton,
  addCardButton,
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Card } from "../pages/pruebaCard.js";
import { PopupWithForm } from "../components/Popup.js";

const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item.link, item.name);
      const cardElement = card.generateCard();

      defaultCardList.setItem(cardElement);
    },
  },
  cardListSelector
);

const userInfoModal = new Section(
  {
    data: formModals[0],
    renderer: (modalInfo) => {
      const newUserInfoModalinfo = new PopupWithForm(
        modalInfo.title,
        modalInfo.input1,
        modalInfo.input2
      );
      const newUserInfoModal = newUserInfoModalinfo.generateUserInfoModal();

      userInfoModal.setItem(newUserInfoModal);
    },
  },
  pageFrame
);

const addCardModal = new Section(
  {
    data: formModals[1],
    renderer: (modalInfo) => {
      const newAddCardModalinfo = new PopupWithForm(
        modalInfo.title,
        modalInfo.input1,
        modalInfo.input2
      );
      const newAddCardModal = newAddCardModalinfo.generateAddCardModal();

      addCardModal.setItem(newAddCardModal);
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

defaultCardList.renderItems();
