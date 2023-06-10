import React from "react";
import Card from '../components/Card.jsx';

const TableContainer = ({ deck, setDeck, tableCards, setTableCards, handCards, setHandCards }) => {
  
  function startNewGame(deckOfCards) {
    const shuffledDeck = structuredClone(deckOfCards);

    for (let i = 0; i < 48; i++) {
      // Get random index
      let randomIndex = i + (Math.floor(Math.random() * (48 - i)));
      // Swap value at current index i with the value at randomIndex
      let tmp = shuffledDeck[i];
      shuffledDeck[i] = shuffledDeck[randomIndex];
      shuffledDeck[randomIndex] = tmp;
    }

    const tableArr = [];
    for (let i = 0; i < 6; i++) {
      const topOfDeck = shuffledDeck.pop();
      tableArr.push(<Card key={topOfDeck.cardID} card-id={topOfDeck.cardID} src={topOfDeck.src} alt={topOfDeck.alt} />);
    }
    setTableCards(tableArr);

    const handArr = [];
    for (let i = 0; i < 7; i++) {
      const topOfDeck = shuffledDeck.pop();
      handArr.push(<Card key={topOfDeck.cardID} card-id={topOfDeck.cardID} src={topOfDeck.src} alt={topOfDeck.alt} />);
    }
    setHandCards(handArr);

    setDeck(shuffledDeck);
  }

    return (
    <div className="table-container">
      <div className="left-table">
        {tableCards}
      </div>
      <div className="deck-container">
        <button onClick={() => startNewGame(deck)} >New Game</button>
        <img id="card-back" src="../images/card-back.png" alt="" />
      </div>
      <div className="right-table">
        <Card key={16000} card-id={'placeholder16'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={17000} card-id={'placeholder17'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={18000} card-id={'placeholder18'} src={'../images/nickyoung.png'} alt={'place holder'} />
        <Card key={19000} card-id={'placeholder19'} src={'../images/nickyoung.png'} alt={'place holder'} />
      </div>
    </div>
  );
};

export default TableContainer;