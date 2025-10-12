let testResults = ["login_test", "PASS", 250];
//let testName = testResults[0];
//let testStatus = testResults[1];
//let executionTime = testResults[2];

//console.log(`Test: ${testName}, Status: ${testStatus}, Time: ${executionTime}`);

// Destructuring 
let [testName,testStatus, executionTime] = testResults;
console.log(`Test: ${testName}, Status: ${testStatus}, Time: ${executionTime}`);
