// 1: Count Passed Tests
function countPassedTests(results) {
    let passedCount = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "PASS") {
            passedCount++;
        }
    }
    return passedCount;

}
let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
let testResults2 = ["FAIL", "FAIL", "FAIL"];
let testResults3 = ["PASS", "PASS", "PASS"];
console.log("Number of passed tests:", countPassedTests(testResults));
console.log("Number of passed tests (testResults2):", countPassedTests(testResults2));
console.log("Number of passed tests (testResults3):", countPassedTests(testResults3));


// 2: Format Execution Times
function formatExecutionTime(milliseconds) {
    if (milliseconds < 1000) {
        return milliseconds + "ms";
    } else {
        return (milliseconds / 1000).toFixed(1) + "s";
    }
}
console.log(formatExecutionTime(500));
console.log("Execution time (1500):", formatExecutionTime(1500)); 
console.log("Execution time (9876):", formatExecutionTime(9876));  
console.log("Execution time (50):", formatExecutionTime(50));    

// 3: Find Failed Tests
function findFailedTests(testNames, testResults) {
    let failedTests = [];
    for (let i = 0; i < testResults.length; i++) {
        if (testResults[i] === "FAIL") {
            failedTests.push(testNames[i]);
        }
    }
    return failedTests;
}
let names = ["login_test", "logout_test", "register_test"];
let results = ["PASS", "FAIL", "PASS"];

let failures = findFailedTests(names, results);
console.log("Failed tests:", failures);