// Function with multiple parameters
function validateLogin(username, password, minPasswordLength) {
  let usernameValid = username.length > 0;
  let passwordValid = password.length >= minPasswordLength;

  if (usernameValid && passwordValid) {
    return "Login credentials are valid";
  } else {
    return "Invalid login credentials";
  }
}

// Test the function with different inputs
console.log(validateLogin("testuser", "password123", 8)); // "Login credentials are valid"
console.log(validateLogin("", "password123", 8)); // "Invalid login credentials"
console.log(validateLogin("testuser", "weak", 8)); // "Invalid login credentials"

// Function to format test execution report
function createTestReport(testName, status, executionTime, environment) {
  let statusIcon = status === "PASS" ? "✅" : "❌";
  let timeFormatted =
    executionTime < 1000
      ? executionTime + "ms"
      : (executionTime / 1000).toFixed(1) + "s";
  return `${statusIcon} ${testName} (${timeFormatted}) - ${environment}`;
}

// Generate reports for different tests
console.log(createTestReport("login_test", "PASS", 250, "staging"));
console.log(createTestReport("api_test", "FAIL", 1200, "production"));
