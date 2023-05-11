import deck from "./deck.js";
import Player from "./player.js";

function Game() {
  this.player1 = new Player({ name: "Elia" }); // returns an object
  this.player2 = new Player({ name: "West" });
  this.deck = new Deck(); // will have a property of cards
}
function shuffleDeck() {}

deck.prototype.dealCards = function () {};
const game = new Game();
