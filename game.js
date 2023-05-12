import Deck from "./deck.js";
import Player from "./player.js";

function Game() {
  this.player1 = new Player({ name: "Elia" }); // returns an object
  this.player2 = new Player({ name: "West" });
  this.deck = new Deck(); // will have a property of cards
  
  };
  

Game.prototype.deal = function() {
  // this is the "game" object
  // game object has a player1 and player2 property (each are an object)
  // player objects have a property of hand (hand is an array)
  // game also has a deck property (deck is an object that has a cards property (array))
  // deal the cards by giving each player 1 to 1 instead of splitting the deck in two

  this.player1.hand.push(this.deck.cards.slice(0, 26));
  this.player2.hand.push(this.deck.cards.slice(26));
};

Game.prototype.draw = function () {

};

Game.prototype.compare = function () {

};



// deck.prototype.dealCards = function () {};
// const game = new Game();

// the first time through, let player 1 win if it's war
// then come back and refactor to handle war situations

export default Game;
