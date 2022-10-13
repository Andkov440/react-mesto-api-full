import { baseUrl } from "../utils/utils";

const returnResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.statusText);
};

export const register = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => returnResult(res));
};

export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
    body: JSON.stringify({ email: email, password: password }),
  }).then(res => {
    return returnResult(res)
});
};

export const getContent = (jwt) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
  }).then(res => {
    return returnResult(res)
});
};
