// Old way: Extracting values one by one
let testResults = ["login_test", "PASS", 250];
let testName = testResults[0];
let testStatus = testResults[1];
let executionTime = testResults[2];

console.log("Test:", testName, "Status:", testStatus, "Time:", executionTime);

// New way: Destructuring assignment
let [name, status, time] = testResults;
console.log("Test:", name, "Status:", status, "Time:", time);

// Same result, but cleaner syntax!
