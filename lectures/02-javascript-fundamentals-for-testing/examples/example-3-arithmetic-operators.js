// Basic arithmetic in testing context
let baseTimeout = 5000; // 5 seconds
let additionalTime = 2000; // 2 seconds
let totalTimeout = baseTimeout + additionalTime; // 7000 ms
console.log("Total Timeout (ms):", totalTimeout);

// Calculating test execution time
let testStartTime = 1000; // in ms
let testEndTime = 3500; // in ms
let executionTime = testEndTime - testStartTime; // 2500 ms
console.log("Test Execution Time (ms):", executionTime);

// Working with counts and iterations
let totalTests = 20;
let failedTests = 3;
let passedTests = totalTests - failedTests; // 17
let successRate = (passedTests / totalTests) * 100; // 85%
console.log("Passed Tests:", passedTests);
console.log("Success Rate (%):", successRate);

// Modulo operator for even/odd
let testDataSets = 4;
let currentIteration = 7;
let dataSetToUse = currentIteration % testDataSets; // 3
console.log("Data Set to Use (0-indexed):", dataSetToUse);

// Incrementing counters (common in loops)
let attemptCount = 0;
attemptCount++; // same as atempt Count = attemptCount + 1
console.log("Attempt number:", attemptCount);