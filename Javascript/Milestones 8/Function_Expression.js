// - The difference is that function name,it is ommited in function expressions to create anonymous functions.
// - The function expression can be used as a Immediately invoked function.
// - The FE can be stored in a variable and can be accessed using the variable name.

/* FUNCTION DECLARATION:
        function functionName(x,y){
            stmt...;
            return z;
        };

    Function Expression(anonymous):
        let varNAme=function(x,y){
            stmt.....;
            return z; 
        };

    Function Expression(named):
        let varNAme=function functionName(x,y){
            stmt.....;
            return z; 
        };

         Arrow Function:
    let varNAme=(x,y)=>{
        statement....
        return z;
*/

// Examples
/* 
function add(x,y)
    {
        let z;
        z=x+y;
        return z;
    }
    console.log(`sum ${add(5,8)}`);

    eg for Function Expression(anonymous):
    
    let subfunc=function (a,b)
    {
        let c;
        c= a-b;
        return c;
    }
    
    console.log(`sub is ${subfunc(10,5)}`)

    Eg for Function Expression(named):
    let mulfunc=function Multiply(a,b){
        return a*b;
    }
    console.log(mulfunc(2,3));

    Eg for arrow function:
    
    let div=(a,b)=>
    {
        return a/b;
    }
    console.log(div(10,2));
    
    */
