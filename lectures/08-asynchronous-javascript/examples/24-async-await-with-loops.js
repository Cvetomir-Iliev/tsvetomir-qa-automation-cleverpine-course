// Re-using the executeTestCase function
function executeTestCase(testName) {
  return new Promise((resolve) => {
    const duration = Math.floor(Math.random() * 500) + 100;
    setTimeout(() => {
      console.log(`Finished ${testName}`);
      resolve({ testName, status: "PASS" });
    }, duration);
  });
}

// Execute multiple tests using a for...of loop
async function executeTestSuite(testNames) {
  let results = [];
  console.log("--- Starting Test Suite ---");

  for (const testName of testNames) {
    try {
      // The loop will pause here until each test is complete
      const result = await executeTestCase(testName);
      results.push(result);
    } catch (error) {
      results.push({ testName, status: "FAIL", error: error.message });
    }
  }

  console.log("--- Test Suite Finished ---");
  return results;
}

// Run the test suite
async function runFullSuite() {
  const testNames = [
    "login_test",
    "dashboard_test",
    "profile_test",
    "logout_test",
  ];
  const allResults = await executeTestSuite(testNames);

  const passedTests = allResults.filter((r) => r.status === "PASS");
  const failedTests = allResults.filter((r) => r.status === "FAIL");

  console.log("\n--- Summary ---");
  console.log(`Total tests: ${allResults.length}`);
  console.log(`Passed: ${passedTests.length}`);
  console.log(`Failed: ${failedTests.length}`);
}

runFullSuite();
