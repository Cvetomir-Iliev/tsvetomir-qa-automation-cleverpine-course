// 1 Test Configuration
let testConfig = {
  suiteName: "Login_Tests",
  environment: "staging",
  maxTimeoutMs: 5000,
};
console.log("Initial test config: ", testConfig);
testConfig.retryCount = 3;
console.log("Updated test config: ", testConfig);

// 2 Test Users
let testUser1 = {
  username: "testuser1",
  email: "testuser1@example.com",
  password: "securepass123",
  role: "admin",
  active: true,
};
let testUser2 = {
  username: "testuser2",
  email: "testuser2@example.com",
  password: "securepass123",
  role: "user",
  active: true,
};
let testUser3 = {
  username: "testuser3",
  email: "testuser3@example.com",
  password: "securepass123",
  role: "user",
  active: false,
};
console.log("Test User 1: ", testUser1["role"]);
console.log("Test User 2: ", testUser2["email]"]);
console.log("Test User 3: ", testUser3["password"]);

// 3 Test Cases
let testCases = [
  { name: "login_test", status: "PASS", duration: 250, priority: "high" },
  { name: "logout_test", status: "FAIL", duration: 180, priority: "medium" },
  { name: "register_test", status: "PASS", duration: 1200, priority: "high" },
  { name: "profile_test", status: "SKIP", duration: 0, priority: "low" },
  { name: "password_reset_test", status: "PASS", duration: 540, priority: "medium" },
  { name: "data_export_test", status: "FAIL", duration: 890, priority: "high" },
];
let failedTests = testCases.filter((test) => test.status === "FAIL");
console.log("Failed tests: ", failedTests);
let getHighPriorityNames = testCases.filter((test) => test.priority === "high").map((test) => test.name);
console.log("High priority tests: ", getHighPriorityNames);
let getTotalDuration = testCases.reduce((sum, test) => sum + test.duration, 0);
console.log("Total duration: ", getTotalDuration);

module.exports = {
  testConfig,
  testUser1,
  testUser2,
  testUser3,
  testCases,
  failedTests,
  getHighPriorityNames,
  getTotalDuration,
};
