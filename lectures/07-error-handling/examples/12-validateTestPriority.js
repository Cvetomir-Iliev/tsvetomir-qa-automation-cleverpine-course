// Test case priority validator
function validateTestPriority(testCase) {
  if (!testCase || !testCase.name) {
    throw new Error("Test case with name is required");
  }

  let priority = testCase.priority;
  let environment = testCase.environment;

  // Using conditional logic from Lecture 2
  if (environment === "production") {
    if (priority !== "critical") {
      throw new Error("Only critical tests can run in production");
    }
  } else if (environment === "staging") {
    if (priority !== "critical" && priority !== "high") {
      throw new Error(
        "Only critical and high priority tests can run in staging"
      );
    }
  } else if (environment === "development") {
    // All priorities allowed in development
    let validPriorities = ["low", "medium", "high", "critical"];
    if (!validPriorities.includes(priority)) {
      throw new Error(
        `Invalid priority: ${priority}. Must be one of: ${validPriorities.join(", ")}`
      );
    }
  } else {
    throw new Error(`Unknown environment: ${environment}`);
  }

  return true;
}

// Test priority validation
console.log("\n=== Test Priority Validation ===");

let testCases = [
  { name: "login", priority: "critical", environment: "production" },
  { name: "logout", priority: "medium", environment: "production" },
  { name: "register", priority: "high", environment: "staging" },
  { name: "profile", priority: "low", environment: "development" },
];

for (let i = 0; i < testCases.length; i++) {
  try {
    validateTestPriority(testCases[i]);
    console.log(`✅ ${testCases[i].name}: Priority validation passed`);
  } catch (error) {
    console.log(`❌ ${testCases[i].name}: ${error.message}`);
  }
}
