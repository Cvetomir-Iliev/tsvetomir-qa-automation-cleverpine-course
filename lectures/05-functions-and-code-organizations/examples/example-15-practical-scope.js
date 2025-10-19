// Test configuration at global scope
let testEnvironment = "staging";
let maxRetries = 3;

function runTest(testName) {
  // Local variables inside function scope
  let attempts = 0;
  let testResult = "FAIL";

  console.log(`Running test: ${testName} on ${testEnvironment}`);

  while (attempts < maxRetries && testResult === "FAIL") {
    attempts++;
    console.log(`Attempt #${attempts}`);
    // Simulate a test run that might pass or fail
    if (Math.random() > 0.3) {
      // 70% chance of passing
      testResult = "PASS";
    }
  }
  console.log(`Test completed after ${attempts} attempts.`);
  return testResult;
}

let finalResult = runTest("login_test");
console.log("Final result:", finalResult); // "PASS" or "FAIL"

try {
  console.log("Attempts:", attempts); // ERROR! attempts is not accessible here
} catch (e) {
  console.error(e.message);
}

try {
  console.log("Test result:", testResult); // ERROR! testResult is not accessible here
} catch (e) {
  console.error(e.message);
}
