import Card from "./card.js";

export default function Deck() {
  this.cards = [];
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // https://www.w3docs.com/snippets/javascript/how-to-loop-through-an-array-in-javascript.html
  for (let i = 0; i < suits.length; i++) { 
    for (let j = 0; j < values.length; j++) {
      this.cards.push(new Card({suit: suits[i], value: values[j]})); 
      // deconstructing the cards to put into the new Cards array
    }
  }
 
}


Deck.prototype.shuffle = function () {
  // https://www.tutorialspoint.com/How-to-randomize-shuffle-a-JavaScript-array
  for (let i = this.cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1)); 
    // "this" is the deck object(the instance) and cards(the property) is the array
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
};

// const deck = new Deck(); // {cards: []}



  // let deck1 = new Deck();
  // let deck2 = new Deck();
  // let deck3 = new Deck();

  // deck1.shuffle(); // deck1 is an object 
  // deck2.shuffle(); // deck2 is an object
