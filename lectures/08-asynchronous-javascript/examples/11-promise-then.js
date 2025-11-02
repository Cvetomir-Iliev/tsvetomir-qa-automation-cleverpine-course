// Practical example: Handling test execution result
function executeTestCase(testName) {
  return new Promise(function (resolve, reject) {
    console.log(`▶️  Executing: ${testName}`);
    const duration = 1200;
    setTimeout(function () {
      const result = {
        testName: testName,
        status: "PASS",
        duration: duration,
      };
      resolve(result);
    }, duration);
  });
}

// Using .then() to handle the result
console.log("Starting test...");

executeTestCase("login_test").then(function (result) {
  console.log("✅ Test completed!");
  console.log("Test name:", result.testName);
  console.log("Status:", result.status);
  console.log("Duration:", result.duration + "ms");
});

console.log("Test promise created (still running in the background)");
