import { captureImgInfoEvt } from "./index.js";
import { captureImgModalElement } from "../utils/constants.js";

export class Card {
  constructor(name, url) {
    this._name = name;
    this._url = url;
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
    this._element.querySelector(".post__picture").src = this._url;
    this._element.querySelector(".post__info-bar-name").textContent =
      this._name;
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
        captureImgModalElement(evt.target);
        captureImgInfoEvt();
      });

    this._element
      .querySelector(".trash-icon")
      .addEventListener("click", (evt) => {
        this._deleteCard(evt.target);
      });
  }
}
