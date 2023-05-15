import Game from "./game.js"

const game = new Game();
game.deck.shuffle();
console.log("main deck", game.deck.cards.length);
game.deal();

game.play();

document.querySelector('.player1 > .name').textContent = game.player1.name;
document.querySelector('.player2 > .name').textContent = game.player2.name;
// document.querySelector('.player1 > .hand').textContent = game.player1.hand.length;
document.querySelector('.player2 > .hand').textContent = game.player2.hand.length;





console.log({game})