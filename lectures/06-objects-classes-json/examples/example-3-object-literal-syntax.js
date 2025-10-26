// Basic object syntax
let testCase = {
  name: "login_functionality",
  status: "PASS",
  executionTime: 1250,
  environment: "staging",
};

// Empty object (can be filled later)
let emptyTestResult = {};
console.log("Empty test result:", emptyTestResult);

// Object with different data types
let testSuite = {
  name: "User Authentication Tests",
  testCount: 5,
  passed: ["login", "logout", "password_reset"],
  failed: ["registration"],
  isComplete: true,
};

console.log("Test suite:", testSuite);
