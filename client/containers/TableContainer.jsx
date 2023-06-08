import React from "react";
import Card from '../components/Card.jsx';

const TableContainer = () => {
  return (
    <div className="table-container">
      <div className="jan-jun-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="deck-container">
        <button onClick={() => console.log('clicked!')} className="new-game-button">New Game</button>
        <img id="card-back" src="../images/card-back.png" alt="" />
      </div>
      <div className="jul-dec-container">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TableContainer;