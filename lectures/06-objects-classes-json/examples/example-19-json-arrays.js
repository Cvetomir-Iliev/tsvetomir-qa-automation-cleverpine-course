// JSON can represent arrays of objects (common in API responses)
let testResultsJson = `[
  {
    "testName": "login_test",
    "status": "PASS",
    "duration": 250,
    "environment": "staging"
  },
  {
    "testName": "logout_test", 
    "status": "FAIL",
    "duration": 180,
    "environment": "staging"
  },
  {
    "testName": "register_test",
    "status": "PASS", 
    "duration": 1200,
    "environment": "staging"
  }
]`;

// Parse JSON array into JavaScript array
let testResults = JSON.parse(testResultsJson);
console.log("Parsed test results:", testResults);
console.log("Array length:", testResults.length);

// Use array methods from Lecture 4 to process the data
let failedTests = testResults.filter((test) => test.status === "FAIL");
let testNames = testResults.map((test) => test.testName);
let totalDuration = testResults.reduce((sum, test) => sum + test.duration, 0);

console.log("Failed tests:", failedTests);
console.log("Test names:", testNames);
console.log("Total duration:", totalDuration + "ms");
