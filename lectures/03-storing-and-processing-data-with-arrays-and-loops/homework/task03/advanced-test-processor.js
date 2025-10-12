function analyzeTestResults(testNames, testResults, executionTimes) {
  const criticalFailures = [];
  const slowTests = [];
  const quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    const name = testNames[i];
    const status = testResults[i];
    const time = executionTimes[i];

    if (status === "FAIL" && name.includes("login")) {
      criticalFailures.push(name);
      console.log(`Critical failure: ${name}`);
    } else if (status === "PASS" && time > 2000) {
      slowTests.push(name);
      console.log(`Slow pass: ${name} (${time}ms)`);
    } else if (status === "PASS" && time < 500) {
      quickPasses.push(name);
      console.log(`Quick pass: ${name} (${time}ms)`);
    }
  }

  console.log(
    `Counts => criticalFailures: ${criticalFailures.length}, slowTests: ${slowTests.length}, quickPasses: ${quickPasses.length}`
  );

  return [criticalFailures, slowTests, quickPasses];
}

function processTestEnvironments(testCases, environments) {
  const environmentResults = [];
  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < environments.length; j++) {
      const testCase = testCases[i];
      const environment = environments[j];

      
      const failChance = environment === "production" ? 0.4 : 0.15;
      const status = Math.random() < failChance ? "FAIL" : "PASS";
      const result = `${testCase}|${environment}|${status}`;
      environmentResults.push(result);
      console.log(`Processed: ${result}`);
    }
  }
  return environmentResults;
}

function validateTestDataQuality(emails, passwords, ages) {
  const validUsers = [];
  const invalidUsers = [];
  const fixableUsers = [];

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const password = passwords[i];
    const age = ages[i];

    const emailOK = email.includes("@") && email.includes(".");
    const passwordOK = password.length >= 8;
    const ageOK = age >= 18 && age <= 100;

    console.log(
      `User ${i + 1}: emailOK=${emailOK}, passwordOK=${passwordOK}, ageOK=${ageOK}`
    );

    const failures =
      (emailOK ? 0 : 1) + (passwordOK ? 0 : 1) + (ageOK ? 0 : 1);

    if (failures === 0) {
      validUsers.push(email);
    } else if (failures === 1) {
      fixableUsers.push(email);
    } else {
      invalidUsers.push(email);
    }
  }

  return [validUsers, invalidUsers, fixableUsers];
}

function findFirstCriticalError(testResults, errorMessages) {
  let foundIndex = -1;

  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      if (errorMessages[i] && errorMessages[i].includes("critical")) {
        console.log(`Critical error at index ${i}: ${errorMessages[i]}`);
        foundIndex = i;
        break;
      }
    }
  }

  if (foundIndex === -1) {
    console.log("No critical errors found");
  }

  return foundIndex;
}

function processValidTestsOnly(testNames, testStatuses) {
  const processedTests = [];

  for (let i = 0; i < testNames.length; i++) {
    const status = testStatuses[i];

    if (status === "SKIP" || status === "INVALID") {
      console.log(`Skipping ${testNames[i]} due to status: ${status}`);
      continue;
    }

    processedTests.push(testNames[i]);
    console.log(`Processed ${testNames[i]} successfully`);
  }

  return processedTests;
}

function monitorTestExecutionWithLimits(testQueue, maxFailures) {
  let failureCount = 0;
  let processedCount = 0;

  while (testQueue.length > 0) {
    const next = testQueue.pop();

    
    const failed = Math.random() < 0.3;
    if (failed) {
      failureCount++;
      console.log(`FAIL: ${next} (failures so far: ${failureCount})`);
    } else {
      console.log(`PASS: ${next}`);
    }

    processedCount++;

    if (failureCount >= maxFailures) {
      console.log("Max failures reached. Breaking out.");
      break;
    }
  }

  return [processedCount, failureCount, testQueue.length];
}

function executeComprehensiveTestSuite(testCases, environments, userRoles) {
  const passedResults = [];
  const failedResults = [];
  const skippedResults = [];
  const criticalResults = [];

  for (let i = 0; i < testCases.length; i++) {
    const caseName = testCases[i];

    for (let j = 0; j < environments.length; j++) {
      const env = environments[j];

      for (let k = 0; k < userRoles.length; k++) {
        const role = userRoles[k];

        
        if (env === "production" && role === "guest" && caseName.includes("admin")) {
          console.log(`Skip combo: ${caseName}|${env}|${role}`);
          skippedResults.push(`${caseName}|${env}|${role}|SKIP`);
          continue;
        }

        let baseFailChance = env === "production" ? 0.25 : 0.1;
        if (role === "admin") baseFailChance += 0.05;

        let status = Math.random() < baseFailChance ? "FAIL" : "PASS";

        if (caseName.includes("login") && env === "production" && status === "FAIL") {
          criticalResults.push(`${caseName}|${env}|${role}|CRITICAL`);
          console.log(`Critical: ${caseName}|${env}|${role}|CRITICAL`);
         
        }

        const record = `${caseName}|${env}|${role}|${status}`;
        if (status === "PASS") passedResults.push(record);
        else failedResults.push(record);

        
      }
    }
  }

  return [passedResults, failedResults, skippedResults, criticalResults];
}

function generateDetailedTestReport(resultNames, resultStatuses, resultTimes, resultEnvironments) {
  let totalCount = 0;
  let passCount = 0;
  let failCount = 0;
  let slowCount = 0;
  let prodFails = 0;
  let stagingFails = 0;
  let devFails = 0;

  for (let i = 0; i < resultNames.length; i++) {
    totalCount++;

    const status = resultStatuses[i];
    const time = resultTimes[i];
    const env = resultEnvironments[i];

    if (status === "PASS") passCount++;
    else if (status === "FAIL") {
      failCount++;
      if (env === "production") prodFails++;
      else if (env === "staging") stagingFails++;
      else if (env === "development") devFails++;
    }

    if (time > 2000) slowCount++;
  }

  console.log(
    `Report => total:${totalCount}, pass:${passCount}, fail:${failCount}, slow:${slowCount}, ` +
    `prodFails:${prodFails}, stagingFails:${stagingFails}, devFails:${devFails}`
  );

  return [totalCount, passCount, failCount, slowCount];
}

module.exports = {
  analyzeTestResults,
  processTestEnvironments,
  validateTestDataQuality,
  findFirstCriticalError,
  processValidTestsOnly,
  monitorTestExecutionWithLimits,
  executeComprehensiveTestSuite,
  generateDetailedTestReport,
};