// Step 2.1
// Validate Status code
function validateStatusCode(expectedCode, actualCode) {
  let isStrictEqual = expectedCode === actualCode;
  let isLooseEqual = expectedCode == actualCode;

  console.log(`Expected: ${expectedCode}, Actual: ${actualCode}`);
  console.log(`Strict Equality: (===): ${isStrictEqual}`);
  console.log(`Loose Equality: (==): ${isLooseEqual}`);
  return isStrictEqual;
}
validateStatusCode(200, "200");

// Validate Response Time
function validateResponseTime(actualTime, maxAllowedTime) {
  let isWithinLimit = actualTime <= maxAllowedTime;
  console.log(
    `Response Time: ${actualTime}ms is within limit ${maxAllowedTime}ms: ${isWithinLimit}`
  );
  console.log(`Is within limit: ${isWithinLimit}`);
  return isWithinLimit;
}
validateResponseTime(150, 200);

// Validate Performance range
function validatePerformanceRange(responceTime, minTime, maxTime) {
  let inRange = responceTime >= minTime && responceTime <= maxTime;
  console.log(
    `Response Time: ${responceTime}ms is between ${minTime}ms and ${maxTime}ms: ${inRange}`
  );
  return inRange;
}
validatePerformanceRange(260, 200, 300);

// Validate compare versions
function compareVersions(currentVersion, requiredVersion) {
  let validVersion = currentVersion !== requiredVersion;
  console.log(
    `Current Version: ${currentVersion}, Required Version: ${requiredVersion}`
  );
  console.log(`Is valid version: ${validVersion}`);
  return validVersion;
}
compareVersions("1.0.0", "1.0.0");

// Step 2.2
// Validate Error Message
function validateErrorMessage(errorMessage) {
  let lowerCaseMessage = errorMessage.toLowerCase();
  let containsError = lowerCaseMessage.includes("error");
  let positionOfError = lowerCaseMessage.indexOf("error");
  console.log(`Error message contains 'error': ${containsError}`);
  console.log(`Position of 'error': ${positionOfError}`);
  return containsError;
}
validateErrorMessage("An unexpected Error");

// Extract User ID from response
function extractUserIdFromResponse(responseText) {
  let userID = responseText.slice(responseText.indexOf("ID:") + 3).trim();
  console.log(`Response Text: ${responseText}`);
  console.log(`Position of 'ID:': ${responseText.indexOf("ID:")}`);
  console.log(`Extracted User ID: ${userID}`);
  return userID;
}

extractUserIdFromResponse("User created successfully with ID: 12345");

// Validate Email format
function validateEmailFormat(email) {
  let validEmail = email.includes("@") && email.includes(".");
  let positionOfAt = email.indexOf("@");
  let positionOfDot = email.indexOf(".");
  console.log(`Email: ${email}`);
  console.log(
    `Contains '@': ${email.includes("@")}, Position: ${positionOfAt}`
  );
  console.log(
    `Contains '.': ${email.includes(".")}, Position: ${positionOfDot}`
  );
  console.log(`Is valid email format: ${validEmail}`);
  return validEmail;
}
validateEmailFormat("test@example.com");

// Process Test Data CSV
function processTestDataCSV(csvString) {
  console.log(`CSV String: ${csvString}`);
  let dataArray = csvString.split(",");
  console.log(`Data Array:`, dataArray);
  return dataArray;
}
processTestDataCSV("test1, test2, test3, test4");

// Normalize Test Name
function normalizeTestName(testName) {
  let trimmedName = testName.trim();
  let lowerCaseName = trimmedName.toLowerCase();
  lowerCaseName = lowerCaseName.replace(" ", "_");
  let normalisedName = lowerCaseName.slice(0, 19);
  return normalisedName;
}
console.log(normalizeTestName("   Sample Test Name For Automation   ")); // "sample_test_name_fo"
console.log(normalizeTestName("   Another Test   ")); // "another_test"

// Step 2.3

// Validate Complete Api Response
let statusCode = 200;
let responseTime = 750;
let hasData = true;
let errorCount = 0;
let validateCompleteApiResponse =
  statusCode === 200 && responseTime < 1000 && hasData && errorCount === 0;
console.log("Complete API response:", validateCompleteApiResponse);

// Check Test Environment Access
let userRole = "admin";
let isAuthenticated = true;
let Environment = "staging";
let checkTestEnvironmentAccess =
  (userRole === "admin" || userRole === "tester") &&
  isAuthenticated &&
  (Environment === "dev" || Environment === "staging");
console.log("Test Environment Access:", checkTestEnvironmentAccess);

// Validate test Not Failed
let hasErrors = false;
let isCancelled = false;
let isTimeout = false;
let validateTestNotFailed = !hasErrors && !isCancelled && !isTimeout;
console.log("Test Not Failed:", validateTestNotFailed);

// Complex validation scenario
let statusCode1 = 200;
let responseTime1 = 500;
let userRole1 = "admin";
let dataCount1 = 2000;
let environment1 = "dev";
let condition1 = statusCode1 === 200 && responseTime1 < 1000;
console.log("Condition 1:", condition1);
let condition2 =
  (userRole1 === "admin" || userRole1 === "tester") &&
  (environment1 === "dev" || environment1 === "staging");
console.log("Condition 2:", condition2);
let condition3 = dataCount1 > 1000;
console.log("Condition 3:", condition3);
let complexValidation = condition1 || condition2 || condition3;
console.log("Complex Validation Scenario:", complexValidation);
