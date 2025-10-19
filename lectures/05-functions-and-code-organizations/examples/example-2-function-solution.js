// The counting logic we saw earlier, converted to a function
function countPassedTests(results) {
  let passedCount = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "PASS") {
      passedCount++;
    }
  }
  return passedCount;
}

// Now we can reuse this logic:
let loginResults = ["PASS", "FAIL", "PASS"];
let logoutResults = ["PASS", "PASS", "SKIP"];
let registerResults = ["FAIL", "PASS", "PASS"];

console.log("Login passed:", countPassedTests(loginResults));
console.log("Logout passed:", countPassedTests(logoutResults));
console.log("Register passed:", countPassedTests(registerResults));

// Same result, much cleaner code!
