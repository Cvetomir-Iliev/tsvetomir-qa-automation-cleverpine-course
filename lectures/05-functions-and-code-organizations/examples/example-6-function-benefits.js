// Without functions: repetitive and error-prone
let loginTime = 1200;
let loginFormatted;
if (loginTime < 1000) {
  loginFormatted = loginTime + "ms";
} else {
  loginFormatted = (loginTime / 1000).toFixed(1) + "s";
}

let logoutTime = 800;
let logoutFormatted;
if (logoutTime < 1000) {
  logoutFormatted = logoutTime + "ms";
} else {
  logoutFormatted = (logoutTime / 1000).toFixed(1) + "s";
}

// With functions: consistent and reusable
function formatExecutionTime(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    return (milliseconds / 1000).toFixed(1) + "s";
  }
}

let loginFormatted2 = formatExecutionTime(1200); // "1.2s"
let logoutFormatted2 = formatExecutionTime(800); // "800ms"

console.log("Login time:", loginFormatted2);
console.log("Logout time:", logoutFormatted2);

// Benefits:
// 1. No code duplication
// 2. Easier to maintain (change logic in one place)
// 3. Less chance of errors
// 4. More readable code
// 5. Can be reused across different test scenarios
