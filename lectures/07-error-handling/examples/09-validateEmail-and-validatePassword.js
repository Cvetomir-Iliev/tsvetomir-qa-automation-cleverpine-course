// Email validation using string methods from Lecture 2
function validateEmail(email) {
  if (!email) {
    throw new Error("Email is required");
  }

  if (typeof email !== "string") {
    throw new TypeError("Email must be a string");
  }

  // Using string methods from Lecture 2
  email = email.trim();

  if (email.length === 0) {
    throw new Error("Email cannot be empty");
  }

  if (!email.includes("@")) {
    throw new Error("Email must contain @ symbol");
  }

  if (!email.includes(".")) {
    throw new Error("Email must contain a domain");
  }

  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (atIndex > dotIndex) {
    throw new Error("Email format is invalid");
  }

  return true;
}

// Password validation with detailed error messages
function validatePassword(password) {
  if (!password) {
    throw new Error("Password is required");
  }

  if (typeof password !== "string") {
    throw new TypeError("Password must be a string");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (password.length > 100) {
    throw new Error("Password is too long (max 100 characters)");
  }

  // Check for numbers using string methods
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true;
      break;
    }
  }

  if (!hasNumber) {
    throw new Error("Password must contain at least one number");
  }

  return true;
}

// Test the validation functions
console.log("\n=== Email Validation Tests ===");
let emailTests = ["", "invalid", "test@", "@test.com", "valid@test.com"];

for (let i = 0; i < emailTests.length; i++) {
  try {
    validateEmail(emailTests[i]);
    console.log(`✅ "${emailTests[i]}" is valid`);
  } catch (error) {
    console.log(`❌ "${emailTests[i]}": ${error.message}`);
  }
}

console.log("\n=== Password Validation Tests ===");
let passwordTests = ["", "short", "longenoughbutnonumber", "validpass123"];

for (let i = 0; i < passwordTests.length; i++) {
  try {
    validatePassword(passwordTests[i]);
    console.log(`✅ Password is valid`);
  } catch (error) {
    console.log(`❌ Password error: ${error.message}`);
  }
}
