/* DEFINITION:
    -> It means a function calls itself
    It has two inputs
    ~ Base condition (ends recursion)
    ~Recursive case (Resumes recursion)

    Syntax:
    function gallery() {
        stmt;
        gallery()
    }

    The three parts of function definition
    ~The function definition
    ~The base condition
    ~ The recursive call


    function gallery() {
        if(base condition) {
            stmt;
        }
        // else continues recursive call
        gallery()
    }
    Without the base condition recursive function runs infinte time
*/

function doSomething(n) {
    if(n === 0) {
      console.log("TASK COMPLETED!")
      return
    }
    console.log("I'm doing something.")
    doSomething(n - 1)
  }
  doSomething(3)