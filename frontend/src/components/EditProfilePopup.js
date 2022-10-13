import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/currentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAboutChange = (evt) => {
    setAbout(evt.target.value);
  };

  const handleEditProfileSubmit = (evt) => {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: about,
    });
  };

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonTitle={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleEditProfileSubmit}
    >
      <label className="popup__label">
        <input
          type="text"
          value={name || ""}
          className="popup__input popup__name"
          name="name"
          id="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          onChange={handleNameChange}
        />
        <span id="name-error" className="error"></span>
      </label>
      <label className="popup__label">
        <input
          type="text"
          value={about || ""}
          className="popup__input popup__about"
          name="about"
          id="about"
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
          onChange={handleAboutChange}
        />
        <span id="about-error" className="error"></span>
      </label>
    </PopupWithForm>
  );
}
