// Test data for our validation system
const TEST_CONFIG = {
  maxResponseTime: 1000, // milliseconds
  requiredStatusCode: 200,
  maxRetries: 3,
  environment: "staging"
};

// Test result data
let apiResponse = {
  statusCode: 200,
  responseTime: 750,
  message: "User login successful",
  hasData: true,
  retryCount: 1
};

// Use apiResponse in validation functions
console.log("Validate response Time (apiResponse):", validateResponseTime(apiResponse.responseTime, TEST_CONFIG.maxResponseTime));
console.log("Validate success message (apiResponse):", validateSuccessMessage(apiResponse.message));

// Your task: Complete these functions

// 1. Validate API response time
function validateResponseTime(actualTime, maxTime) {
  // TODO: Return true if actualTime is less than or equal to maxTime
  // Use comparison operator and return boolean
  return actualTime <= maxTime;
}
console.log("Validate response Time:", validateResponseTime(120,150));

// 2. Check if response message contains success indicators
function validateSuccessMessage(message) {
  // TODO: Check if message contains "success" (case-insensitive)
  // Use string methods: toLowerCase() and includes()
  // Return true if success is mentioned
 return message.toLowerCase().includes("success");
}

console.log("Validate success message:", validateSuccessMessage("Success"));
console.log("Validate success message:", validateSuccessMessage("Hello"));
console.log("Validate success message:", validateSuccessMessage("Hello Success"));