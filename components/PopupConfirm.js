import { Popup } from "../components/Popup.js";
import { deletedCardInfo } from "../utils/Api.js";

export class PopupConfirm extends Popup {
  constructor() {
    super(Popup);
  }

  _getTemplate() {
    const modalElement = document
      .querySelector(".modal__confirm-template")
      .content.cloneNode(true);

    return modalElement;
  }

  generateConfirmModal(element) {
    this._element = this._getTemplate();
    this.setEventListeners(element);
    this._element.querySelector(".modal__box-title").textContent =
      "¿Estás segur@?";

    return this._element;
  }

  setEventListeners(element) {
    super.setEventListeners();
    this._element
      .querySelector(".modal__box-form-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        deletedCardInfo.deleteCard(element);
        loadingDelete(true);
      });
  }

  _handleEscClose() {
    super._handleEscClose();
  }
}

export function loadingDelete(isLoading) {
  if (isLoading) {
    document.querySelector(".modal__box-form-button").textContent =
      "Eliminando...";
  } else {
    document.querySelector(".modal__box-form-button").textContent = "Si";
  }
}
