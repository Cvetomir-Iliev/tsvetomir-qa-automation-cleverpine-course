<homework_assignment>

# Lecture 4 Homework Assignment: Advanced Arrays

## Overview

In this homework you’ll practice the advanced array techniques from Lecture 4 and apply them to realistic QA automation data tasks. You’ll build small, reusable utilities with map, filter, reduce, sort, and array destructuring. Each task produces functions you’ll reuse in a final “Advanced Test Analytics Dashboard” integration.

Estimated total time: 6.9 hours (see per-task estimates below)

## Assignment structure

- Task 1: Transform data with map (1.2h)
- Task 2: Select subsets with filter (1.2h)
- Task 3: Aggregate metrics with reduce (1.8h)
- Task 4: Order reports with sort (1.2h)
- Task 5: Extract values with destructuring (0.8h)
- Integration Task: Advanced Test Analytics Dashboard (0.7h)

All tasks live under: lectures/04-advanced-arrays/homework/
Each task creates one file with clearly named functions. In the final integration, you’ll reuse these functions with minimal extra code. Use only concepts shown in the lecture: Array.map, Array.filter, Array.reduce, Array.sort (with compare functions), array destructuring, length, includes, slice, basic if/else, template strings, and for/while/forEach for simple logging if needed.

---

## Task 1: Transform data with map

### Objective

Build pure transformation utilities using Array.map that convert raw testing values into formatted, human-readable artifacts for reports.

### What You'll Build

- Functions that transform statuses to visual labels
- Functions that format response times and generate test emails
- No side effects: return new arrays; do not modify inputs

### Step-by-Step instructions

1. Create folder: lectures/04-advanced-arrays/homework/task01
2. Create file: map-transformations.js
3. Add a function named buildVisualStatuses that:
   - Parameter: results (array of strings like "PASS", "FAIL", "SKIP")
   - Uses map with function(result) { ... } to return a new array
   - For "PASS" return a string that starts with a check mark and includes the word PASSED
   - For "FAIL" return a string that starts with a cross mark and includes the word FAILED
   - For any other status return a string that starts with a skip icon and includes the word SKIPPED
   - Return the new array
4. Add a function named formatExecutionTimes that:
   - Parameter: times (array of numbers in milliseconds)
   - Uses map to convert each number into a string that ends with "ms"
   - Return the new array
5. Add a function named generateTestEmails that:
   - Parameter: ids (array of numbers)
   - Uses map to return an array of strings like "testuser<ID>@example.com"
   - Return the new array
6. Add a function named ratePerformance that:
   - Parameter: times (array of numbers)
   - Uses map to convert each time to a label: "Fast" if < 300, "Normal" if < 1000, otherwise "Slow"
   - Return the new array
7. At the bottom of the file, add simple console.log calls to demonstrate each function with a tiny sample (3–4 items). Keep samples minimal; focus on verifying output shape.

### Expected Deliverables

- map-transformations.js with four functions: buildVisualStatuses, formatExecutionTimes, generateTestEmails, ratePerformance
- Each function returns a new array and does not modify inputs

### Success Criteria

- Uses Array.map with function(...) { ... } callbacks as shown in lecture
- Uses only lecture techniques (no external libs, no advanced language features beyond examples)
- Clear console output shows expected transformed values

---

## Task 2: Select subsets with filter

### Objective

Create utilities with Array.filter to build focused “views” of test data for analysis.

### What You'll Build

- Filters for failed results, high-priority tests, slow tests, and keyword-based selection

### Step-by-Step instructions

1. Create folder: lectures/04-advanced-arrays/homework/task02
2. Create file: filter-views.js
3. Add a function named getFailedResults that:
   - Parameter: results (array of strings like "PASS", "FAIL", "SKIP")
   - Uses filter to return only entries equal to "FAIL"
4. Add a function named getHighPriorityTests that:
   - Parameter: tests (array of arrays shaped like [name, status, time, priority])
   - Uses filter to return only tests whose priority is exactly "HIGH"
   - Use array destructuring inside the filter callback to access elements
5. Add a function named getSlowTests that:
   - Parameter: tests (array of arrays shaped like [name, status, time, priority])
   - Uses filter to return only tests with time > 1000
   - Use destructuring to read the time value
6. Add a function named findTestsByKeyword that:
   - Parameters: names (array of strings), keyword (string)
   - Uses filter with includes to return only names containing the keyword
7. Add minimal console.log calls to show each filter returning expected subsets.

### Expected Deliverables

- filter-views.js with four functions: getFailedResults, getHighPriorityTests, getSlowTests, findTestsByKeyword

### Success Criteria

- Uses Array.filter with boolean-returning callbacks as in lecture
- Uses includes and destructuring exactly as shown
- Output arrays contain only items that match stated criteria

---

## Task 3: Aggregate metrics with reduce

### Objective

Use Array.reduce to compute metrics such as counts, averages, and extremes, following the accumulator patterns from the lecture.

### What You'll Build

- Status counters with an array accumulator
- Average time for passed tests
- Slowest test finder

### Step-by-Step instructions

1. Create folder: lectures/04-advanced-arrays/homework/task03
2. Create file: reduce-metrics.js
3. Add a function named countResultsByType that:
   - Parameter: results (array of strings: "PASS", "FAIL", "SKIP")
   - Uses reduce with an array accumulator [passCount, failCount, skipCount], initial value [0, 0, 0]
   - Inside, increment the appropriate index based on the current result
   - Return the final accumulator array
4. Add a function named averageTimeForPassed that:
   - Parameters: results (array of strings), times (array of numbers, same length)
   - Uses reduce with accumulator [totalTime, passedCount], initial [0, 0]
   - Only when the current result is "PASS", add time to totalTime and increment passedCount
   - After reduce, compute average = passedCount > 0 ? totalTime / passedCount : 0
   - Return the average (number)
5. Add a function named findSlowestTest that:
   - Parameters: names (array of strings), times (array of numbers, same length)
   - Uses reduce to track the index of the slowest test seen so far
   - Start with initial index 0 (if arrays are non-empty); if arrays might be empty, handle that by returning -1
   - On each step, compare current time to time at slowestIndex and return the index to keep
   - Return the slowest test name (if arrays empty, return an empty string)
6. Add console.log calls to verify each function with a small sample set. For readability, you may use toFixed(1) when printing averages.

### Expected Deliverables

- reduce-metrics.js with three functions: countResultsByType, averageTimeForPassed, findSlowestTest

### Success Criteria

- Uses Array.reduce with an explicit initial value
- Accumulator shapes match lecture patterns (arrays of counts/numbers)
- Average and slowest computations are correct for simple samples

---

## Task 4: Order reports with sort

### Objective

Produce ordered views of data using Array.sort with comparison functions, including index-based sorts and a custom priority order.

### What You'll Build

- Sorting by execution time (ascending and descending)
- Sorting names by length
- Sorting by business priority using a priority order mapping

### Step-by-Step instructions

1. Create folder: lectures/04-advanced-arrays/homework/task04
2. Create file: sort-reports.js
3. Add a function named sortIndicesByTime that:
   - Parameters: names (array of strings), times (array of numbers, same length)
   - Creates an indices array like [0, 1, 2, ...]
   - Returns a new array: indices.slice().sort(function(a, b) { return times[a] - times[b]; })
   - This returns indices ordered from fastest to slowest
4. Add a function named sortNamesByLength that:
   - Parameter: names (array of strings)
   - Returns names.slice().sort(function(a, b) { return a.length - b.length; })
5. Add a function named sortByPriority that:
   - Parameter: priorities (array of strings like "HIGH", "MEDIUM", "LOW")
   - Creates a local mapping object: { HIGH: 1, MEDIUM: 2, LOW: 3 }
   - Returns priorities.slice().sort(function(a, b) { return mapping[a] - mapping[b]; })
6. Add a function named sortFailedByPriorityThenTime that:
   - Parameter: tests (array of arrays shaped [name, status, time, priority]) containing only failed tests
   - Creates the same mapping for priority
   - Returns tests.slice().sort(function(a, b) {
     - Compare priority first using mapping; if equal, compare time descending (slower first)
       })
7. Add console.log calls to demonstrate each sort on a tiny sample. Confirm sorts do not mutate your original inputs by showing originals before/after.

### Expected Deliverables

- sort-reports.js with four functions: sortIndicesByTime, sortNamesByLength, sortByPriority, sortFailedByPriorityThenTime

### Success Criteria

- Uses slice().sort with comparison functions as in lecture
- Correct numeric comparisons for times (not string comparisons)
- Priority sort follows HIGH, MEDIUM, LOW order

---

## Task 5: Extract values with destructuring

### Objective

Practice array destructuring to access values clearly and combine it with map/filter/reduce in small, focused utilities.

### What You'll Build

- Destructuring-based readers for a single test row
- A chain that filters, maps, and sorts results using destructuring inside each step

### Step-by-Step instructions

1. Create folder: lectures/04-advanced-arrays/homework/task05
2. Create file: destructuring-utils.js
3. Add a function named readTestRow that:
   - Parameter: row (array shaped [name, status, time, priority])
   - Uses destructuring to get name, status, time, and priority
   - Returns a string summary: "<status> <name> (<time>ms) - <priority>"
4. Add a function named extractFirstLast that:
   - Parameter: arr (array with at least 2 elements)
   - Uses destructuring to get the first and last elements (use arr.length - 1 for the last)
   - Returns a two-element array [first, last]
5. Add a function named quickPassedAlphabetical that:
   - Parameter: tests (array of arrays [name, status, time, priority])
   - Uses a method chain (exact order): filter -> map -> sort
   - In filter: destructure to read status and time; keep only PASS with time < 500
   - In map: return only the name (destructure name)
   - In sort: alphabetical (default string sort)
   - Return the final names array
6. Log a few demonstration calls to verify outputs.

### Expected Deliverables

- destructuring-utils.js with three functions: readTestRow, extractFirstLast, quickPassedAlphabetical

### Success Criteria

- Uses array destructuring exactly as taught
- Method chaining order is correct and clear
- Outputs match described formats

---

## Integration Task: Advanced Test Analytics Dashboard

### Objective

Combine the utilities from Tasks 1–5 to produce a single, readable dashboard output from one test dataset with minimal new work.

### What You'll Build

- A single script that loads a small in-file dataset, reuses your utilities, and prints a compact analytics report

### Step-by-Step instructions

1. Create file: lectures/04-advanced-arrays/homework/advanced-analytics-dashboard.js
2. At the top, define one dataset named rawTestData as an array of arrays with this shape: [name, status, time, priority]. Include 6–8 rows mixing PASS/FAIL/SKIP, various times, and different priorities.
3. Re-create or paste in only the functions you need from your Task files. Keep names identical to what you wrote earlier to avoid confusion.
4. Produce these sections (print headers to the console):
   - "=== FORMATTED REPORTS ===":
     - Use your map functions (Task 1) to display visual statuses and formatted times
   - "=== FILTERED VIEWS ===":
     - Use your filter functions (Task 2) to log: failed count, high-priority count, slow count
   - "=== METRICS ===":
     - Use reduce functions (Task 3) to log: [pass, fail, skip] array, average time for passed tests (use toFixed(1) for display), and the slowest test name
   - "=== SORTED ===":
     - Use sort functions (Task 4) to show first three tests by speed (fastest first) and failed tests ordered by priority then time
   - "=== QUICK PASSED (A-Z) ===":
     - Use your Task 5 quickPassedAlphabetical to print the final list
5. Keep the integration focused on reusing your existing functions. Only write a few glue lines to adapt between shapes (e.g., extracting parallel arrays of names, results, times).

### Final Integration Test

1. Run: node lectures/04-advanced-arrays/homework/advanced-analytics-dashboard.js
2. Verify the output shows all five sections with reasonable values for your dataset.
3. Confirm you reused functions from your task files with minimal new logic.

### Expected Deliverables

- advanced-analytics-dashboard.js producing a readable multi-section console report

### Success Criteria

- Reuses Task 1–5 utilities with minimal additional code
- Uses only methods demonstrated in the lecture
- Output clearly communicates transformations, filters, metrics, and ordering

---

## Submission Guidelines

### What to Submit

- The entire lectures/04-advanced-arrays/homework/ folder containing:
  - task01/map-transformations.js
  - task02/filter-views.js
  - task03/reduce-metrics.js
  - task04/sort-reports.js
  - task05/destructuring-utils.js
  - advanced-analytics-dashboard.js
- A short README note in the homework folder (optional) describing how to run the integration file

Submit your changes via GitHub by committing to your course repository and pushing your branch. Include clear commit messages like: "Lecture 4 homework: map/filter/reduce/sort/destructuring + integration".

### How to Verify Your Work

- From repository root, run:
  - node lectures/04-advanced-arrays/homework/advanced-analytics-dashboard.js
- Check that console output contains all sections and looks reasonable given your data.
- Skim each task file to ensure functions follow the naming and behavior described.

---

## Time Management Tips

- Keep samples tiny while developing (3–6 items). You can scale later.
- Focus on one method family per task; avoid mixing too many concerns.
- If you’re stuck, re-open the lecture examples and mirror the exact patterns.

### Common Issues

1. Sorting numbers incorrectly with default sort: always provide a compare function for numeric sort.
2. Mutating original arrays with sort: use slice() before sort to keep originals.
3. Confusing map vs. forEach: map returns a new array; use it when you need the transformed array.
4. Destructuring order mistakes: ensure the array order matches [name, status, time, priority].

### Getting Help

- Re-read the lecture code snippets for map, filter, reduce, sort, and destructuring.
- Use console.log inside callbacks to inspect parameters.
- Test each function in isolation with 2–3 elements before chaining.

---

## Troubleshooting Support

### Common Issues

- Reduce without an initial value: always pass an explicit initial accumulator (e.g., [0,0,0]).
- Average calculation off: ensure you divide by the count you actually accumulated (e.g., passedCount only).
- Filter callback returns non-boolean: return a strict condition (true/false), not strings or numbers.
- Priority sort wrong: verify your mapping object matches HIGH=1, MEDIUM=2, LOW=3 and that you compare mapping[a] - mapping[b].

### Getting Help

- Add temporary logs to show intermediate arrays between steps of a chain.
- If a chain is confusing, split it into named steps (first filter, then map, then sort) and log after each.
- Keep function shapes exactly as specified; rename variables inside but keep parameter order and return types.

---

</homework_assignment>
