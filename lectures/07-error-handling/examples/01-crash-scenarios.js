// These scenarios will crash your program without error handling:

// JSON parsing with invalid data
let badJson = '{"name": "test", "invalid": }';
let parsed = JSON.parse(badJson); // 💥 CRASH!

// Accessing properties that don't exist
let testUser = null;
console.log(testUser.email); // 💥 CRASH!

// Array operations on undefined
let testResults = undefined;
testResults.push("PASS"); // 💥 CRASH!

// Division by zero in calculations
let totalTests = 0;
let successRate = passedTests / totalTests; // NaN but doesn't crash
let percentage = successRate.toFixed(2); // But this might!
