// Exploring error object properties
function demonstrateErrorProperties() {
  let testData = null;

  try {
    // This will throw a TypeError
    testData.someMethod();
  } catch (error) {
    console.log("Error name:", error.name); // "TypeError"
    console.log("Error message:", error.message); // "Cannot read properties of null"
    console.log("Error stack:", error.stack); // Full stack trace (for debugging)
  }
}

demonstrateErrorProperties();

// Using error information for better debugging
function processTestResults(resultsArray) {
  try {
    // Assume resultsArray might be null or not an array
    let totalTests = resultsArray.length;
    let passedTests = resultsArray.filter(
      (result) => result.status === "PASS"
    ).length;
    let successRate = ((passedTests / totalTests) * 100).toFixed(1);

    return {
      total: totalTests,
      passed: passedTests,
      successRate: successRate + "%",
    };
  } catch (error) {
    console.log(
      `Error processing test results: ${error.name} - ${error.message}`
    );

    // Provide more specific feedback based on error type
    if (error.name === "TypeError") {
      console.log("Hint: Check if results data is properly formatted");
    }

    return { error: "Failed to process results" };
  }
}

// Test with various scenarios
console.log("\n=== Testing processTestResults ===");
console.log(
  "Valid data:",
  processTestResults([
    { status: "PASS" },
    { status: "FAIL" },
    { status: "PASS" },
  ])
);

console.log("Null data:", processTestResults(null));
console.log("Invalid data:", processTestResults("not an array"));
