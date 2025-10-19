# Lecture 5 Homework Assignment: Functions & Code Organization

## Overview

In this homework, you’ll turn the lecture’s ideas into a small, reusable “test utilities” toolkit using functions. You’ll practice:

- Writing function declarations to remove duplication
- Using parameters and return values to pass data in/out
- Rewriting the same logic as a declaration, expression, and arrow function
- Applying scope correctly (global vs. function scope)
- Integrating your utilities into a simple, readable console report

Estimated total time: 7.1 hours

## Assignment structure

- Task 1: Refactor duplication with function declarations (1.5h)
- Task 2: Parameters and return values in practical validators/formatters (1.7h)
- Task 3: Function types: declarations vs. expressions vs. arrow functions (1.6h)
- Task 4: Scope: global vs. function scope (1.3h)
- Integration Task: Reusable Test Utilities Demo (1.0h)

All tasks live under: `lectures/05-functions-and-code-organization/homework/`

Each task produces a single file. The integration reuses your functions with minimal extra code.

Use only concepts shown in the lecture:

- Function declarations, function expressions, arrow functions
- Parameters and return values
- if/else, for loops, ternary operator (as used in examples)
- Array methods that appear in the lecture’s examples (map, filter, reduce)
- String methods that appear in the lecture’s examples (includes), number formatting via `toFixed(1)`

---

## Task 1: Refactor duplication with function declarations

### Objective

Remove repetitive logic by extracting it into clean, reusable function declarations.

### What You'll Build

A small set of utilities as function declarations that you can call multiple times:

- `countPassedTests(results)` — count "PASS" values in an array
- `formatExecutionTime(milliseconds)` — return `"123ms"` or `"1.2s"` based on size
- `findFailedTests(testNames, testResults)` — return names with status `"FAIL"`

### Step-by-Step instructions

1. Create folder: `lectures/05-functions-and-code-organization/homework/task01`
2. Create file: `functions-declarations-basics.js`
3. Add a function named `countPassedTests`:
   - Parameter: `results` (array of strings: `"PASS"`, `"FAIL"`, `"SKIP"`)
   - Inside, create a local counter variable starting at 0.
   - Use a `for` loop with an index to check each element.
   - If the element equals `"PASS"`, increment the counter.
   - Return the final count.
4. Add a function named `formatExecutionTime`:
   - Parameter: `milliseconds` (number)
   - If `< 1000`, return `<milliseconds> + "ms"`.
   - Else, compute seconds as `milliseconds / 1000`, then return the seconds formatted with `toFixed(1)` plus `"s"`.
5. Add a function named `findFailedTests`:
   - Parameters: `testNames` (array of strings), `testResults` (array of strings), same length.
   - Create a local array to collect failed names.
   - Use a `for` loop; at each index, if `testResults[i] === "FAIL"`, push `testNames[i]` into the local array.
   - Return the collected array.
6. At the bottom of the file, add a few `console.log` calls with tiny sample arrays (3–5 items) to verify outputs.

### Expected Deliverables

- `task01/functions-declarations-basics.js` exporting the three functions above (or simply defining them in the file) and minimal console demos.

### Success Criteria

- Each function is a function declaration (not expression/arrow).
- No code duplication inside the demos—call your functions instead of re-writing logic.
- Output matches expectations for simple test arrays and numbers.

---

## Task 2: Parameters and return values in practical validators/formatters

### Objective

Practice passing data into functions and getting useful results back, keeping the logic minimal and reusable.

### What You'll Build

Utility functions with clear inputs/outputs:

- `isValidEmail(email)` — simple format check using `includes` and length
- `formatDuration(milliseconds)` — same behavior as in lecture examples
- `generateTestEmail(baseName, domain)` — default domain when not provided

### Step-by-Step instructions

1. Create folder: `lectures/05-functions-and-code-organization/homework/task02`
2. Create file: `parameters-and-returns.js`
3. Add a function named `isValidEmail`:
   - Parameter: `email` (string)
   - Create three local booleans similar to the lecture example:
     - `hasAtSymbol` using `email.includes("@")`
     - `hasDotSymbol` using `email.includes(".")`
     - `isNotEmpty` using a length check `email.length > 0`
   - Return a single boolean that combines these (logical AND).
4. Add a function named `formatDuration`:
   - Parameter: `milliseconds` (number)
   - If `< 1000`, return the number with `"ms"`.
   - Else, return seconds with `toFixed(1)` and `"s"`.
5. Add a function named `generateTestEmail`:
   - Parameters: `baseName` (string), `domain` (string or undefined)
   - If `domain` is not provided (falsy), set it to a default like `"testcompany.com"`.
   - Return `baseName + "@" + domain`.
6. Add minimal `console.log` calls to verify each function:
   - For `isValidEmail`, test a valid email, an invalid one, and an empty string.
   - For `formatDuration`, test a value below 1000 and above 1000.
   - For `generateTestEmail`, test with and without passing a domain.

### Expected Deliverables

- `task02/parameters-and-returns.js` with three functions and minimal console demos.

### Success Criteria

- Each function has clear parameters and a `return` value.
- Only string methods shown in lecture are used (e.g., `includes`).
- Outputs match the behavior shown in the lecture examples.

---

## Task 3: Function types: declarations vs. expressions vs. arrow functions

### Objective

Re-implement the same logic three ways to build fluency with function declarations, function expressions, and arrow functions.

### What You'll Build

Two small utilities, each written three times:

- A result formatter: returns an icon + name + status
- An average time calculator: average of numbers

### Step-by-Step instructions

1. Create folder: `lectures/05-functions-and-code-organization/homework/task03`
2. Create file: `function-types.js`
3. Implement a “format test result” function in three variants:
   - `formatTestResultDecl(testName, status)` as a function declaration:
     - Use a ternary to choose `"✅"` for `"PASS"` and `"❌"` otherwise.
     - Return a single string combining icon, testName, and status (concatenation is fine).
   - `formatTestResultExpr` as a function expression assigned to a `let`:
     - Same logic as above.
     - End with a semicolon (expressions are assignments).
   - `formatTestResultArrow` as an arrow function assigned to a `let`:
     - Same logic as above.
4. Implement an “average time” function in three variants:
   - `calculateAverageDecl(numbers)` as a function declaration:
     - Compute the sum (use `Array.reduce` as shown in the lecture OR a `for` loop).
     - Return `sum / numbers.length`.
   - `calculateAverageExpr` as a function expression (same logic).
   - `calculateAverageArrow` as an arrow function (same logic).
5. Add `console.log` calls to demonstrate each variant works with the same inputs:
   - Call all three formatters with example names/statuses.
   - Call all three average functions with `[10, 20, 30]` and confirm consistent output.

### Expected Deliverables

- `task03/function-types.js` containing the six functions and minimal console demos.

### Success Criteria

- Correct use of each function type:
  - Declaration: `function name(...) { ... }`
  - Expression: `let name = function(...) { ... };`
  - Arrow: `let name = (...) => { ... };`
- Ternary operator used in the formatter (as in lecture examples).
- All three variants per utility produce the same results.

---

## Task 4: Scope: global vs. function scope

### Objective

Apply scope rules to organize config and behavior clearly, using global values inside function logic and keeping temporary variables local.

### What You'll Build

A tiny runner that uses global configuration and returns a result from inside a function.

### Step-by-Step instructions

1. Create folder: `lectures/05-functions-and-code-organization/homework/task04`
2. Create file: `scope-experiments.js`
3. At the top-level (global scope), define two variables as in the lecture examples:
   - `testEnvironment` (e.g., `"staging"`)
   - `maxRetries` (e.g., `3`)
4. Add a function named `runTest(testName)` (function declaration):
   - Inside the function, create local variables (e.g., `attempts`, `testResult`).
   - Use simple if/else to set `testResult` to `"PASS"` or `"FAIL"` (you can base it on `attempts` vs. `maxRetries` to simulate behavior).
   - Return a single string summarizing: test name, environment, attempts, and result.
5. Add a function named `configureRetries(newMaxRetries)`:
   - Assign the global `maxRetries` to `newMaxRetries`.
   - Return the updated `maxRetries` to confirm the change.
6. Demonstrate scope behavior:
   - `console.log` global values before/after calling `configureRetries`.
   - Call `runTest` a couple of times and log its returned value.
   - Inside `runTest`, log a local variable; then (outside the function) try to log the same local variable but leave it commented with a note like: “Uncommenting this line causes an error because the variable is function-scoped.”

### Expected Deliverables

- `task04/scope-experiments.js` with the two functions and minimal console demos.

### Success Criteria

- Global variables read correctly inside functions.
- Local (function-scoped) variables are not available outside the function.
- Behavior matches the lecture’s scope examples.

---

## Integration Task: Reusable Test Utilities Demo

### Objective

Reuse your functions from Tasks 1–4 to produce a compact console report for a tiny dataset, with minimal new code added.

### What You'll Build

A single script that:

- Defines a small dataset of test names, results, and times
- Prints a “mini report” using your existing utilities
- Shows how function organization reduces duplication

### Step-by-Step instructions

1. Create file: `lectures/05-functions-and-code-organization/homework/reusable-test-utilities-demo.js`
2. At the top, define three small arrays of equal length:
   - `names` (e.g., 6–8 test names)
   - `results` (mix of `"PASS"`, `"FAIL"`, `"SKIP"`)
   - `times` (numbers in ms)
3. Paste in or re-create only the functions you need (keep function names identical to your task files to avoid confusion). For example:
   - From Task 1: `countPassedTests`, `formatExecutionTime`, `findFailedTests`
   - From Task 2: `isValidEmail` (use during a small email validation demo), `formatDuration`
   - From Task 3: choose one variant for each utility (e.g., use your arrow format function)
   - From Task 4: you may reuse `runTest` once to illustrate scope (optional)
4. Print the following sections to the console:
   - `=== BASIC METRICS ===`
     - Total tests, passed count (`countPassedTests(results)`), and a simple calculated success rate (you may compute `(passed/total)*100` and use `toFixed(1)`).
   - `=== FAILURES ===`
     - The array returned by `findFailedTests(names, results)`.
   - `=== FORMATTED TIMES ===`
     - Map over `times` and print each as `formatExecutionTime(t)`.
   - `=== EMAIL VALIDATION (SAMPLE) ===`
     - Show two or three `isValidEmail` checks (valid/invalid).
5. Keep the integration focused on reusing your functions. Only write a few “glue” lines to map data into the shape each function expects.

### Final Integration Test

1. From repository root, run:
   - `node lectures/05-functions-and-code-organization/homework/reusable-test-utilities-demo.js`
2. Verify your console shows all sections with reasonable values for your dataset.

### Expected Deliverables

- `reusable-test-utilities-demo.js` producing readable console output with all sections.

### Success Criteria

- Functions are reused with minimal new logic.
- Output demonstrates counting, selection, formatting, and validation from your utilities.
- No duplicated logic—changes belong in one function and apply everywhere it’s used.

---

## Submission Guidelines

### What to Submit

- The entire `lectures/05-functions-and-code-organization/homework/` folder containing:
  - `task01/functions-declarations-basics.js`
  - `task02/parameters-and-returns.js`
  - `task03/function-types.js`
  - `task04/scope-experiments.js`
  - `reusable-test-utilities-demo.js`
- Optional: a short `README.md` in the homework folder with how to run the integration file.

### How to Verify Your Work

- From repository root, run:
  - `node lectures/05-functions-and-code-organization/homework/reusable-test-utilities-demo.js`
- Check:
  - Metrics look correct for your arrays
  - Failures list matches the `"FAIL"` entries
  - Times are formatted as `"ms"` or `"s"`
  - Email validation returns `true/false` as expected

---

## Time Management Tips

- Keep demo arrays tiny (3–8 items) while developing.
- Write the function first, then add two or three `console.log` tests to confirm behavior.
- If you’re stuck, re-open the lecture examples and mirror the exact patterns (especially for function types and scope).

### Common Issues

- Forgetting to `return` from a function (you’ll get `undefined`).
- Using a function expression without a semicolon at the end of the assignment.
- Confusing declaration vs. expression vs. arrow syntax (triple-check the patterns).
- Referencing a function-scoped variable outside the function (results in an error).
- Formatting seconds without `toFixed(1)` when the lecture expects it.

### Getting Help

- Add temporary `console.log` statements inside your functions to inspect parameters and intermediate values.
- Compare your function shapes to the lecture’s examples to ensure consistency.

---

## Troubleshooting Support

### Common Issues

- “Success rate looks wrong”: Ensure you’re dividing by the total number of tests and using `toFixed(1)` where applicable.
- “My function works but my integration prints the wrong values”: Confirm you’re passing matching array positions (names[i], results[i], times[i]) and the arrays have the same length.
- “Arrow function returns undefined”: If you used curly braces, include an explicit `return`. For single-expression arrow functions without braces, an implicit return is allowed.
- “Hoisting confusion”: Function declarations can be called before they are defined; function expressions and arrow functions can’t (they must be defined before use).

### Getting Help

- Log intermediate arrays and values to verify each step.
- Split complex prints into smaller steps: compute, store, then log the stored values.
- Re-check lecture code blocks for the exact patterns (declarations, expressions, arrows, scope).
