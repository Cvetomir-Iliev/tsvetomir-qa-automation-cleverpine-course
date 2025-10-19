// Collection of reusable test functions

// Email validation function
function isValidEmail(email) {
  return email.includes("@") && email.includes(".") && email.length > 3;
}

// Password strength checker
function checkPasswordStrength(password) {
  if (password.length < 8) {
    return "WEAK (too short)";
  }
  if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    return "MEDIUM (missing numbers or letters)";
  }
  return "STRONG";
}

// Test execution time formatter
function formatExecutionTime(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    return (milliseconds / 1000).toFixed(1) + "s";
  }
}

// Test result counter
function countResultsByType(results) {
  let counts = { PASS: 0, FAIL: 0, SKIP: 0 };
  for (const result of results) {
    if (counts.hasOwnProperty(result)) {
      counts[result]++;
    }
  }
  return counts;
}

// Test the utility library
console.log("=== Test Utility Library Demo ===");
console.log("Email valid:", isValidEmail("user@test.com"));
console.log("Email invalid:", isValidEmail("usertest.com"));
console.log("Password strength (weak):", checkPasswordStrength("pass"));
console.log("Password strength (medium):", checkPasswordStrength("password"));
console.log(
  "Password strength (strong):",
  checkPasswordStrength("myPassword123")
);
console.log("Execution time:", formatExecutionTime(1250));

let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
let counts = countResultsByType(results);
console.log("Result counts:", counts);
