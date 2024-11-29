export class Card {
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

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".post__picture").src = this._link;
    this._element.querySelector(".post__info-bar-name").textContent =
      this._name;
    this._element.querySelector(
      ".post__picture"
    ).alt = `fotografia de un paisaje en ${this._name}`;

    return this._element;
  }
}
