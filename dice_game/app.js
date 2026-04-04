var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

console.log(randomNumber1)
console.log(randomNumber2)

var list_dice = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];

var dice1Path = 'images/'+list_dice[randomNumber1];
var dice2Path = 'images/'+list_dice[randomNumber2];
document.querySelector('.dice .img1').src = dice1Path;
document.querySelector('.dice .img2').src = dice2Path;

if (randomNumber1>randomNumber2) {
    document.querySelector('h1').textContent = 'Player 1 wins!';
} else if (randomNumber2>randomNumber1) {
    document.querySelector('h1').textContent = 'Player 2 wins!';
} else {
    document.querySelector('h1').textContent = 'Draw';
}
