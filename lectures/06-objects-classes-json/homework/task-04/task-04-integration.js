// Integration Test Results
// ===========================
// REUSED CODE FROM TASKS 1-3
// ===========================

// Task 2: TestUser Class
class TestUser {
  constructor(username, email, password, role = "admin", active = true) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.active = active;
  }
  isValidEmail() {
    return this.email.includes("@") && this.email.length > 5;
  }
  isValidPassword() {
    return this.password.length >= 8;
  }
  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }
  getInfo() {
    return `User: ${this.username} (${this.email})`;
  }
}

// Task 2: TestCase Class
class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.duration = 0;
    this.priority = "medium";
  }
  start() {
    this.status = "RUNNING";
  }
  complete(status, durationMs) {
    this.status = status;
    this.duration = durationMs;
  }
  setPriority(priority) {
    this.priority = priority;
  }
}

// Task 3: JSON Helpers
function toJson(value) {
  return JSON.stringify(value, null, 2);
}
function fromJson(jsonString) {
  return JSON.parse(jsonString);
}

// Task 1: Analysis Functions
function getFailedTests(cases) {
  return cases.filter((test) => test.status === "FAIL");
}
function getHighPriorityNames(cases) {
  return cases
    .filter((test) => test.priority === "high")
    .map((test) => test.name);
}
function getTotalDuration(cases) {
  return cases.reduce((sum, test) => sum + test.duration, 0);
}

// ===========================
// DATASET DEFINITION
// ===========================

// Create users
let users = [
  new TestUser("testuser1", "testuser1@example.com", "securepass123"),
  new TestUser("testuser2", "testuser2@example.com", "securepass123"),
];

// Create test cases
let cases = [
  new TestCase("login_test", "Test user login with valid credentials"),
  new TestCase("logout_test", "Test user logout functionality"),
  new TestCase("register_test", "Test user registration with valid data"),
  new TestCase("profile_test", "Test user profile update with valid data"),
  new TestCase("password_reset_test", "Test password reset with valid data"),
];

// Update test cases with status, duration, and priority
cases[0].complete("PASS", 250);
cases[0].setPriority("high");

cases[1].complete("FAIL", 180);
cases[1].setPriority("medium");

cases[2].complete("PASS", 1200);
cases[2].setPriority("high");

cases[3].complete("PASS", 540);
cases[3].setPriority("low");

cases[4].complete("PASS", 450);
cases[4].setPriority("medium");

// ===========================
// CONSOLE OUTPUT
// ===========================

console.log("=== BASIC METRICS ===");
console.log("Total cases:", cases.length);
console.log("Total duration (ms):", getTotalDuration(cases));
console.log("Number of FAILs:", getFailedTests(cases).length);

console.log("\n=== PRIORITY HIGHLIGHTS ===");
console.log("High priority test names:", getHighPriorityNames(cases));

console.log("\n=== USER VALIDATION ===");
users.forEach((user) => {
  console.log(user.getInfo(), "is valid:", user.validate());
});

console.log("\n=== JSON SUMMARY ===");
let report = {
  suiteName: "Authentication Tests",
  environment: "staging",
  totalCases: cases.length,
  failedCount: getFailedTests(cases).length,
  highPriorityNames: getHighPriorityNames(cases),
};

let reportJson = toJson(report);
console.log("Report JSON:");
console.log(reportJson);

let reportParsed = fromJson(reportJson);
console.log("\nParsed failed count:", reportParsed.failedCount);

module.exports = {
  TestUser,
  TestCase,
  getFailedTests,
  getHighPriorityNames,
  getTotalDuration,
  toJson,
  fromJson,
};
