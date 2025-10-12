let retryCount = 0;
let maxRetries = 3;
let testPassed = false;

while (retryCount < maxRetries && !testPassed) {
    retryCount++;
    console.log(`Attempt ${retryCount}: Running test...`);

    ///simulate test that might pass or fail
    testPassed = retryCount === 2;

    if (testPassed) {
        console.log("Test Passed!");
    }   else {
        console.log("Test failed, will retry...");
    }
}

if (!testPassed) {
    console.log("Test failed after all retries");
}

