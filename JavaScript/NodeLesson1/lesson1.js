// synchronous - step by step
// asynchronous - do many task at the same time

function myFunc(){
    console.log('myFunc was called');
}

console.log("First log");
setTimeout(myFunc, 3000);
console.log("Last log");

// promise, async/await, fetch, axios