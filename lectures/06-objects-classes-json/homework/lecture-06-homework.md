<homework_assignment>

# Lecture 6 Homework Assignment: Objects, Classes, and JSON

## Overview

In this homework, you will practice modeling test data with Objects, building reusable blueprints with Classes, and exchanging data using JSON. Each task stays strictly within the concepts demonstrated in the lecture: object literals, dot/bracket property access, property updates, arrays of objects with map/filter/reduce, class constructor and this, instance methods, and JSON.stringify()/JSON.parse().

You’ll produce small, focused files that build toward a final, mini "Test Results Dashboard" integration.

Estimated total time: 7.3 hours

## Assignment structure

- Task 1: Object Modeling for Test Data (1.9h)
- Task 2: Classes for Reusable Blueprints (2.0h)
- Task 3: JSON Serialization and Parsing (1.6h)
- Integration Task: Mini Results Dashboard (1.8h)

All tasks live under: `lectures/06-objects-classes-json/homework/`

Use only concepts shown in the lecture:

- Objects: literals, adding/modifying/deleting properties, dot/bracket access
- Arrays of objects + methods used in the lecture: `map`, `filter`, `reduce`
- Classes: `class`, `constructor`, `this`, instance methods
- JSON: `JSON.stringify()`, `JSON.parse()`
- String/number operations previously introduced (e.g., `includes`, `length`, `toFixed(1)`)

---

## Task 1: Object Modeling for Test Data

### Objective

Practice creating and manipulating objects that represent QA concepts (users, tests, API responses) and use array methods (from the lecture) to compute basic metrics.

### What You'll Build

- A `testConfig` object with a few configuration properties.
- Three `testUser` objects with realistic fields.
- A `testCases` array of test case objects.
- Small utilities that work on `testCases` using `filter`, `map`, and `reduce`.

### Step-by-Step instructions

1. Create folder: `lectures/06-objects-classes-json/homework/task-01`
2. Create file: `task-01-objects.js`
3. Define a `testConfig` object with at least these properties:
   - `suiteName` (string)
   - `environment` (string, e.g., "staging")
   - `maxTimeoutMs` (number)
     Use dot notation to add a new property after creation (e.g., `retryCount`).
4. Create three user objects: `testUser1`, `testUser2`, `testUser3`. Each should include:
   - `username` (string), `email` (string), `password` (string), `role` (string), `active` (boolean)
     Access at least one property with bracket notation (e.g., `user["role"]`).
5. Create an array `testCases` containing 5–8 objects. Each test object must have:
   - `name` (string), `status` ("PASS" | "FAIL" | "SKIP"), `duration` (number in ms), `priority` ("high" | "medium" | "low")
6. Implement the following simple utilities (as standalone functions or object methods):
   - `getFailedTests(cases)` → returns array of test objects where status is "FAIL" (use `filter`).
   - `getHighPriorityNames(cases)` → returns array of names for tests with priority "high" (use `filter` + `map`).
   - `getTotalDuration(cases)` → returns total duration in ms (use `reduce`).
7. Add a few `console.log` checks to verify outputs (e.g., counts, arrays of names, totals). Keep arrays small.

### Expected Deliverables

- `task-01/task-01-objects.js` defining `testConfig`, `testUser1..3`, `testCases`, and the three utilities, with minimal console checks.

### Success Criteria

- Uses only lecture-demonstrated features (object literal, dot/bracket access, `map`/`filter`/`reduce`).
- Utilities return correct results for small sample data.
- Properties are accessed and modified using both dot and bracket notation at least once.

---

## Task 2: Classes for Reusable Blueprints

### Objective

Use classes to create consistent, reusable structures for test users and test cases. Practice constructors, `this`, and instance methods.

### What You'll Build

- `TestUser` class with validation and summary methods.
- `TestCase` class with basic lifecycle fields and helpers.

### Step-by-Step instructions

1. Create folder: `lectures/06-objects-classes-json/homework/task-02`
2. Create file: `task-02-classes.js`
3. Implement a `TestUser` class:
   - Constructor parameters: `username`, `email`, `password`, `role` (string), `active` (boolean)
   - Inside constructor, assign to `this.username`, `this.email`, etc.
   - Add instance methods:
     - `isValidEmail()` → returns boolean using `this.email.includes("@")` and a simple length check.
     - `isValidPassword()` → returns boolean using a minimum length (e.g., `>= 8`); may also check for letters/numbers with simple `includes` if you like.
     - `validate()` → returns boolean combining the two checks above.
     - `getInfo()` → returns a single string summarizing username, role, and active status.
4. Implement a `TestCase` class:
   - Constructor parameters: `name`, `description`
   - Initialize fields: `this.name`, `this.description`, `this.status = "PENDING"`, `this.duration = 0` (ms)
   - Add instance methods:
     - `start()` → sets `this.status = "RUNNING"`
     - `complete(status, durationMs)` → sets `this.status` and `this.duration` (number)
     - `getSummary()` → returns a string combining name, status, and formatted duration (e.g., `this.duration + "ms"` or `(this.duration/1000).toFixed(1) + "s"` if `>= 1000`)
5. Create 1–2 instances of each class and log method outputs to confirm behavior.

### Expected Deliverables

- `task-02/task-02-classes.js` containing both classes and minimal instance demos via `console.log`.

### Success Criteria

- Uses only features covered in the lecture (`class`, `constructor`, `this`, simple methods).
- Methods return values or strings exactly as described.
- No external libraries or advanced syntax required.

---

## Task 3: JSON Serialization and Parsing

### Objective

Convert your objects to JSON strings and back. Confirm that the parsed results can be used like normal objects/arrays.

### What You'll Build

- Simple helpers for JSON conversion and quick validity checks.

### Step-by-Step instructions

1. Create folder: `lectures/06-objects-classes-json/homework/task-03`
2. Create file: `task-03-json.js`
3. Create a small `userProfile` object (or reuse the shape from Task 1), and a small `caseList` array of test case objects (3–5 items).
4. Implement two helpers:
   - `toJson(value)` → returns `JSON.stringify(value)`
   - `fromJson(jsonString)` → returns `JSON.parse(jsonString)`
5. Use the helpers to:
   - Convert `userProfile` to JSON and log the type before/after conversion (expect `object` → `string`).
   - Parse the JSON back and confirm property access works (e.g., read `email`, `role`).
   - Convert `caseList` to JSON and parse it back; confirm array length and one element’s `name`.
6. Keep the examples small and readable; do not use advanced JSON options.

### Expected Deliverables

- `task-03/task-03-json.js` with the two helpers and minimal console checks demonstrating stringify/parse in both directions.

### Success Criteria

- Uses only `JSON.stringify()` and `JSON.parse()` as in the lecture.
- Demonstrates object and array round-trips.
- Clear, correct logging shows types and property access before/after.

---

## Integration Task: Mini Results Dashboard

### Objective

Integrate your objects, classes, and JSON utilities to produce a compact console report for a tiny dataset with minimal new code.

### What You'll Build

A single script that:

- Defines a small dataset of test cases.
- Uses your `TestCase` and `TestUser` classes (or re-creates them minimally) to simulate a tiny run.
- Computes summary metrics with your array utilities.
- Exports a JSON summary string using your JSON helpers.

### Step-by-Step instructions

1. Create file: `lectures/06-objects-classes-json/homework/task-04-integration.js`
2. At the top, define a small dataset:
   - `users`: create 1–2 users using `TestUser` (or plain objects if you prefer; keep fields consistent).
   - `cases`: create 5–6 items (same shape as in Task 1), and update a few with `status` and `duration` using your `TestCase` methods or simple property assignments.
3. Reuse the utilities from previous tasks (copy minimal code as needed):
   - From Task 1: `getFailedTests`, `getHighPriorityNames`, `getTotalDuration`
   - From Task 2: `TestUser`, `TestCase` (or the parts you need)
   - From Task 3: `toJson`, `fromJson`
4. Print these sections to the console:
   - `=== BASIC METRICS ===`
     - Total cases, total duration (ms), number of FAILs
   - `=== PRIORITY HIGHLIGHTS ===`
     - High priority test names (array)
   - `=== USER VALIDATION ===`
     - For each user: `getInfo()` and `validate()` result
   - `=== JSON SUMMARY ===`
     - Build a `report` object with a few fields (e.g., `suiteName`, `environment`, `totalCases`, `failedCount`, `highPriorityNames`)
     - Convert to JSON with `toJson` and log the string, then parse it back with `fromJson` and log one field to confirm it round-trips.
5. Keep logic minimal—focus on reusing your previously written code.

### Final Integration Test

From repository root, run the integration file and verify the console includes all sections above with reasonable values for your dataset.

### Expected Deliverables

- `task-04-integration.js` producing a readable console output with all sections.

### Success Criteria

- Functions/classes/utilities are reused with minimal new code.
- Output demonstrates counting, selection, formatting, and JSON conversion.
- No duplicated logic—update logic in one place and reuse it.

---

## Submission Guidelines

### What to Submit

- The entire `lectures/06-objects-classes-json/homework/` folder containing:
  - `task-01/task-01-objects.js`
  - `task-02/task-02-classes.js`
  - `task-03/task-03-json.js`
  - `task-04-integration.js`
- Optional: a short `README.md` in the homework folder with how to run the integration file.

### How to Verify Your Work

- Run each file with Node and inspect the console output.
- Check that metrics and validations match your small datasets.
- Confirm that JSON round-trips preserve the expected fields.

---

## Time Management Tips

### Common Issues

- Overbuilding datasets: keep arrays tiny (3–8 items) during development.
- Forgetting to return from methods or helpers (results in `undefined`).
- Mixing up dot vs. bracket notation when property names contain special characters.
- Using array methods incorrectly—review the lecture’s `filter`, `map`, and `reduce` patterns.

### Getting Help

- Add temporary `console.log` statements to inspect intermediate values.
- Compare your function/class shapes with the lecture examples to ensure consistency.

---

## Troubleshooting Support

### Common Issues

- `this` is `undefined` in class methods → Ensure you call methods on instances (e.g., `user.isValidEmail()`), not standalone function references.
- JSON parse errors → Ensure the string is valid JSON and that you used `JSON.stringify()` before `JSON.parse()`.
- Wrong totals or counts → Re-check your `reduce` initial value and your `filter` conditions.
- Unexpected `undefined` properties → Verify exact property names and whether you’re using dot vs. bracket access correctly.

### Getting Help

- Log types before/after JSON conversion (e.g., `typeof value`).
- Print intermediate arrays from `filter`/`map` to verify they contain what you expect.
- Re-open the lecture snippets for exact method shapes and patterns.
  </homework_assignment>
