// Example 1: Sort test results by execution time
let testNames = ["login_test", "logout_test", "register_test", "delete_test"];
let executionTimes = [250, 100, 1200, 800];

// Create paired data for sorting (we'll use indices)
let testIndices = [0, 1, 2, 3];

// Sort indices by execution time
let sortedByTime = testIndices.slice().sort(function (indexA, indexB) {
  return executionTimes[indexA] - executionTimes[indexB];
});

console.log("Tests sorted by execution time:");
sortedByTime.forEach(function (index) {
  console.log(`${testNames[index]}: ${executionTimes[index]}ms`);
});

// Example 2: Sort test names by length
let allTests = ["login", "user_registration_flow", "logout", "password_reset"];

let sortedByLength = allTests.slice().sort(function (a, b) {
  return a.length - b.length;
});

console.log("Tests sorted by name length:", sortedByLength);
// Output: ["login", "logout", "password_reset", "user_registration_flow"]

// Example 3: Custom priority sorting
let testPriorities = ["HIGH", "LOW", "MEDIUM", "HIGH", "LOW"];
let priorityOrder = { HIGH: 1, MEDIUM: 2, LOW: 3 };

let sortedByPriority = testPriorities.slice().sort(function (a, b) {
  return priorityOrder[a] - priorityOrder[b];
});

console.log("Tests sorted by priority:", sortedByPriority);
// Output: ["HIGH", "HIGH", "MEDIUM", "LOW", "LOW"]
