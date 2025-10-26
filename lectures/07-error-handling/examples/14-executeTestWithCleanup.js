// Test execution with resource management
function executeTestWithCleanup(testName, shouldFail = false) {
  let testStartTime = Date.now();
  let testStatus = "UNKNOWN";

  try {
    console.log(`🔄 Starting test: ${testName}`);

    if (shouldFail) {
      throw new Error("Simulated test failure");
    }

    // Simulate test execution
    console.log("✅ Test logic completed successfully");
    testStatus = "PASS";
  } catch (error) {
    console.log("❌ Test failed:", error.message);
    testStatus = "FAIL";
  } finally {
    // Cleanup operations that must always happen
    let testEndTime = Date.now();
    let duration = testEndTime - testStartTime;

    console.log(
      `🧹 Cleanup: Test ${testName} completed in ${duration}ms with status: ${testStatus}`
    );
    console.log("🧹 Cleanup: Resources released");
    console.log("🧹 Cleanup: Logs saved");
  }
}

// Test both success and failure scenarios
console.log("=== Testing with finally cleanup ===");
executeTestWithCleanup("successful_test", false);
console.log(); // Empty line for readability
executeTestWithCleanup("failing_test", true);
