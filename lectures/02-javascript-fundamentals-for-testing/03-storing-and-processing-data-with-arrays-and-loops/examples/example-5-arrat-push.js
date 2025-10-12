let testResults = ["PASS", "FAILED"];
console.log("Initial results:", testResults);

testResults.push("PASS");
console.log("After adding one result:", testResults); // PASS,FAILED,PASS

testResults.push("SKIP");
testResults.push("FAIL");

console.log("After adding more results:", testResults);

let statusCode = 404;
let errors = [];

if (statusCode >= 400) {
  // use template literal to interpolate statusCode
  errors.push(`HTTP Error: ${statusCode}`);
}

if (errors.length > 0) {
  console.log("Errors Found:", errors);
}
