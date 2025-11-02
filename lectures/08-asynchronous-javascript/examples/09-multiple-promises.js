// Using arrays from Lecture 3 with promises

// Re-using the function from the previous example
function executeTestCase(testName, shouldPass) {
  return new Promise(function (resolve, reject) {
    const duration = Math.floor(Math.random() * 1000) + 200;
    setTimeout(() => {
      if (shouldPass) {
        resolve({ testName, status: "PASS", duration });
      } else {
        reject(new Error(`Assertion failed in ${testName}`));
      }
    }, duration);
  });
}

function createTestSuite() {
  let testNames = ["login_test", "logout_test", "profile_test"];

  // Using .map from Lecture 4 to create an array of promises
  let testPromises = testNames.map((name) => {
    // Let's make one test fail randomly
    const shouldPass = name !== "logout_test";
    return executeTestCase(name, shouldPass);
  });

  return testPromises;
}

let testSuite = createTestSuite();
console.log("Test suite created (array of promises):", testSuite);

// We can use Promise.all to wait for all of them
Promise.allSettled(testSuite).then((results) => {
  console.log("\nAll tests in the suite have completed:");
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(`✅ ${result.value.testName} - ${result.value.status}`);
    } else {
      console.log(`❌ Test failed - ${result.reason.message}`);
    }
  });
});
