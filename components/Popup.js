export class Popup {
  constructor(title, input1, input2) {
    this._title = title;
    this._input1 = input1;
    this._input2 = input2;
  }

  close(element) {
    element.closest(".modal").remove();
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
      if (evt.key === "Escape") {
        this._handleEscClose(evt.target);
      }
    });
  }

  _handleEscClose() {
    document.querySelector(".modal").remove();
  }
}
