// Practical example with both paths
function validateTestData(data) {
  return new Promise(function (resolve, reject) {
    console.log(`\nValidating data:`, data);
    if (!data || typeof data !== "object") {
      return reject(new Error("Invalid data format: not an object."));
    }

    const { email, password } = data;

    if (!email || !password) {
      return reject(new Error("Missing required fields: email and password."));
    }

    if (email.length < 5 || !email.includes("@")) {
      return reject(new Error("Invalid email format."));
    }

    if (password.length < 8) {
      return reject(new Error("Password must be at least 8 characters long."));
    }

    // If all checks pass, resolve the promise
    resolve({ validated: true, timestamp: new Date().toISOString() });
  });
}

// Test with valid data
let validData = { email: "test@example.com", password: "securepass123" };

validateTestData(validData)
  .then(function (result) {
    console.log("✅ Validation successful:", result);
  })
  .catch(function (error) {
    console.error("❌ Validation failed unexpectedly:", error.message);
  });

// Test with invalid data
let invalidData = { email: "invalid", password: "123" };

validateTestData(invalidData)
  .then(function (result) {
    console.log("✅ Validation successful (this should not happen):", result);
  })
  .catch(function (error) {
    console.error("❌ Validation failed as expected:", error.message);
  });
