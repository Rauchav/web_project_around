//Validar el formulario del Modal para editar información de usuario

function extractModalUserInfo() {
  const modalUserInfoForm = modalUserInfo.querySelector(".modal__box-form");
  const formElement = modalUserInfoForm;
  const buttonElement = formElement.querySelector(".modal__box-form-button");
  const closeElement = modalUserInfo.querySelector(".close-icon");

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorMsg = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add("modal__box-form-input-error");
    errorMsg.classList.add("input-error-show");
    errorMsg.textContent = errorMessage;
  };

  const hideInputError = (formElement, inputElement) => {
    const errorMsg = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove("modal__box-form-input-error");
    errorMsg.classList.remove("input-error-show");
    errorMsg.textContent = "";
  };

  const isValid = (formElement, inputElement) => {
    if (inputElement.validity.tooShort) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else if (inputElement.validity.valueMissing) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(".modal__box-form-input")
    );

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement);

        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("modal__box-form-button-inactive");
    } else {
      buttonElement.classList.remove("modal__box-form-button-inactive");
    }
  };

  closeElement.addEventListener("click", () => {
    formElement.reset();
  });

  buttonElement.addEventListener("click", () => {
    formElement.reset();
  });

  setEventListeners(formElement);
}

//Validar el formulario del Modal para crear una nueva tarjeta

function extractModalAddCard() {
  const modalAddCardForm = modalAddCard.querySelector(".modal__box-form");
  const formElement = modalAddCardForm;
  const buttonElement = formElement.querySelector(".modal__box-form-button");
  const closeElement = modalAddCard.querySelector(".close-icon");

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorMsg = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add("modal__box-form-input-error");
    errorMsg.classList.add("input-error-show");
    errorMsg.textContent = errorMessage;
  };

  const hideInputError = (formElement, inputElement) => {
    const errorMsg = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove("modal__box-form-input-error");
    errorMsg.classList.remove("input-error-show");
    errorMsg.textContent = "";
  };

  const isValid = (formElement, inputElement) => {
    if (inputElement.validity.tooShort) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else if (inputElement.validity.valueMissing) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else if (inputElement.validity.typeMismatch) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(".modal__box-form-input")
    );

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement);

        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("modal__box-form-button-inactive");
    } else {
      buttonElement.classList.remove("modal__box-form-button-inactive");
    }
  };

  closeElement.addEventListener("click", () => {
    formElement.reset();
  });

  buttonElement.addEventListener("click", () => {
    formElement.reset();
  });

  setEventListeners(formElement);
}
