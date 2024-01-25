// Copying values 
// Shallow copy 
var obj={
    name: "Saroo",
    age:21
}

obj.age=22;
console.log(obj); // change the overall object 

// Using assign operator
var obj1={
    name: "Saroo",
    id: 3
}

var obj2=Object.assign({},obj1);
obj2.id=2;
console.log(obj1);
console.log(obj2);

// Using json Stringify

var obj3={
    name: "Saroo",
    id: 3
}

var obj4=JSON.parse(JSON.stringify(obj3));
obj4.id=2;
console.log(obj3);
console.log(obj4);


// Deep copy
// The deep copy means that if the copy a variable is made and then any changes in the copied variable it does not affect the original variable.

// JSON stringify.

// JSON parse, is used for deep copy.

