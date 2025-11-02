// Simulating a test case execution with a promise
function executeTestCase(testName, shouldPass) {
  return new Promise(function (resolve, reject) {
    console.log(`▶️  Executing: ${testName}`);

    const duration = Math.floor(Math.random() * 2000) + 500; // Random duration

    setTimeout(function () {
      if (shouldPass) {
        const result = {
          testName: testName,
          status: "PASS",
          duration: duration,
        };
        console.log(`✅ PASS: ${testName} (${duration}ms)`);
        resolve(result);
      } else {
        const error = new Error(`Assertion failed in ${testName}`);
        console.log(`❌ FAIL: ${testName} (${duration}ms)`);
        reject(error);
      }
    }, duration);
  });
}

// Create a promise for a passing test
let passingTest = executeTestCase("login_test", true);
console.log("Passing test promise created:", passingTest);

// Create a promise for a failing test
let failingTest = executeTestCase("broken_test", false);
console.log("Failing test promise created:", failingTest);

// We'll see how to handle the results next
passingTest.then((result) => console.log("Passing test resolved", result));
failingTest.catch((error) =>
  console.log("Failing test rejected with", error.message)
);
