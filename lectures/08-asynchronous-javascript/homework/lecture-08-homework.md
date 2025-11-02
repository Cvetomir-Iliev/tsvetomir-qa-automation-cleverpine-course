# Lecture 8 Homework Assignment: Asynchronous JavaScript

## Overview

In this homework, you’ll practice the core async patterns used in modern JavaScript and Playwright tests. You will work with:

- Synchronous vs. asynchronous execution (observing execution order with setTimeout)
- Promises as the foundation of async work
- Handling results and errors using .then() and .catch()
- Writing cleaner async code with async/await
- Using try/catch to handle rejected promises from await

All tasks are intentionally small and build toward a final “Async Test Runner” integration. Stay strictly within the concepts demonstrated in the lecture: setTimeout, Promise construction (new Promise with resolve/reject), .then(), .catch(), async functions, await, try/catch, basic strings/numbers, arrays, simple objects, and console.log.

Estimated total time: 7.3–7.5 hours

## Assignment structure

- Task 1: Synchronous vs Asynchronous Execution (1.5h)
- Task 2: Promises with .then() and .catch() (2.0h)
- Task 3: async/await Basics (1.6h)
- Task 4: Handling Rejections with async/await + try/catch (1.6h)
- Integration Task: Async Test Runner (0.6–0.8h)

---

## Task 1: Synchronous vs Asynchronous Execution

### Objective

Understand the difference between synchronous and asynchronous execution order and create tiny, reusable delay utilities for later tasks.

### What You'll Build

- A delayed logger built with setTimeout
- A small delay-as-promise helper

### Step-by-Step instructions

1. Create folder: `lectures/08-asynchronous-javascript/homework/task-01`
2. Create file: `task-01-sync-vs-async.js`
3. Add a function `logSynchronousFlow()` that logs three messages in order (e.g., "Start", "Middle", "End"). Run it to see the immediate order.
4. Add a function `delayedLog(message, delayMs)` that uses `setTimeout(function() { /* log message */ }, delayMs)` to log a message after the specified delay.
5. Demonstrate ordering:
   - Log "Before delay".
   - Call `delayedLog("After 1000ms", 1000)`.
   - Log "After scheduling delay".
   - Observe the order in the console.
6. Add a function `delay(ms)` that returns a Promise using `new Promise(function(resolve, reject) { setTimeout(function() { resolve(/* any simple value, e.g., true */); }, ms); });`.
7. Export both helpers (or plan to copy-paste later): `delayedLog` and `delay` for reuse in later tasks.

### Expected Deliverables

- `task-01/task-01-sync-vs-async.js` with the two helpers and small console demonstrations.

### Success Criteria

- You can clearly observe that logs scheduled with `setTimeout` happen after synchronous logs.
- `delay(ms)` resolves successfully and can be reused later.

---

## Task 2: Promises with .then() and .catch()

### Objective

Create a realistic promise-based simulator and handle both success and failure using `.then()` and `.catch()`.

### What You'll Build

- `simulateApiCall(name, shouldFail)` that returns a Promise and resolves or rejects after a short delay
- A short demo that handles results with `.then()` and errors with `.catch()`

### Step-by-Step instructions

1. Create folder: `lectures/08-asynchronous-javascript/homework/task-02`
2. Create file: `task-02-then-catch.js`
3. Implement `simulateApiCall(name, shouldFail)`:
   - Return `new Promise(function(resolve, reject) { /* use setTimeout to simulate 800–1500ms delay */ })`.
   - Inside the timeout:
     - If `shouldFail` is true, call `reject(new Error("Request failed: " + name))`.
     - Otherwise, call `resolve({ name: name, status: "OK" })` with a simple object.
4. Demonstrate handling a success:
   - Call `simulateApiCall("login", false).then(function(result) { /* log success fields */ });`
5. Demonstrate handling an error:
   - Call `simulateApiCall("broken", true)
.then(function(result) { /* log unexpected */ })
.catch(function(error) { /* log error.message */ });`
6. Demonstrate a simple chain that transforms data:
   - Call the function for a success and in `.then(function(result) { /* return a new object with an added field like processed: true */ })`
   - Add a second `.then(function(transformed) { /* log transformed */ })`
   - End with `.catch(function(error) { /* log error.message */ })`.
7. Export or plan to reuse `simulateApiCall` in later tasks.

### Expected Deliverables

- `task-02/task-02-then-catch.js` with the promise-based simulator and demos.

### Success Criteria

- Success path prints a simple object.
- Failure path logs a clear error message from `.catch()`.
- A two-step `.then()` chain runs and logs the transformed result.

---

## Task 3: async/await Basics

### Objective

Use `async` and `await` to write readable asynchronous code that performs the same work as `.then()` but with cleaner flow.

### What You'll Build

- An async wrapper that awaits a promise from Task 2 and returns a simple result

### Step-by-Step instructions

1. Create folder: `lectures/08-asynchronous-javascript/homework/task-03`
2. Create file: `task-03-async-await-basics.js`
3. Reuse (by import or copy) `simulateApiCall` from Task 2.
4. Create an `async function runSingleOperation(name, shouldFail)`:
   - Log a starting message.
   - Use `await simulateApiCall(name, shouldFail)` to get the result.
   - Log the result and return it.
5. Demonstrate a successful call with `await` by invoking `runSingleOperation` and logging the final returned value using `.then(function(v) { /* log v */ })` (since top-level `await` might not be used, this keeps it simple).
6. Demonstrate a failing call without try/catch to see how the rejection behaves (for learning). Keep the failure call commented out if it prevents you from seeing the success path logs; you will handle errors properly in Task 4.
7. Export or plan to reuse `runSingleOperation`.

### Expected Deliverables

- `task-03/task-03-async-await-basics.js` with the async function and a small demo.

### Success Criteria

- The async function compiles and runs, awaiting the promise correctly.
- You can observe how a rejected promise behaves when not caught.

---

## Task 4: Handling Rejections with async/await + try/catch

### Objective

Use `try/catch` inside an `async` function to handle errors from `await` safely and return a consistent, test-friendly result.

### What You'll Build

- A safe async runner that normalizes success and failure into a small result object

### Step-by-Step instructions

1. Create folder: `lectures/08-asynchronous-javascript/homework/task-04`
2. Create file: `task-04-async-await-try-catch.js`
3. Reuse (by import or copy) `simulateApiCall` from Task 2.
4. Implement `async function runSafeOperation(name, shouldFail)`:
   - In a `try` block, `await simulateApiCall(name, shouldFail)` and return an object like `{ ok: true, name: name }` (include any simple fields you want).
   - In `catch (error)`, log `error.message` and return `{ ok: false, name: name }`.
5. Demonstrate both scenarios:
   - Call `runSafeOperation("profile", false)` and log the returned object using `.then(function(v) { /* log v */ })`.
   - Call `runSafeOperation("report", true)` and log the returned object using `.then(function(v) { /* log v */ })`.
6. Export or plan to reuse `runSafeOperation` in the integration.

### Expected Deliverables

- `task-04/task-04-async-await-try-catch.js` with a safe async function and demos for both success and failure.

### Success Criteria

- Both success and failure paths return an object with a consistent shape.
- No unhandled rejections occur; errors are handled via try/catch.

---

## Integration Task: Async Test Runner

### Objective

Combine your helpers into a tiny, readable runner that simulates preparing data, executing a few async “tests,” and printing a summary without crashes.

### What You'll Build

- A single script that:
  - Uses your delay helpers to simulate preparation
  - Executes several operations with a mix of pass/fail
  - Handles promise rejections safely with try/catch
  - Produces a small summary object at the end

### Step-by-Step instructions

1. Create folder: `lectures/08-asynchronous-javascript/homework/task-05`
2. Create file: `task-05-integration.js`
3. Reuse minimal copies (or import locally) from previous tasks:
   - From Task 1: `delayedLog`, `delay`
   - From Task 2: `simulateApiCall`
   - From Task 4: `runSafeOperation`
4. Simulate a short “prepare” phase:
   - Log "Preparing test data..." synchronously.
   - Call `delayedLog("Preparation step A done", 500)`.
   - Await `delay(700)` inside an `async function run()` to simulate a second preparation step.
5. Define a small array of 3–5 operations (strings for names). Mark 1–2 items to fail using a simple rule (for example, if the name includes a specific substring, set `shouldFail` to true).
6. Inside `async function run()`:
   - Loop through the array with a simple `for` loop.
   - For each item, call `await runSafeOperation(name, shouldFail)`.
   - Count successes and failures and push each result into a `results` array of plain objects.
7. Build a summary object with fields like `{ total, passed, failed }`.
8. Log the summary object.
9. Call `run()` at the bottom and ensure the script completes without unhandled errors.

### Final Integration Test

- Run the file with Node.
- Verify that preparation logs appear, each operation produces a result, and a summary is printed.

### Expected Deliverables

- `task-05/task-05-integration.js` that integrates your helpers and produces a short summary.

### Success Criteria

- The runner executes sequentially without unhandled rejections.
- The summary reflects the actual number of passed/failed operations.

---

## Submission Guidelines

### What to Submit

- The entire `lectures/08-asynchronous-javascript/homework/` folder containing:
  - `task-01/task-01-sync-vs-async.js`
  - `task-02/task-02-then-catch.js`
  - `task-03/task-03-async-await-basics.js`
  - `task-04/task-04-async-await-try-catch.js`
  - `task-05/task-05-integration.js`

### How to Verify Your Work

- Run each file with Node and inspect the console output.
- Confirm that failures do not crash the process and that error messages are clear.
- Check that the integration summary matches the actual outcomes of your simulated operations.

---

## Time Management Tips

### Common Issues

- Forgetting to return from `new Promise(...)` in your functions.
- Not calling `resolve` or `reject` inside the `setTimeout` callback.
- Accessing values from a promise without using `.then()` or `await`.
- Missing `catch` handlers leading to unhandled rejections.

### Getting Help

- Add `console.log` statements to trace execution order and values.
- If a promise never resolves, check your `setTimeout` and `resolve/reject` paths.
- If you see an unhandled rejection, wrap the `await` call in `try/catch` or add a `.catch()` at the end of the chain.

---

## Troubleshooting Support

### Common Issues

- "Then never runs": Ensure you’re returning the Promise from your function and invoking it.
- "UnhandledPromiseRejection": Wrap `await` calls in `try/catch` or add `.catch()`.
- "Out-of-order logs": This is expected with async. Use logs before/after scheduling and inside the timeout to understand the order.
- "Variables are undefined": Log inputs and returned values at each step to verify shapes.

### Getting Help

- Re-read the lecture examples for `setTimeout`, `new Promise(...)`, `.then()`, `.catch()`, `async`/`await`, and `try/catch`.
- Keep datasets tiny and delays short (500–1500ms) while developing.
- Keep your objects and arrays simple and consistent across steps.
