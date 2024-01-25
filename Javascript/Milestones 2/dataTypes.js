// Js is dynamic lnguage with dynamic types 
// Js is weakly typed language


//Number
// Double precision 64 bit binary format IEEE 754 value
console.log(40/+0);     //+Infinity
console.log(40/-0);     //-Infinity
console.log(+0===-0);   //true
// Not an number (NaN)
// Its can't be expressed as a number

// BigInt
// It's numeric primitive in js represents integers with arbitrary magnitude
// It can go beyond the number.MAX_SAFE_INTEGER
// It can be end with n to end of the integer
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
console.log(x + 1n === x + 2n); // false because 9007199254740992n and 9007199254740993n are unequal
// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992


// String
// Collection of alphabets
// Lots of methods are there in strings 
// Used both in single & double quotes
console.log("Sarooo");  


// Symbol
// Unique and immutable primitive values
// Used as an key for object property 
// It's are called as an atom 
const user={
    $: 'Sedhu'    
}

console.log(user.$);

// Boolean
// True 
// false
let z=3;
console.log(z==3);


// Null
// The Null type is inhabited by exactly one value: null.
// Its don't have an object wrapper
let make=null;
console.log(make);


//Undefined
// The Undefined type is inhabited by exactly one value: undefined 
// Its don't have an object wrapper
let y;
console.log(y);


// Typeof operator  (typeof return value)
// Which return the data types belongs to.
// null -> Object  
// undefined -> undefined 
console.log(typeof 76);


// Object types


// Array / Json objects


