import React from "react";
import { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function PopupEditProfile({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!name || !about}
      buttonText={"Сохранить"}
    >
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_name"
          type="text"
          name="name"
          id="name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
          value={name || ""}
          onChange={handleNameChange}
        />
        <span className="name-error popup__input-error"></span>
      </div>
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_about"
          type="text"
          name="about"
          id="about"
          minLength="2"
          maxLength="200"
          required
          placeholder="О себе"
          value={about || ""}
          onChange={handleAboutChange}
        />
        <span className="about-error popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default PopupEditProfile;
