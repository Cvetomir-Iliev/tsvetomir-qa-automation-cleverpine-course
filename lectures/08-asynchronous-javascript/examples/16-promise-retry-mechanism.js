// A function that simulates a flaky test
function flakyTest(testName) {
  return new Promise((resolve, reject) => {
    const duration = 500;
    // This test has a 33% chance of passing
    const isSuccess = Math.random() > 0.67;

    setTimeout(() => {
      if (isSuccess) {
        console.log(`✅ (${testName}) Passed on attempt.`);
        resolve({ status: "PASS" });
      } else {
        console.log(`❌ (${testName}) Failed on attempt.`);
        reject(new Error("Flaky test failed"));
      }
    }, duration);
  });
}

// Retry function using promises
function executeWithRetry(testName, maxRetries) {
  let attempts = 0;

  function tryExecute() {
    attempts++;
    console.log(`\nAttempt #${attempts} for "${testName}"`);

    return flakyTest(testName).catch((error) => {
      if (attempts < maxRetries) {
        console.log(`Retrying... (${maxRetries - attempts} retries left)`);
        // If it fails and we have retries left, we return a new call to tryExecute.
        // This creates a recursive promise chain.
        return tryExecute();
      }
      // If no retries are left, we re-throw the error to be caught by the final .catch()
      console.log(`No more retries for "${testName}".`);
      throw error;
    });
  }

  return tryExecute();
}

// Use the retry mechanism
executeWithRetry("flaky_api_check", 3)
  .then(function (result) {
    console.log("\n🎉 Test finally passed!", result);
  })
  .catch(function (error) {
    console.error("\n😭 Test failed after all retries:", error.message);
  });
