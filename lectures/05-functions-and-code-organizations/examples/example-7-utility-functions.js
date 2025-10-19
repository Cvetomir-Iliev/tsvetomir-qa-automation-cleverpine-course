// Utility function to check if a password meets requirements
function isStrongPassword(password) {
  let hasMinimumLength = password.length >= 8;
  let hasNumbers = /\d/.test(password);
  let hasLetters = /[a-zA-Z]/.test(password);
  return hasMinimumLength && hasNumbers && hasLetters;
}

// Test password validation
console.log("Testing password strength:");
console.log(isStrongPassword("password")); // false (no numbers)
console.log(isStrongPassword("password123")); // true
console.log(isStrongPassword("abc")); // false (too short, no numbers)

// Utility function to generate test user emails
function generateTestEmail(baseName, domain) {
  if (!domain) {
    domain = "testcompany.com";
  }
  return baseName + "@" + domain;
}

// Test email generation
console.log("Generated emails:");
console.log(generateTestEmail("john")); // "john@testcompany.com"
console.log(generateTestEmail("sarah", "dev.com")); // "sarah@dev.com"
