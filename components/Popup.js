import {
  imgModals,
  userName,
  aboutUser,
  captureNewCardElement,
} from "../utils/constants.js";

import { captureNewCardEvt } from "../pages/index.js";

class Popup {
  constructor(title, input1, input2) {
    this._title = title;
    this._input1 = input1;
    this._input2 = input2;
  }

  close(element) {
    element.closest(".modal").remove();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape" && document.querySelector(".modal")) {
      document.querySelector(".modal").remove();
    }
  }

  setEventListeners() {
    this._element
      .querySelector(".close-icon")
      .addEventListener("click", (evt) => {
        this.close(evt.target);
      });

    this._element.querySelector(".modal").addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("close-icon")
      ) {
        this.close(evt.target);
      }
    });

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}

export class PopupWithImage extends Popup {
  constructor() {
    super(Popup);
  }

  _getTemplate() {
    const modalElement = document
      .querySelector(".modal__card-template")
      .content.cloneNode(true);

    return modalElement;
  }

  generateImgModal() {
    this._element = this._getTemplate();
    this.setEventListeners();
    this._element.querySelector(".modal__card-image").src = imgModals[0].src;
    this._element.querySelector(
      ".modal__card-image"
    ).alt = `fotografia de un paisaje en ${imgModals[0].alt}`;
    this._element.querySelector(".modal__card-title").textContent =
      imgModals[0].alt;

    return this._element;
  }

  setEventListeners() {
    super.setEventListeners();

    console.log(this._element.querySelector(".modal__box-form-button"));
  }

  _handleEscClose() {
    super._handleEscClose();
  }
}

export class PopupWithForm extends Popup {
  constructor() {
    super(Popup);
  }

  _getTemplate() {
    const modalElement = document
      .querySelector(".modal__box-template")
      .content.cloneNode(true);

    return modalElement;
  }

  generateUserInfoModal() {
    this._element = this._getTemplate();
    this.setEventListeners();
    this._element.querySelector(".modal").id = "userInfoModal";
    this._element.querySelector(".modal__box-title").textContent =
      "Editar Perfil";
    this._element.querySelector("#input1").placeholder = "Nombre";
    this._element.querySelector("#input2").placeholder = "Acerca de ti";

    return this._element;
  }

  generateAddCardModal() {
    this._element = this._getTemplate();
    this.setEventListeners();
    this._element.querySelector(".modal").id = "addCardModal";
    this._element.querySelector(".modal__box-title").textContent =
      "Nuevo Lugar";
    this._element.querySelector("#input1").placeholder = "Título";
    this._element.querySelector("#input2").placeholder = "URL de la imagen";
    this._element.querySelector("#input2").type = "url";

    return this._element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element
      .querySelector(".modal__box-form-button")
      .addEventListener("click", (evt) => {
        if (evt.target.closest(".modal").id === "userInfoModal") {
          evt.preventDefault();
          const userInfo = new UserInfo();
          userInfo.getUserInfo(document.querySelector(".modal"));
          this.close(evt.target);
        } else if (evt.target.closest(".modal").id === "addCardModal") {
          evt.preventDefault(evt.target);
          captureNewCardElement(evt.target);
          captureNewCardEvt();
          this.close(evt.target);
        }
      });
  }
}

class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }

  getUserInfo(element) {
    this._name = element.querySelector("#input1").value;
    this._about = element.querySelector("#input2").value;

    this.setUserInfo();
  }

  setUserInfo() {
    userName.textContent = this._name;
    aboutUser.textContent = this._name;
  }
}
