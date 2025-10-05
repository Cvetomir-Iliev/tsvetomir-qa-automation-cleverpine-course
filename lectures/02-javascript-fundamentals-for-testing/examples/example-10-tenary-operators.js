let testPassed = true;
let result = testPassed ? "PASS" : "FAIL";
console.log("Test result:", result);


testPassed = false;
result = testPassed ? "PASS" : "FAIL";
console.log("Test result:", result);

let userCount = 5;
let message = userCount > 0 ? `Found ${userCount} users.` : "No users found.";
console.log(message);

