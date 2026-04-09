import express from 'express'
import ejs from 'ejs'
import * as readline from 'node:readline/promises'
import {stdin,stdout} from 'node:process'
// import bodyParser from 'body-parser';

//function to give the day of the week based of input of date

// var dayOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',];
// var dayType = ['weekend','weekday'];
function dateToday(date) {
    
    const enteredDay = new Date(date);
    const dayNumber = enteredDay.getDay();
    console.log(dayNumber);

    if (dayNumber>0 && dayNumber<6) {
        var dayType = 'Weekday';
        // console.log(dayType);
        return dayType;
    } else {
        var dayType = 'Weekend';
        // console.log(dayType);
        return dayType;
    }
};



async function askQuestion(){
    const rl = readline.createInterface({input:stdin,output:stdout});

    const userInput = await rl.question('Enter a date: ');
    console.log(userInput);

    rl.close();
    return userInput;
}

// askQuestion();
var userAnswer = await askQuestion();
console.log('user entered:',userAnswer);

const userInput = 'Null';
var date = dateToday(userAnswer);
console.log(date);


var app = express();
var port = 3000;

// app.use(bodyParser.urlencoded());
// app.set('view engine','ejs');

// let template = ejs.compile(str,options);
// template(data);


app.get('/', (req,res) => {
    res.render('index.ejs',{userEntryDate: date });
});

app.listen(port,() => {
    console.log(`Server running on port: ${port}`);
});