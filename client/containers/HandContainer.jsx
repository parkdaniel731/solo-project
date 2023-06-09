import React from "react";
import Card from '../components/Card.jsx';

const HandContainer = ({ handCards }) => {

  return (
    <div className="hand-container">
      <div className="player-hand">
        <button id="hand">Player 1 Hand</button>
        {handCards}
      </div>
    </div>
  );
};

export default HandContainer;