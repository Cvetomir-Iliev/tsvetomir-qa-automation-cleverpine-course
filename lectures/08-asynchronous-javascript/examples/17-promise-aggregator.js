// A simple promise-based test execution function
function executeTest(testName, shouldPass) {
  return new Promise((resolve, reject) => {
    const duration = Math.random() * 500 + 100;
    setTimeout(() => {
      if (shouldPass) {
        resolve({ testName, status: "PASS", duration: Math.round(duration) });
      } else {
        reject({ testName, status: "FAIL", error: "Assertion failed" });
      }
    }, duration);
  });
}

// Test result aggregation with promises, using a class from Lecture 6
class TestResultAggregator {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      totalDuration: 0,
      details: [],
    };
  }

  // Method to execute a test and aggregate its result
  executeTest(testName, shouldPass) {
    console.log(`Executing ${testName}...`);
    return executeTest(testName, shouldPass)
      .then((result) => {
        console.log(`✅ ${testName} PASSED`);
        this.results.passed++;
        this.results.totalDuration += result.duration;
        this.results.details.push(result);
      })
      .catch((error) => {
        console.log(`❌ ${testName} FAILED`);
        this.results.failed++;
        this.results.details.push(error);
        // We "handle" the error here so that subsequent .then() calls can proceed
      });
  }

  // Method to display the final summary
  displaySummary() {
    console.log("\n--- Test Summary ---");
    console.log(`Passed: ${this.results.passed}`);
    console.log(`Failed: ${this.results.failed}`);
    console.log(`Total Duration: ${this.results.totalDuration}ms`);
    console.log("--------------------");
  }
}

// Using the aggregator
let aggregator = new TestResultAggregator();

// Chain test executions. Because we handle rejections in `executeTest`, the chain won't break.
aggregator
  .executeTest("test1_login", true)
  .then(() => aggregator.executeTest("test2_dashboard", true))
  .then(() => aggregator.executeTest("test3_api_fail", false))
  .then(() => aggregator.executeTest("test4_logout", true))
  .then(() => {
    // This final .then() runs after all tests are complete
    aggregator.displaySummary();
  });
