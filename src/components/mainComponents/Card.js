import React from "react";
import "../scss/Card.scss";

const Card = ({ title, text, date }) => {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__text">{text}</p>
      <p className="card__date">{date}</p>
    </div>
  );
};

export default Card;
