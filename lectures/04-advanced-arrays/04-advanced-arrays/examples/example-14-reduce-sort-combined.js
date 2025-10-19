// Comprehensive test analysis example
let testResults = ["PASS", "FAIL", "PASS", "SKIP", "PASS", "FAIL", "PASS"];
let executionTimes = [200, 1500, 300, 0, 250, 1200, 400];
let testNames = [
  "login",
  "payment",
  "logout",
  "cleanup",
  "register",
  "delete",
  "profile",
];

// 1. Get summary statistics with reduce
// Use an array accumulator: [total, passed, failed, totalTime]
let stats = testResults.reduce(
  function (acc, result, index) {
    acc[0]++;
    if (result === "PASS") {
      acc[1]++;
      acc[3] += executionTimes[index];
    } else if (result === "FAIL") {
      acc[2]++;
    }
    return acc;
  },
  [0, 0, 0, 0]
);

console.log("Test Statistics:");
console.log(`Total: ${stats[0]}, Passed: ${stats[1]}, Failed: ${stats[2]}`);
console.log(
  `Average execution time for passed tests: ${(stats[1] > 0 ? stats[3] / stats[1] : 0).toFixed(1)}ms`
);

// 2. Sort failed tests by execution time (slowest first)
let failedTestIndices = [];
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "FAIL") {
    failedTestIndices.push(i);
  }
}

let sortedFailedTests = failedTestIndices.sort(function (a, b) {
  return executionTimes[b] - executionTimes[a]; // Descending
});

console.log("Failed tests (slowest first):");
sortedFailedTests.forEach(function (index) {
  console.log(`${testNames[index]}: ${executionTimes[index]}ms`);
});
