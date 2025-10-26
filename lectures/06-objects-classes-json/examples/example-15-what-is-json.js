// This is a JavaScript object:
let testResult = {
  testName: "login_test",
  status: "PASS",
  duration: 250,
};

// This is JSON (a string representation of similar data):
let jsonString = '{"testName":"login_test","status":"PASS","duration":250}';

console.log("JavaScript object:", testResult);
console.log("JSON string:", jsonString);
console.log("JSON string type:", typeof jsonString); // "string"
