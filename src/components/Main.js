import React from "react";
import { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  cards,
  onCardLike,
  onCardClick,
  onCardDelete,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className="contain page__container">
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Аватар"
        />
        <button
          className="profile__avatar-edit"
          type="button"
          aria-label="Изменить аватар"
          onClick={onEditAvatar}
        ></button>

        <div className="profile__info">
          <h1 className="profile__username">{currentUser.name}</h1>
          <button
            className="button button_type_edit"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="button button_type_add"
          aria-label="Добавить"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            name={card.name}
            link={card.link}
            likes={card.likes}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
