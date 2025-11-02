// Helper function from previous example
function executeTestCase(testName, duration) {
  return new Promise((resolve) => {
    console.log(`Starting ${testName}...`);
    setTimeout(() => {
      console.log(`...Finished ${testName} after ${duration}ms`);
      resolve({ testName, duration });
    }, duration);
  });
}

// Running tests one after another
async function runSequentialTests() {
  console.log("=== SEQUENTIAL TEST EXECUTION ===");
  const startTime = Date.now();

  // await pauses execution, so test2 doesn't start until test1 is finished
  const result1 = await executeTestCase("test1_setup", 1000);
  const result2 = await executeTestCase("test2_action", 500);
  const result3 = await executeTestCase("test3_teardown", 300);

  const endTime = Date.now();
  console.log(`\nSequential execution finished in ${endTime - startTime}ms`);

  return [result1, result2, result3];
}

// Execute the test suite
runSequentialTests().then(function (allResults) {
  console.log(
    "All results collected:",
    allResults.map((r) => r.testName)
  );
});
