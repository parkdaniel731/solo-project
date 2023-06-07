const card = {
  id: 1,
  suit: 'jan',
  type: 'bright'
};

// The special animal and ribbon point combos might just be calculated using the suit, not another property
const deck = [
  { id: 0, suit: 'jan', type: 'bright' },
  { id: 1, suit: 'jan', type: 'ribbon' },
  { id: 2, suit: 'jan', type: 'junk' },
  { id: 3, suit: 'jan', type: 'junk' },
  { id: 4, suit: 'feb', type: 'animal' },
  { id: 5, suit: 'feb', type: 'ribbon' },
  { id: 6, suit: 'feb', type: 'junk' },
  { id: 7, suit: 'feb', type: 'junk' },
  { id: 8, suit: 'mar', type: 'bright' },
  { id: 9, suit: 'mar', type: 'ribbon' },
  { id: 10, suit: 'mar', type: 'junk' },
  { id: 11, suit: 'mar', type: 'junk' },
  { id: 12, suit: 'apr', type: 'animal' },
  { id: 13, suit: 'apr', type: 'ribbon' },
  { id: 14, suit: 'apr', type: 'junk' },
  { id: 15, suit: 'apr', type: 'junk' },
  { id: 16, suit: 'may', type: 'ribbon' },
  { id: 17, suit: 'may', type: 'junk' },
  { id: 18, suit: 'may', type: 'junk' },
  { id: 19, suit: 'may', type: 'double-junk' },
  { id: 20, suit: 'jun', type: 'animal' },
  { id: 21, suit: 'jun', type: 'ribbon' },
  { id: 22, suit: 'jun', type: 'junk' },
  { id: 23, suit: 'jun', type: 'junk' },
  { id: 24, suit: 'jul', type: 'animal' },
  { id: 25, suit: 'jul', type: 'ribbon' },
  { id: 26, suit: 'jul', type: 'junk' },
  { id: 27, suit: 'jul', type: 'junk' },
  { id: 28, suit: 'aug', type: 'bright' },
  { id: 29, suit: 'aug', type: 'animal' },
  { id: 30, suit: 'aug', type: 'junk' },
  { id: 31, suit: 'aug', type: 'junk' },
  { id: 32, suit: 'sep', type: 'ribbon' },
  { id: 33, suit: 'sep', type: 'junk' },
  { id: 34, suit: 'sep', type: 'junk' },
  { id: 35, suit: 'sep', type: 'double-junk' },
  { id: 36, suit: 'oct', type: 'animal' },
  { id: 37, suit: 'oct', type: 'ribbon' },
  { id: 38, suit: 'oct', type: 'junk' },
  { id: 39, suit: 'oct', type: 'junk' },
  { id: 40, suit: 'nov', type: 'bright' },
  { id: 41, suit: 'nov', type: 'junk' },
  { id: 42, suit: 'nov', type: 'junk' },
  { id: 43, suit: 'nov', type: 'double-junk' },
  { id: 44, suit: 'dec', type: 'bright' },
  { id: 45, suit: 'dec', type: 'animal' },
  { id: 46, suit: 'dec', type: 'ribbon' },
  { id: 47, suit: 'dec', type: 'double-junk' }
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