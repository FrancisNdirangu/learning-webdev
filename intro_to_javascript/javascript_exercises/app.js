// var text = prompt('Write your tweet')
// var char = text.length
// var sli = text.slice(0,140)
// console.log('You have made '+char+' number of characters')
// console.log('The first 140 characters are::'+sli)

// var upperChar = text.toUpperCase()
// console.log(upperChar) 

// console.log('First letter to be uppercased '+text.slice(0,1).toUpperCase())

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var years = 90-age;
    var months = years*12;
    var weeks = years*52;
    var days = years*365;
    console.log('You have '+days+' days, '+weeks+' weeks, and '+months+' months left.')
    
    
    
/*************Don't change the code below**********/
}
lifeInWeeks(27)
