import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from '../components/Card.jsx';

const TableContainer = ({ deck, setDeck }) => {
  const [tableCards, setTableCards] = useState([]);

  function startNewGame() {
    // console.log('From startNewGame before the functions, here is deck:', deck);
    shuffleCards(deck);
    // dealCardsToTable();
    // console.log('From startNewGame after the functions, here is deck:', deck);
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

    // console.log('From shuffleCards, here is deck:', deck);
    setDeck(shuffledDeck);
  }

  function dealCardsToTable() {
    const shuffledDeck = structuredClone(deck);
    // console.log('From dealCardsToTable, here is deck:', shuffledDeck);

    const arr = [];

    for (let i = 0; i < 6; i++) {
      const topOfDeck = shuffledDeck.pop();
      arr.push(<Card key={topOfDeck.cardID} card-id={topOfDeck.cardID} src={topOfDeck.src} alt={topOfDeck.alt} />);
    }

    setTableCards(arr);
    setDeck(shuffledDeck);
  }

  function dealCardsToHand() {
    
  }


    return (
    <div className="table-container">
      <div className="left-table">
        {tableCards}
      </div>
      <div className="deck-container">
        <button onClick={() => startNewGame()} >Shuffle Cards</button>
        <button onClick={() => dealCardsToTable()} >Deal</button>
        {/* <button onClick={() => dealCardsToTable()} >Reset Game</button> */}
        <img id="card-back" src="../images/card-back.png" alt="" />
      </div>
      <div className="right-table">
        {/* <Card key={deck[3].cardID} card-id={deck[3].cardID} src={deck[3].src} alt={deck[3].alt} /> */}
      </div>
    </div>
  );
};

export default TableContainer;