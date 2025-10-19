// Functions can return different types of data

// Return a string
function getTestStatus(passed, total) {
  let percentage = ((passed / total) * 100).toFixed(1);
  return `${passed}/${total} tests passed (${percentage}%)`;
}

// Return a number
function calculateSuccessRate(passed, total) {
  return parseFloat(((passed / total) * 100).toFixed(1));
}

// Return a boolean
function allTestsPassed(results) {
  for (let i = 0; i < results.length; i++) {
    if (results[i] !== "PASS") {
      return false; // Found a non-passing test
    }
  }
  return true; // All tests passed
}

// Return an array
function getFailedTests(testNames, testResults) {
  let failures = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failures.push(testNames[i]);
    }
  }
  return failures;
}

// Test all return types
let results = ["PASS", "FAIL", "PASS", "PASS"];
let names = ["login", "logout", "register", "profile"];

console.log("Status:", getTestStatus(3, 4)); // String
console.log("Success rate:", calculateSuccessRate(3, 4)); // Number
console.log("All passed:", allTestsPassed(results)); // Boolean
console.log("All passed (all pass):", allTestsPassed(["PASS", "PASS"])); // Boolean
console.log("Failed tests:", getFailedTests(names, results)); // Array
