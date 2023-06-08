import React from "react";
import Card from '../components/Card.jsx';

const ScoreContainer = () => {
  return (
    <div className="score-container">
      <div className="player1-score-container">
        <span>bright</span>
        <span>animal</span>
        <span>ribbon</span>
        <span>junk</span>
      </div>
      <div className="player2-score-container">
        <span>bright</span>
        <span>animal</span>
        <span>ribbon</span>
        <span>junk</span>
      </div>
      <div className="player3-score-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ScoreContainer;