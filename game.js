import Deck from "./deck.js";
import Player from "./player.js";

function Game() {
  this.player1 = new Player({ name: "Elia" }); // returns an object
  this.player2 = new Player({ name: "West" });
  this.deck = new Deck(); // will have a property of cards
  let player1Card;
  let player2Card;
}

Game.prototype.deal = function () {
  console.log("sort: ", this.deck.cards.length);
  for (let i = 0; i < this.deck.cards.length; i += 2) {
    //only increment i by 2, so without the temp i is increasing to 4 instead of 3
    //console.log("values:", this.deck.cards[i].value);
    let temp = i; //temporary i gives the same effect as i, but it doesn't matter if we change temp variable
    this.player1.hand.push(this.deck.cards[i]);
    this.player2.hand.push(this.deck.cards[++temp]); //want the next card so this is the next card, like changing i but without changing the for loop

    //   if (this.deck.cards[i].value%2 === 0) { //dividing the length of the array by 2 and checking that the remainder is 0
    //     this.player1.hand.push(this.deck.cards[i]);
    //   }
    //   else {
    //     this.player2.hand.push(this.deck.cards)[i];
    //   }
  }
//   while ((this.player1.hand.length != 52) || (this.player2.hand.length != 52)) {

//     this.draw();
//     this.compare();
// //     //once we come back to the while loop then the card changes
//   }
};

// this is the "game" object
// game object has a player1 and player2 property (each are an object)
// player objects have a property of hand (hand is an array)
// game also has a deck property (deck is an object that has a cards property (array))
// deal the cards by giving each player 1 to 1 instead of splitting the deck in two

Game.prototype.draw = function () {
  this.player1Card = this.player1.hand.shift(); //setting the value
  this.player2Card = this.player2.hand.shift();
  console.log("draw");
  // this.compare(); //call compare only when dealing with these 2 cards
};

Game.prototype.compare = function () {
  console.log("compare");

  if (this.player1Card.value > this.player2Card.value) {
    this.player1.hand.push(this.player1Card);
    this.player1.hand.push(this.player2Card);
  } else if (this.player2Card.value > this.player1Card.value) {
    this.player2.hand.push(this.player1Card);
    this.player2.hand.push(this.player2Card);
  } else if (this.player1Card.value === this.player2Card.value) {
    this.player1.hand.push(this.player1Card);
    this.player1.hand.push(this.player2Card);
  }
};

// deck.prototype.dealCards = function () {};
// const game = new Game();

// the first time through, let player 1 win if it's war
// then come back and refactor to handle war situations

export default Game;
