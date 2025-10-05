const testSite = "https://example.com";
let currentUser = "testuser";

let testCaseId = 0;
function getNextTestCaseId() {
  testCaseId = testCaseId + 1;
  return testCaseId;
}

// Hello World function for QA
function welcomeQATester() {
  console.log("Welcome to QA Automation!");
  console.log("Today you start your testing journey");
  // Show which site is being tested
  console.log("Testing site:", testSite);
}

// Function to create test scenarios
function createTestScenario(scenario, expectedResult) {
  console.log("=== TEST SCENARIO ===");
  console.log("Scenario:", scenario);
  console.log("Expected Result:", expectedResult);
  // Show current user and test case ID
  console.log("Current User:", currentUser);
  console.log("Test Case ID:", getNextTestCaseId());
  console.log("Status: Ready for automation");
  console.log("=====================");
}

// Run your functions
welcomeQATester();

createTestScenario(
  "User logs in with valid credentials",
  "User should see dashboard",
);

createTestScenario(
  "User submits form with empty email",
  "Error message should appear",
);
