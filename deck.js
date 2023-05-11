
export default function Deck(){
    this.cards = []

    // do stuff here that will automatically add cards to the deck when the deck is created
};


Deck.prototype.createDeck = function(){
    alert("you are attempting to create the cards")
    let suits = ["hearts", "diamonds", "spades", "clubs"]
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]

    console.log(this);
    // this.cards.push(new Card({suit: "hearts", value: 2})) // Need to utilize the Card constructor
};


function shuffleDeck(){

};