const SUITS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const TYPES = ['bright', 'animal', 'ribbon', 'junk'];

const card = {
  id: 1,
  suit: 'jan',
  type: 'bright'
};

// The special animal and ribbon point combos might just be calculated using the suit, not another property
const deck = [
  { cardID: 0, suit: 'jan', type: 'bright' },
  { cardID: 1, suit: 'jan', type: 'ribbon' },
  { cardID: 2, suit: 'jan', type: 'junk' },
  { cardID: 3, suit: 'jan', type: 'junk' },
  { cardID: 4, suit: 'feb', type: 'animal' },
  { cardID: 5, suit: 'feb', type: 'ribbon' },
  { cardID: 6, suit: 'feb', type: 'junk' },
  { cardID: 7, suit: 'feb', type: 'junk' },
  { cardID: 8, suit: 'mar', type: 'bright' },
  { cardID: 9, suit: 'mar', type: 'ribbon' },
  { cardID: 10, suit: 'mar', type: 'junk' },
  { cardID: 11, suit: 'mar', type: 'junk' },
  { cardID: 12, suit: 'apr', type: 'animal' },
  { cardID: 13, suit: 'apr', type: 'ribbon' },
  { cardID: 14, suit: 'apr', type: 'junk' },
  { cardID: 15, suit: 'apr', type: 'junk' },
  { cardID: 16, suit: 'may', type: 'ribbon' },
  { cardID: 17, suit: 'may', type: 'junk' },
  { cardID: 18, suit: 'may', type: 'junk' },
  { cardID: 19, suit: 'may', type: 'double-junk' },
  { cardID: 20, suit: 'jun', type: 'animal' },
  { cardID: 21, suit: 'jun', type: 'ribbon' },
  { cardID: 22, suit: 'jun', type: 'junk' },
  { cardID: 23, suit: 'jun', type: 'junk' },
  { cardID: 24, suit: 'jul', type: 'animal' },
  { cardID: 25, suit: 'jul', type: 'ribbon' },
  { cardID: 26, suit: 'jul', type: 'junk' },
  { cardID: 27, suit: 'jul', type: 'junk' },
  { cardID: 28, suit: 'aug', type: 'bright' },
  { cardID: 29, suit: 'aug', type: 'animal' },
  { cardID: 30, suit: 'aug', type: 'junk' },
  { cardID: 31, suit: 'aug', type: 'junk' },
  { cardID: 32, suit: 'sep', type: 'ribbon' },
  { cardID: 33, suit: 'sep', type: 'junk' },
  { cardID: 34, suit: 'sep', type: 'junk' },
  { cardID: 35, suit: 'sep', type: 'double-junk' },
  { cardID: 36, suit: 'oct', type: 'animal' },
  { cardID: 37, suit: 'oct', type: 'ribbon' },
  { cardID: 38, suit: 'oct', type: 'junk' },
  { cardID: 39, suit: 'oct', type: 'junk' },
  { cardID: 40, suit: 'nov', type: 'bright' },
  { cardID: 41, suit: 'nov', type: 'junk' },
  { cardID: 42, suit: 'nov', type: 'junk' },
  { cardID: 43, suit: 'nov', type: 'double-junk' },
  { cardID: 44, suit: 'dec', type: 'bright' },
  { cardID: 45, suit: 'dec', type: 'animal' },
  { cardID: 46, suit: 'dec', type: 'ribbon' },
  { cardID: 47, suit: 'dec', type: 'double-junk' }
];

/*
Features NOT included in the MVP but should be for the real game:
  - Double Junk as added points
  - Rain cards as point modifiers for certain combos
*/
const brightPoints = () => {};
const animalPoints = () => {};
const ribbonPoints = () => {};
const junkPoints = () => {};

const shuffle = (arg) => {
  const shuffledDeck = arg;
  for (let i = 48; i > 0; i --) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const oldValue = shuffledDeck[newIndex];
    shuffledDeck[newIndex] = shuffledDeck[i];
    shuffledDeck[i] = oldValue;
  }
  return shuffledDeck;
};

/*
State that I need:
  - Deck of card = array of objects that have the card properties
  - the left and right containers displaying cards
  - the deck of cards showing when you press new game
  - Global deck variable or state for deck?
  - const [tableCards, setTableCards] = useState([]);?
  - const [handCards, setHandCards] = useState([]);?
  - const [scoreCards, setScoreCards] = useState([]);?
  - object for players and their scores?

- Need reset game function that runs when new game is pressed
  - This should reset the deck to be the full 48 cards
  - shuffle the cards

Component Tree
- MainContainer
  - TableContainer
    - left-table
    - deck container
      - New Game button
    - right-table
  - HandContainer
    - player1-hand 
  - ScoreContainer 
    - player1-score-container
    - player2-score-container
    - player3-score-container

Flow of Game:
- Blank Screen
- Press new game
- 6 Cards to the table
- 7 Cards to the hand
 */