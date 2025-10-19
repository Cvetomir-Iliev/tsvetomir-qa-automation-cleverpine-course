// Basic destructuring with different data types
let userInfo = ["john@test.com", 25, true];
let [email, age, isActive] = userInfo;

console.log("Email:", email); // "john@test.com"
console.log("Age:", age); // 25
console.log("Active:", isActive); // true

// You can skip elements you don't need
let testData = ["api_test", "POST", 200, "success", 340];
let [testType, , statusCode, , responseTime] = testData;

console.log("Test type:", testType); // "api_test"
console.log("Status code:", statusCode); // 200
console.log("Response time:", responseTime); // 340
// Notice we skipped the method and message
