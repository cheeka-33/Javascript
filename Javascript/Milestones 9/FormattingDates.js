/*
Formatting dates on js depends on our needs

Methods in formatting in js
getFullYear() 
getMonth() - its index starting from 0-11/4 represent may month
getDate() - its strats from 1, exact day value
*/

let objectDate=new Date();
let date=objectDate.getDate();
console.log(date);

let month=objectDate.getMonth();
console.log(month + 1);

let year=objectDate.getFullYear();
console.log(year);


// Different types of date formating:

        let format1 = `${month + 1}/${date}/${year}`;
        console.log(format1); 

        let format2 = `${date}/${month + 1}/${year}`;
        console.log(format2); 

        let format3 = `${month + 1}-${date}-${year}`;
        console.log(format3); 

        let format4 = `${date}-${month + 1}-${year}`;
        console.log(format4);

// Formatting dates using moment.js
let dates= moment().format();
console.log(dates);