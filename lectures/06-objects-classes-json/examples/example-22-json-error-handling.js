// JSON.parse() throws an error for invalid JSON
let invalidJson = '{"name": "test", "invalid": }'; // Missing value

try {
  let parsed = JSON.parse(invalidJson);
  console.log("Parsed successfully:", parsed);
} catch (error) {
  console.log("JSON parsing failed:", error.message);
}

// Function to safely parse JSON (using concepts from functions in Lecture 5)
function safeJsonParse(jsonString) {
  try {
    return {
      success: true,
      data: JSON.parse(jsonString),
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    };
  }
}

// Test safe parsing
let validResult = safeJsonParse('{"test": "value"}');
let invalidResult = safeJsonParse('{"invalid": }');

console.log("Valid parse result:", validResult);
console.log("Invalid parse result:", invalidResult);

// Using the results with conditional logic from Lecture 2
if (validResult.success) {
  console.log("Successfully parsed data:", validResult.data);
} else {
  console.log("Failed to parse:", validResult.error);
}
