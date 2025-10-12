// Array of test case names
let testCases = [
    "login_functionality",
    "user_registration",
    "password_reset",
    "profile_update",
    "search_feature",
    "checkout_process"
];
 // Add 6 test case names like "login_functionality", "user_registration", etc.
console.log("All Test Cases: ", testCases);

// Array of test results (should match the number of test cases)
let testResults = [
    "PASS",
    "FAIL",
    "SKIP",
    "PASS",
    "FAIL",
    "SKIP",
    "PASS"
  // Add results: "PASS", "FAIL", "SKIP" - make sure some fail!
];

let Summary = {
    PASS: 0,
    FAIL: 0,
    SKIP: 0
}

for (let result of testResults) {
    Summary[result]++;
}
console.log("✅ Test Summary:");
console.log(`Passed: ${summary.PASS}`);
console.log(`Failed: ${summary.FAIL}`);
console.log(`Skipped: ${summary.SKIP}`);

