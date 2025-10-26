// ✅ Good practices summary

// 1. Always provide meaningful error messages
function goodErrorMessage(value) {
  if (typeof value !== "string") {
    throw new TypeError(`Expected string, but got ${typeof value}`);
  }
  if (value.length === 0) {
    throw new Error("Value cannot be empty string");
  }
}

// 2. Use appropriate error types
function useAppropriateErrorTypes(config) {
  if (!config) {
    throw new Error("Configuration is required"); // Generic error for missing
  }
  if (typeof config !== "object") {
    throw new TypeError("Configuration must be an object"); // Type error for wrong type
  }
  if (config.timeout < 0 || config.timeout > 60000) {
    throw new RangeError("Timeout must be between 0 and 60000"); // Range error for value range
  }
}

// 3. Clean up resources in finally
function properResourceManagement() {
  let resource = null;

  try {
    resource = allocateResource();
    return processWithResource(resource);
  } catch (error) {
    console.log("Processing failed:", error.message);
    throw error; // Re-throw if needed
  } finally {
    if (resource) {
      releaseResource(resource);
    }
  }
}

// Helper functions for the example
function allocateResource() {
  return { id: "resource_123", allocated: true };
}

function processWithResource(resource) {
  return `Processed with ${resource.id}`;
}

function releaseResource(resource) {
  console.log(`Released resource: ${resource.id}`);
}

// 4. Document error handling behavior
/**
 * Validates test configuration object
 * @param {Object} config - Test configuration
 * @throws {Error} When config is null or undefined
 * @throws {TypeError} When config is not an object
 * @throws {RangeError} When timeout is outside valid range
 * @returns {boolean} true if validation passes
 */
function documentedValidation(config) {
  // Implementation with proper error handling
  if (!config) {
    throw new Error("Configuration is required");
  }
  // ... rest of validation
  return true;
}

console.log("\n=== Error Handling Best Practices Demonstrated ===");
console.log("Best practices implemented successfully!");
