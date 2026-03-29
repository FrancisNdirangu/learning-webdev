var text = prompt('Write your tweet')
var char = text.length
var sli = text.slice(0,140)
console.log('You have made '+char+' number of characters')
console.log('The first 140 characters are::'+sli)