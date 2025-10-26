// Test data validation using try...catch with string methods (Lecture 2)
function validateTestUser(userData) {
  try {
    // Using string methods from Lecture 2
    if (!userData.email.includes("@")) {
      throw new Error("Email must contain @ symbol");
    }

    if (userData.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    // Using object property access from Lecture 6
    if (!userData.username || userData.username.trim().length === 0) {
      throw new Error("Username is required");
    }

    return { valid: true, message: "User data is valid" };
  } catch (error) {
    return { valid: false, message: error.message };
  }
}

// Test the validation function
console.log("\n=== User Validation Tests ===");

let validUser = {
  username: "testuser",
  email: "test@example.com",
  password: "securepass123",
};

let invalidUser = {
  username: "",
  email: "invalid-email",
  password: "123",
};

console.log("Valid user:", validateTestUser(validUser));
console.log("Invalid user:", validateTestUser(invalidUser));

// Array processing with error handling (using methods from Lectures 3 & 4)
function analyzeTestResults(testResults) {
  try {
    // Using array methods from Lecture 4
    let metrics = {
      total: testResults.length,
      passed: testResults.filter((test) => test.status === "PASS").length,
      failed: testResults.filter((test) => test.status === "FAIL").length,
      skipped: testResults.filter((test) => test.status === "SKIP").length,
    };

    metrics.successRate =
      ((metrics.passed / metrics.total) * 100).toFixed(1) + "%";

    // Using array method reduce from Lecture 4
    metrics.averageDuration =
      testResults
        .filter((test) => test.duration > 0)
        .reduce((sum, test) => sum + test.duration, 0) / metrics.total;

    return { success: true, data: metrics };
  } catch (error) {
    return {
      success: false,
      error: `Analysis failed: ${error.message}`,
      hint: "Check if testResults is a valid array with required properties",
    };
  }
}

// Test with different data scenarios
console.log("\n=== Test Results Analysis ===");

let validResults = [
  { status: "PASS", duration: 250 },
  { status: "FAIL", duration: 180 },
  { status: "PASS", duration: 300 },
];

console.log("Valid results:", analyzeTestResults(validResults));
console.log("Null results:", analyzeTestResults(null));
console.log("String instead of array:", analyzeTestResults("invalid"));
