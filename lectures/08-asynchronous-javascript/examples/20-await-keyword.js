// Helper function that returns a promise
function executeTestCase(testName) {
  return new Promise(function (resolve, reject) {
    const duration = 1000;
    console.log(`▶️  Executing: ${testName}`);
    setTimeout(() => {
      const result = { testName: testName, status: "PASS", duration: duration };
      console.log("Test completed!");
      resolve(result);
    }, duration);
  });
}

// Using await to wait for the promise
// 'await' can only be used inside an 'async' function
async function runTest() {
  console.log("Starting test execution");

  // The 'await' keyword pauses the runTest function here...
  const result = await executeTestCase("login_test");
  // ...and resumes it only after the executeTestCase promise is resolved.

  console.log("Result received inside async function:", result);

  return result; // This will be the resolved value of the promise returned by runTest
}

// Call the async function and handle its result
runTest().then(function (finalResult) {
  console.log("Final result from runTest():", finalResult);
});
