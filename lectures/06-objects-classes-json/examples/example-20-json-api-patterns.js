// Typical API response patterns you'll encounter in testing

// 1. Success response with data
let successResponse = `{
  "success": true,
  "statusCode": 200,
  "message": "Operation completed successfully",
  "data": {
    "id": 123,
    "name": "Test User",
    "email": "test@example.com"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`;

// 2. Error response with details
let errorResponse = `{
  "success": false,
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email format is invalid"
    },
    {
      "field": "password", 
      "message": "Password must be at least 8 characters"
    }
  ],
  "timestamp": "2024-01-15T10:35:00Z"
}`;

// Parse and analyze responses
let success = JSON.parse(successResponse);
let error = JSON.parse(errorResponse);

console.log("Success response data:", success.data);
console.log("Error details:", error.errors);

// Using conditional logic from Lecture 2 to handle responses
function analyzeApiResponse(responseJson) {
  let response = JSON.parse(responseJson);

  if (response.success && response.statusCode === 200) {
    return "API call successful";
  } else if (!response.success && response.errors) {
    return `API call failed: ${response.errors.length} validation errors`;
  } else {
    return `API call failed with status: ${response.statusCode}`;
  }
}

console.log("Success analysis:", analyzeApiResponse(successResponse));
console.log("Error analysis:", analyzeApiResponse(errorResponse));
