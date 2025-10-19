// Rest operator (...) captures remaining elements
let allTests = [
  "critical_test",
  "normal_test1",
  "normal_test2",
  "normal_test3",
];

let [criticalTest, ...normalTests] = allTests;

console.log("Critical test:", criticalTest); // "critical_test"
console.log("Normal tests:", normalTests); // ["normal_test1", "normal_test2", "normal_test3"]

// Practical example: Processing test results with different priorities
let mixedResults = [
  "high_login",
  "med_logout",
  "med_register",
  "low_cleanup",
  "low_metrics",
];

let [highPriority, ...otherTests] = mixedResults;
console.log("High priority:", highPriority);
console.log("Other tests:", otherTests);

// Another example: Getting first few elements and the rest
let testScores = [95, 87, 92, 78, 85, 90];

let [highest, second, ...remainingScores] = testScores;
console.log("Top 2 scores:", highest, second);
console.log("Remaining scores:", remainingScores);
