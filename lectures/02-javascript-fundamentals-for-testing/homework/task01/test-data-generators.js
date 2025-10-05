// Step 1.1: String based test data generators

// Create function called 'generateTestUserName'
function generateTestUserName(basePrefix = "TestUser") {
  // current timestamp
    const timestamp = Date.now();
    const userName = basePrefix + "_" + timestamp; // e.g., "TestUser_1633036800000"
    return userName;
// return string with basePrefix + current timestamp
}
console.log(generateTestUserName()); // "TestUser_1633036800000"
console.log(generateTestUserName("Tsvetomir")); // "Tsvetomir_1633036800000"

// Create function called 'buildTestURL'
function buildTestURL(environment, endpoint, userId) {
  // build the URL based on template literals
    const url = `https://${environment}.testsite.com/${endpoint}?user=${userId}`;
    return url; // returns the completed URL
}
console.log(buildTestURL("staging", "login", "12345")); // returns "https://staging.testsite.com/login?user=12345" 

// create function 'createTestMessage'
function createTestMessage(testName, status, duration = "") {
  const message = `Test: ${testName} | Status: ${status} | Duration: ${duration}ms`;
  return message;
}console.log(createTestMessage("User Login", "Passed", 150)); // "Test: User Login | Status: Passed | Duration: 150ms"


// Step 1.2: Arithmetic Operations for Test Metrics
// Function calculatedResponseTime
function calculateResponseTime(endTime, startTime) {
  // return endTime - startTime
    return endTime - startTime;
}   
console.log("Response time:", calculateResponseTime(5000, 2000) + "ms"); // returns 3000

// Function calculateSuccessRate
let totalTests = 100;
let passedTests = 60;
console.log("Total tests:", totalTests);
console.log("Passed tests:", passedTests);
console.log("Failed tests:", totalTests - passedTests);
console.log("Success rate:", (passedTests / totalTests) * 100 + "%");

// Function AdjustTimeout
let baseTimeout = 10000; // 10 seconds
let multiplier = 2;
let adjustedTimeout = baseTimeout * multiplier;
let result = adjustedTimeout;
if (adjustedTimeout > 30000) {
    adjustedTimeout = result % 30000;
}
console.log(`Original timeout: ${result}ms, Adjusted timeout: ${adjustedTimeout}ms`);

// Increment Test Counter
function incrementTestCounter(currentCounter) {
  console.log("Original:", currentCounter);

  // Increment by 1 using the increment operator
  currentCounter++;
  console.log("After +1:", currentCounter);

  // Add 5 using the assignment operator
  currentCounter += 5;
  console.log("After +5:", currentCounter);

  console.log("Final count:", currentCounter);
  return currentCounter;
}
incrementTestCounter(10); // Original: 10, After +1: 11, After +5: 16, Final count: 16

// 1.3 Advance String Manipulation for Test data

//Function processTestEnvironment

function processTestEnvironment(environmentName) {
  console.log("Original name:", environmentName);

  // Normalize using toLowerCase()
  const normalizedName = environmentName.toLowerCase();
  console.log("Normalized name:", normalizedName);

  // Create base URL using template literals
  const baseURL = `https://${normalizedName}.example.com`;
  console.log("Base URL:", baseURL);

  // Create display name in uppercase
  const displayName = environmentName.toUpperCase();
  console.log("Display name:", displayName);

  // Return structured object
  return {
    originalName: environmentName,
    normalizedName: normalizedName,
    baseURL: baseURL,
    displayName: displayName
  };
}
console.log(processTestEnvironment("Staging"));

// Function extractTestInfo

function extractTestInfo(testResultString) {
  console.log("Test result string:", testResultString);

  const parts = testResultString.split(":");
  const testName = parts[0];
  const status = parts[1];
  const durationStr = parts[2];
  console.log("Name:", testName, "Status:", status, "Duration:", durationStr);

  const duration = parseInt(durationStr.replace("ms", ""));
  console.log("Numeric duration (ms):", duration);

  const result = {
    testName: testName,
    status: status,
    durationMs: duration
  };
    return result;
}
const info = extractTestInfo("LoginTest:PASSED:250ms");
console.log("Return object:", info);

// Function Test Summary

let testName = "LoginTest";
let environment = "Progression";
let userCount = 100;
let avgResponseTime = 350;

let buildTestSummary = `
Test Report:
Total Execution Time: ${userCount * avgResponseTime}ms
Test Name: ${testName}
Environment: ${environment}
User Count: ${userCount}
Average Response Time: ${avgResponseTime}ms
`;
console.log(buildTestSummary);