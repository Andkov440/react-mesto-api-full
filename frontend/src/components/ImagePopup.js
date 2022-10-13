export default function ImagePopup(props) {
  return (
    <section className={`popup popup-picture ${props.card && "popup_opened"}`}>
      <div className="popup-picture__container">
        <img
          className="popup-picture__image"
          src={props.card && props.card.link}
          alt={props.card && props.card.name}
        />
        <p className="popup-picture__caption">
          {props.card && props.card.name}
        </p>
        <button
          type="button"
          className="popup__close popup__close_image button"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}
