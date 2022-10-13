import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/currentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img
            className="profile__picture"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <div className="profile__overlay"></div>
        </div>
        <div className="profile__wrapper">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <p className="profile__subtitle">{currentUser.about}</p>
        <button
          type="button"
          className="profile__add button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="photo">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            name={item.name}
            link={item.link}
            likes={item.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
