const SUITS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const TYPES = ['bright', 'animal', 'ribbon', 'junk'];

const card = {
  id: 1,
  suit: 'jan',
  type: 'bright'
};

// The special animal and ribbon point combos might just be calculated using the suit, not another property
const deck = [
    { cardID: 0, suit: 'jan', type: 'bright', src: '../images/jan-bright-card.png', alt: 'january bright card' },
    { cardID: 1, suit: 'jan', type: 'ribbon', src: '../images/jan-ribbon-card.png', alt: 'january ribbon card' },
    { cardID: 2, suit: 'jan', type: 'junk', src: '../images/jan-junk-card.png', alt: 'january junk card' },
    { cardID: 3, suit: 'jan', type: 'junk', src: '../images/jan-junk-card2.png', alt: 'january junk card' },
    { cardID: 4, suit: 'feb', type: 'animal', src: '../images/feb-animal-card.png', alt: 'february animal card' },
    { cardID: 5, suit: 'feb', type: 'ribbon', src: '../images/feb-ribbon-card.png', alt: 'february ribbon card' },
    { cardID: 6, suit: 'feb', type: 'junk', src: '../images/feb-junk-card.png', alt: 'february junk card' },
    { cardID: 7, suit: 'feb', type: 'junk', src: '../images/feb-junk-card2.png', alt: 'february junk card' },
    { cardID: 8, suit: 'mar', type: 'bright', src: '../images/mar-bright-card.png', alt: 'march bright card' },
    { cardID: 9, suit: 'mar', type: 'ribbon', src: '../images/mar-ribbon-card.png', alt: 'march ribbon card' },
    { cardID: 10, suit: 'mar', type: 'junk', src: '../images/mar-junk-card.png', alt: 'march junk card' },
    { cardID: 11, suit: 'mar', type: 'junk', src: '../images/mar-junk-card2.png', alt: 'march junk card' },
    { cardID: 12, suit: 'apr', type: 'animal', src: '../images/apr-animal-card.png', alt: 'april animal card' },
    { cardID: 13, suit: 'apr', type: 'ribbon', src: '../images/apr-ribbon-card.png', alt: 'april ribbon card' },
    { cardID: 14, suit: 'apr', type: 'junk', src: '../images/apr-junk-card.png', alt: 'april junk card' },
    { cardID: 15, suit: 'apr', type: 'junk', src: '../images/apr-junk-card2.png', alt: 'april junk card' },
    { cardID: 16, suit: 'may', type: 'ribbon', src: '../images/may-ribbon-card.png', alt: 'may ribbon card' },
    { cardID: 17, suit: 'may', type: 'junk', src: '../images/may-junk-card.png', alt: 'may junk card' },
    { cardID: 18, suit: 'may', type: 'junk', src: '../images/may-junk-card2.png', alt: 'may junk card' },
    { cardID: 19, suit: 'may', type: 'double-junk', src: '../images/may-double-junk-card.png', alt: 'may double junk card' },
    { cardID: 20, suit: 'jun', type: 'animal', src: '../images/jun-animal-card.png', alt: 'june animal card' },
    { cardID: 21, suit: 'jun', type: 'ribbon', src: '../images/jun-ribbon-card.png', alt: 'june ribbon card' },
    { cardID: 22, suit: 'jun', type: 'junk', src: '../images/jun-junk-card.png', alt: 'june junk card' },
    { cardID: 23, suit: 'jun', type: 'junk', src: '../images/jun-junk-card2.png', alt: 'june junk card' },
    { cardID: 24, suit: 'jul', type: 'animal', src: '../images/jul-animal-card.png', alt: 'july animal card' },
    { cardID: 25, suit: 'jul', type: 'ribbon', src: '../images/jul-ribbon-card.png', alt: 'july ribbon card' },
    { cardID: 26, suit: 'jul', type: 'junk', src: '../images/jul-junk-card.png', alt: 'july junk card' },
    { cardID: 27, suit: 'jul', type: 'junk', src: '../images/jul-junk-card2.png', alt: 'july junk card' },
    { cardID: 28, suit: 'aug', type: 'bright', src: '../images/aug-bright-card.png', alt: 'august bright card' },
    { cardID: 29, suit: 'aug', type: 'animal', src: '../images/aug-animal-card.png', alt: 'august animal card' },
    { cardID: 30, suit: 'aug', type: 'junk', src: '../images/aug-junk-card.png', alt: 'august junk card' },
    { cardID: 31, suit: 'aug', type: 'junk', src: '../images/aug-junk-card.png', alt: 'august junk card' },
    { cardID: 32, suit: 'sep', type: 'ribbon', src: '../images/sep-ribbon-card.png', alt: 'september ribbon card' },
    { cardID: 33, suit: 'sep', type: 'junk', src: '../images/sep-junk-card.png', alt: 'september junk card' },
    { cardID: 34, suit: 'sep', type: 'junk', src: '../images/sep-junk-card2.png', alt: 'september junk card' },
    { cardID: 35, suit: 'sep', type: 'double-junk', src: '../images/sep-double-junk-card.png', alt: 'september double junk card' },
    { cardID: 36, suit: 'oct', type: 'animal', src: '../images/oct-animal-card.png', alt: 'october animal card' },
    { cardID: 37, suit: 'oct', type: 'ribbon', src: '../images/oct-ribbon-card.png', alt: 'october ribbon card' },
    { cardID: 38, suit: 'oct', type: 'junk', src: '../images/oct-junk-card.png', alt: 'october junk card' },
    { cardID: 39, suit: 'oct', type: 'junk', src: '../images/oct-junk-card2.png', alt: 'october junk card' },
    { cardID: 40, suit: 'nov', type: 'bright', src: '../images/nov-bright-card.png', alt: 'november bright card' },
    { cardID: 41, suit: 'nov', type: 'junk', src: '../images/nov-junk-card.png', alt: 'november junk card' },
    { cardID: 42, suit: 'nov', type: 'junk', src: '../images/nov-junk-card2.png', alt: 'november junk card' },
    { cardID: 43, suit: 'nov', type: 'double-junk', src: '../images/nov-double-junk-card.png', alt: 'november double junk card' },
    { cardID: 44, suit: 'dec', type: 'bright', src: '../images/dec-bright-card.png', alt: 'december bright card' },
    { cardID: 45, suit: 'dec', type: 'animal', src: '../images/dec-animal-card.png', alt: 'december animal card' },
    { cardID: 46, suit: 'dec', type: 'junk', src: '../images/dec-junk-card.png', alt: 'december junk card' },
    { cardID: 47, suit: 'dec', type: 'double-junk', src: '../images/dec-double-junk-card.png', alt: 'december double junk card' }
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