/*
Methods in UTC:
getUTCFullYear() - returns a date's year in the UTC time zone.
getUTCMonth() - returns a date's month in the UTC time zone.
getUTCDate() - returns the month and day of a date in the UTC time zone.
getUTCHours() - returns a date's hour in the UTC time zone.
getUTCMinutes() - returns a date's minutes in the UTC time zone.
getUTCSeconds() - returns a date's seconds in the UTC time zone.
*/
// Converting UTC to Local Time:
      let utc = new Date();
      let offset = utc.getTimezoneOffset();
      console.log(new Date(utc.getTime() + offset * 60000));
      
    // getTimezoneOffset() function is uded to calculate the time difference in minutes 
    // between UTC and local time.
/*
Convertinng specified UTC to local time:
      let utc = new Date("2018-11-12 12:00:00");
      let offset = utc.getTimezoneOffset();
     console.log(new Date(utc.getTime() + offset * 60000);)

*/


