// 1. Validation (uses throw)
function validateTestCase(testCase) {
  if (!testCase) {
    throw new Error("Test case is required");
  }
  if (typeof testCase !== "object") {
    throw new TypeError("Test case must be an object");
  }
  if (!testCase.name) {
    throw new Error("Test case must have a name");
  }
  if (!Array.isArray(testCase.steps) || testCase.steps.length === 0) {
    throw new Error("Test case must have a non-empty steps array");
  }
  return true; // Explicit success
}

// 2. Execute a single test case (try...catch...finally)
function executeTestCase(testCase) {
  let start = Date.now();
  let resourcesAllocated = false;
  let result = null;

  try {
    // Validation phase – may throw
    validateTestCase(testCase);

    // Simulate resource allocation
    console.log(`🔧 Allocating resources for: ${testCase.name}`);
    resourcesAllocated = true;

    console.log(`▶️ Executing: ${testCase.name}`);

    // Intentional failure pattern for demo
    if (testCase.name.includes("fail")) {
      throw new Error("Simulated test failure");
    }

    // Success result
    result = {
      name: testCase.name,
      status: "PASS",
      duration: Date.now() - start,
      message: "Test completed successfully",
    };
  } catch (error) {
    // Failure result
    result = {
      name: testCase?.name || "unknown",
      status: "FAIL",
      duration: Date.now() - start,
      message: error.message,
    };
    console.log(`❌ ${result.name}: ${error.message}`);
  } finally {
    // Always cleanup
    if (resourcesAllocated) {
      console.log(`🧹 Cleaning up resources for: ${testCase.name}`);
    }
    console.log(`✅ Completed: ${testCase?.name || "unknown"}`);
  }

  return result;
}

// 3. Run a suite of tests and build a summary
function runTestSuite(testCases) {
  let results = [];

  for (let i = 0; i < testCases.length; i++) {
    let testResult = executeTestCase(testCases[i]);
    results.push(testResult);
    console.log();
  }

  // Aggregate summary
  let passed = results.filter((r) => r.status === "PASS").length;
  let failed = results.filter((r) => r.status === "FAIL").length;
  let total = results.length;
  let successRate =
    total > 0 ? ((passed / total) * 100).toFixed(1) + "%" : "0%";

  return { results, summary: { total, passed, failed, successRate } };
}

// 4. Demo usage
console.log("\n=== Combined Error Handling Pattern Demo ===");
let testCases = [
  { name: "login_success", steps: ["navigate", "enter_credentials", "submit"] },
  {
    name: "login_fail_wrong_password",
    steps: ["navigate", "enter_wrong_password", "submit"],
  },
  { name: "invalid_case" }, // Missing steps – validation will throw
];

let { results, summary } = runTestSuite(testCases);
console.log("Results:", results);
console.log("Summary:", summary);
