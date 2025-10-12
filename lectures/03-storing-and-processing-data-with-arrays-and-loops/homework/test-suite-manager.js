const {
  initializeTestData,
  displayTestDataInfo,
  addTestUsers,
  buildTestQueue,
  processTestQueue,
  manageTestResults,
  rotateTestEnvironments,
  validateTestDataIntegrity,
  generateTestReport,
} = require("./task01/test-data-manager");

const {
  processAllTestUsers,
  validateAllEmails,
  calculateResponseTimes,
  simulateTestExecution,
  retryFailedTest,
  monitorTestQueue,
  waitForTestCompletion,
  processTestResultsStream,
  compareLoopApproaches,
} = require("./task02/test-processing-engine");

const {
  analyzeTestResults,
  processTestEnvironments,
  validateTestDataQuality,
  findFirstCriticalError,
  processValidTestsOnly,
  monitorTestExecutionWithLimits,
  executeComprehensiveTestSuite,
  generateDetailedTestReport,
} = require("./task03/advanced-test-processor");

function executeFullTestSuite() {
  console.log("\n=== Execute Full Test Suite ===");

  // Initialize data (Task 1)
  const [testUsers, testEnvironments, browserTypes] = initializeTestData();
  addTestUsers(testUsers, "alice@example.com");
  addTestUsers(testUsers, "bob@example.org");
  addTestUsers(testUsers, "carol@test.dev");

  displayTestDataInfo(testUsers, testEnvironments, browserTypes);
  rotateTestEnvironments(testEnvironments);
  const issues = validateTestDataIntegrity(
    testUsers,
    testEnvironments,
    browserTypes
  );
  console.log("Validation issues:", issues);

  // Build and process queue (Task 1)
  const queue = buildTestQueue();

  // Process users (Task 2)
  processAllTestUsers(testUsers);

  // Simulate execution (Task 2)
  const execResults = simulateTestExecution(queue.slice()); // copy for simulation
  const processedCount = processTestQueue(queue); // empties queue

  // Manage results (Task 1)
  const [passedTests, failedTests, skippedTests] = manageTestResults();
  const report = generateTestReport(passedTests, failedTests, skippedTests);

  // Analyze results (Task 3)
  const names = ["login_basic", "profile_update", "checkout_flow", "login_2fa"];
  const statuses = ["FAIL", "PASS", "PASS", "FAIL"];
  const times = [350, 2400, 900, 1800];
  const [criticalFailures, slowTests, quickPasses] = analyzeTestResults(
    names,
    statuses,
    times
  );

  console.log("=== Full Suite Summary ===");
  console.log("Processed from queue:", processedCount);
  console.log("Report counts:", report);
  console.log("Critical failures:", criticalFailures);
  console.log("Slow passes:", slowTests);
  console.log("Quick passes:", quickPasses);

  return [
    processedCount,
    report,
    criticalFailures,
    slowTests,
    quickPasses,
    execResults,
  ];
}

function runTestSuiteDemo() {
  console.log("#############################");
  console.log("# Test Suite Demo (Arrays & Loops)");
  console.log("#############################\n");

  console.log("\n-- Phase 1: Initialize Test Data --");
  const [users, envs] = (() => {
    const [u, e, b] = initializeTestData();
    addTestUsers(u, "qa1@example.com");
    addTestUsers(u, "qa2@example.com");
    displayTestDataInfo(u, e, b);
    return [u, e];
  })();

  console.log("\n-- Phase 2: For Loop Processing --");
  processAllTestUsers(users);
  const [valid, invalid] = validateAllEmails(users);
  console.log("Valid users:", valid.length, "Invalid users:", invalid.length);
  calculateResponseTimes([120, 480, 2100, 300, 950]);

  console.log("\n-- Phase 3: While Loop Handling --");
  const queue = buildTestQueue();
  const execCopy = queue.slice();
  simulateTestExecution(execCopy);
  const [passedFinally] = retryFailedTest("checkout_flaky_test");
  console.log("Flaky test passed finally?", passedFinally);
  const monitorQueueCopy = queue.slice();
  const [processedSoFar, remaining] = monitorTestQueue(monitorQueueCopy);
  console.log("Monitor processed:", processedSoFar, "Remaining:", remaining);
  const [completed, elapsed] = waitForTestCompletion(12);
  console.log("Wait completed?", completed, "Elapsed:", elapsed);

  console.log("\n-- Phase 4: Conditionals in Loops --");
  const envResults = processTestEnvironments(
    ["login_basic", "logout", "registration"],
    envs
  );
  const [passCount, failCount, successRate] = (function () {
    const stream = [];
    for (let i = 0; i < envResults.length; i++) {
      stream.push(envResults[i].includes("|PASS") ? "PASS" : "FAIL");
    }
    const res = processTestResultsStream(stream);
    console.log(
      `Stream summary => pass:${res[0]}, fail:${res[1]}, successRate:${res[2]}`
    );
    return res;
  })();

  const [validUsers, invalidUsers, fixableUsers] = validateTestDataQuality(
    ["alice@example.com", "invalidEmail", "bob@mail.org"],
    ["strongPass1", "short", "anotherGoodPass"],
    [28, 16, 45]
  );
  console.log(
    "Quality => valid:",
    validUsers.length,
    "invalid:",
    invalidUsers.length,
    "fixable:",
    fixableUsers.length
  );

  console.log("\n-- Phase 5: Break/Continue Control --");
  const critIndex = findFirstCriticalError(
    ["PASS", "FAIL", "FAIL", "PASS"],
    ["ok", "minor error", "critical: db down", "ok"]
  );
  console.log("First critical error index:", critIndex);

  const processedValid = processValidTestsOnly(
    ["t1", "t2", "t3", "t4"],
    ["PASS", "SKIP", "INVALID", "FAIL"]
  );
  console.log("Processed valid tests:", processedValid);

  const [processedCount, failureCount, leftInQueue] =
    monitorTestExecutionWithLimits(["a", "b", "c", "d", "e"], 2);
  console.log(
    "Monitor with limits => processed:",
    processedCount,
    "fails:",
    failureCount,
    "remaining:",
    leftInQueue
  );

  console.log("\n-- Phase 6: Comprehensive Suite (Nested Loops) --");
  const [passedResults, failedResults, skippedResults, criticalResults] =
    executeComprehensiveTestSuite(["login_basic", "checkout_flow"], envs, [
      "guest",
      "member",
      "admin",
    ]);
  console.log(
    "Comprehensive => passed:",
    passedResults.length,
    "failed:",
    failedResults.length,
    "skipped:",
    skippedResults.length,
    "critical:",
    criticalResults.length
  );

  console.log("\n-- Phase 7: Detailed Report --");

  const resultNames = [
    "login_basic",
    "checkout_flow",
    "profile_update",
    "logout",
  ];
  const resultStatuses = ["PASS", "FAIL", "PASS", "FAIL"];
  const resultTimes = [300, 2900, 1200, 700];
  const resultEnvironments = [
    "staging",
    "production",
    "development",
    "production",
  ];
  const metrics = generateDetailedTestReport(
    resultNames,
    resultStatuses,
    resultTimes,
    resultEnvironments
  );
  console.log("Key metrics:", metrics);

  console.log("\n-- Phase 8: Compare Loop Approaches --");
  const [forCount, whileCount] = compareLoopApproaches([1, 2, 3, 4, 5]);
  console.log("Compare => for:", forCount, "while:", whileCount);

  console.log("\n-- Phase 9: Integrated Full Suite --");
  const summary = executeFullTestSuite();
  console.log("Integrated summary:", summary);

  console.log("\n### Demo complete ###\n");
}

// Run the complete demonstration
runTestSuiteDemo();
