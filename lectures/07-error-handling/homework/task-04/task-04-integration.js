// Resilient Test Runner Integration

// 1. Define tiny inputs
const configJson = '{"environment": "staging", "baseUrl": "http://localhost:12345", "retries": 3}';
const rawResults = [
  { name: "test1", status: "PASS", duration: 250 },
  { name: "test2", status: "FAIL", duration: 180 },
  { name: "test3", status: "PASS", duration: 1200 },
];

// 2. Reuse helpers from previous tasks
// 2.1. Safe parsing (Task 1)
const { safeParse } = require("./task-01/task-01-try-catch");
// 2.2. Validators (Task 2)
const { validateRequired, validateArray, validateRange, validateTestResults } = require("./task-02/task-02-throw");
// 2.3. Guaranteed cleanup (Task 3)
const { runWithCleanup } = require("./task-03/task-03-finally");

// 3. Parse the config
const parsedConfig = safeParse(configJson);
if (!parsedConfig.ok) {
  console.log("❌ Config parsing failed:", parsedConfig.error);
  process.exit(1);
}

// 4. Validate the config
try {
  validateRequired(parsedConfig.data.environment, "Environment");
  validateRequired(parsedConfig.data.baseUrl, "Base URL");
  validateRange(parsedConfig.data.retries, 0, 5, "Retries");
  console.log("✅ Config validation passed");
} catch (error) {
  console.log("❌ Config validation failed:", error.message);
  process.exit(1);
}

// 5. Validate the results
try {
  validateTestResults(rawResults);
  console.log("✅ Test results validation passed");
} catch (error) {
  console.log("❌ Test results validation failed:", error.message);
  process.exit(1);
}

// 6. Execute the tests
function executeTest(test) {
    try {
        if (test.status === "FAIL") {
            throw new Error("Test failed");
        }
        return { name: test.name, status: "PASS", duration: test.duration };
    } catch (error) {
        return { name: test.name, status: "FAIL", duration: test.duration };
    }
}

// 7. Compute and log basic metrics
const executedResults = rawResults.map(executeTest);
const total = executedResults.length;
const passed = executedResults.filter((r) => r.status === "PASS").length;
const failed = executedResults.filter((r) => r.status === "FAIL").length;
const totalDuration = executedResults.reduce((sum, r) => sum + r.duration, 0);
const successRate = ((passed / total) * 100).toFixed(1) + "%";

console.log("=== BASIC METRICS ===");
console.log("Total:", total);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Total duration (ms):", totalDuration);
console.log("Success rate:", successRate);

// 8. Build a report object
const report = {
  environment: parsedConfig.data.environment,
  totalCases: total,
  failedCount: failed,
  successRate: successRate,
};

// 9. Convert to JSON and log
const reportJson = JSON.stringify(report, null, 2);
console.log("=== JSON REPORT ===");
console.log(reportJson);

// 10. Demonstrate cleanup
console.log("\n=== CLEANUP DEMONSTRATION ===");
runWithCleanup({ name: "cleanup_test", shouldFail: false });

