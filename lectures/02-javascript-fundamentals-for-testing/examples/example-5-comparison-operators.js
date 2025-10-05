// Test validation examples
let expectedStatusCode = 200;
let actualStatusCode = 200;
let expectedMessage = "Welcome";
let actualMessage = "Welcome";

console.log("Status Code Match:", actualStatusCode == expectedStatusCode); // true
console.log("Message Match:", actualMessage == expectedMessage); // true

console.log("Strict Status check:", actualStatusCode === expectedStatusCode); // true
console.log("Type-Safe check:", actualMessage === expectedMessage); // true

// Inequality checks
let errorCount = 0;
console.log("No Errors:", errorCount == 0); // true
console.log("Has errors:", errorCount != 0); // false

//Numeric comparisons for validation
let responseTime = 250; // in milliseconds
let maxAllowedTime = 500;

console.log("Response time acceptable:", responseTime < maxAllowedTime); // true

//Range validation
let userAge = 25;
let minAge = 18;
let maxAge = 65;

console.log("Age within range:", userAge >= minAge && userAge <= maxAge); // 18-65 true

