import { imgModals } from "../utils/constants.js";
import { Popup } from "../components/Popup.js";

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
  }

  _handleEscClose() {
    super._handleEscClose();
  }
}
