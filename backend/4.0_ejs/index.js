import ejs from 'ejs'
import express from 'express'
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

var x = dateToday('09-04-2026');
console.log(x);
