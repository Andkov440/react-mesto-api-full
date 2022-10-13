import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarUrl = React.useRef();

  function handleEditAvatarSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarUrl.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonTitle={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleEditAvatarSubmit}
    >
      <label className="popup__label">
        <input
          type="url"
          id="url-avatar"
          className="popup__input popup__url"
          name="avatar"
          placeholder="Ссылка на аватар"
          ref={avatarUrl}
          required
        />
        <span id="url-avatar-error" className="error"></span>
      </label>
    </PopupWithForm>
  );
}
