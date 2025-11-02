// SYNCHRONOUS ERROR (happens immediately)
function testSyncError() {
  try {
    console.log("Attempting sync operation");
    throw new Error("Synchronous error!");
  } catch (error) {
    console.log("Caught sync error:", error.message);
  }
}

testSyncError();
console.log("Continued after sync error");

console.log("\n---------------------------\n");

// ASYNCHRONOUS ERROR (happens later)
function testAsyncError() {
  console.log("Starting async operation");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // The error is created here, inside the async operation
      reject(new Error("Asynchronous error!"));
    }, 1000);
  });
  return promise;
}

console.log("Before async call");
let errorPromise = testAsyncError();
console.log("After async call (promise pending)");

// To prevent an "UnhandledPromiseRejection" error in Node.js,
// we add a .catch block. We will cover this in detail soon.
errorPromise.catch((error) => {
  console.log("Caught async error:", error.message);
});
