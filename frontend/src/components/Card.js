import React from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <figure className="photo__item">
      <img
        className="photo__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <figcaption className="photo__caption">
        <h2 className="photo__title">{props.name}</h2>
        <div className="photo__like-wrapper">
          <button
            type="button"
            className={`photo__like button ${isLiked && "photo__like_active"}`}
            onClick={handleLikeClick}
          ></button>
          <p className="photo__like-count">{props.likes}</p>
        </div>
      </figcaption>
      <button
        type="button"
        className={`photo__trashbin button ${
          !isOwn && "photo__trashbin_disable"
        }`}
        onClick={handleDeleteClick}
      ></button>
    </figure>
  );
}
