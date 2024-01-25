//Function overloading
function foo(arg1) {
    console.log(arg1);
}

function foo(arg1,arg2) {
    console.log(arg1,arg2);
}

foo("Saroo");


// Above exmaple tells that function overloading is not 
// supported in javascript

//Use default values for the undefined arguments

// If else

// program to perform function overloading

function sum() {  
    
        // For switch statement in this step we can use Switch(arguments.length)
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    }
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}

sum();
sum(5); 
sum(5, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); 
