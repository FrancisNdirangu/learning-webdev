// $('body').css("background-color","red")
var buttonColors = ["red","blue","green","yellow"];
var gameState = [];

function nextSequence(){
    //generated a random number between 0 and 3.
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];
// console.log(randomChosenColor); // confirmed it is working as expected

gameState.push(randomChosenColor);
// console.log(gameState)

$('#'+randomChosenColor).fadeOut(100).fadeIn(100);


var userClickedPattern = [];

$('.btn').on('click',function(event) {
    // alert('button has been clicked');
    // console.log(event.target.id);
    var buttonClicked = event.target.id;
    userClickedPattern.push(buttonClicked);
    playSound(event.target.id)
    console.log(userClickedPattern)

    // return event.target.id;
});

// userChosenColor.push(colorClicked);
// console.log(userChosenColor);
// 

function playSound(name) {


    switch(name) {
        case 'red':
            var redSound = Audio('sounds/red.mp3');
            redSound.play();
            break;

        case 'yellow':
            var yellowSound = Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;

        case 'blue':
            var blueSound = Audio('sounds/blue.mp3');
            blueSound.play();
            break;

        case 'green':
            var greenSound = Audio('sounds/green.mp3');
            greenSound.play();
            break;
    }
}