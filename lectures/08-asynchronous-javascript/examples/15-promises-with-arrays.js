// Execute multiple test cases and collect results
function executeTestCase(testName) {
  return new Promise(function (resolve, reject) {
    const duration = Math.floor(Math.random() * 1000) + 200;
    const shouldPass = testName !== "fail_test"; // Let's make one test fail

    setTimeout(function () {
      if (shouldPass) {
        console.log(`✅ ${testName} passed`);
        resolve({ testName, status: "PASS" });
      } else {
        console.log(`❌ ${testName} failed`);
        reject({ testName, status: "FAIL" });
      }
    }, duration);
  });
}

let testCases = ["login_test", "logout_test", "fail_test", "profile_test"];
let promises = testCases.map(executeTestCase);

// Promise.allSettled waits for all promises to either resolve or reject.
// This is great for running a test suite where you want to know the outcome of every test.
Promise.allSettled(promises).then(function (results) {
  console.log("\n--- Test Suite Results ---");
  const summary = {
    passed: [],
    failed: [],
  };

  results.forEach(function (result, index) {
    const testName = testCases[index];
    if (result.status === "fulfilled") {
      summary.passed.push(testName);
    } else {
      summary.failed.push(testName);
    }
  });

  console.log("Passed tests:", summary.passed.join(", "));
  console.log("Failed tests:", summary.failed.join(", "));
});
