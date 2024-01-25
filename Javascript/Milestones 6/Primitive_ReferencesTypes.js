//primitive types
let a=3.14;
let b=a;
b=3;//pointing to a new address 
console.log(a,b);

//reference types:

//array:
let x=[1,3,45,67,89];
let y=x;
y[0]=99;
console.log(x,y);

//object:
let info = { 
	Name :"Abc", 
	Age :10 
} 
console.log(`Name : ${info.Name} Age : ${info.Age}`); 

let info1 = info; 
info1.Age = 14; // Change the Age of original object 
console.log(`Name : ${info.Name} Age : ${info.Age}`);
console.log(`Name : ${info1.Name} Age : ${info1.Age}`);



