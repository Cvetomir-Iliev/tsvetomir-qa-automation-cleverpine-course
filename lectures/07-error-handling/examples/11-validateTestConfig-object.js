// Test configuration object validation
function validateTestConfig(config) {
  if (!config) {
    throw new Error("Test configuration is required");
  }

  if (typeof config !== "object") {
    throw new TypeError("Test configuration must be an object");
  }

  // Required fields validation
  let requiredFields = ["environment", "baseUrl", "timeout"];

  for (let i = 0; i < requiredFields.length; i++) {
    let field = requiredFields[i];
    if (!(field in config)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Environment validation
  let validEnvironments = ["development", "staging", "production"];
  if (!validEnvironments.includes(config.environment)) {
    throw new Error(
      `Invalid environment: ${config.environment}. Must be one of: ${validEnvironments.join(", ")}`
    );
  }

  // URL validation using string methods from Lecture 2
  if (!config.baseUrl.startsWith("http")) {
    throw new Error("Base URL must start with http or https");
  }

  // Timeout validation
  if (typeof config.timeout !== "number" || config.timeout <= 0) {
    throw new RangeError("Timeout must be a positive number");
  }

  if (config.timeout > 60000) {
    throw new RangeError("Timeout cannot exceed 60 seconds");
  }

  return true;
}

// Test configuration validation
console.log("\n=== Test Configuration Validation ===");

let validConfig = {
  environment: "staging",
  baseUrl: "https://staging.test.com",
  timeout: 5000,
  retries: 3,
};

let invalidConfig = {
  environment: "invalid",
  baseUrl: "not-a-url",
  timeout: -1000,
};

try {
  validateTestConfig(validConfig);
  console.log("✅ Valid config passed validation");
} catch (error) {
  console.log("❌ Config validation failed:", error.message);
}

try {
  validateTestConfig(invalidConfig);
  console.log("✅ Invalid config passed validation");
} catch (error) {
  console.log("❌ Config validation failed:", error.message);
}
