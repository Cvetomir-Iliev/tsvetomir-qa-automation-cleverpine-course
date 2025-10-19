// Function using array methods from Lecture 4
function processTestResults(testData) {
  // testData is an array of arrays: [["test1", "PASS", 200], ["test2", "FAIL", 800]]

  const totalTests = testData.length;
  const passedTests = testData.filter((test) => test[1] === "PASS").length;
  const failedTests = testData.filter((test) => test[1] === "FAIL").length;
  const successRate =
    totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(1) : 0;

  const slowTests = testData
    .filter((test) => test[2] > 1000)
    .map((test) => test[0]);

  const totalTime = testData.reduce((sum, test) => sum + test[2], 0);
  const averageTime = totalTests > 0 ? (totalTime / totalTests).toFixed(0) : 0;

  return {
    totalTests,
    passedTests,
    failedTests,
    successRate: `${successRate}%`,
    slowTests,
    totalTime: `${totalTime}ms`,
    averageTime: `${averageTime}ms`,
  };
}

// Test the comprehensive function
let testData = [
  ["login_test", "PASS", 200],
  ["signup_test", "PASS", 850],
  ["api_test", "FAIL", 1500],
  ["profile_test", "FAIL", 1200],
];

let analysis = processTestResults(testData);
console.log("Analysis results:", analysis);

// Function using string methods from Lecture 2
function sanitizeTestName(rawName) {
  // Remove spaces, convert to lowercase, replace special characters
  return rawName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

// Test name sanitization
console.log(sanitizeTestName("  User Registration Test  ")); // "user_registration_test"
console.log(sanitizeTestName("Complex-Test With Many Spaces")); // "complextest_with_many_spaces"
