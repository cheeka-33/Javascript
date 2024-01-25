/* 
SYNCHRONOUS PROGRAMMING:
        -The program in js is synchronous by default.
        -The program will be executed one after the other.
        -It is not a time consuming programming.
        -It is more suitable to perform cpu function,front-end applications,
        and mathematical computations.
    Eg:
        console.log("first");
        console.log("second");
        console.log("third");

ASYNCHRONOUS PROGRAMMING:
        -It allows multiple event to occur simultaneously.
        -one operation may take place while another is processed. 
        -take place in a non-sequential manner.
    Eg: 
        console.log("One");
        setTimeout(() => console.log("Two"), 100);//the set time out makes our program asynchronous.
        console.log("Three");

        first the op will be one and three and two..Becoz we used 100sec set time outerHeight.


METHODS TO HANDLE ASYNCHRONOUS PROGRAMMING:
        Callback
        Promises
        Async/AWait        

CALLBACK:
        A callback function is a function passed into another function as an argument, 
        which is invoked inside the outer function to complete some kind of action.
            syntax callback function:
                function demoFunction(callback){
                callback();
    The callback can be Synchronous or Asynchronous callback:
                    Synchronous callback:
                         called immediately after the invocation of the outer function
                    Asynchronous callback:
                         asynchronous callbacks are called at some point later
                    Eg: synchronous callbacks :
                         Array.prototype.map(), Array.prototype.forEach(), etc. 
                    Eg: asynchronous callbacks
                         setTimeout() and Promise.prototype.then().
    To Avoid Callback Hell:
                    By using promises and Async/Await we can avoid.

    PROMISES:  
                -used to track Asynchronous events.
                It has 3 states:
                    Pending
                    Resolved
                    Rejected              
    Async/AWait:
                It works with the promises to show our code like Synchronous code.
                Await is only used in Async function.
            Syntax for Await:
                        let result = await promise;
            Syntax for Async:
                        async function name(parameter1, parameter2, ...paramaterN) {
                                    // statements
                                    }                           
    
}

*/ 