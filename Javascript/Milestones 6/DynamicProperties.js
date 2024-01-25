// Static keys
// Assigning values directly to an object
var obj={
    name: "Saroo",
    age:21
}
console.log(obj);


// Dynamic keys
// 1.creating a key and assign to a object.
// 2.set a key to a object using define property method.
// 3.set the dynamic property keys to an object using ES6 method.

// eg1
key1="Language";

const object={
    name:'Saroo',
    [key1]:'Kannadam',
}

console.log(object);

// eg2

let key3="Company";
let key4="Role";

const worker={
    name: "sarooo",
    age: 21,
    [key3]:"Tata Consultancy Services",
    [key4]: "Software Developer"
}

console.log(worker);


// eg3
const Details={
    name:"sms",
    age:21
}

let key="Company";
Details[key]='Infosys';
let key5="Role";
Object.defineProperty(Details,key5,{value:"Full Stack web developer"});
console.log(Details);

