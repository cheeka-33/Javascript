/* 
Epoch Time:
Epoch time is a numerical way to store and calculate time that is independent 
of any time zone or location. 


Use the Date Object’s now() method: 
let now = Date.now();

Get UTC seconds from a given epoch timestamp:
let date = new Date(now);
let seconds = date.getUTCSeconds();

Set UTC seconds for a given epoch timestamp:
let date = new Date(now);
date.setUTCSeconds(60);

Get a readable string from an epoch timestamp using Moment.js:
let dateString = moment(now).format(“DD/MM/YYYY HH:mm:ss”);



*/


console.log(Date.now());