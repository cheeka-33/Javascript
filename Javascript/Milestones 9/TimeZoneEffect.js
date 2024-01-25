const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

console.log(date1.getTimezoneOffset());

console.log(date2.getTimezoneOffset());

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
/*

Negative values and positive values:
The number of minutes returned by getTimezoneOffset() is positive if the local time zone is behind UTC, 
and negative if the local time zone is ahead of UTC. 
 example, for UTC+10, -600 will be returned.

Current time zone	Return value
UTC-8	               480
UTC	                    0
UTC+3	              -180
*/