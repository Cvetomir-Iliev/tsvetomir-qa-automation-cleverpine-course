// Regular function
function regularFunction() {
  return "Hello";
}

console.log("Regular function returns:", regularFunction()); // "Hello"

// Async function (automatically returns a promise)
async function asyncFunction() {
  // Whatever you return here becomes the resolved value of the promise.
  return "Hello from async";
}

const promiseFromAsync = asyncFunction();
console.log("Async function returns:", promiseFromAsync); // Promise { <pending> } or Promise { 'Hello from async' }

// To get the value, you must use .then() or await
promiseFromAsync.then(function (value) {
  console.log("Value from async promise:", value); // "Hello from async"
});

// Practical example
async function getTestConfig() {
  // This object will be wrapped in a resolved promise
  return {
    browser: "chromium",
    timeout: 30000,
    headless: true,
  };
}

// This function now returns a promise!
getTestConfig().then(function (config) {
  console.log("\nConfig from async function:", config);
});
