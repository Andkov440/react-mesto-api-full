export default function PopupWithForm(props) {
  const { name, title, buttonTitle, isOpen, onClose, onSubmit, children } =
    props;

  return (
    <section className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form
          className={`popup__form popup__form_${name}`}
          name={name}
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__submit button">
            {buttonTitle}
          </button>
          <button
            type="button"
            className={`popup__close popup__close_${name} button`}
            onClick={onClose}
          ></button>
        </form>
      </div>
    </section>
  );
}
