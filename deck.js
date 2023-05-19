import Card from "./card.js";

export default function Deck() {
  this.cards = [];
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // https://www.w3docs.com/snippets/javascript/how-to-loop-through-an-array-in-javascript.html
  for (let i = 0; i < suits.length; i++) { 
    for (let j = 0; j < value.length; j++) {
      this.cards.push(new Card({suit: suits[i], value: value[j]})); //pushing new cards into cards array
      // deconstructing the cards to put into the new Cards array
      // destructuring arrays are different because it goes by index
    }
  }
 
};


Deck.prototype.shuffle = function () {
  // https://www.tutorialspoint.com/How-to-randomize-shuffle-a-JavaScript-array
  for (let i = this.cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1)); 
    // "this" is the deck object(the instance) and cards(the property) is the array
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
};
// if put in the game method do...
// Game.prototype.shuffle = function (deck) { all the same as above, but change cards to deck}
// could have done a while loop, exit condition would be i = 0, while loop looks cleaner 

// const deck = new Deck(); // {cards: []}


  // deck1.shuffle(); // deck1 is an object 
  // deck2.shuffle(); // deck2 is an object
