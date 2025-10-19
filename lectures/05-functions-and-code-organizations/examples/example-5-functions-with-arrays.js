// Function to find failed tests (using array methods from Lecture 4)
function findFailedTests(testNames, testResults) {
  let failedTests = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failedTests.push(testNames[i]);
    }
  }
  return failedTests;
}

// Test the function
let names = ["login_test", "logout_test", "register_test"];
let results = ["PASS", "FAIL", "PASS"];

let failures = findFailedTests(names, results);
console.log("Failed tests:", failures); // ["logout_test"]

// Function using advanced array methods (from Lecture 4)
function calculateSuccessRate(results) {
  let totalTests = results.length;
  if (totalTests === 0) {
    return 0;
  }
  let passedTests = results.filter(function (result) {
    return result === "PASS";
  }).length;
  return ((passedTests / totalTests) * 100).toFixed(1);
}

// Test the success rate function
let testResults = ["PASS", "FAIL", "PASS", "PASS", "SKIP"];
console.log("Success rate:", calculateSuccessRate(testResults) + "%"); // "60.0%"
