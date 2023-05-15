import Deck from "./deck.js";
import Player from "./player.js";

function Game() {
  this.player1 = new Player({ name: "Elia" }); // returns an object
  this.player2 = new Player({ name: "West" });
  this.deck = new Deck(); // will have a property of cards
}

Game.prototype.deal = function () {
  console.log("deal the cards...: ", this.deck.cards.length);
  // Each player starts with 26 cards.
  for (let i = 0; i < this.deck.cards.length; i += 2) {
    // only increment i by 2, so without the temp i is increasing to 4 instead of 3
    // console.log("values:", this.deck.cards[i].value);
    let temp = i; //temporary i gives the same effect as i, but it doesn't matter if we change temp variable
    this.player1.hand.push(this.deck.cards[i]);
    this.player2.hand.push(this.deck.cards[++temp]);
    // want the next card so this is the next card, like changing i but without changing the for loop
  }
  //   while ((this.player1.hand.length != 52) || (this.player2.hand.length != 52)) {
  //     //once we come back to the while loop then the card changes
  // } // caused an infinite loop
};

// "this" is the "game" object
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

Game.prototype.compare = function (value1, value2) {
  console.log("compare");
  if (value1 < value2) {
    return -1;
  } else if (value1 === value2) {
    return 0;
  } else {
    return 1;
  }
};

Game.prototype.play = function () {
  console.log("play the cards...: ");
  // Each player flips a card at the same time
  // Find which player has the higher card
  // 1. Player with the highest card takes both cards.
  // 2. Puts them face down on top of his stack
  let player1TotalCards = this.player1.hand.length;
  let player2TotalCards = this.player2.hand.length;
  let totalWinningCards = 52;
  let i = 0;
  while (
    player1TotalCards < totalWinningCards ||
    player2TotalCards < totalWinningCards
  ) {
    console.log(
      "Comparing Player 1 card < " +
        this.player1.hand[this.player1.hand.length - 1].values +
        " > to player 2 card < " +
        this.player2.hand[this.player2.hand.length - 1].values +
        " > "
    );
    if (
      this.compare(this.player1.hand[i].values, this.player2.hand[i].values) ===
      0
    ) {
      // play war
      console.log("Playing War");
    } else if (
      this.compare(
        this.player1.hand[this.player1.hand.length - 1].values,
        this.player2.hand[this.player2.hand.length - 1].values
      ) === 1
    ) {
      // 1. player with the highest card takes both cards
      // 2. puts them face down on top of his stack
      console.log("Player 1 card has higher card and takes Player 2 cards.");
      this.player1.hand.push(this.player2.hand[this.player2.hand.length - 1]);
      this.player2.hand.splice(i, 1);
    } else {
      console.log("Player 2 card has higher value so takes Player 1 cards.");
      this.player2.hand.push(
        this.player1.hand[this.player1.hand.length - 1].values
      );
      this.player1.hand.splice(i, 1);
    }
    i++;
    console.log("i is now", i);
  }

  // if the cards are equal, then initiate war.
  // during war, player 1 and player 2 - put 3 cards face down, 1 card face up (3+1 & 3+1 = 8 + 2
  // [the cards that triggered the war]= 10.)
  // Player  with the higher cards takes both piles (10cards)
  // if the cards are equal, again, (3+1 & 3+1 = 8 +10 [from previous iteration]= 18).
};

// deck.prototype.dealCards = function () {};
// const game = new Game();

// the first time through, let player 1 win if it's war
// then come back and refactor to handle war situations

export default Game;
//   if (this.deck.cards[i].value%2 === 0) { //dividing the length of the array by 2 and checking that the remainder is 0
//     this.player1.hand.push(this.deck.cards[i]);
//   }
//   else {
//     this.player2.hand.push(this.deck.cards)[i];
//   }

// if (this.player1Card.value > this.player2Card.value) {
//   this.player1.hand.push(this.player1Card);
//   this.player1.hand.push(this.player2Card);
// } else if (this.player2Card.value > this.player1Card.value) {
//   this.player2.hand.push(this.player1Card);
//   this.player2.hand.push(this.player2Card);
// } else if (this.player1Card.value === this.player2Card.value) {
//   this.player1.hand.push(this.player1Card);
//   this.player1.hand.push(this.player2Card);
// }
