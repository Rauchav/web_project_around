import { userName, aboutUser } from "../utils/constants.js";

export class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }

  getUserInfo(element) {
    this._name = element.querySelector("#input1").value;
    this._about = element.querySelector("#input2").value;

    this.setUserInfo();
  }

  setUserInfo() {
    userName.textContent = this._name;
    aboutUser.textContent = this._name;
  }
}
