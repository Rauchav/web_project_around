import { Popup } from "../components/Popup.js";
import { patchNewUserPicInfo } from "../utils/Api.js";

export class PopupEditUserPic extends Popup {
  constructor() {
    super(Popup);
  }

  _getTemplate() {
    const modalElement = document
      .querySelector(".modal__editUserPic-template")
      .content.cloneNode(true);

    return modalElement;
  }

  generateEditUserPicModal(element) {
    this._element = this._getTemplate();
    this.setEventListeners(element);
    this._element.querySelector(".modal__box-title").textContent =
      "Cambiar foto de perfil";
    this._element.querySelector("#input1").placeholder = "URL de la imagen";
    this._element.querySelector("#input1").type = "url";

    return this._element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element
      .querySelector(".modal__box-form-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault(evt.target);
        patchNewUserPicInfo(evt.target);
        this.close(evt.target);
      });
  }

  _handleEscClose() {
    super._handleEscClose();
  }
}
