// Test results array validation
function validateTestResults(results) {
  if (!results) {
    throw new Error("Test results are required");
  }

  if (!Array.isArray(results)) {
    throw new TypeError("Test results must be an array");
  }

  if (results.length === 0) {
    throw new Error("Test results array cannot be empty");
  }

  // Validate each test result using loops from Lecture 3
  for (let i = 0; i < results.length; i++) {
    let result = results[i];

    if (!result || typeof result !== "object") {
      throw new Error(`Test result at index ${i} must be an object`);
    }

    if (!result.testName) {
      throw new Error(`Test result at index ${i} missing testName`);
    }

    if (!result.status) {
      throw new Error(`Test result at index ${i} missing status`);
    }

    // Validate status using arrays from Lecture 3
    let validStatuses = ["PASS", "FAIL", "SKIP"];
    if (!validStatuses.includes(result.status)) {
      throw new Error(
        `Test result at index ${i} has invalid status: ${result.status}`
      );
    }

    if (typeof result.duration !== "number" || result.duration < 0) {
      throw new Error(`Test result at index ${i} must have a valid duration`);
    }
  }

  return true;
}

// Test the array validation
console.log("\n=== Test Results Validation ===");

let validResults = [
  { testName: "login", status: "PASS", duration: 250 },
  { testName: "logout", status: "FAIL", duration: 180 },
];

let invalidResults = [
  { testName: "login", status: "INVALID", duration: 250 },
  { status: "PASS", duration: 180 }, // Missing testName
];

try {
  validateTestResults(validResults);
  console.log("✅ Valid results passed validation");
} catch (error) {
  console.log("❌ Validation failed:", error.message);
}

try {
  validateTestResults(invalidResults);
  console.log("✅ Invalid results passed validation");
} catch (error) {
  console.log("❌ Validation failed:", error.message);
}
