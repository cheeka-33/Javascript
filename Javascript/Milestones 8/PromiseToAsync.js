/*
1.create a async function :
        async function myAsyncFunction() {
        // Code 
        }
  
2.Replace .then() with await:
    Before replacing:
        myPromise.then(result => {
        // Code 
        });
    after replacing;
        const result = await myPromise;
        // Code
3.Handle error with try nd catch:
    Before replacing:
        myPromise.catch(error => {
        // code
        });
    after replacing;
                try {
        const result = await myPromise;
        // Code 
        } catch (error) {
        // code
        }

4.Invoking Async function:
        try {
        const result = await myAsyncFunction();
        // Code 
        } catch (error) {
        // Code 
        }

5.Handling multiple promises:
        async function multipleAsyncOperations() {
        const result1 = await promise1;
        const result2 = await promise2;
        // Code to handle results
        }
*/