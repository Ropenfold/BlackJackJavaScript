var firstPlayerCard = 0;
var secondPlayerCard = 0;

var firstDealerCard = 0;
var secondDealerCard = 0;
var gameIsRunning = true;

console.log("Welcome to Stuart's Black Jack");

var playersCards = [];
var dealersCards = [];
var totalCardValue = [];

startGame();

console.log("You get a " + playersCards[0] + " and a " + playersCards[1]);

console.log("Your total is " + totalCardValue);

console.log(
  "The dealer has a " + dealersCards[0] + " showing and a hidden card too."
);

console.log("Dealer Card 2", dealersCards[1]);

console.log('Would you like to "hit" or "stay?"');

function startGame() {
  let playerCard = startDeal();
  addPlayerCard(playerCard);

  let dealersCard = startDeal();
  addDealerCard(dealersCard);
}

function startGame() {
  for (var i = 0; i < 2; i++) {
    let playerCard = startDeal();
    addPlayerCard(playerCard);

    let dealersCard = startDeal();
    addDealerCard(dealersCard);
  }
}

function startDeal() {
  //for (var i = 0; i < 2; i++) {
  let card = dealCard();

  return card;
  //}
}

function dealCard() {
  var card = getRandomCard(11);

  return card;
}

function getRandomCard(max) {
  var card = Math.floor(Math.random() * Math.floor(max));
  return card;
}

function addPlayerCard(number) {
  playersCards.push(number);
}

function addDealerCard(number) {
  dealersCards.push(number);
}
