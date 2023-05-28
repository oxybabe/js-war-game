import Deck from "./deck.js";
import Player from "./player.js";

const eliaDeckElement = document.querySelector(".elia-hand");
const westDeckElement = document.querySelector(".west-hand");
const textElement = document.querySelector(".text");
const TXT_WON = "Won";

function Game() {
  this.player1 = new Player({ name: "Elia" }); // returns an object
  this.player2 = new Player({ name: "West" });
  this.deck = new Deck(); // will have a property of cards
  this.tempCardArray = new Player({ name: "tempPlayer" });
}

Game.prototype.deal = function () {
  console.log("deal the cards...: ", this.deck.cards.length);
  // Each player starts with 26 cards.
  let j = 0;
  for (let i = 0; i < this.deck.cards.length; i += 2) {
    // only increment i by 2, so without the temp i is increasing to 4 instead of 3
    // console.log("values:", this.deck.cards[i].value);
    j = i + 1; // want the next card so this is the next card,
    this.player1.hand.push(this.deck.cards[i]);
    this.player2.hand.push(this.deck.cards[j]);
  }
  this.updateHandCount();
};

// "this" is the "game" object
// game object has a player1 and player2 property (each are an object)
// player objects have a property of hand (hand is an array)
// game also has a deck property (deck is an object that has a cards property (array))
// deal the cards by giving each player 1 to 1 instead of splitting the deck in two

Game.prototype.compare = function (value1, value2) {
  // comparing
  console.log("compare function va1: " + value1 + " val2: " + value2);
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

Game.prototype.updateHandCount = function () {
  eliaDeckElement.innerHTML = this.player1.hand.length;
  westDeckElement.innerHTML = this.player2.hand.length;
};

Game.prototype.updateRoundWinnerText = function (winnerName, txt) {
  console.log(winnerName + txt);
  textElement.innerHTML = winnerName + " " + txt;
};

Game.prototype.giveWinnerTempCards = function (player) {
  let tempSize = this.tempCardArray;
  for (let i = 0; i < tempSize; i++) {
    // console.log("tempArr size: " + this.tempCardArray.hand.length + "!!!!!!!");
    player.hand.push(this.tempCardArray.hand[i]);
  }
  this.tempCardArray = [];
};

Game.prototype.play = function (player1, player2) {
  console.log("play the cards...: ");
  var player1TotalCards = player1.hand.length;
  var player2TotalCards = player2.hand.length;
  let totalWinningCards = 52;
  console.log("player 1 hand size: ", player1TotalCards);
  console.log("player 2 hand size: ", player2TotalCards);
  let i = 0;
  const player1TopCardOfDeck = player1.hand.shift();
  const player2TopCardOfDeck = player2.hand.shift();
  console.log(
    "Comparing Player 1 card < " +
      player1TopCardOfDeck.value +
      " > to player 2 card < " +
      player2TopCardOfDeck.value +
      " > "
  );

  if (
    this.compare(player1TopCardOfDeck.value, player2TopCardOfDeck.value) === 0
  ) {
    console.log("Playing War");
    this.tempCardArray.hand.push(player1TopCardOfDeck);
    this.tempCardArray.hand.push(player2TopCardOfDeck);
    console.log(
      "cards match temp increased size: ",
      this.tempCardArray.hand.length
    );
    this.updateRoundWinnerText("WAR!", "");
  } else if (
    this.compare(player1TopCardOfDeck.value, player2TopCardOfDeck.value) === 1
  ) {
    console.log("Player 1 card has higher card and takes Player 2 cards.");
    this.player1.hand.push(player2TopCardOfDeck);
    this.player1.hand.push(player1TopCardOfDeck);
    this.giveWinnerTempCards(player1);
    this.updateRoundWinnerText(player1.name, TXT_WON);
  } else {
    console.log("player 2 card has higher value so takes player 1 cards.");
    this.player2.hand.push(player1TopCardOfDeck);
    this.player2.hand.push(player2TopCardOfDeck);
    this.giveWinnerTempCards(player2);
    this.updateRoundWinnerText(player2.name, TXT_WON);
  }
  player1TotalCards = player1.hand.length;
  player2TotalCards = player2.hand.length;
  this.updateHandCount();
  i++;

  console.log("i is now", i);
  console.log(
    "hand size of player p1: " + player1TotalCards + " P2: " + player2TotalCards
  );
  this.updateHandCount("", "");
 

  // if (i > 10000) {
  //   break;
  // }
};
export default Game;
