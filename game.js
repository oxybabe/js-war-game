import Deck from "./deck.js";
import Player from "./player.js";

function Game() {
  this.player1 = new Player({ name: "Elia" }); // returns an object
  this.player2 = new Player({ name: "West" });
  this.deck = new Deck(); // will have a property of cards
  this.temCardArray = [];
}


Game.prototype.deal = function () {
  console.log("deal the cards...: ", this.deck.cards.length);
  // this.shuffle(this.deck.cards); if you want to shuffle the cards again in the game or the hand
  // Each player starts with 26 cards.
  let j = 0;
  for (let i = 0; i < this.deck.cards.length; i += 2) {
    // only increment i by 2, so without the temp i is increasing to 4 instead of 3
    // console.log("values:", this.deck.cards[i].value);
    j = i + 1; // want the next card so this is the next card,
    this.player1.hand.push(this.deck.cards[i]);
    this.player2.hand.push(this.deck.cards[j]);
  }
};

// "this" is the "game" object
// game object has a player1 and player2 property (each are an object)
// player objects have a property of hand (hand is an array)
// game also has a deck property (deck is an object that has a cards property (array))
// deal the cards by giving each player 1 to 1 instead of splitting the deck in two

Game.prototype.giveWinnerTempCards = function () {
  let tempSize = 
  this.tempCardArray;
  for(let i = 0; i < tempSize; i++) {
player.hand.push(this.tempCardArray.hand[i]);
  }
  this.tempCardArray = [];
};

Game.prototype.compare = function (value1, value2) {
  // comparing
  console.log("compare");
  if (value1 < value2) {
    return -1;
  } else if (value1 === value2) {
    return 0;
  } else {
    return 1;
  }
};


// Each player flips a card at the same time
// Find which player has the higher card
// 1. Player with the highest card takes both cards.
// 2. Puts them face down on top of his stack

Game.prototype.play = function () {
 console.log('play the cards...: ');
 let player1TotalCards = this.player1.hand.length;
 let player2TotalCards = this.player2.hand.length;
 let totalWinningCards = 52;
 console.log("player 1 hand size: ", player1TotalCards);
 console.log("player 2 hand size: ", player2TotalCards);
 let i = 0;
 while ((player1TotalCards < totalWinningCards) || (player2TotalCards < totalWinningCards)) {
  let player1TopCard = this.player1.hand.pop();
  let player2TopCard = this.player2.hand.pop();

  console.log("Comparing Player 1 card < " + player1TopCard.value + " > to player 2 card < " + player2TopCard.value + " > ");
  if
  (this.compare(player1TopCard.value, player2TopCard.value) === 0) {
    console.log("Playing War");
    this.tempCardArray.hand.push(player1TopCard);
    console.log("cards match temp increased size: ", this.tempCardArray.hand.length)
  } else if
  (this.compare(player1TopCard.value, player2TopCard.value) === 1) {
    console.log("Player 1 card has higher card and takes Player 2 cards.");
    this.player1.hand.push(player2TopCard);
    this.player1.hand.push(player1TopCard);
    this.giveWinnerTempCards(this.player1);
  } else {
    console.log("player 2 card has higher value so takes player 1 cards.");
    this.player2.hand.push(player1TopCard);
    this.player2.hand.push(player2TopCard);
    this.giveWinnerTempCards(this.player2);
  }
  player1TotalCards = this.player1.hand.length;
  player2TotalCards = this.player2.hand.length;
  i++;
  console.log("i is now", i);
  console.log("hand size of player p1: " + player1TotalCards + " P2: " + player2TotalCards);
  if(i > 10000) {
    break;
  }
 }
};
export default Game;
 

 
 
  
 
 

  // if the cards are equal, then initiate war.
  // during war, player 1 and player 2 - put 3 cards face down, 1 card face up (3+1 & 3+1 = 8 + 2
  // [the cards that triggered the war]= 10.)
  // Player  with the higher cards takes both piles (10cards)
  // if the cards are equal, again, (3+1 & 3+1 = 8 +10 [from previous iteration]= 18).

// deck.prototype.dealCards = function () {};
// const game = new Game();

// the first time through, let player 1 win if it's war
// then come back and refactor to handle war situations


//   if (this.deck.cards[i].value%2 === 0) { //dividing the length of the array by 2 and checking that the remainder is 0
//     this.player1.hand.push(this.deck.cards[i]);
//   }
//   else {
//     this.player2.hand.push(this.deck.cards)[i];
//   }

// user has to click the draw button to play the game and do all the comparisons
