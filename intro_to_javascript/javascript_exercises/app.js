// var text = prompt('Write your tweet')
// var char = text.length
// var sli = text.slice(0,140)
// console.log('You have made '+char+' number of characters')
// console.log('The first 140 characters are::'+sli)

// var upperChar = text.toUpperCase()
// console.log(upperChar) 

// console.log('First letter to be uppercased '+text.slice(0,1).toUpperCase())

// function lifeInWeeks(age) {
    
// /************Don't change the code above************/    
    
//     //Write your code here.
//     var years = 90-age;
//     var months = years*12;
//     var weeks = years*52;
//     var days = years*365;
//     console.log('You have '+days+' days, '+weeks+' weeks, and '+months+' months left.');
//     return 'You have this many years left:'+years; 
    
    
// /*************Don't change the code below**********/
// }
// var francisLife = lifeInWeeks(27)
// console.log(francisLife)


function bmiCalculator (weight, height) {
    
    var BMI = weight/(height**2)
    
    if (BMI > 24.9){
        var interpretation = 'Your BMI is '+BMI+ ', so you are overweight.';
        console.log(interpretation)
    }
    if (BMI >18.5 && BMI<24.9){
         interpretation = 'Your BMI is '+BMI+', so you have a normal weight.';
        console.log(interpretation)
        }
    if (BMI <18.5) {
         interpretation = 'Your BMI is '+BMI+', so you are underweight.';
        console.log(interpretation)
        }
    
    return interpretation;
}

bmiCalculator(80,1.82)