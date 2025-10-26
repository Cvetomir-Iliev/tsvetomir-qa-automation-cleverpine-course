// Test Management System Exercise
console.log("=== TEST MANAGEMENT SYSTEM ===");

// PART 1: OBJECTS - Test Data Management (5 minutes)

// TODO: Create test user objects
// Create 3 test user objects with the following properties:
// - username, email, password, role, isActive
// Add a method called 'isValid()' that checks if email contains '@' and password length >= 8

let testUser1 = {
  // Your object here
  // Include isValid() method
};

let testUser2 = {
  // Your object here
  // Include isValid() method
};

let testUser3 = {
  // Your object here
  // Include isValid() method
};

// TODO: Create a test configuration object
let testConfig = {
  // Properties: environment, baseUrl, timeout, maxRetries
  // Add a method getFullUrl(endpoint) that combines baseUrl with endpoint
  // Add a method isProduction() that returns true if environment is "production"
};

console.log("\n=== PART 1: OBJECTS ===");
// console.log("User 1 valid:", testUser1.isValid());
// console.log("User 2 valid:", testUser2.isValid());
// console.log("Config environment:", testConfig.environment);
// console.log("Is production:", testConfig.isProduction());

// PART 2: CLASSES - Test Case and Suite Management (8 minutes)

// TODO: Create TestCase class
class TestCase {
  constructor(name, description, priority) {
    // Properties: name, description, priority, status ("PENDING"),
    // startTime (null), endTime (null), duration (0), errors (empty array)
  }

  // Method: start() - sets status to "RUNNING", records startTime
  start() {
    // Your code here
  }

  // Method: complete(status) - sets status, records endTime, calculates duration
  complete(status) {
    // Your code here
    // Calculate duration = endTime - startTime
  }

  // Method: addError(errorMessage) - adds error to errors array
  addError(errorMessage) {
    // Your code here
  }

  // Method: getResult() - returns object with name, status, duration, errors
  getResult() {
    // Your code here
    // Return object with test results
  }
}

// TODO: Create TestSuite class
class TestSuite {
  constructor(name, environment) {
    // Properties: name, environment, tests (empty array),
    // startTime (null), endTime (null)
  }

  // Method: addTest(testCase) - adds test case to tests array
  addTest(testCase) {
    // Your code here
  }

  // Method: executeAll() - runs all tests and collects results
  executeAll() {
    // Your code here
    // Set startTime
    // Loop through tests, start each one
    // Simulate test execution (some pass, some fail)
    // Complete each test with status
    // Set endTime
  }

  // Method: getSummary() - returns execution summary with counts and metrics
  getSummary() {
    // Your code here
    // Count total, passed, failed tests
    // Calculate success rate
    // Return summary object
  }

  // Method: getFailedTests() - returns array of failed test names
  getFailedTests() {
    // Your code here
    // Filter tests where status is "FAIL"
    // Map to get just the names
  }
}

// Test your classes
console.log("\n=== PART 2: CLASSES ===");

// Create test cases
let loginTest = new TestCase(
  "user_login",
  "Test user login functionality",
  "high"
);
let logoutTest = new TestCase(
  "user_logout",
  "Test user logout functionality",
  "medium"
);
let registerTest = new TestCase(
  "user_registration",
  "Test user registration",
  "high"
);

// Create test suite and add tests
let authSuite = new TestSuite("Authentication Tests", "staging");
// Add your test cases to the suite

// Execute tests
// authSuite.executeAll();

// Get and display results
// console.log("Suite summary:", authSuite.getSummary());
// console.log("Failed tests:", authSuite.getFailedTests());

// PART 3: JSON - Data Exchange and Storage (6 minutes)

// TODO: JSON Conversion and Processing

// Convert test config object to JSON
// let configJson = JSON.stringify(testConfig, null, 2);
console.log("\n=== PART 3: JSON ===");
console.log("Config as JSON:");
// console.log(configJson);

// TODO: Process API response JSON
// This simulates an API response with test results
let apiResponseJson = `{
  "success": true,
  "testSuite": "API Testing Suite",
  "environment": "staging", 
  "results": [
    {
      "testName": "create_user_api",
      "status": "PASS",
      "duration": 245,
      "endpoint": "/api/users",
      "method": "POST"
    },
    {
      "testName": "login_api", 
      "status": "FAIL",
      "duration": 180,
      "endpoint": "/api/auth/login",
      "method": "POST",
      "error": "Invalid credentials"
    },
    {
      "testName": "get_user_profile",
      "status": "PASS", 
      "duration": 120,
      "endpoint": "/api/users/profile",
      "method": "GET"
    }
  ]
}`;

// TODO: Parse the JSON and analyze results
// Parse apiResponseJson to JavaScript object
// Extract the results array
// Use array methods to:
// - Count passed and failed tests
// - Calculate average duration
// - Get list of failed test names
// - Find all POST method tests

console.log("Parsing API response...");
// Your JSON processing code here

// PART 4: INTEGRATION - Combining Everything (3 minutes)

// TODO: Create a function that combines objects, classes, and JSON
function processTestResults(jsonData) {
  // Parse JSON data
  // Create TestCase instances from the parsed data
  // Create a TestSuite and add the test cases
  // Generate a summary report
  // Convert results back to JSON for storage/transmission
  // Return both the summary object and JSON string
}

// Test the integration function
// let processedResults = processTestResults(apiResponseJson);
// console.log("\n=== INTEGRATION RESULTS ===");
// console.log("Processed summary:", processedResults);
