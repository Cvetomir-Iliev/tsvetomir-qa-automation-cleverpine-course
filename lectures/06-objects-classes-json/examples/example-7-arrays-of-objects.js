// Array of test case objects
let testCases = [
  { name: "login_test", status: "PASS", duration: 250, priority: "high" },
  { name: "logout_test", status: "FAIL", duration: 180, priority: "medium" },
  { name: "register_test", status: "PASS", duration: 1200, priority: "high" },
  { name: "profile_test", status: "SKIP", duration: 0, priority: "low" },
];

// Using array methods with objects (from Lecture 4)
let failedTests = testCases.filter((test) => test.status === "FAIL");
console.log("Failed tests:", failedTests);

let highPriorityTests = testCases.filter((test) => test.priority === "high");
console.log("High priority tests:", highPriorityTests);

// Map to extract just the test names (from Lecture 4)
let testNames = testCases.map((test) => test.name);
console.log("All test names:", testNames);

// Calculate total execution time using reduce (from Lecture 4)
let totalDuration = testCases.reduce((sum, test) => sum + test.duration, 0);
console.log("Total execution time:", totalDuration + "ms");
