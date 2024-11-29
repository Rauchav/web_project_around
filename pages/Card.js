import { createImgModal } from "./utils.js";
import { pageFrame, userName, userInfo } from "./script.js";

class Card {
  constructor(link, name) {
    this._link = link;
    this._name = name;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(".post__template")
      .content.cloneNode(true);

    return cardElement;
  }

  _likeCard(element) {
    if (element.alt === "Not liked") {
      element.alt = "Liked";
      element.src = "./images/heart-icon-black.svg";
    } else {
      element.alt = "Not liked";
      element.src = "./images/heart-icon.svg";
    }
  }

  _deleteCard(element) {
    element.closest(".post").remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".post__picture").src = this._link;
    this._element.querySelector(".post__info-bar-name").textContent =
      this._name;
    //Aquí paso el valor de la propiedad alt en la imagen de cada tarjeta creada
    this._element.querySelector(
      ".post__picture"
    ).alt = `fotografia de un paisaje en ${this._name}`;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".heart-icon")
      .addEventListener("click", (evt) => {
        this._likeCard(evt.target);
      });

    this._element
      .querySelector(".post__picture")
      .addEventListener("click", (evt) => {
        createImgModal(evt.target);
      });

    this._element
      .querySelector(".trash-icon")
      .addEventListener("click", (evt) => {
        this._deleteCard(evt.target);
      });
  }
}

initialCards.forEach((item) => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();

  document.querySelector(".posts").append(cardElement);
});

function transportModal() {
  const modalAddCard = pageFrame.querySelector(".modal");
  const titleInput = modalAddCard.querySelector("#input1");
  const urlLinkInput = modalAddCard.querySelector("#input2");
  const submitButtonAddCard = modalAddCard.querySelector(
    ".modal__box-form-button"
  );

  function submitNewCardInfo(evt) {
    evt.preventDefault();

    if (evt.target.closest(".modal").id === "addCardModal") {
      const newCardInfo = {
        name: `${titleInput.value}`,
        link: `${urlLinkInput.value}`,
      };

      addNewCards(newCardInfo);
    } else {
      const newCardInfo = {
        name: `${titleInput.value}`,
        info: `${urlLinkInput.value}`,
      };
      editUserInfo(newCardInfo);
    }
  }

  function addNewCards(cardInfo) {
    const newCardinfo = new Card(cardInfo.link, cardInfo.name);
    const newCard = newCardinfo.generateCard();
    document.querySelector(".posts").prepend(newCard);
    closeModal();
  }

  function editUserInfo(cardInfo) {
    userName.textContent = cardInfo.name;
    userInfo.textContent = cardInfo.info;
    closeModal();
  }

  function closeModal() {
    document.querySelector(".modal").remove();
  }

  submitButtonAddCard.addEventListener("click", submitNewCardInfo);
}

export { transportModal };
