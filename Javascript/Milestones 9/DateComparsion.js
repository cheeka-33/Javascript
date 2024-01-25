const compareDate = (d1, d2) => {
    
    if (d1 < d2) {
      console.log(`${d1} is less than ${d2}`);
    } else if (d1 > d2) {
      console.log(`${d1} is greater than ${d2}`);
    } else {
      console.log(`Both dates are equal`);
    }
  }; 
  compareDate("06/21/2023", "03/28/2023");


  let date2=new Date();
  console.log(date2.getTime(),date2.getHours());