// 1: Validating Emails
function isValidEmail(email) {
    let hasAtSymbol = email.includes("@");
    let hasDotSymbol = email.includes(".");
    let isNotEmpty = email.length > 0;
    return hasAtSymbol && hasDotSymbol && isNotEmpty;
}
console.log(isValidEmail("user@test.com"));
console.log(isValidEmail("invalid-email")); 
console.log(isValidEmail(""));

// 2: Format Duration
function formatDuration(milliseconds) {
    if (milliseconds < 1000) {
        return milliseconds + "ms";
    } else {
        return (milliseconds / 1000).toFixed(1) + "s";
    }
}
console.log(formatDuration(500)); // "500ms"
console.log(formatDuration(1500)); // "1.5s"
console.log(formatDuration(2750)); // "2.8s"

// 3: Test Email
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
