
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
   const currentUser = useContext(CurrentUserContext);

    function handleClick() {
      onCardClick(card);
    }

    function handleLikeClick() {
      onCardLike(card);
    }

    function handleDeleteClick() {
      onCardDelete(card);
    }


  const isOwn = card.owner._id === currentUser._id;
  const deleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_type_active" : ""
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

    return (
      <div className="element">
         <img className="element__img"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        {isOwn &&
        <button
          className={deleteButtonClassName} id="element__delete"
          type="button" aria-label="Удалить"
          onClick={handleDeleteClick}
        />}

        <div className="element__block">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__block-like">
            <button className={cardLikeButtonClassName}
              type="button" aria-label="Нравится"
              onClick={handleLikeClick}
            ></button>
            <span className="element__like_counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
    );
  }

  export default Card;

