import { transportModal } from "./Card.js";

const pageFrame = document.querySelector(".page");
const AddCardModalButton = document.querySelector(".add__card-button");
const AddUserInfoButton = document.querySelector(
  ".profile__info-up-edit-button"
);
const modalBox = document.querySelectorAll(".modal");

class Modal {
  constructor(title, placeHolder1, placeHolder2) {
    this._title = title;
    this._placeHolder1 = placeHolder1;
    this._placeHolder2 = placeHolder2;
  }

  _getTemplate() {
    const modalElement = document
      .querySelector(".modal__box-template")
      .content.cloneNode(true);

    return modalElement;
  }

  _closeModal(element) {
    element.closest(".modal").remove();
  }

  generateAddCardModal() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".modal__box-title").textContent =
      "Nuevo Lugar";
    this._element.querySelector("#input1").placeholder = "Título";
    this._element.querySelector("#input2").placeholder = "URL de la imagen";
    this._element.querySelector("#input2").type = "url";

    return this._element;
  }

  generateUserInfoModal() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".modal__box-title").textContent =
      "Editar Perfil";
    this._element.querySelector("#input1").placeholder = "Nombre";
    this._element.querySelector("#input2").placeholder = "Acerca de ti";

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".close-icon")
      .addEventListener("click", (evt) => {
        this._closeModal(evt.target);
      });
  }
}

class ImgModal {
  constructor(src, alt) {
    this._src = src;
    this._alt = alt;
  }

  _getTemplate() {
    const modalElement = document
      .querySelector(".modal__card-template")
      .content.cloneNode(true);

    return modalElement;
  }

  _closeBoxModal(element) {
    element.closest(".modal").remove();
  }

  generateImgModal() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".modal__card-image").src = this._src;
    this._element.querySelector(".modal__card-title").textContent = this._alt;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".close-icon")
      .addEventListener("click", (evt) => {
        this._closeBoxModal(evt.target);
      });

    this._element.querySelector(".modal").addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("close-icon")
      ) {
        this._closeBoxModal(evt.target);
      }
    });
  }
}

function createNewAddCardModal(modalInfo) {
  const newAddCardModalinfo = new Modal(
    modalInfo.title,
    modalInfo.placeHolder1,
    modalInfo.placeHolder2
  );
  const newAddCardModal = newAddCardModalinfo.generateAddCardModal();
  pageFrame.append(newAddCardModal);

  transportModal();
}

function createUserInfoModal(modalInfo) {
  const newAddCardModalinfo = new Modal(
    modalInfo.title,
    modalInfo.placeHolder1,
    modalInfo.placeHolder2
  );
  const newAddCardModal = newAddCardModalinfo.generateUserInfoModal();
  pageFrame.append(newAddCardModal);

  transportModal();
}

function createImgModal(modalInfo) {
  const newImgModalinfo = new ImgModal(modalInfo.src, modalInfo.alt);
  const newImgModal = newImgModalinfo.generateImgModal();
  pageFrame.append(newImgModal);
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape" && document.querySelector(".modal")) {
    document.querySelector(".modal").remove();
  }
});

AddCardModalButton.addEventListener("click", createNewAddCardModal);
AddUserInfoButton.addEventListener("click", createUserInfoModal);

export { pageFrame, createImgModal };
