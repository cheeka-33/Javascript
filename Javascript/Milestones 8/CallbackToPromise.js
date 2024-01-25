/*Steps in converting Callback to Promise:
1.Identify the call-back function.
2.Create a promise-based function.
3.Use promise-based function.

Syntax:
  1.Identify the call-back function:
  function FunctionName(callback){
    //some operation
    const result=/result of the operation
    callback(null,result)
  }
  2.Create a promise-based function.
  function functionName()
  {
    return new promise((resolev,rject)=>
    {
      functionname((error,result)=>{
        if(error)
        {
          reject(error);
        }
        else
        {
          resolve(result);
        }
      });
    });
  }
  3.Use promise-based function.
  functionName().then((result)=>{
    console.log(result);
  })
  .catch((error)=>
  {
    console.log(error)
  });
*/

function fetchData(callback) {
    setTimeout(() => {
      const data = "Hello, world!";
      callback(null, data);
    }, 1000);
  }

  function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Hello, world!";
        resolve(data);
      }, 1000);
    });
  }
  async function fetchDataAsync() {
    try {
      const data = await fetchDataPromise();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchDataPromise()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });