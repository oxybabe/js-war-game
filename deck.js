import Card from "./card.js";
export default function Deck() {
  this.cards = [];
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
  // https://www.w3docs.com/snippets/javascript/how-to-loop-through-an-array-in-javascript.html
  for (let i = 0; i < suits.length; i++) { 
    for (let j = 0; j < values.length; j++) {
      this.cards.push(new Card(suit[i], values[j]));
    }
  }

  // do stuff here that will automatically add cards to the deck when the deck is created
}

Deck.prototype.createDeck = function () {
  alert("you are attempting to create the cards");

  console.log(this);
};
