// Creating a promise that will fail
function executeTestCase(testName, shouldPass) {
  return new Promise(function (resolve, reject) {
    console.log(`▶️  Executing: ${testName}`);
    const duration = 1000;
    setTimeout(function () {
      if (shouldPass) {
        resolve({ status: "PASS" });
      } else {
        // The promise is rejected with an Error object
        reject(new Error(`Test "${testName}" failed assertion`));
      }
    }, duration);
  });
}

// Using .then() and .catch() together
executeTestCase("failing_test", false)
  .then(function (result) {
    // This part is skipped because the promise rejects
    console.log("This will not be printed.");
    console.log("Success:", result);
  })
  .catch(function (error) {
    // The .catch() block is executed when a rejection occurs
    console.error("❌ Test failed:", error.message);
  });
