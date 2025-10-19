// Example 1: Count test results by type
let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS", "FAIL"];

// Use an array accumulator: [passCount, failCount, skipCount]
let resultCounts = results.reduce(
  function (counts, result) {
    if (result === "PASS") {
      counts[0]++;
    } else if (result === "FAIL") {
      counts[1]++;
    } else if (result === "SKIP") {
      counts[2]++;
    }
    return counts;
  },
  [0, 0, 0]
);

console.log("Result counts (PASS, FAIL, SKIP):", resultCounts); // [3, 2, 1]

// Example 2: Find the longest test execution time
let executionTimes = [250, 1200, 800, 300, 1500];

let longestTime = executionTimes.reduce(function (longest, currentTime) {
  return currentTime > longest ? currentTime : longest;
}, 0);

console.log("Longest execution time:", longestTime); // 1500

// Example 3: Build a summary string of all errors
let errorMessages = ["Invalid email", "Password too short", "Username taken"];

let errorSummary = errorMessages.reduce(function (summary, error) {
  return summary + "- " + error + "\n";
}, "Errors found:\n");

console.log(errorSummary);
// Output:
// Errors found:
// - Invalid email
// - Password too short
// - Username taken

// Example 4: Calculate success rate
let testOutcomes = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];

// Use an array accumulator: [totalCount, passedCount]
let successData = testOutcomes.reduce(
  function (data, outcome) {
    data[0] += 1; // total
    if (outcome === "PASS") {
      data[1] += 1; // passed
    }
    return data;
  },
  [0, 0]
);

let successRate = ((successData[1] / successData[0]) * 100).toFixed(1);
console.log(`Success rate: ${successRate}%`); // Success rate: 60.0%
