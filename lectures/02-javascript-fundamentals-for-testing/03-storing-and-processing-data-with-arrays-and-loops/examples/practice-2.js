// Test Data Processor Exercise

// 1. CREATE TEST DATA ARRAYS
// TODO: Create the following arrays with test data

// Array of test case names
let testCases = ["login_functionality","logout_functionality","register_functionality","delete_functionality","create_functionality","update_functionality",
  // Add 6 test case names like "login_functionality", "user_registration", etc.
];

// Array of test results (should match the number of test cases)
let testResults = [
  "PASS", "FAIL", "SKIP","PASS", "FAIL", "SKIP","PASS", "FAIL", "SKIP"
];

// Array of execution times in milliseconds
let executionTimes = [
  1200, 850, 2100, 2200, 450,556
];

// Empty arrays for processing results
let passedTests = [];
let failedTests = [];
let skippedTests = [];
let slowTests = [];

// 2. BASIC ARRAY OPERATIONS
console.log("=== INITIAL TEST DATA ===");
// TODO: Display the total number of tests using .length
// TODO: Add one more test case using push() - name it "cleanup_test"
// TODO: Add corresponding result "PASS" and time 300 to other arrays
// TODO: Display the updated total count
console.log(`${testCases.length}`)
testCases.push("cleanup_test")
testResults.push("PASS");
executionTimes.push(300);
// 3. PROCESS TESTS WITH FOR LOOP
console.log("\n=== PROCESSING TEST RESULTS ===");
// TODO: Create a for loop that goes through all test cases
// For each test case, you should:
// - Display the test name, result, and execution time
// - Use if/else to categorize tests:
//   - If result is "PASS", add to passedTests array
//   - If result is "FAIL", add to failedTests array
//   - If result is "SKIP", add to skippedTests array
// - Additionally, if execution time > 2000ms, add to slowTests array

for (let i = 0; i < testCases.length; i++) {
    let curTest = testCases[i];
    let curResult = testResults[i];
    let curExeTime = executionTimes[i];
  console.log(`Test name: ${curTest} with status: ${curResult} and execution time: ${curExeTime}`)
  if (curResult === "PASS") {
    passedTests.push(curTest)
    } else if (curResult === "FAIL") {
        failedTests.push(curTest);
    } else if (curTest === "SKIP") {
        skippedTests.push(curTest);
    }
}

// 4. GENERATE SUMMARY REPORT
console.log("\n=== TEST EXECUTION SUMMARY ===");
// TODO: Display counts for each category
// TODO: Calculate and display success rate (passed / total * 100)
console.log(`Passed Count: ${passedTests.length}`)
console.log(`Failed Count: ${failedTests.length}`)
console.log(`Skipped Count: ${skippedTests.length}`)
console.log(`Slow Tests Count: ${slowTests.length}`)

// 5. DETAILED ANALYSIS WITH WHILE LOOP
console.log("\n=== FAILED TEST ANALYSIS ===");
// TODO: Use a while loop to process failed tests
// While there are failed tests remaining:
// - Remove one test from failedTests using pop()
// - Display detailed analysis for each failed test
// - Check if the test name contains "login" - mark as critical
// - Check if the test name contains "payment" - mark as high priority


let failedTestsCopy = [];
for (let i = 0; i < failedTests.length; i++) {
  failedTestsCopy.push(failedTests[i]);
}
// Your while loop here
while (failedTests.length > 0) {
    let curTest = failedTests.pop();
    let isCritical = false
    console.log(`Failed test: ${curTest}`);
    if (curTest.includes("login")) curTest += "-critical"
    if (curTest.includes("payment")) curTest += "+high priority"
}
// 6. PERFORMANCE ANALYSIS
console.log("\n=== PERFORMANCE ANALYSIS ===");
// TODO: Create a for loop to analyze execution times
// For each test:
// - If time < 500ms: "Fast"
// - If time 500-1500ms: "Normal"
// - If time 1500-3000ms: "Slow"
// - If time > 3000ms: "Very Slow"

// 7. BONUS: RETRY FAILED TESTS SIMULATION
console.log("\n=== RETRY SIMULATION ===");
// TODO: Create a retry system using a while loop
// - Start with a copy of failed tests
// - Use a while loop with max 3 retries per test
// - Simulate random success (you can use testName.length % 3 === 0 for deterministic results)
// - Track which tests pass on retry and which still fail
