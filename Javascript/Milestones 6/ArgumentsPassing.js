// Default parameters

function myFunction(name="Sarooo") {
    console.log(name);
}

myFunction();

// Passing parameters through function declaration

function myFunc(name) {
    console.log(name);
}

myFunc("Sarooo");

// Using the arguments object

function add() {
    let sum=0;
    for(let i=0;i<arguments.length;i++) {
        sum+=arguments[i];
    }
    console.log(sum);
}

add(5,4,3,2,1);

// Passing parameters through spread operator

function add1(...num) {
    let sum=0;
    for(let number of num) {
        sum+=number;
    }
    console.log(sum);
}

add1(5,4,3,2,1);

// By using callback function

function addfunction(a,b,callback){
    setTimeout(function()
    {
        const result=a+b;
        callback(result);
    },1000);
}

function display(sum)
{
    console.log(sum);
}

addfunction(2,3,display);
