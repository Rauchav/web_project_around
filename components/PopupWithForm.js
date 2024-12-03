import { captureNewCardElement } from "../utils/constants.js";
import { captureNewCardEvt } from "../pages/index.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "./UserInfo.js";

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

  _handleEscClose() {
    super._handleEscClose();
  }
}
