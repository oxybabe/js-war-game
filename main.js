import Game from "./game.js"

const game = new Game(); 
game.deck.shuffle();
console.log("main deck", game.deck.cards.length);
game.deal();
game.play();

// const Deck = function () {}; same for Player and Game and Card (function expression index)


console.log({game})

function playCard() {
    
}

document.querySelector('.player1 > .name').textContent = game.player1.name;
document.querySelector('.player2 > .name').textContent = game.player2.name;
// document.querySelector('.player1 > .hand').textContent = game.player1.hand.length;
document.querySelector('.player2 > .hand').textContent = game.player2.hand.length;

document.querySelector('.PlayButton').addEventListener("click", playCard)



