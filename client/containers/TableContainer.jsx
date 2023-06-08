import React from "react";
import { useState } from "react";
import Card from '../components/Card.jsx';

const TableContainer = ({ deck, setDeck }) => {
  const [tableCards, setTableCards] = useState([]);

  function startNewGame() {

  }

  function dealCardsToTable() {
    const shuffledDeck = structuredClone(deckOfCards);

    const arr = [];

    for (let i = 0; i < 7; i++) {
      const topOfDeck = shuffledDeck.pop();
      arr.push(<Card />);
    }

    setTableCards(arr);
  }

  function dealCardsToHand() {

  }

  function shuffleCards(deckOfCards) {
    // const shuffledDeck = JSON.parse(JSON.stringify(deck)); <- old method, trying the new cloning thing available
    const shuffledDeck = structuredClone(deckOfCards);

    for (let i = 0; i < 48; i++) {
      // Get random index
      let randomIndex = i + (Math.floor(Math.random() * (48 - i)));
      // Swap value at current index i with the value at randomIndex
      let tmp = shuffledDeck[i];
      shuffledDeck[i] = shuffledDeck[randomIndex];
      shuffledDeck[randomIndex] = tmp;
    }
    
    setDeck(shuffledDeck);
  }

    return (
    <div className="table-container">
      <div className="left-table">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="deck-container">
        <button onClick={() => shuffleCards(deck)} className="new-game-button">New Game</button>
        <img id="card-back" src="../images/card-back.png" alt="" />
      </div>
      <div className="right-table">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TableContainer;