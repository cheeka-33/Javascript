/* 
        MEMORY LEAKS
    Memory leaks:
        It is defined as a piece of memory that is no longer used.

        1.undeclared /global variables:
            function foo(arg){
                bar="this is a global variable";
            }

            -to avoid this we have to use strict mode in the begining of the js file.

        2.Forgotten timers or callbacks:
        3.Out DOM references.     
        4.Closures.

*/


/* 
        CLOSURES AND VARIABLES
        closures allows us to access the  to an outer function's scope from an inner function.
    closures are created every time a function is created, at function creation time.

    Eg for lexical scoping:
                function init() {
                var name = "Mozilla"; // name is a local variable created by init
                function displayName() {
                    // displayName() is the inner function, that forms the closure
                    console.log(name); // use variable declared in the parent function
                }
                displayName();
                }
                init();
        -The parent function init.the displaName function does not have any variables but it access the 
        variable from its outer function init.

*/


/* 
        "This" Keyword


        The "this" keyword is mainly used to refer the object.

Calling this keyword by itself:
    It refer to the global window object.
    console.log('this alone', this);
How to Call this in an Object Method:
    Eg:
        const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        getThis : function() {
        return this;
        }
        };
        console.log('this in object method', person.getThis());

How to Call this in a Function:

        function test() {
            console.log('this in a function', this);
        }

        test()

JS provides three methods to manipulate this keyword:
        call
        apply 
        bind



*/
