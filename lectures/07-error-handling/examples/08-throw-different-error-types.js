// Different error types for different scenarios

// Generic Error (most common)
function validateRequired(value, fieldName) {
  if (!value) {
    throw new Error(`${fieldName} is required`);
  }
}

// TypeError for type-related issues
function validateArray(data, fieldName) {
  if (!Array.isArray(data)) {
    throw new TypeError(`${fieldName} must be an array`);
  }
}

// RangeError for value range issues
function validateRange(value, min, max, fieldName) {
  if (value < min || value > max) {
    throw new RangeError(`${fieldName} must be between ${min} and ${max}`);
  }
}

// Testing the different error types
console.log("=== Testing Different Error Types ===");

try {
  validateRequired("", "Username");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  validateArray("not an array", "Test results");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  validateRange(150, 0, 100, "Success rate");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
