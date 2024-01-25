// Functions are one of the fundamental building blocks of JS
// Function in js is similar to procedure to performs a task

// Defining a function
function square(number) {
    return number*number;
}

console.log(square(15));

//An object as a parameter

function myFunction(theObject) {
    theObject.make="Honda";
}

const cars={
    make: "Toyota",
    year: 2023
}

console.log(cars.make);
myFunction(cars);
console.log(cars.make);

// Passing array as a parameters
function myFunc(Arr) {
    Arr[0]=3;
}

const arr=[0,1,2];

console.log(arr[0]);
myFunc(arr);
console.log(arr[0]);

//Functions expressions
//Example 1
const sum=function(a,b) {
    return (a+b);
}

console.log(sum(33,40));

//example 2
const fact=function factorial(n) {
    return n<2?1:n*factorial(n-1)
}

console.log(fact(5));

//Passing as an arguments to another fucntion

function map(f,a) {
    const result=new Array(a.length);
    for( let i=0;i<a.length;i++) {
        result[i]=f(a[i])
    }
    return result;
}

const cube=function(x) {
    return x*x*x;
}

const numbers=[1,2,3,4,5];
console.log(map(cube,numbers));

//Functions hoisting

// Js interpreter hosts the entire function declared at the top of the current ScriptProcessorNode

// Its only works with function declarations not with function expressions

