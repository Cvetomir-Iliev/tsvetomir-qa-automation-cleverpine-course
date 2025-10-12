function initializeTestData() {
  const testUsers = [];
  const testEnviroments = ["development", "staging", "production"];
  const browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

  console.log("Test users lenght:", testUsers.length);
  console.log("Test enviroments lenght:", testEnviroments.length);
  console.log("Browser types lenght:", browserTypes.length);

  return [testUsers, testEnviroments, browserTypes];
}

function displayTestDataInfo(testUsers, testEnviroments, browserTypes) {
  console.log("First environment:", testEnviroments[0]);
  console.log("Last environment:", testEnviroments[testEnviroments.length - 1]);
  console.log("First Browser:", browserTypes[0]);
  console.log("Last Browser:", browserTypes[browserTypes.length - 1]);

  const total = testUsers.length + testEnviroments.length + browserTypes.length;
  return total;
}

//Step 1.2

function addTestUsers(userArray, newUserEmail) {
  console.log("Current user length (before):", userArray.length);
  const newLen = userArray.push(newUserEmail);
  console.log("New user length (after):", newLen);
  console.log("Updated user array:", userArray);
  return newLen;
}

function buildTestQueue() {
    const testQueue = [];
    const toAdd = [
        "login_test",
        "logout_test",
        "registration_test",
        "password_reset",
        "profile_update",
    ];

    for (let i = 0; i < toAdd.length; i++) {
        const name = toAdd[i];
        const len = testQueue.push(name);
        console.log(`Added ${name}, Queue lenght: ${len}`);
    }
    return testQueue;
}

function processTestQueue(testQueue) {
    let processed = 0;
    while (testQueue > 0) {
        const testName = testQueue.pop();
        console.log(`Processing: ${testName}, Remaining: ${testQueue.length}`);
        processed++;
    }
    console.log("All tests processed, queue is empty");
    return processed;
}

function manageTestResults() {
    const passedTests = [];
    const failedTests = [];
    const skippedTests = [];
    passedTests.push("logoin_functionality", "user_registration");
    failedTests.push("payment_processing");
    skippedTests.push("email_notifications");
    
    console.log("Passed tests:", passedTests.length);
    console.log("Failed tests:", failedTests.length);
    console.log("Skipped tests:", skippedTests.length);
    
    return (passedTests, failedTests, skippedTests);
}

function validateTestDataIntegrity(testUsers, testEnviroments, browserTypes) {
    const validationIssues = [];

    if (testUsers.length === 0) {
        validationIssues.push("No test users defined");
        console.log("Validation: No test users defined");
    } else {
        console.log("Validation: Test users present");
    }

    if (testEnviroments.length < 2) {
        validationIssues.push("Insufficient environments");
        console.log("Validation: Insufficient environments");
    } else {
        console.log("Validation: Environments OK");
    }

    if (browserTypes.length < 3) {
        validationIssues.pop("Not enough browsers for testing");
        console.log("Validation: Not enough browsers for testing ");
    } else {
        console.log("Validation: Browsers OK");
    }

    return validationIssues;
}

function generateTestReport(passedTests, failedTests, skippedTests) {
    const passedCount = passedTests.length;
    const failedCount = failedTests.length;
    const skippedCount = skippedTests.length;
    const totalTests = passedCount + failedCount + skippedCount;

    if (failedCount > 0) {
        console.log("First Failed test:", failedTests[0]);
    } else {
        console.log("No Failed tests!");
    }

    console.log(`Total => total: ${totalTests}, passed: ${passedCount}, failed: ${failedCount}, skipped: ${skippedCount}`);
    return (totalTests, passedCount, failedCount, skippedCount);
}

module.exports = {
  initializeTestData,
  displayTestDataInfo,
  addTestUsers,
  buildTestQueue,
  processTestQueue,
  manageTestResults,
  rotateTestEnvironments,
  validateTestDataIntegrity,
  generateTestReport,
};