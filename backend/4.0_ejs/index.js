import express from 'express'
import bodyParser from 'body-parser';

//function to give the day of the week based of input of date

var dayOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',];
// var dayType = ['weekend','weekday'];
function dateToday(date) {
    
    const enteredDay = new Date(date);
    const dayNumber = enteredDay.getDay();
    console.log(dayNumber);

    if (dayNumber>0 & dayNumber<6) {
        var dayType = 'Weekday';
        // console.log(dayType);
        return dayType;
    } else {
        var dayType = 'Weekend';
        // console.log(dayType);
        return dayType;
    }
};

var date = dateToday('09-04-2026');
console.log(date);


var app = express();
var port = 3000;

app.use(bodyParser.urlencoded());
app.set('view engine','ejs')


app.get('/', (res,req) => {
    res.render('views/index.ejs',{userEntryDate: date });
});

app.listen(port,(err) => {
    if (err) throw err;
    console.log(`Server is listening on port: ${port}`);
})