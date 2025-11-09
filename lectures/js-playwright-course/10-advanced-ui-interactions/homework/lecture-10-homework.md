<homework_assignment>

# Lecture 10 Homework Assignment: Advanced UI Interactions

## Overview

In this homework, you will practice advanced UI interactions in Playwright using only the concepts demonstrated in Lecture 10: complex form elements (dropdowns, checkboxes, radio, file uploads), selector strategies (text=, role=, nth, XPath, CSS) where helpful, and browser dialogs. You will create small, reusable pieces.

Estimated total time: ~3 hours.

## Assignment structure

- Task 1: Session Submission & Confirmation — form elements, file upload, validation dialog (90 min)
- Task 2: Tables — extract data, target rows, click actions (90 min)

Notes

- Use the local HTML pages created in the lecture under `lectures/10-advanced-ui-interactions/pages/`; Task 1 uses the homework-specific assets under `lectures/10-advanced-ui-interactions/homework/pages/`.
- Keep tests under `lectures/10-advanced-ui-interactions/homework/` to separate them from lecture demos.
- Use only APIs shown in the lecture (e.g., `page`, `locator`, `expect`, `selectOption`, `check/uncheck`, `setInputFiles`, `page.on('dialog')`, role/text/nth/XPath selectors). For resolving local file URLs, use the ESM URL pattern: `new URL(relativePath, import.meta.url).href`.

---

## Task 1: Session Submission & Confirmation

### Objective

Automate a complete submission flow using the summit session submission page: populate dropdowns, checkboxes, radio buttons, and file uploads; submit and verify the confirmation page shows the submitted information; and cover a negative case where a validation dialog blocks submission until acknowledged.

### What You'll Build

- A spec that fills and submits `registration-form.html` located under `homework/pages/` using the element-specific methods from the lecture, and verifies that `session-confirmation.html` displays the submitted information.
- A tiny helper function for resolving local file URLs (reused later).

### Step-by-Step instructions

1. Create folder `lectures/10-advanced-ui-interactions/homework/task01/`.
2. Create file `getLocalUrl.js` in the same folder:

- Export a function named `getLocalUrl(relativePath, baseUrl = import.meta.url)` that returns `new URL(relativePath, baseUrl).href`.
- Use `export function getLocalUrl(...) { ... }` (ESM). Pass `import.meta.url` from the caller when needed.

3. Create `session-submission.spec.js` in `task01/`.
4. At the top, import `{ test, expect }` from `@playwright/test` and `{ getLocalUrl }` from `./getLocalUrl.js`.
5. Define a constant `formUrl` by calling `getLocalUrl("../pages/registration-form.html", import.meta.url)` from your spec in `task01/`.
6. Test: Happy path — successful submission and confirmation
   - Navigate to the form.
   - Select a session format, choose at least one topic, select an audience level, accept the code of conduct, and attach one or more files.
   - Submit the form and wait for the session confirmation page.
   - Verify the confirmation page shows a success message and the summary reflects the chosen format label, selected topics, audience level label, and uploaded file name(s).
7. Test: Negative — validation blocks submission when required data is missing
   - Start on the form and intentionally omit one required input (for example: no format, no topics, no audience level, or the code of conduct not accepted).
   - Attempt to submit the form.
   - Verify a validation dialog appears with a clear message; confirm the dialog content and acknowledge it (OK).
   - Verify navigation does not occur (you remain on the form). Optionally repeat for other missing fields.

### Expected Deliverables

- `lectures/10-advanced-ui-interactions/homework/task01/getLocalUrl.js` (helper)
- `lectures/10-advanced-ui-interactions/homework/task01/session-submission.spec.js`

### Success Criteria

- Uses only lecture-shown methods and patterns.
- Happy path: the session confirmation page shows the selections and file names correctly after submit.
- Negative path: validation prevents submission and communicates the issue (no navigation occurs).
- Negative path: a validation dialog appears; its message is confirmed and acknowledged (OK), and submission is prevented (no navigation occurs).
- Tests are readable, with clear structure and minimal duplication.

---

## Task 2: Tables — Review & Moderate Submissions

### Objective

Work with the submissions table to review session proposals: verify structure and counts, approve a submission (alert dialog, status update without removal), and decline a submission (confirm dialog, row removal and count update).

### What You'll Build

- A spec that targets rows by visible speaker name and exercises Approve/Decline flows with dialog handling, while validating status pills and the Total submissions counter.

### Step-by-Step instructions

1. Create folder `homework/task02/` and file `tables.spec.js`.
2. Navigate to `lectures/10-advanced-ui-interactions/homework/pages/table-page.html` using `getLocalUrl` from Task 1.
3. Test A: Count and headers
   - Count the number of table rows (tbody > tr) and expect it to be 5.
   - Read all header texts and verify they match the expected list: `Speaker`, `Session Format`, `Topics`, `Audience Level`, `Files`, `Status`, `Actions`.
   - Verify the Total submissions value (`#total-count`) is `5`.
4. Test B: Approve Session — alert dialog + status update
   - Locate the row for a specific speaker (e.g., `John Doe`) by text and scope all finds within that row.
   - Before clicking Approve, register a one-time dialog handler and assert:
     - The dialog type is `alert`.
     - The message includes `Approved submission for John Doe.`
     - Accept the dialog.
   - Click the `Approve` button in that row.
   - Verify you remain on the same page and the row is still present.
   - In that row, assert the Status pill text becomes `Approved`.
   - Verify Total submissions (`#total-count`) is unchanged (still `5`).
5. Test C: Decline Session — confirm dialog + row removal
   - Locate a different speaker row (e.g., `Jane Smith`).
   - Before clicking Decline, register a one-time dialog handler and assert:
     - The dialog type is `confirm`.
     - The message includes `Are you sure you want to decline the submission for Jane Smith?`
     - Accept the dialog.
   - Click the `Decline` button in that row.
   - Verify that specific row is no longer present in the table.
   - Verify Total submissions (`#total-count`) decremented by 1 (now `4`).

### Expected Deliverables

- `lectures/10-advanced-ui-interactions/homework/task02/tables.spec.js`

### Success Criteria

- Correct counts and header list validated.
- Approve flow: alert handled, row stays, status updates to `Approved`, total unchanged.
- Decline flow: confirm handled, row removed, total decremented accordingly.
- Row-scoped targeting without brittle selectors; dialog handling prevents hangs.

## Submission Guidelines

### What to Submit

Commit and push the following new/updated files:

- `lectures/10-advanced-ui-interactions/homework/task01/getLocalUrl.js`
- `lectures/10-advanced-ui-interactions/homework/task01/session-submission.spec.js`
- `lectures/10-advanced-ui-interactions/homework/task02/tables.spec.js`

### How to Verify Your Work

- Run each spec by file path in headed mode and observe the browser actions.
- Ensure all assertions from each task pass consistently.
- If your repo config limits `testDir`, run by file path (the lecture covered this pattern).

---

## Time Management Tips

- Tackle tasks in order; each one makes the next easier.
- If a selector fails, pause and inspect rather than guessing.
- Add `console.log` breadcrumbs before and after key steps for clarity.

### Common Issues

- Forgetting `await` before Playwright actions and `expect(...)`.
- Confusing `nth()` (0-based) with CSS `:nth-child()` (1-based).
- Clicking options in `<select>` instead of using `selectOption()`.
- Using `click()` on checkboxes instead of `check()/uncheck()`.
- Not setting a dialog handler before clicking a button that triggers a dialog.

### Getting Help

- Revisit the exact examples from Lecture 10 for each API you’re using.

---

## Troubleshooting Support

### Common Issues

- Test hangs on alert/confirm:
  - Add `page.on('dialog', ...)` or `page.once('dialog', ...)` before the click.
- File upload didn’t register:
  - Ensure you call `setInputFiles` on the `<input type="file">` element and pass an absolute path (use your `getLocalUrl` pattern to navigate, and `path.resolve` to build file system paths).
- Specs outside configured `testDir`:
  - Run by file path as shown in Lecture 10/09 if needed.

### Getting Help

- Use console output as a map of your test’s progress; print key values (URL, visible text, counts).
- Compare your code to the relevant snippet in Lecture 10 to ensure API names and selector syntax match exactly.

</homework_assignment>
