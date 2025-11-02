// Asynchronous: Error happens LATER
let asyncPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("This error happens after 1 second!"));
  }, 1000);
});

// try...catch DOESN'T work here for async errors!
try {
  // This line of code itself doesn't throw an error.
  // The error occurs later, after the try...catch block has finished executing.
  asyncPromise;
  console.log("This line runs because the promise is just an object for now.");
} catch (error) {
  // This block will never be reached for the promise rejection.
  console.log("This won't catch async errors!");
}

console.log("try...catch block is finished.");

// To properly handle the rejection, you must use .catch()
asyncPromise.catch((error) => {
  console.log("Async error caught properly with .catch():", error.message);
});
