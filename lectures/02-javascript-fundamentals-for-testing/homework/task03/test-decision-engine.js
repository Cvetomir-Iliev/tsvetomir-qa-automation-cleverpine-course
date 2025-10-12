// Step 3.1

// Determine Test Action

function determineTestAction(testResult, retryCount) {
  if (testResult === "pass") {
    console.log("Test Successuful!");
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    console.log("Test failed, Retry again, retrying...");
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    console.log("Test failed multiple times!");
    return "abort";
  } else {
    console.log("Unknown test result!");
    return "investigate";
  }
}

determineTestAction("fail", 2);

// Validate Test Data
function validateTestData(email, password, age) {
  console.log("=== Validating Test Data ===");
  console.log(`Email: "${email}", Password: "${password}", Age: ${age}`);

  // Step 1: Validate email
  if (email && email.includes("@")) {
    console.log(" Email validation passed.");

    // Step 2: Validate password length
    if (password && password.length >= 8) {
      console.log(" Password validation passed.");

      // Step 3: Validate age range
      if (age >= 18 && age <= 100) {
        console.log(" Age validation passed.");
        console.log(" All validations passed successfully!");
        return "valid";
      } else {
        console.log(" Age validation failed: must be between 18 and 100.");
        return "Invalid age. Must be between 18 and 100.";
      }
    } else {
      console.log(
        " Password validation failed: must be at least 8 characters."
      );
      return "Invalid password. Must be at least 8 characters.";
    }
  } else {
    console.log(
      " Email validation failed: must not be empty and must contain '@'."
    );
    return "Invalid email. Must contain '@' and not be empty.";
  }
}
console.log(validateTestData("user@example.com", "securePass", 25)); // → "valid"
console.log(validateTestData("", "securePass", 25)); // → "Invalid email..."
console.log(validateTestData("user@example.com", "short", 25)); // → "Invalid password..."
console.log(validateTestData("user@example.com", "securePass", 15)); // → "Invalid age..."

// Process test results
function processTestResults(totalTests, passedTests, environment) {
  console.log("=== Processing Test Results ===");
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed Tests: ${passedTests}`);
  console.log(`Environment: ${environment}`);

  // Step 1: Calculate failed tests and success rate
  const failedTests = totalTests - passedTests;
  const successRate = (passedTests / totalTests) * 100;

  console.log(`Failed Tests: ${failedTests}`);
  console.log(`Success Rate: ${successRate.toFixed(2)}%`);

  // Step 2: Define thresholds (adjust for environment)
  let excellentThreshold = 95;
  let goodThreshold = 85;
  let acceptableThreshold = 70;

  if (environment === "production") {
    console.log(
      "Environment is production — applying stricter standards (+5%)."
    );
    excellentThreshold += 5;
    goodThreshold += 5;
    acceptableThreshold += 5;
  }

  console.log(
    `Thresholds → Excellent: ${excellentThreshold}%, Good: ${goodThreshold}%, Acceptable: ${acceptableThreshold}%`
  );

  // Step 3: Determine grade
  let grade;
  if (successRate >= excellentThreshold) {
    grade = "excellent";
  } else if (successRate >= goodThreshold) {
    grade = "good";
  } else if (successRate >= acceptableThreshold) {
    grade = "acceptable";
  } else {
    grade = "needs improvement";
  }

  console.log(`Final Grade: ${grade}`);

  // Step 4: Return result summary
  return {
    totalTests,
    passedTests,
    failedTests,
    successRate: parseFloat(successRate.toFixed(2)),
    environment,
    grade,
  };
}

// Example tests:
console.log(processTestResults(100, 98, "staging")); // good → excellent
console.log(processTestResults(100, 95, "production")); // stricter → good
console.log(processTestResults(100, 72, "production")); // stricter → needs improvement
console.log(processTestResults(100, 90, "dev")); // good

// Get test Status

let isPassed = false;
let getTestStatus = isPassed ? "PASSED" : "FAILED";
console.log("Test Status:", getTestStatus);

// Determine Timeout
function determineTimeout(environment) {
  console.log("=== Determining Timeout ===");
  console.log(`Environment: ${environment}`);

  // Use ternary operator to select timeout
  const timeout = environment === "production" ? 30000 : 10000;

  console.log(`Selected Timeout: ${timeout} ms`);

  return timeout;
}

// Example tests:
determineTimeout("production"); // → 30000
determineTimeout("staging"); // → 10000
determineTimeout("dev"); // → 10000

// Format test Duration
function formatTestDuration(durationMS) {
  console.log(`Original Duration: ${durationMS} ms`);
  const formatted =
    durationMS < 1000 ? durationMS + "ms" : durationMS / 1000 + "s";

  console.log(`Formatted Duration: ${formatted}`);
  return formatted;
}
// Examples
formatTestDuration(500);
formatTestDuration(1500);
formatTestDuration(10000);

// Get Test Priority
function getTestPriority(errorCount, responseTime) {
  console.log(`Error Count: ${errorCount}`);
  console.log(`Responce Time: ${responseTime} ms`);
  const priority =
    errorCount > 0 ? "high" : responseTime > 1000 ? "medium" : "low";
  console.log(`Priority Decision: ${priority}`);
  return priority;
}
// Examples
getTestPriority(5, 900);
getTestPriority(0, 1500);
getTestPriority(0, 500);

// Handle test Environment
function handleTestEnvironment(environment) {
  console.log(`Environment: ${environment}`);

  let config;

  switch (environment) {
    case "development":
      console.log("Using dev settings");
      config = { timeout: 5000, debug: true };
      break;
    case "staging":
      console.log("Using staging settings");
      config = { timeout: 15000, debug: true };
      break;
    case "production":
      console.log("Using production settings");
      config = { timeout: 30000, debug: false };
      break;
    default:
      console.log("Unknown environment — using basic config");
      config = { timeout: 10000, debug: false };
  }

  console.log("Config:", config);
  return config;
}

// Examples
handleTestEnvironment("development");
handleTestEnvironment("production");
handleTestEnvironment("test");

// Process HTTP Status Code
function processHTTPStatusCode(statusCode) {
  let message;
  switch (statusCode) {
    case 200:
      message = "Success - Request completed";
      break;
    case 201:
      message = "Created - Resource created successfully";
      break;
    case 400:
      message = "Bad Request - Check your data";
      break;
    case 401:
      message = "Unauthorized - Authentication required";
      break;
    case 404:
      message = "Not Found - Resource doesn't exist";
      break;
    case 500:
      message = "Server Error - Internal server error";
      break;
    default:
      message = "Unexpected status code: " + statusCode;
  }
  console.log(`Status ${statusCode}: ${message}`);
  return message;
}
// Examples
processHTTPStatusCode(200);
processHTTPStatusCode(404);
processHTTPStatusCode(999);

// Select Test Data Set
function selectTestDataSet(testType) {
  let dataSet;
  switch (testType) {
    case "login":
      dataSet = [{ user: "admin", pass: "password" }];
      break;
    case "registration":
      dataSet = [{ name: "Tsvetomir", email: "tsvetomir@gmail.com" }];
      break;
    case "api":
      dataSet = [{ endpoint: "/users", method: "GET" }];
      break;
    case "performance":
      dataSet = [{ test: "load", users: 1000 }];
      break;
    default:
      dataSet = [];
  }
  console.log(`Type: ${testType}, Count: ${dataSet.length}`);
  return dataSet;
}
// Examples
selectTestDataSet("login");
selectTestDataSet("api");
selectTestDataSet("unknown");

//Complex test Decision
function complexTestDecision(userRole, environment, testType, hasPermision) {
  console.log(
    `Role: ${userRole}, Env: ${environment}, Test: ${testType}, ${hasPermision}`
  );
  let allowed = false;
  let reason = "";
  let logLevel = "none";

  if (userRole === "admin") {
    if (environment === "production") {
      if (testType === "critical") {
        allowed = true;
        reason = "Admin running critical test in production";
        logLevel = "verbose";
      } else {
        allowed = true;
        reason = "Admin running non-critical test in production";
        logLevel = "info";
      }
    } else {
      allowed = true;
      reason = "Admin in non-production";
      logLevel = "info";
    }
  } else if (userRole === "tester") {
    if (hasPermision) {
      if (environment !== "production") {
        allowed = true;
        reason = "Tester allowed in non-production";
        logLevel = "info";
      } else {
        reason = "Tester cannot access production";
        logLevel = "worn";
      }
    } else {
      reason = "Tester lacks permission";
      logLevel = "error";
    }
  } else {
    reason = "Access denied for unknown role";
    logLevel = "error";
  }

  console.log(
    `Decision → Allowed: ${allowed}, Reason: ${reason}, LogLevel: ${logLevel}`
  );
  return { allowed, reason, logLevel };
}
// Examples
complexTestDecision("admin", "production", "critical", true);
complexTestDecision("tester", "staging", "load", true);
complexTestDecision("tester", "production", "load", true);
complexTestDecision("viewer", "dev", "any", false);
