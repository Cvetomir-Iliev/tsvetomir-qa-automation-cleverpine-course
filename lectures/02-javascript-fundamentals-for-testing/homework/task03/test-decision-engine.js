// Step 3.1

// Determine Test Action

function determineTestAction(testResult, retryCount) {
    if (testResult === "pass") {
        console.log("Test Successuful!");
        return "complete";
    } else if(testResult === "fail" && retryCount < 3) {
        console.log("Test failed, Retry again, retrying...");
        return "retry";
    } else if(testResult === "fail" && retryCount >= 3) {
        console.log("Test failed multiple times!");
        return "abort";
    } else {
        console.log("Unknown test result!");
        return "investigate";
    }
}

determineTestAction("fail", 2);

// Validate Test Data


