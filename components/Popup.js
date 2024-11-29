class Popup {
  constructor(title, input1, input2) {
    this._title = title;
    this._input1 = input1;
    this._input2 = input2;
  }

  open() {}

  close() {}

  _handleEscClose() {}

  setEventListeners() {}
}

/*
class PopupWithImage extends Popup {
  constructor() {
    super(Popup);
  }

  open() {}

  close() {}

  _handleEscClose() {}

  setEventListeners() {}
}

*/

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
    this._element.querySelector(".modal").id = "userInfoModal";
    this._element.querySelector(".modal__box-title").textContent =
      "Editar Perfil";
    this._element.querySelector("#input1").placeholder = "Nombre";
    this._element.querySelector("#input2").placeholder = "Acerca de ti";

    return this._element;
  }

  generateAddCardModal() {
    this._element = this._getTemplate();
    this._element.querySelector(".modal").id = "addCardModal";
    this._element.querySelector(".modal__box-title").textContent =
      "Nuevo Lugar";
    this._element.querySelector("#input1").placeholder = "Título";
    this._element.querySelector("#input2").placeholder = "URL de la imagen";
    this._element.querySelector("#input2").type = "url";

    return this._element;
  }
}

/*
export function createUserInfoModal(modalInfo) {
  const newUserInfoModalinfo = new PopupWithForm(
    modalInfo.title,
    modalInfo.input1,
    modalInfo.input2
  );
  const newUserInfoModal = newUserInfoModalinfo.generateModalModal();
  console.log(newUserInfoModal);
}

class UserInfo {
  constructor() {}

  open() {}

  close() {}

  _handleEscClose() {}

  setEventListeners() {}
}
*/
