// Basic filter syntax: array.filter(function(element) { return true/false; })

let allResults = ["PASS", "FAIL", "PASS", "SKIP", "FAIL", "PASS"];

// Get only the failed tests
let failedResults = allResults.filter(function (result) {
  return result === "FAIL";
});

console.log("All results:", allResults);
console.log("Failed results:", failedResults); // ["FAIL", "FAIL"]

// Get only passed or failed (exclude skipped)
let completedTests = allResults.filter(function (result) {
  return result === "PASS" || result === "FAIL";
});

console.log("Completed tests:", completedTests); // ["PASS", "FAIL", "PASS", "FAIL", "PASS"]
