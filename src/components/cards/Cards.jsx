import React from "react";
import "./Cards.css";

const Cards = (item) => {
  const { id, desc, title, image } = item;
  return (
    <div className="cards">
      <div className="title">
        <h1 className="title name">{title}</h1>
      </div>
      <img src={image} alt="image" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cards;
