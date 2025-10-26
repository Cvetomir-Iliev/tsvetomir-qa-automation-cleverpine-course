// Common types of errors you'll encounter:

// SyntaxError: Malformed JSON
console.log("=== SyntaxError Example ===");
let invalidJson = '{"name": "test", }'; // Notice the trailing comma
try {
  let parsed = JSON.parse(invalidJson);
  console.log("Parsed successfully:", parsed);
} catch (error) {
  console.log("Caught an error:", error.message);
}

// TypeError: Accessing properties of null/undefined
console.log("\n=== TypeError Example ===");
let testUser = null;
try {
  console.log("User email:", testUser.email);
} catch (error) {
  console.log("Caught an error:", error.message);
}

// ReferenceError: Using undefined variables
console.log("\n=== ReferenceError Example ===");
try {
  console.log("Undefined variable:", nonExistentVariable);
} catch (error) {
  console.log("Caught an error:", error.message);
}
