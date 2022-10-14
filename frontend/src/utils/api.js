import { baseUrl } from "./utils";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResult(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');
    return {
        'Authorization': `Bearer ${jwt}`,
        ...this._headers,
    };
}

  getUserInfo = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(),
      credentials: "include",
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  getCards = () => {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._getHeaders(),
      credentials: "include",
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  patchUserInfo = (name, about) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  changeAvatar = (avatar) => {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  postCard = (name, link) => {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  deleteCard = (cardId) => {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  likeCard = (cardId) => {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      credentials: "include",
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResult(res);
    });
  };

  dislikeCard = (cardId) => {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      credentials: "include",
      headers: this._getHeaders(),
    }).then((res) => {
      if (res.ok) {
        return this._checkResult(res);
      }
    });
  };
}

export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});
