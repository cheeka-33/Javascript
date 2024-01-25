/*
The performance method is used to check the performance
of our code and to find the execution time of our code
*/
// Example 1
const t0 = performance.now(); 
  for (let i = 0; i < 10; i++) { 
    console.log(i); 
  } 

const t1 = performance.now();
console.log(t1-t0);


// Example 2
function doSomething(){
    for (let i = 0; i < 10; i++) { 
        console.log(i); 
      } 
}
const t3 = performance.now();
doSomething();
console.log(t3);
const t4 = performance.now();
console.log(`Call to doSomething took ${t3} and ${t4} milliseconds.`);

// It give different value when we run every single 