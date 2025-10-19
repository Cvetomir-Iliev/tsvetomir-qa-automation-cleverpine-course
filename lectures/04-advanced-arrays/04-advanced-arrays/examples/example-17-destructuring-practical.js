// Example 1: Processing test result arrays
let testResults = [
  ["login_test", "PASS", 200],
  ["logout_test", "FAIL", 150],
  ["register_test", "PASS", 800],
];

console.log("=== Test Results Analysis ===");
for (let i = 0; i < testResults.length; i++) {
  let [testName, result, duration] = testResults[i];
  let status = result === "PASS" ? "✅" : "❌";
  let performance = duration < 500 ? "Fast" : "Slow";

  console.log(`${status} ${testName}: ${duration}ms (${performance})`);
}

// Example 2: Swapping values (very useful!)
let firstTest = "login_test";
let secondTest = "logout_test";

console.log("Before swap:", firstTest, secondTest);

// Traditional way to swap
let temp = firstTest;
firstTest = secondTest;
secondTest = temp;

console.log("After traditional swap:", firstTest, secondTest);

// Destructuring way to swap (much cleaner!)
[firstTest, secondTest] = [secondTest, firstTest];
console.log("After destructuring swap:", firstTest, secondTest);

// Example 3: Extracting first and last elements
let testQueue = [
  "high_priority",
  "medium_test1",
  "medium_test2",
  "low_priority",
];

// Get first and last without middle elements
let [first, , , last] = testQueue;
console.log("First test:", first);
console.log("Last test:", last);

// Alternative: using array length (for comparison)
let traditionalFirst = testQueue[0];
let traditionalLast = testQueue[testQueue.length - 1];
console.log("Traditional way:", traditionalFirst, traditionalLast);
