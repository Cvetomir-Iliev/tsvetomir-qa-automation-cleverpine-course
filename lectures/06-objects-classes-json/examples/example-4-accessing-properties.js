let apiResponse = {
  statusCode: 200,
  message: "Success",
  data: "User created",
  responseTime: 245,
};

// Dot notation (most common)
console.log("Status code:", apiResponse.statusCode); // 200
console.log("Message:", apiResponse.message); // "Success"

// Bracket notation (useful for dynamic property names)
console.log("Status code:", apiResponse["statusCode"]); // 200
console.log("Message:", apiResponse["message"]); // "Success"

// Bracket notation with variables (very powerful!)
let propertyName = "responseTime";
console.log("Dynamic access:", apiResponse[propertyName]); // 245

// When property names have spaces or special characters
let testConfig = {
  "max-timeout": 5000,
  "retry-count": 3,
  "base url": "https://test.example.com",
};

// Must use bracket notation for these
console.log("Max timeout:", testConfig["max-timeout"]);
console.log("Base URL:", testConfig["base url"]);
