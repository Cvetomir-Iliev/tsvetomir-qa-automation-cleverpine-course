// Complex test execution with multiple error points
function executeTestSuite(testConfig) {
  let results = {
    configValid: false,
    dataLoaded: false,
    testsExecuted: false,
    errors: [],
  };

  // Step 1: Validate configuration
  try {
    if (!testConfig.environment || !testConfig.baseUrl) {
      throw new Error("Missing required configuration");
    }
    results.configValid = true;
    console.log("✅ Configuration validated");
  } catch (error) {
    results.errors.push(`Config error: ${error.message}`);
    console.log("❌ Configuration failed");
  }

  // Step 2: Load test data
  try {
    // Simulate loading test data from JSON
    let testDataJson = testConfig.testData || '{"users": []}';
    let testData = JSON.parse(testDataJson);

    if (testData.users.length === 0) {
      throw new Error("No test users found");
    }

    results.dataLoaded = true;
    console.log("✅ Test data loaded");
  } catch (error) {
    results.errors.push(`Data error: ${error.message}`);
    console.log("❌ Test data loading failed");
  }

  // Step 3: Execute tests (only if previous steps succeeded)
  try {
    if (!results.configValid || !results.dataLoaded) {
      throw new Error("Prerequisites not met");
    }

    // Simulate test execution
    console.log("🔄 Executing tests...");
    results.testsExecuted = true;
    console.log("✅ Tests executed successfully");
  } catch (error) {
    results.errors.push(`Execution error: ${error.message}`);
    console.log("❌ Test execution failed");
  }

  return results;
}

// Test with different configurations
console.log("\n=== Test Suite Execution ===");

let goodConfig = {
  environment: "staging",
  baseUrl: "https://staging.test.com",
  testData: '{"users": [{"name": "testuser1"}]}',
};

let badConfig = {
  environment: "staging",
  // Missing baseUrl and testData
};

console.log("Good config result:", executeTestSuite(goodConfig));
console.log("Bad config result:", executeTestSuite(badConfig));
