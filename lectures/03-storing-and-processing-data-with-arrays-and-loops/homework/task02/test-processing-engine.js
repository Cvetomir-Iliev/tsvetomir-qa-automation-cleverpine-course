function processAllTestUsers(testUsers) {
    for (let i = 0; i < testUsers.length; i++); {
        console.log(`Processing user ${i + 1}: ${testUsers[i]}`);
    }
    console.log("Total users:", testUsers.length);
    return testUsers.length;

}

function validateAllEmails(emailArray) {
    const validEmails = [];
    const invalidEmails = [];
    for (let i = 0; i < emailArray.length; i++) {
        const email = emailArray[i];
        const isValid = email.includes("@")
        if (isValid) {
            validEmails.push(email);
            console.log(`Email ${i + 1}: ${email} - VALID`);
        } else {
            invalidEmails.push(email);
            console.log(`Email ${i + 1}: ${email} - INVALID`); 
        }

    }
    console.log("Valid Count:", validEmails.length);
    console.log("Invalid Count:", invalidEmails.length);
    return [validEmails, invalidEmails];
}

function calculateResponseTime(responseTimeArray) {
    let totalTime = 0;
    let slowestTime = 0;

    for (let i = 0; i < responseTimeArray.length; i++) {
        const t = responseTimeArray[i];
        totalTime += t;
        if (t > slowestTime) slowestTime = t;
        console.log(`Response ${i + 1}: ${t}ms`);
    }
    const avеrаgeTime =
    responseTimeArray.length > 0
    ? totalTime / responseTimeArray.length
    : 0;
    console.log(
        `Total: ${totalTime}ms, Avеrаge: ${avеrаgeTime}ms, Slowest: ${slowestTime}ms`
    );
    return [totalTime, avaregeTime, slowestTime];
}


function simulateTestExecution(testCases) {
    const executionResults = [];

    for (let i = 0; i < testCases.length; i++) {
        const testName = testCases[i];
        const status = i % 3 === 0 ? "FAIL" : "PASS";
        const result = `${testName}:${status}`;
        executionResults.push(result);
        console.log(`Executed: ${testName} - ${status}`);
    }

    let passCount = 0;
    let failCount = 0
    for (let i = 0; i < executionResults.length; i++) {
        if (executionResults[i].includes(":PASS")) passCount++;
        else if (executionResults[i].includes(":FAIL")) failCount++;
    }
    console.log(`Passes: ${passCount}, Fails: ${failCount}`);
    return executionResults;
}

function retryFailedTests(testName) {
    let attempts = 0;
    let maxRetries = 3;
    let testPassed = false;

    while (attempts < maxRetries && !testPassed) {
        attempts++;
        if (attempts === 3) {
            testPassed = true;
            console.log(`Retry attempt ${attempts} for ${testName}: PASS`);
        } else {
            console.log(`Retry attempt ${attempts} for ${testName}: FAIL`);
        }
    }

    if (testPassed) {
        console.log(`${testName} finally passed after ${attempts} attempts`);
    } else {
        console.log(`${testName} failed after ${attempts} attempts`);
    }

    return [testPassed, attempts];
}

function monitorTestQueue(testQueue) {
  let processedCount = 0;
  let maxProcessingTime = 10;

  while (testQueue.length > 0 && processedCount < maxProcessingTime) {
    testQueue.pop();
    processedCount++;
    console.log(
      `Processed test ${processedCount}, Queue remaining: ${testQueue.length}`
    );
  }

  if (testQueue.length === 0) {
    console.log("Queue empty. All tests processed.");
  } else {
    console.log("Stopped due to time limit.");
  }

  return [processedCount, testQueue.length];
}

function waitForTestCompletion(expectedDuration) {
  let elapsedTime = 0;
  let testComplete = false;

  while (!testComplete && elapsedTime < expectedDuration * 2) {
    elapsedTime++;
    if (elapsedTime % Math.max(1, Math.floor(expectedDuration / 3)) === 0) {
      console.log(`Waiting... Elapsed time: ${elapsedTime}`);
    }
    if (elapsedTime >= expectedDuration) {
      testComplete = true;
    }
  }

  if (testComplete) {
    console.log(`Test completed in ${elapsedTime} ticks`);
  } else {
    console.log(`Test timed out at ${elapsedTime} ticks`);
  }

  return [testComplete, elapsedTime];
}

function processTestResultsStream(testResults) {
  let passCount = 0;
  let failCount = 0;
  let currentIndex = 0;

  while (currentIndex < testResults.length) {
    const result = testResults[currentIndex];
    if (result === "PASS") passCount++;
    else if (result === "FAIL") failCount++;
    console.log(
      `Processing result ${currentIndex + 1}: ${result}`
    );
    currentIndex++;
  }

  const total = passCount + failCount;
  const successRate = total > 0 ? passCount / total : 0;

  return [passCount, failCount, successRate];
}

function compareLoopApproaches(dataArray) {
  console.log("Comparing for loop vs while loop approaches");

  
  let forProcessedCount = 0;
  for (let i = 0; i < dataArray.length; i++) {
    void dataArray[i];
    forProcessedCount++;
  }

  
  let whileProcessedCount = 0;
  let index = 0;
  while (index < dataArray.length) {
    void dataArray[index];
    whileProcessedCount++;
    index++;
  }

  console.log(
    `For loop processed: ${forProcessedCount}, While loop processed: ${whileProcessedCount}`
  );
  return [forProcessedCount, whileProcessedCount];
}

module.exports = {
  processAllTestUsers,
  validateAllEmails,
  calculateResponseTimes,
  simulateTestExecution,
  retryFailedTest,
  monitorTestQueue,
  waitForTestCompletion,
  processTestResultsStream,
  compareLoopApproaches,
};