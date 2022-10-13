import React from "react";
import "../index.css";

export default function InfoTooltip(props) {
  return (
    <section
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      onClick={props.onClose}
    >
      <div className="popup__info">
        <button
          className="popup__close button"
          type="button"
          onClick={props.onClose}
        />
        <img className="popup__status" src={props.image} alt={props.title} />
        <h2 className="popup__message">{props.title}</h2>
      </div>
    </section>
  );
}
