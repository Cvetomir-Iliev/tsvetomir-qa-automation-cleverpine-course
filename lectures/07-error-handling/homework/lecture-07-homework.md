# Lecture 7 Homework Assignment: Error Handling

## Overview

In this homework, you’ll practice defensive programming for QA automation using JavaScript’s error handling tools. You will work with:

- try...catch to prevent crashes and produce helpful feedback
- The error object (name, message) for diagnostics
- throw to create meaningful custom errors (Error, TypeError, RangeError)
- finally to guarantee cleanup

Each task is small and focused, and all tasks contribute to a final “Resilient Test Runner” integration. Stay strictly within the concepts demonstrated in the lecture: try/catch, error object, throw, finally, if/else, basic loops, strings (includes, length), numbers (toFixed), Array.isArray, typeof, JSON.parse/JSON.stringify, and simple objects.

Estimated total time: 7.3 hours

## Assignment structure

- Task 1: Safe Execution with try...catch (1.8h)
- Task 2: Custom Validation with throw (2.2h)
- Task 3: Guaranteed Cleanup with finally (1.5h)
- Integration Task: Resilient Test Runner (1.8h)

All tasks live under: `lectures/07-error-handling/homework/`

Keep datasets tiny (3–6 items) and output clear console logs to verify behavior.

---

## Task 1: Safe Execution with try...catch

### Objective

Use try...catch to gracefully handle common failure points and return safe, consistent results instead of crashing.

### What You'll Build

Small helper functions that wrap risky operations:

- `safeParse(jsonString)` → safely parse JSON
- `safeGetEmail(user)` → safely read a user’s email
- `safePush(resultsArray, value)` → safely push into an array
- `safeSuccessRate(passed, total)` → safely compute a percentage string

### Step-by-Step instructions

1. Create folder: `lectures/07-error-handling/homework/task-01`
2. Create file: `task-01-try-catch.js`
3. Implement `safeParse(jsonString)`:
   - Wrap `JSON.parse(jsonString)` in `try...catch`.
   - On success, return an object like `{ ok: true, data: parsed }`.
   - On error, catch it and return `{ ok: false, error: error.message }`.
4. Implement `safeGetEmail(user)`:
   - In a `try` block, read and return `user.email`.
   - If `user` is `null`/`undefined` or doesn’t have `email`, catch and return a default like `"<no-email>"`.
   - Log a helpful message using `error.message`.
5. Implement `safePush(resultsArray, value)`:
   - Try to call `resultsArray.push(value)`.
   - If it fails (e.g., `resultsArray` is `undefined`), catch and return `false`.
   - On success, return `true`.
6. Implement `safeSuccessRate(passed, total)`:
   - If `total` is `0`, handle it without throwing (e.g., return `"0.00%"`).
   - Otherwise, compute `passed / total`, and format with `toFixed(2)` inside `try...catch`.
   - On error, return `"N/A"` and log the error’s `message`.
7. Add a few `console.log` checks demonstrating:
   - Valid and invalid JSON strings.
   - `safeGetEmail` with a good object and with `null`.
   - `safePush` with a real array and with `undefined`.
   - `safeSuccessRate` with valid numbers and with `total = 0`.

### Expected Deliverables

- `task-01/task-01-try-catch.js` implementing all four helpers and minimal console checks.

### Success Criteria

- No crashes when inputs are invalid.
- Uses only `try...catch`, `error.message`, `typeof`, `JSON.parse`, numbers/strings, and simple objects/arrays.
- Returns consistent shapes (booleans/objects/strings as described).

---

## Task 2: Custom Validation with throw

### Objective

Create clear, actionable validation errors with `throw` to enforce data contracts.

### What You'll Build

Validation helpers that throw different error types with descriptive messages:

- `validateRequired(value, fieldName)` → throws `Error`
- `validateArray(data, fieldName)` → throws `TypeError`
- `validateRange(value, min, max, fieldName)` → throws `RangeError`
- `validateEmail(email)` → throws `Error` on simple invalid patterns
- `validatePassword(password)` → throws `Error` on simple invalid rules
- `validateTestResults(results)` → throws on invalid array shape

### Step-by-Step instructions

1. Create folder: `lectures/07-error-handling/homework/task-02`
2. Create file: `task-02-throw.js`
3. Implement `validateRequired(value, fieldName)`:
   - If `!value`, `throw new Error(fieldName + " is required")`.
4. Implement `validateArray(data, fieldName)`:
   - If `!Array.isArray(data)`, `throw new TypeError(fieldName + " must be an array")`.
5. Implement `validateRange(value, min, max, fieldName)`:
   - If `value < min || value > max`, `throw new RangeError(fieldName + " must be between " + min + " and " + max)`.
6. Implement `validateEmail(email)` using only lecture-friendly checks:
   - Require `email` to include `"@"` and `"."` and have `length >= 5`.
   - If invalid, `throw new Error("Invalid email format")`.
7. Implement `validatePassword(password)` with simple rules:
   - Require `length >= 8` and that it `includes` at least one number-like character (e.g., "0" to "9" checked with simple includes across a tiny array or short loop).
   - Throw `new Error("Password does not meet minimum requirements")` if invalid.
8. Implement `validateTestResults(results)`:
   - Use `validateArray(results, "Test results")`.
   - Require each item to be an object with `status` property equal to `"PASS"` or `"FAIL"` or `"SKIP"` and a numeric `duration >= 0`.
   - For any violation, throw `new Error("Invalid test result at index X")` with a helpful message.
9. Add demonstration calls wrapped in `try...catch` for each validator:
   - In each `catch`, log `error.name` and `error.message` (e.g., `Error`, `TypeError`, `RangeError`).

### Expected Deliverables

- `task-02/task-02-throw.js` with all validators and small console demos using `try...catch`.

### Success Criteria

- Uses only `throw` with `Error`, `TypeError`, `RangeError` and simple string/number checks.
- Error messages are specific and helpful.
- Demo logs show `error.name` and `error.message`.

---

## Task 3: Guaranteed Cleanup with finally

### Objective

Use `finally` to perform cleanup steps that must happen whether the operation succeeds or fails.

### What You'll Build

A small “resource” simulation with lifecycle flags and a runner that always cleans up:

- `connect()` / `disconnect()` → toggle a `connected` flag and log actions
- `runOperation(config)` → may succeed or throw based on simple conditions
- `runWithCleanup(config)` → uses `try...catch...finally` to ensure `disconnect()` is always called

### Step-by-Step instructions

1. Create folder: `lectures/07-error-handling/homework/task-03`
2. Create file: `task-03-finally.js`
3. Implement a module-level boolean `connected = false`.
4. Implement `connect()`:
   - If already connected, log a short note; otherwise set `connected = true` and log `"Connected"`.
5. Implement `disconnect()`:
   - If connected, set `connected = false` and log `"Disconnected"`; otherwise log a short note.
6. Implement `runOperation(config)`:
   - Expect a plain object with a boolean `shouldFail` and a `name` string.
   - If `!connected`, `throw new Error("Not connected")`.
   - If `shouldFail` is true, `throw new Error("Operation failed: " + config.name)`.
   - Otherwise, return a short success object (e.g., `{ ok: true, name: config.name }`).
7. Implement `runWithCleanup(config)`:
   - Call `connect()`.
   - In a `try` block, call `runOperation(config)` and store the result.
   - In `catch (error)`, log `error.message` and return a fallback object (e.g., `{ ok: false }`).
   - In `finally`, call `disconnect()`.
8. Add small demos:
   - One config that succeeds.
   - One config that fails.
   - Confirm via logs that `Disconnected` appears in both cases.

### Expected Deliverables

- `task-03/task-03-finally.js` implementing the lifecycle helpers and cleanup runner with small demos.

### Success Criteria

- `disconnect()` runs in both success and failure paths via `finally`.
- Only concepts from the lecture are used (`try`, `catch`, `finally`, `throw`, simple strings/booleans/objects).

---

## Integration Task: Resilient Test Runner

### Objective

Combine your helpers into a tiny, robust runner that validates input, executes small test steps safely, handles errors, and always cleans up.

### What You'll Build

A single script that:

- Parses test configuration JSON safely
- Validates configuration and test data with your validators
- Executes a few “tests” wrapped in `try...catch`
- Computes simple metrics without crashing
- Exports a JSON summary string

### Step-by-Step instructions

1. Create file: `lectures/07-error-handling/homework/task-04-integration.js`
2. At the top, define tiny inputs:
   - `configJson`: a JSON string with fields like `environment`, `baseUrl`, and `retries`.
   - `rawResults`: a small array (3–5 items) with test-like objects `{ name, status, duration }`.
3. Reuse minimal copies of your helpers (or import if you prefer local copy-paste for this exercise):
   - From Task 1: `safeParse`, `safeSuccessRate`
   - From Task 2: `validateRequired`, `validateArray`, `validateRange`, `validateTestResults`
   - From Task 3: `runWithCleanup`
4. Parse the config:
   - Use `safeParse(configJson)`.
   - If `ok` is false, log the error and stop the script early with a short message.
5. Validate the config:
   - Require `environment` (string, non-empty), `baseUrl` (string that includes `"http"`), and `retries` (number within a simple range, e.g., 0–5) using your validators.
6. Validate the results array with `validateTestResults(rawResults)`.
7. “Execute” each item with safety:
   - Loop through `rawResults`.
   - For each item, wrap a tiny operation in `try...catch` (e.g., if `status === "FAIL"`, throw; otherwise return a small per-test object).
   - Accumulate counts and durations. Keep logic simple.
8. Compute and log basic metrics:
   - Total cases
   - Failed count
   - Success rate string via `safeSuccessRate(passed, total)`
   - Total duration (sum durations in a loop)
9. Build a `report` object (e.g., `{ environment, totalCases, failedCount, successRate }`).
10. Convert it to JSON using `JSON.stringify(report)` and log the string.
11. For cleanup demonstration, call one `runWithCleanup({ name: "finalize", shouldFail: false })` and observe logs.

### Final Integration Test

From repository root, run the integration file with Node and verify the console includes all sections above with reasonable values for your dataset.

### Expected Deliverables

- `task-04-integration.js` producing readable console output with config parsing, validation, execution, metrics, JSON summary, and cleanup logs.

### Success Criteria

- Functions/classes/utilities are reused with minimal new code.
- Output demonstrates safe parsing, validation, error handling per test, metrics computation, and guaranteed cleanup.
- No crashes on bad inputs—errors are caught and reported.

---

## Submission Guidelines

### What to Submit

- The entire `lectures/07-error-handling/homework/` folder containing:
  - `task-01/task-01-try-catch.js`
  - `task-02/task-02-throw.js`
  - `task-03/task-03-finally.js`
  - `task-04-integration.js`
- Submit via GitHub by pushing your branch and sharing the repository link.

### How to Verify Your Work

- Run each file with Node and inspect the console output.
- Confirm that invalid inputs do not crash the script and that error messages are clear.
- Check that JSON summary strings round-trip when parsed back (optional quick check).

---

## Time Management Tips

### Common Issues

- Overbuilding datasets—keep arrays tiny (3–6 items) while developing.
- Forgetting to return values from helpers, leading to `undefined`.
- Using methods not shown in the lecture; stick to the basics listed above.
- Missing error messages—always include a clear `error.message` when logging.

### Getting Help

- Add `console.log` statements to inspect values in `try` and `catch` blocks.
- Compare your helper shapes with the lecture examples (`try/catch`, `throw`, `finally`, error types).

---

## Troubleshooting Support

### Common Issues

- `JSON.parse` errors → Use `safeParse` and log `error.message`.
- `TypeError: ... is not a function` → Check that arrays exist before calling `.push`.
- Incorrect success rate → Guard against `total === 0` and format with `toFixed(2)` on numbers only.
- Cleanup not running → Ensure `disconnect()` is called in a `finally` block.

### Getting Help

- Log `error.name` and `error.message` for thrown errors to quickly identify the problem.
- Validate inputs early using `validateRequired`/`validateArray`/`validateRange` to fail fast with good messages.
