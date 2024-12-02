export function formValidator(element) {
  const modal = element;
  const currentFormElement = modal.querySelector(".modal__box-form");

  passCurrentFormInfo(currentFormElement);
}

class Form {
  constructor(formElement, inputElement, errorMessage) {
    this._formElement = formElement;
    this._inputElement = inputElement;
    this._errorMessage = errorMessage;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorMsg = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("modal__box-form-input-error");
    errorMsg.textContent = errorMessage;
    errorMsg.style.display = "block";
  }

  _hideInputError(formElement, inputElement) {
    const errorMsg = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("modal__box-form-input-error");
    errorMsg.style.display = "none";
  }

  _isValid(formElement, inputElement) {
    if (inputElement.validity.tooShort) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else if (inputElement.validity.valueMissing) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else if (inputElement.validity.typeMismatch) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(".modal__box-form-input")
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(
          inputList,
          document.querySelector(".modal__box-form-button")
        );
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, submitElement) {
    if (this._hasInvalidInput(inputList)) {
      submitElement.classList.add("modal__box-form-button-inactive");
      submitElement.disabled = true;
    } else {
      submitElement.classList.remove("modal__box-form-button-inactive");
      submitElement.disabled = false;
    }
  }

  generateForm(currentFormElement) {
    this._formElement = this._inputElement = currentFormElement
      .querySelector(".modal__box-form-input")
      .closest(".modal__box-form");
    this._inputElement = currentFormElement.querySelector(
      ".modal__box-form-input"
    );
    this._errorMessage = currentFormElement.querySelector(".input-error");

    this._setEventListeners(this._formElement);
  }
}

function enableValidation(item) {
  const currentForm = new Form(
    item.formElement,
    item.inputElement,
    item.errorMessage
  );

  currentForm.generateForm(document.querySelector(".modal__box-form"));
}

function passCurrentFormInfo(currentFormElement) {
  enableValidation(currentFormElement);
}
