import {
  cardListSelector,
  formModals,
  pageFrame,
  userInfoButton,
  addCardButton,
  imgModals,
  cardPosts,
  editProfilePicButton,
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupConfirm } from "../components/PopupConfirm.js";
import { PopupEditUserPic } from "../components/PopupEditUserPic.js";
import { formValidator } from "../pages/FormValidator.js";

export const renderedCardPosts = new Section(
  {
    data: cardPosts,
    renderer: (item) => {
      const cardElementInfo = new Card(item.name, item.url, item.id);
      const cardElement = cardElementInfo.generateCard();

      renderedCardPosts.setItem(cardElement);
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

const editUserPicModal = new Section(
  {
    data: "",
    renderer: () => {
      const newEditUserPicInfo = new PopupEditUserPic();
      const newEditUserPicModal = newEditUserPicInfo.generateEditUserPicModal();

      editUserPicModal.setItem(newEditUserPicModal);
    },
  },
  pageFrame
);

export function captureEraseCardInfo(element) {
  const confirmModal = new Section(
    {
      data: "",
      renderer: () => {
        const newConfirmModalInfo = new PopupConfirm();
        const newConfirmModal = newConfirmModalInfo.generateConfirmModal(
          element.closest(".post")
        );

        confirmModal.setItem(newConfirmModal);
      },
    },
    pageFrame
  );

  confirmModal.renderItem();
}

userInfoButton.addEventListener("click", () => {
  userInfoModal.renderItem();
  formValidator(document.querySelector(".modal"));
});

addCardButton.addEventListener("click", () => {
  addCardModal.renderItem();
  formValidator(document.querySelector(".modal"));
});

editProfilePicButton.addEventListener("click", () => {
  editUserPicModal.renderItem();
  formValidator(document.querySelector(".modal"));
});

export function captureImgInfoEvt() {
  imgModal.renderItem();
}
