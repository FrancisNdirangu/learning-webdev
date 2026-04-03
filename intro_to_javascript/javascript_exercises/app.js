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


// function bmiCalculator (weight, height) {
    
//     var BMI = weight/(height**2)
    
//     if (BMI > 24.9){
//         var interpretation = 'Your BMI is '+BMI+ ', so you are overweight.';
//         console.log(interpretation)
//     }
//     if (BMI >18.5 && BMI<24.9){
//          interpretation = 'Your BMI is '+BMI+', so you have a normal weight.';
//         console.log(interpretation)
//         }
//     if (BMI <18.5) {
//          interpretation = 'Your BMI is '+BMI+', so you are underweight.';
//         console.log(interpretation)
//         }
    
//     return interpretation;
// }

// bmiCalculator(80,1.82)

// function leapYear(year){
//     if (year %400 == 0) {
//         console.log('Leap Year');
//     } else if (year%100 == 0 && year%4 ==0) {
//         console.log('Not Leap Year');
//     } else if (year%4==0 && year%100!=0) {
//         console.log('Leap Year');
//     } else {
//         console.log('Not Leap Year')
//     }
// }

// leapYear(2400)
// var output = [];
// var n = 0;
// function FizzBuzz(){
//     n = n+1;
//     output.push(n);
//     console.log(output);
//     output = output;
//     n=n;
// }

// var bottles = 99

// while (bottles > 1) {
//     console.log(bottles+' bottles of bear in the wall.')
//     bottles = bottles-1
// }

var start_array = [0,1];
var x=1;
var len_array = start_array.length;

function fibonaccigenerator (n) {
    // so in order to do the fib sequence i must add the last two numbers
    // for fib a you must add array[a] and array[a-1]
    // however you must calculate value array[a] using a while loop
    // fib(n) is defined as array[n] + array[n-1]
    // however you must calculate every value after the starting array
    
    // while (x > n) {
    //     console.log(start_array.length)
    //     var next_value = start_array[x] + start_array[x-1];
    //     // start_array.push(next_value);
    //     // console.log(start_array);
    //     console.log(x);
    //     x=x+1;



    // }
}

fibonaccigenerator(4)