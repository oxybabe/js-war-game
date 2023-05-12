import Card from "./card.js";

export default function Deck() {
  this.cards = [];
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // https://www.w3docs.com/snippets/javascript/how-to-loop-through-an-array-in-javascript.html
  for (let i = 0; i < suits.length; i++) { 
    for (let j = 0; j < values.length; j++) {
      this.cards.push(new Card({suit: suits[i], value: values[j]}));
    }
  }

  // new Card("hearts", 2);
  // new Card({value: 0, suit: 1})

  // do stuff here that will automatically add cards to the deck when the deck is created
}

Deck.prototype.createDeck = function () {
  alert("you are attempting to create the cards");

  console.log(this);
};

Deck.prototype.shuffle = function () {
  // https://www.tutorialspoint.com/How-to-randomize-shuffle-a-JavaScript-array
  for (let i = this.cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1)); // this is the deck object(the instance) and cards(the property) is the array
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
};

const deck = new Deck(); // {cards: []}
deck.shuffle()

  //inside the Deck constructor, create the cards and push it into the cards property

  let deck1 = new Deck();
  let deck2 = new Deck();
  let deck3 = new Deck();

  deck1.shuffle(); // deck1 is an object 
  deck2.shuffle(); // deck2 is an object
