
var button_index = [0,1,2,3,4,5,6]; 
for (const i of button_index){
document.querySelectorAll('.drum')[i].addEventListener('click',clickResponse);
}
function clickResponse() {
    // alert('I got clicked');

    var buttonInnerHTML = this.innerHTML;
    

    switch(buttonInnerHTML) {

        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "k":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML)

    }

}
    // var buttonPressed = this.addEventListener('keydown',function (event) {
    // console.log(event.key)
// });
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

var instrumentKeys = ['w','a','s','d','j','k','l']
for (var i=0;i<instrumentKeys.length;i++) {
    var buttonPressed = this.addEventListener('keydown',pressedResponse);
}
function pressedResponse(event) {

    var button = event.key;
    buttonAnimation(event.key);

    switch(button) {

        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "k":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(button)



    }
}

function buttonAnimation(pressedKey) {
    document.querySelector('.'+pressedKey).classList.add('pressed');

    setTimeout(function() {
        document.querySelector('.'+pressedKey).classList.remove('pressed')
    }, 100);
    // document.querySelector('.'+pressedKey).classList.toggle('pressed') ;
}