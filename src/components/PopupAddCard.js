import React from "react";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!name || !link}
      buttonText={"Создать"}
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="pictureTitle"
        id="title-img"
        required
        minLength="2"
        maxLength="30"
        placeholder="Название"
        value={name}
        onChange={handleNameChange}
      />
      <span className="name-error popup__input-error"></span>

      <input
        className="popup__input popup__input_type_url"
        type="url"
        id="url"
        name="link"
        required
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="url-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default PopupAddCard;
