// Arguments is like an array like objects
// which means arguments has a length property 
// but It's doesn't have an array built in methods like
// forEach() and map(). it can be conerted to array with
// Slice(), Array.from(), ...(spread operator)

function func(a) {
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(a);
  }
  func(10); // 99
  
  function func2(a) {
    a = 99; // updating a also updates arguments[0]
    console.log(arguments[0]);
  }
  func2(10); // 99

// Converting to real array

const args = Array.prototype.slice.call(arguments);
// or
const args1 = Array.from(arguments);
// or
const args2 = [...arguments];

// Parameters 
function myParameters(x,y=10) {
    return x+y;
}

console.log(myParameters(5));


//Function rest parameters
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
console.log(sum(4, 9, 16, 25, 29, 100, 66, 77));
  