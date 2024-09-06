import React from "react";

const Card = ({ imageSrc, content,name }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageSrc} className="card-img-top" alt="Card Image" />
      <h1 className="text_info">{name}</h1>
      <div className="card-body">
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
