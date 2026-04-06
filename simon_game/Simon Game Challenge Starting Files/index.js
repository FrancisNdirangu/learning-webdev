// $('body').css("background-color","red")
var buttonColors = ["red","blue","green","yellow"];
var gameState = [];
var level = 0;

function nextSequence(){
    //generated a random number between 0 and 3.
    var randomNumber = Math.floor(Math.random()*4);

    level=level+1;
    // console.log(level);
    $('h1').text('Level '+ level);

    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];
// console.log(randomChosenColor); // confirmed it is working as expected

gameState.push(randomChosenColor);
console.log(gameState)

$('#'+randomChosenColor).fadeOut(100).fadeIn(100);


var userClickedPattern = [];

$('.btn').on('click',function(event) {
    // alert('button has been clicked');
    // console.log(event.target.id);
    var buttonClicked = event.target.id;
    userClickedPattern.push(buttonClicked);
    playSound(event.target.id);
    animatePress(event.target.id);
    console.log(userClickedPattern);
    
    if (checkScore() == true) {
        console.log('you got it correct')
        nextSequence()

    } else {
        console.log('You got it wrong')
        $('h1').text('You lose, press any button to restart');
        level=0;
        var loseSound = Audio('sounds/wrong.mp3');
        loseSound.play();

        $(document).on('keydown',function(){
            level = 0;
            nextSequence();
        })
    }

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

function animatePress(currentColor) {
        
    switch(currentColor) {
        case 'red':
            $('#red').addClass('pressed');
            setTimeout(function() {
                $('#red').removeClass('pressed')}, 100);
            break;
        
        case 'blue':
            $('#blue').addClass('pressed');
            setTimeout(function() {
                $('#blue').removeClass('pressed')},100);
            break;

        case 'yellow':
            $('#yellow').addClass('pressed');
            setTimeout(function(){
                $('#yellow').removeClass('pressed')},100);
            break;

        case 'green':
            $('#green').addClass('pressed');
            setTimeout(function() {
                $('#green').removeClass('pressed')},100);
            break;
    }
}

firstTImeKeyboardPress = [];

$(document).on('keydown',function(){nextSequence();
    console.log('key has been pressed')
});



function checkScore() {
    var lastClicked = userClickedPattern.at(-1);
    var lastRandom = gameState.at(-1);
    console.log('Last Clicked '+lastClicked);
    console.log('Gamestate '+lastRandom);

    if (lastClicked == lastRandom) {
        console.log(true);
        // nextSequence();
        return true
    } else {
        console.log(false);
        // $(h1).text('You lose');
        return false
    }
}