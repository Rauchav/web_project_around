import {
  getInitialCardsInfo,
  getInitialUserInfo,
  addNewCard,
  resetCardPosts,
} from "./constants.js";
import { UserInfo } from "../components/UserInfo.js";
import { renderLoading } from "../components/PopupWithForm.js";
import { loadingDelete } from "../components/PopupConfirm.js";

export class Api {
  constructor(baseUrl, headers, method) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._method = method;
  }

  getInitialUserInfo() {
    fetch(`${this._baseUrl}`, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        getInitialUserInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserInfo(element) {
    fetch(`${this._baseUrl}`, {
      method: `${this._method}`,
      headers: this._headers,
      body: JSON.stringify({
        name: element.querySelector("#input1").value,
        about: element.querySelector("#input2").value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        const newUserInfo = new UserInfo();
        newUserInfo.updateUserInfo(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false);
        element.remove();
      });
  }

  updateUserPic(element) {
    fetch(`${this._baseUrl}`, {
      method: `${this._method}`,
      headers: this._headers,
      body: JSON.stringify({
        avatar: element.querySelector("#input1").value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        const newUserInfo = new UserInfo();
        newUserInfo.updateUserPic(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    fetch(`${this._baseUrl}`, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        getInitialCardsInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addNewCard(element) {
    fetch(`${this._baseUrl}`, {
      method: `${this._method}`,
      headers: this._headers,
      body: JSON.stringify({
        name: element.querySelector("#input1").value,
        link: element.querySelector("#input2").value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        addNewCard(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false);
        element.remove();
      });
  }

  deleteCard(element) {
    fetch(`${this._baseUrl}/${element.id}`, {
      method: `${this._method}`,
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then(() => {
        resetCardPosts(element);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loadingDelete(false);
        document.querySelector(".modal").remove();
      });
  }

  likePost(element) {
    fetch(`${this._baseUrl}/${element.id}/likes`, {
      method: `${this._method}`,
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dislikePost(element) {
    fetch(`${this._baseUrl}/${element.id}/likes`, {
      method: `${this._method}`,
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const initialUserInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/users/me",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
  }
);
initialUserInfo.getInitialUserInfo();

export const initialCardsInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/cards/",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
  }
);
initialCardsInfo.getInitialCards();

const updatedUserInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/users/me",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
    "Content-Type": "application/json",
  },
  "PATCH"
);

const updatedUserPic = new Api(
  "https://around-api.es.tripleten-services.com/v1/users/me/avatar",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
    "Content-Type": "application/json",
  },
  "PATCH"
);

const newCardInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/cards/",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
    "Content-Type": "application/json",
  },
  "POST"
);

export const deletedCardInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/cards",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
    "Content-Type": "application/json",
  },
  "DELETE"
);

const likeCardPostInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/cards",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
    "Content-Type": "application/json",
  },
  "PUT"
);

const dislikeCardPostInfo = new Api(
  "https://around-api.es.tripleten-services.com/v1/cards",
  {
    authorization: "a7fa4813-8b20-4bcb-ad87-27febffbcd62",
    "Content-Type": "application/json",
  },
  "DELETE"
);

export function patchUpdatedUserInfo(element) {
  updatedUserInfo.updateUserInfo(element.closest(".modal"));
}

export function patchNewUserPicInfo(element) {
  updatedUserPic.updateUserPic(element.closest(".modal"));
}

export function pushNewCardInfo(element) {
  newCardInfo.addNewCard(element.closest(".modal"));
}

export function likeCardPost(element) {
  if (element.alt === "Liked") {
    likeCardPostInfo.likePost(element.closest(".post"));
  } else {
    dislikeCardPostInfo.dislikePost(element.closest(".post"));
  }
}
