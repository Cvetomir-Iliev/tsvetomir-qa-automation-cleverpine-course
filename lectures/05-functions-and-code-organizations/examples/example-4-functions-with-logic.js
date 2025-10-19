// Function to validate email format (using string methods from Lecture 2)
function isValidEmail(email) {
  let hasAtSymbol = email.includes("@");
  let hasDotSymbol = email.includes(".");
  let isNotEmpty = email.length > 0;
  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}

// Test the email validation function
console.log(isValidEmail("user@test.com")); // true
console.log(isValidEmail("invalid-email")); // false
console.log(isValidEmail("")); // false

// Function to format test duration (using operators from Lecture 2)
function formatDuration(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    return (milliseconds / 1000).toFixed(1) + "s";
  }
}

// Test the duration formatting
console.log(formatDuration(500)); // "500ms"
console.log(formatDuration(1500)); // "1.5s"
console.log(formatDuration(2750)); // "2.8s"
