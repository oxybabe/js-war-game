//Notes:
// const Game = function() {
// TODO: Make player names dynamic
// const player1 = "Jay";
// const player2 = "Vaughn"
// this.player1 = new Player({name: player 1 });
// this.player2 = new Player({name: player2 });
// this.deck = new Deck();
// this.pot = [];
// };
//Game.prototype.deal = function () { //deal method calls the shuffle
// this.shuffle(this.deck.cards); if you want to shuffle the cards again
// this.player1.hand = this.deck.cards.filter(function (item, index) {
// return !(index % 2);
// });
// this.player2.hand = this.deck.cards.filter(function (item, index)) {
// return index % 2;
// });
// Game.prototype.draw = function () {
//     this.player1Card = this.player1.hand.shift(); //setting the value
//     this.player2Card = this.player2.hand.shift();
//     console.log("draw");
//     // this.compare(); //call compare only when dealing with these 2 cards
//   };
// Game.prototype.compare = function() {
//   const player1Card = this.pot[0];
//   const player2Card = this.pot[1];

//   if(player1Card.value > player2Card.value) {
//    this.player1.hand = [...this.player1.hand, ...this.pot];
// console.log(`${this.player1.name} wins!`);
// console.log(`${this.player1.name} has ${this.player1.hand.length} cards.`)

//   } else if (player1Card.value < player2Card.value) {
// this.player2.hand = [...this.player2.hand, ...this.pot];
// } else if (player1Card.value === player2Card.value) {
//  alert("It's WAR!"); // Need to have at least 4 cards to play WAR
// if(this.player1.hand.length < 4) {
// this.player2.hand = [
//   ...this.player2.hand,
//   ...this.pot,
//   ...this.player1.hand.splice(0), // empties out player1's hand
// ];
// return;
// } else if {(this.player2.hand.length < 4)
// this.player1.hand = [
//   ...this.player1.hand,
//   ...this.pot,
//   ...this.player2.hand.splice(0),
// ];
// return;
// } else { //IT'S WAR
// this.pot = [
// ...this.player1.hand.splice(0, 3),
// ...this.player2.hand.splice(0, 3),
// ...this.pot,
// ];
// return;
// };

//   this.player1.hand = [...this.player1.hand, ...this.pot];
// }
// this.pot = []; // empty the pot
// };

// Game.prototype.draw = function () {
// const player1Card = this.player1.hand.shift();
// const player2Card = this.player2.hand.shift();
// this.pot = [player1Card, player2Card, ...this.pot]; //when I draw the pot is going to be = to each players' card and whatever is in the pot
// console.log(`${this.player1.name} draws a ${player1Card.value}`)
// this.compare();
// }; //

// Game.prototype.play = function () {
// this.shuffle(this.deck.cards);
// this.deal();
// while (this.player1.hand.length > 0 && this.player2.hand.length > 0) { // the while loop keeps calling compare and draw as long as each player has cards
// this.draw(); // calls the compare method and keep going until 1 player has 0 cards
// }
// if (this.player1.hand.length === 0) {
//   alert(`Game Over. ${this.player2.name} won!`);
// } else {
//   alert(`Game Over ${this.player1.name} won!`)
// }
// };
