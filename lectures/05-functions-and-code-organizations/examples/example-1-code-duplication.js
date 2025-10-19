// Processing test results - lots of repetitive code!
let loginResults = ["PASS", "FAIL", "PASS"];
let logoutResults = ["PASS", "PASS", "SKIP"];
let registerResults = ["FAIL", "PASS", "PASS"];

// Same logic repeated three times:
let loginPassed = 0;
for (let i = 0; i < loginResults.length; i++) {
  if (loginResults[i] === "PASS") loginPassed++;
}

let logoutPassed = 0;
for (let i = 0; i < logoutResults.length; i++) {
  if (logoutResults[i] === "PASS") logoutPassed++;
}

let registerPassed = 0;
for (let i = 0; i < registerResults.length; i++) {
  if (registerResults[i] === "PASS") registerPassed++;
}

console.log("Login passed:", loginPassed);
console.log("Logout passed:", logoutPassed);
console.log("Register passed:", registerPassed);
