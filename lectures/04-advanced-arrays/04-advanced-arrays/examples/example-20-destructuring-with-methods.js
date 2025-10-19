// Combine destructuring with the array methods we learned
let testData = [
  ["test1", 200, "PASS"],
  ["test2", 600, "FAIL"],
  ["test3", 450, "PASS"],
  ["test4", 800, "PASS"],
];

// Filter fast tests and destructure the results
let fastTests = testData.filter(function (test) {
  let [, executionTime] = test; // Destructure to get execution time
  return executionTime < 500;
});

console.log("=== Fast Tests ===");
fastTests.forEach(function (test) {
  let [name, time, status] = test;
  console.log(`${name}: ${time}ms - ${status}`);
});

// Map to create summary strings using destructuring
let testSummaries = testData.map(function (test) {
  let [name, time, status] = test;
  let icon = status === "PASS" ? "✅" : "❌";
  return `${icon} ${name} (${time}ms)`;
});

console.log("=== Test Summaries ===");
testSummaries.forEach(function (summary) {
  console.log(summary);
});

// Reduce to get statistics, using destructuring in the process
// Use an array accumulator: [total, passed, totalTime]
let testStats = testData.reduce(
  function (stats, test) {
    let [, executionTime, status] = test;
    stats[0]++; // total tests
    if (status === "PASS") {
      stats[1]++; // passed tests
    }
    stats[2] += executionTime; // total time

    return stats;
  },
  [0, 0, 0]
);

console.log("=== Final Statistics ===");
console.log(`Tests run: ${testStats[0]}`);
console.log(
  `Success rate: ${(testStats[0] > 0 ? (testStats[1] / testStats[0]) * 100 : 0).toFixed(1)}%`
);
console.log(
  `Average time: ${(testStats[0] > 0 ? testStats[2] / testStats[0] : 0).toFixed(1)}ms`
);
