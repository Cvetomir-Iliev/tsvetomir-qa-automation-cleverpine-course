// Basic throw statement syntax
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age > 150) {
    throw new Error("Age seems unrealistic");
  }
  return true;
}

// Using the validation function
try {
  validateAge(-5);
} catch (error) {
  console.log("Caught error:", error.message); // "Age cannot be negative"
}

try {
  validateAge(200);
} catch (error) {
  console.log("Caught error:", error.message); // "Age seems unrealistic"
}
