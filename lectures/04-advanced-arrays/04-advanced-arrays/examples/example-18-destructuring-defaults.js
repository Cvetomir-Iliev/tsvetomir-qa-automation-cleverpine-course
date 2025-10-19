// Set default values for missing elements
let incompleteData = ["api_test", "PASS"]; // Missing execution time

let [testName, status, executionTime = 0] = incompleteData;

console.log("Test name:", testName); // "api_test"
console.log("Status:", status); // "PASS"
console.log("Execution time:", executionTime); // 0 (default value)

// Useful for optional test data
let testConfigs = [
  ["test1", "http://dev.example.com"],
  ["test2", "http://staging.example.com", 5000],
  ["test3", "http://prod.example.com"],
];

console.log("=== Test Configurations ===");
for (let i = 0; i < testConfigs.length; i++) {
  let [name, url, timeout = 3000] = testConfigs[i]; // Default timeout 3000ms

  console.log(`${name}: ${url} (timeout: ${timeout}ms)`);
}
