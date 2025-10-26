// ✅ Valid JSON format:
let validJson = `{
  "testName": "login_functionality",
  "status": "PASS",
  "duration": 250,
  "timestamp": "2024-01-15T10:30:00Z",
  "errors": null,
  "tags": ["authentication", "critical"],
  "passed": true
}`;

// JSON rules:
// 1. Property names MUST be in double quotes
// 2. String values MUST be in double quotes (not single quotes)
// 3. No trailing commas
// 4. No comments allowed
// 5. No undefined values (use null instead)

console.log("Valid JSON string:", validJson);
console.log("Parsed valid JSON:", JSON.parse(validJson));

// ❌ Invalid JSON examples:
// {testName: "test"}           // Missing quotes around property name
// {"testName": 'test'}         // Single quotes not allowed
// {"testName": "test",}        // Trailing comma not allowed
// {"value": undefined}         // undefined not allowed
