// Global Variable

let testEnviroment = "staging";
let maxRetries = 3;
// 2. Function: runTest(testName)
function runTest(testName) {
    let attempts = Math.floor(Math.random() * 5) + 1;
    let testResult;
    console.log(`  [Inside runTest] Attempts for "${testName}": ${attempts}`);

    if (attempts <= maxRetries) {
        testResult = "PASS";
    } else {
        testResult = "FAIL";
    }
    return `Test: "${testName}" | Environment: ${testEnvironment} | Attempts: ${attempts}/${maxRetries} | Result: ${testResult}`;
}

// 3. Function: configureRetries(newMaxRetries)
function configureRetries(newMaxRetries) {
  maxRetries = newMaxRetries;
  return maxRetries;
}
// 4. Demonstrate Scope Behavior
console.log("=== Running Tests ===");
let result1 = runTest("Login Test");
console.log(result1);
console.log();

let result2 = runTest("Checkout Test");
console.log(result2);
console.log();

// Change the global maxRetries using configureRetries
console.log("=== Reconfiguring Max Retries ===");
console.log("Before reconfiguration - Max Retries:", maxRetries);
let newRetryValue = configureRetries(5);
console.log("After reconfiguration - Max Retries:", newRetryValue);
console.log("Global maxRetries is now:", maxRetries);
console.log();

console.log("=== Running Tests with New Configuration ===");
let result3 = runTest("Payment Test");
console.log(result3);
console.log();

let result4 = runTest("Navigation Test");
console.log(result4);
console.log();
// Scope Demonstration: Local Variable Access
console.log("=== Scope Error Demonstration ===");
console.log("✓ Program completed successfully!");
console.log("Note: The commented line would cause a scope error if uncommented.");