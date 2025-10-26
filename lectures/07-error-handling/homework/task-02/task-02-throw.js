// 1. Implement Required Field Validation
function validateRequired(value, fieldName) {
    if (!value) {
        throw new Error(fieldName + " is required");
    }
}
// 2. Implement Array Validation    
function validateArray(data, fieldName) {
    if (!Array.isArray(data)) {
        throw new TypeError(fieldName + " must be an array");
    }
}
// 3. Implement Range Validation    
function validateRange(value, min, max, fieldName) {
    if (value < min || value > max) {
        throw new RangeError(fieldName + " must be between " + min + " and " + max);
    }
}
// 4. Implement Email Validation    
function validateEmail(email) {
    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
        throw new Error("Invalid email format");
    }
}
// 5. Implement Password Validation    
function validatePassword(password) {
    if (!password || password.length < 8 || !/[0-9]/.test(password)) {
        throw new Error("Password does not meet minimum requirements");
    }
}
// 6. Implement Test Results Validation    
function validateTestResults(results) {
    validateArray(results, "Test results");
    results.forEach((result, index) => {
        if (!result || typeof result !== "object") {
            throw new Error(`Test result at index ${index} must be an object`);
        }
        if (!result.status) {
            throw new Error(`Test result at index ${index} missing status`);
        }
        if (!["PASS", "FAIL", "SKIP"].includes(result.status)) {
            throw new Error(`Test result at index ${index} has invalid status: ${result.status}`);
        }
        if (typeof result.duration !== "number" || result.duration < 0) {
            throw new Error(`Test result at index ${index} must have a valid duration`);
        }
    });
}

// 7. Demonstrate the validators with try...catch
try {
    validateRequired("value", "Value");
    console.log("Value is required: OK");
} catch (error) {
    console.log("Value is required: FAILED");
}
try {
    validateArray([1, 2, 3], "Array");
    console.log("Array validation: OK");
} catch (error) {
    console.log("Array validation: FAILED");
}
try {
    validateRange(10, 1, 100, "Value");
    console.log("Range validation: OK");
} catch (error) {
    console.log("Range validation: FAILED");
}
try {
    validateEmail("test@example.com");
    console.log("Email validation: OK");
} catch (error) {
    console.log("Email validation: FAILED");
}
try {
    validatePassword("SecurePass123");
    console.log("Password validation: OK");
} catch (error) {
    console.log("Password validation: FAILED");
}
try {
    validateTestResults([
        { status: "PASS", duration: 250 },
        { status: "FAIL", duration: 180 },
    ]);
    console.log("Test results validation: OK");
} catch (error) {
    console.log("Test results validation: FAILED");
}