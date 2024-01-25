// In C languages we malloc() and free() for memory management.
// But in js it memory automatically 
// when we create an object and free the memory content when it is not used.

//              MEMORY ALLOCATION
const n = 123; // allocates memory for a number
const s = "Sarooo"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

const a = [1,2,3];//  allocates memory for the array and

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// In some high level languages the programmer has to state the variable,
// when it is needed and is not.
// The main purpose of garbage colection is to monitor the memory allocation 
// and determine when of blocks of allocated memory is no lnger needed nad reclaim it

//                REFERENCCE COUNTING GARBAGE COLLECTION
// A object is said to be garbage or collection if there are zeros references pointing to it
// The problem faced with this doesn't suited for cyclic references
let person={
    name:"xyz",
    age:20,
    hobbies: {
        "Singing":"Writing"}
}
// let newPerson=person;
// let hobbies=newPerson.hobbies;
// person=null;    // Now it doesn't have an references 
// newPerson=null; 
console.log(person.hobbies);


//                 MARK AND SWEEP ALGORITHM
// ->this algorithm resolves the problem faced by the refernce counting algorithm.
// ->Mark and sweep algorithm checks if a variable, object or array is reachable from 
// the root object and not a reference to a particular object.

/*
MEMORY LIFE CYCLE IN JS:
THREE WAYS:
    1)Allocation: When we declare a variable, we need to allocate the memory. In JS, this is 
    handled automatically.
    2)Using the allocated memory.
    3)Releasing the memory when not in use anymore. In JS, this is handled automatically 
    (it is called JS garbage collection).

In js the memory is allocated by using stack and heap.

STACK:
    ->it is static memory allocation 
    ->works in LIFO order.
    ->used for primitive datatypes.
    ->the size of the stack is defined during the compile time and it cannot be changed.

HEAP:
    ->dynamic memory allocation.
    ->used for objects and functions and arrays.
    ->the size is defined at the run time.
*/