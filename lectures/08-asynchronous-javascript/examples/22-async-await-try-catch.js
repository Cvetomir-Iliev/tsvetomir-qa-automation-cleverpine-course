// Error handling with async/await
function executeTestCase(testName, shouldPass) {
  return new Promise(function (resolve, reject) {
    console.log(`Executing ${testName}...`);
    setTimeout(() => {
      if (shouldPass) {
        resolve({ status: "PASS" });
      } else {
        reject(new Error(`Assertion failed in ${testName}`));
      }
    }, 500);
  });
}

// Using try...catch from Lecture 7 with async/await
async function runTestWithErrorHandling(testName, shouldPass) {
  try {
    // await will either return the resolved value or throw the rejected error
    const result = await executeTestCase(testName, shouldPass);
    console.log(
      `✅ SUCCESS: ${testName} completed with status:`,
      result.status
    );
    return { success: true, result };
  } catch (error) {
    // If the promise is rejected, the error is caught here
    console.error(`❌ ERROR: ${testName} failed:`, error.message);
    return { success: false, error: error.message };
  }
}

// We need an async context to use await at the top level
async function runTests() {
  console.log("--- Testing with a passing test ---");
  await runTestWithErrorHandling("passing_test", true);

  console.log("\n--- Testing with a failing test ---");
  await runTestWithErrorHandling("failing_test", false);
}

runTests();
