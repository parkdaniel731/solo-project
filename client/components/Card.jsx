import React from "react";

const Card = ({ key, cardID, src, alt }) => {
  return (
    <div>
      <img id="card-front" key={key} card-id={cardID} src={src} alt={alt} />
    </div>
  );
};

export default Card;