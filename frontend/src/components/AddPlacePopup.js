import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {

  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  const handleAddPlaceSubmit = (evt) => {
    evt.preventDefault();

    props.onAddPlace({
      name: title,
      link: link,
    });
  };

  React.useEffect(() => {
    setTitle("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonTitle={props.isLoading ? 'Создание...' : 'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <label className="popup__label">
        <input
          type="text"
          id="title"
          className="popup__input popup__caption"
          name="card-name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          onChange={handleTitleChange}
          value={title || ""}
        />
        <span id="title-error" className="error"></span>
      </label>
      <label className="popup__label">
        <input
          type="url"
          id="url-add"
          className="popup__input popup__url"
          name="card-link"
          placeholder="Ссылка на картинку"
          required
          onChange={handleLinkChange}
          value={link || ""}
        />
        <span id="url-add-error" className="error"></span>
      </label>
    </PopupWithForm>
  );
}
