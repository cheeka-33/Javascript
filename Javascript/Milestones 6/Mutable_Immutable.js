// Mutable
// We can change it
// In js array and objects are mutable
// Primitive data types can not

let info={
    name:"Sarooo",
    age:21
}

let info1=info;
info1.name="Saravanan";
console.log(info,info1);

// Spread operator
info1={...info};


// Immutable
// It is a concept in which the value of a variable cannot be ChannelMergerNode.apply
// The primitive values are immutable
// once a primitive value is created, it cannot be changed. 

let a=23;
let b=a;
b=12;
console.log(a,b);

// Benefits of using immutable objects.

//     To improve performance 
//     To reduce memory use 
//     Thread-safety 
//     Lower developer mental burden 