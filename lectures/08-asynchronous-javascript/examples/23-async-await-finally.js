// Re-using the executeTestCase function
function executeTestCase(testName, shouldPass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldPass) resolve("PASS");
      else reject(new Error("Assertion Failed"));
    }, 500);
  });
}

async function executeTestWithCleanup(testName, shouldPass) {
  let testStartTime = Date.now();
  console.log(`\n--- Starting test: ${testName} ---`);

  try {
    console.log("Acquiring test resources (e.g., opening a file)...");
    const result = await executeTestCase(testName, shouldPass);
    console.log(`✅ Test Result: ${result}`);
  } catch (error) {
    console.error(`❌ Test Error: ${error.message}`);
  } finally {
    // The 'finally' block ALWAYS runs, whether the try block succeeded or failed.
    // This is perfect for cleanup operations.
    const duration = Date.now() - testStartTime;
    console.log(`Releasing test resources (e.g., closing file)...`);
    console.log(`Test finished in ${duration}ms.`);
    console.log(`--- Finished test: ${testName} ---`);
  }
}

// Test both scenarios
async function runBothTests() {
  await executeTestWithCleanup("passing_test", true);
  await executeTestWithCleanup("failing_test", false);
}

runBothTests();
