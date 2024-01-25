// Scopes and the recursion stack

// A function can refer to and call itself. There ways to refer itself

// The function name
// arguments.callee
// An inscope varaible that refers to the function

//Recursion is like analogous to loop
//Recursion itself use the stack : The function stack 

function count(i){
    if(i<0) {
        return;
    }
    console.log(`Begin: ${i}`);
    count(i-1);             //Recursion steps that call itself which means a function that call itself
    console.log(`End: ${i}`);
}
count(4);

// Nested Function
//Nested function is like a closure
function addSquares(a,b) {
    function square(x) {
        return x*x;
    }
    return square(a) + square(b);
}

console.log(addSquares(3,4));

//closure must preserved arguments and variables in all scopes it references