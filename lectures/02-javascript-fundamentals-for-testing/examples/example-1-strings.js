//test data as strings
let testUserEmail = "john.doe@testcompany.com";
let expectedSuccessMessage = "Login successful!";
let baseUrl = "https://staging-app.com";

//string concatenation
let testMessage = "Testing user: " + testUserEmail + " on " + baseUrl;
console.log(testMessage);

// Template literals
let loginAttempt = `Attempting to login for ${testUserEmail} on ${baseUrl}`;
console.log(loginAttempt);

// Multi-line strings
let testScenario = `
Test Case: User Login
User: ${testUserEmail}
Expected: ${expectedSuccessMessage}
Environment: ${baseUrl}
`;
console.log(testScenario);