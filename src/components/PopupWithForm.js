function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
  isDisabled,
  buttonText,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form"
          name={`popup-${name}`}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className={`popup__button popup__button_type_submit popup__button_type_save ${
              isDisabled ? "popup__button-submit_valid" : ""
            } `}
            aria-label="Сохранить"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
        <button
          className="popup__button popup__button_type_close"
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
