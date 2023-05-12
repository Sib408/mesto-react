function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_card-open ${card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_card_open">
        <img
          className="popup__img-card"
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
        />
        <h2 className="popup__title-card">{card ? card.name : ""}</h2>
        <button
          className="popup__button popup__button_type_close"
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
        ></button>
      </div>
    </section>
  );
}
export default ImagePopup;
