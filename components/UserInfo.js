import { userName, aboutUser, userProfilePic } from "../utils/constants.js";

export class UserInfo {
  constructor(name, about, avatar) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  updateUserInfo(object) {
    userName.textContent = object.name;
    aboutUser.textContent = object.about;
  }

  updateUserPic(object) {
    userProfilePic.style.backgroundImage = `url(${object.avatar})`;
  }

  setInitialUserInfo(object) {
    object.forEach((user) => {
      userName.textContent = user.name;
      aboutUser.textContent = user.about;
      userProfilePic.style.backgroundImage = `url(${user.avatar})`;
    });
  }
}
