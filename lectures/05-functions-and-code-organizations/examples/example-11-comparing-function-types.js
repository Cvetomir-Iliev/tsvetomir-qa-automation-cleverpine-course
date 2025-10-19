// 1. FUNCTION DECLARATION
function formatTestResult(testName, status) {
  let icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + ": " + status;
}

// 2. FUNCTION EXPRESSION
let formatTestResult2 = function (testName, status) {
  let icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + ": " + status;
};

// 3. ARROW FUNCTION
let formatTestResult3 = (testName, status) => {
  let icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + ": " + status;
};

// All three work exactly the same way:
console.log(formatTestResult("login_test", "PASS"));
console.log(formatTestResult2("logout_test", "FAIL"));
console.log(formatTestResult3("register_test", "PASS"));
