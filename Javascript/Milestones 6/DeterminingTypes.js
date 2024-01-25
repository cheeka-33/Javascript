// Syntax: Typeof operand
console.log(typeof true);
console.log(typeof "hello");

// Eg for return a number
console.log(typeof Math.LN2);
// typeof(NaN);


// Eg for strings
console.log(typeof `template literal`);
console.log(typeof ("foo"));
console.log(typeof typeof 1);


// Eg dor boolean
console.log(typeof Boolean(0));
console.log(typeof !!1);
//it calls the logical not operator which is equivalent to boolean().


// Eg for symbol
console.log(typeof Symbol());
console.log(typeof Symbol.iterator);


//eg for objects
console.log( typeof {a:1});


//eg for undefined
console.log(typeof undefined);
console.log(typeof undeclaredVariable);


// Functions
console.log(typeof function () {});
console.log(typeof class c{});
console.log(typeof Math.sin);


//the typeof operator has higher precedance than the binary operators like +.
const num1=90;
console.log(typeof num1+"hello");
console.log(typeof (num1+"hello"));
//parentheis are used to determine the datatype.


//using new operator->all constructor function called with new will return non-primitive types.
const str=new String("string");
console.log(typeof str);
const num=new Number(10);
console.log(typeof num);
const func=new Function();
console.log(typeof func);
