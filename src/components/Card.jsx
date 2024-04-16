import React from "react";
import "../css/Card.css";

const Card = ({ image, title }) => {
  return (
    <div
      className="cardphoto"
      onClick="#"
    >
      <img src={image} alt={title} />
      <div className="cardphoto-title">{title}</div>
    </div>
  );
};

export default Card;
