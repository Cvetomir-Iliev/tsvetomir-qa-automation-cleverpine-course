// Basic syntax:
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}

// Practical example: Safe JSON parsing
function parseTestData(jsonString) {
  try {
    let data = JSON.parse(jsonString);
    console.log("Successfully parsed test data");
    return data;
  } catch (error) {
    console.log("Failed to parse test data:", error.message);
    return null; // Return safe default
  }
}

// Test with valid JSON
let validData = parseTestData('{"testName": "login", "status": "PASS"}');
console.log("Valid data result:", validData);

// Test with invalid JSON
let invalidData = parseTestData('{"invalid": json}');
console.log("Invalid data result:", invalidData);
