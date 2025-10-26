// Test user object with validation methods (using functions from Lecture 5)
let testUser = {
  username: "testuser123",
  email: "testuser@example.com",
  password: "securePassword123",
  role: "admin",
  isActive: true,

  // Method using string methods from Lecture 2
  isValidEmail: function () {
    return this.email.includes("@") && this.email.includes(".");
  },

  // Method using comparison operators from Lecture 2
  isValidPassword: function () {
    return this.password.length >= 8;
  },

  // Method combining validation
  isValidUser: function () {
    return (
      this.isValidEmail() && this.isValidPassword() && this.username.length > 0
    );
  },
};

// Test the validation methods
console.log("Email valid:", testUser.isValidEmail()); // true
console.log("Password valid:", testUser.isValidPassword()); // true
console.log("User valid:", testUser.isValidUser()); // true

// Test execution result object
let testExecution = {
  suiteName: "Authentication Tests",
  startTime: Date.now(),
  endTime: null,
  results: [], // Will use array methods from Lecture 4

  // Method to add test results (using array push from Lecture 3)
  addResult: function (testName, status, duration) {
    this.results.push({
      name: testName,
      status: status,
      duration: duration,
    });
  },

  // Method to calculate metrics (using array methods from Lecture 4)
  getMetrics: function () {
    let total = this.results.length;
    let passed = this.results.filter(
      (result) => result.status === "PASS"
    ).length;
    let failed = this.results.filter(
      (result) => result.status === "FAIL"
    ).length;

    return {
      total: total,
      passed: passed,
      failed: failed,
      successRate: total > 0 ? ((passed / total) * 100).toFixed(1) + "%" : "0%",
    };
  },
};

// Use the test execution object
testExecution.addResult("login_test", "PASS", 250);
testExecution.addResult("logout_test", "FAIL", 180);
testExecution.addResult("register_test", "PASS", 1200);

console.log("Test results:", testExecution.results);
console.log("Test metrics:", testExecution.getMetrics());
