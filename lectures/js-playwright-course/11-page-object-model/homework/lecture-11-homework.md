<homework_assignment>

# Lecture 11 Homework Assignment: The Page Object Model (POM)

## Overview

In this homework, you will refactor your Lecture 10 homework tests to use the Page Object Model. You will reuse the same scenarios and local pages from Lecture 10 Homework and replace script-style tests with page objects and clean, business-level tests. Use only techniques shown in Lecture 11 (plus previously covered fundamentals: classes from Lecture 6, async/await from Lecture 8, and Playwright basics from Lectures 9–10).

Estimated total time: 6.5–7 hours (beginner pace).

## Assignment structure

- Task 1 (Why POM): Analyze duplication in Lecture 10 HW and design your POM APIs (45 min)
- Task 2 (Session Submission): Build SessionFormPage + SessionConfirmationPage (1 hr 45 min)
- Task 3 (Refactor Submission Flow): Convert Task 1 submission tests to POM (1 hr 15 min)
- Task 4 (Submissions Table): Build SubmissionsTablePage (1 hr 15 min)
- Task 5 (Refactor Table Flow): Convert Task 2 table tests to POM (1 hr)
- Integration Task: POM regression suite running both flows (30–45 min)

Keep your homework in a separate folder to avoid mixing with lecture demos:

- Page Objects: `lectures/11-page-object-model/homework/page-objects/`
- Tests: `lectures/11-page-object-model/homework/tests/`

You will reuse the same HTML pages from Lecture 10 Homework under:

- `lectures/10-advanced-ui-interactions/homework/pages/registration-form.html`
- `lectures/10-advanced-ui-interactions/homework/pages/session-confirmation.html` (as used by your HW)
- `lectures/10-advanced-ui-interactions/homework/pages/table-page.html`

Keep your POM code under `lectures/11-page-object-model/homework/` and reference the Lecture 10 pages using module-relative URLs, for example:

- `new URL("../../10-advanced-ui-interactions/homework/pages/registration-form.html", import.meta.url).href`
- or reuse the `getLocalUrl` helper you created in Lecture 10 Homework.

---

## Task 1: Identify Duplication in Lecture 10 HW and Design Your POM

### Objective

Identify repeated locators and interaction patterns in your Lecture 10 Homework tests and design small POM APIs that remove duplication and improve readability.

### What You'll Build

- A short design note (markdown) describing your POM plan for both flows:
  - Session submission & confirmation
  - Submissions table moderation
- Skeleton classes (without implementation yet) defining constructor properties and method signatures:
  - `SessionFormPage` and `SessionConfirmationPage`
  - `SubmissionsTablePage`

### Step-by-Step instructions

1. Create folder `lectures/11-page-object-model/homework/notes/` and file `pom-design.md`.
2. Open your Lecture 10 Homework tests (the ones you wrote for Tasks 1 and 2).
3. In `pom-design.md`, list:
   - The repeated locators (IDs or selectors) you see and how many times they appear.
   - The repeated action sequences (e.g., fill username, fill password, click login).
   - The test intent expressed in business language (e.g., “complete submission and verify confirmation”, “approve/decline specific speaker”).
   - Proposed APIs (6–12 methods each) for:
     - `SessionFormPage` (actions like select format, set topics, select audience, upload files, accept code of conduct, submit)
     - `SessionConfirmationPage` (expose locators for success message and summary fields)
     - `SubmissionsTablePage` (find row by speaker, read headers, read status, approve, decline, read total count)
4. Create skeleton files under `lectures/11-page-object-model/homework/page-objects/`:
   - `SessionFormPage.js`, `SessionConfirmationPage.js`, `SubmissionsTablePage.js`
   - Each constructor should accept `page` and set a `url` property pointing to the corresponding Lecture 10 page (module-relative `new URL(..., import.meta.url).href` recommended). Do not implement methods yet—only empty method stubs you listed.

### Expected Deliverables

- `lectures/11-page-object-model/homework/notes/pom-design.md`
- `lectures/11-page-object-model/homework/page-objects/SessionFormPage.js` (skeleton)
- `lectures/11-page-object-model/homework/page-objects/SessionConfirmationPage.js` (skeleton)
- `lectures/11-page-object-model/homework/page-objects/SubmissionsTablePage.js` (skeleton)

### Success Criteria

- Design note clearly identifies duplication and proposes a concise POM API.
- Class skeleton compiles (valid syntax), with all required properties and method signatures present.

---

## Task 2: Implement the Session Submission Page Objects

### Objective

Implement locator properties and action methods on `SessionFormPage` and `SessionConfirmationPage` so they encapsulate the full submission flow and expose locators for assertions.

### What You'll Build

- Complete classes that:
  - Store all locators once in each constructor using `page.locator(...)`.
  - Provide atomic actions and one high-level method for the end-to-end submission.
  - Expose locators for verification on the confirmation page.

### Step-by-Step instructions

1. Open `SessionFormPage.js` and set `this.url` to the Lecture 10 registration page using module-relative URL (see examples above).
2. In the constructor, initialize locator properties for all elements your Lecture 10 HW interacted with. Use the exact IDs from the page (inspect them):
   - Format dropdown (e.g., `#format`), topics checkboxes (e.g., `#topic-*`), audience radio group (e.g., `#audience-*`), file input, code-of-conduct checkbox, submit button.
3. Implement methods (names as designed in Task 1), for example:
   - `navigate()` → go to `this.url`.
   - `selectFormat(valueOrLabel)` → use `selectOption` (by value or `{ label }`).
   - `setTopics(items, shouldCheck = true)` → `check()`/`uncheck()` specific topic checkboxes; return boolean indicating all reached desired state.
   - `selectAudience(level)` → check the correct radio.
   - `uploadFiles(paths)` → `setInputFiles` (accept single path or array).
   - `acceptCodeOfConduct()` and `clickSubmit()`.
   - `completeSubmission(data)` → high-level method that performs the entire flow using the methods above.
4. Open `SessionConfirmationPage.js` and expose locators for the elements you verify in Lecture 10 (e.g., success message, selected format/ topics/ audience/ files summary). Provide small getters or keep them as public locator properties—assert in tests with `expect(locator)`.
5. Keep assertions out of the page objects. Prefer `expect(locator)` in tests (Lecture 11 best practice).

### Expected Deliverables

- Updated `lectures/11-page-object-model/homework/page-objects/SessionFormPage.js` and `SessionConfirmationPage.js` (fully implemented).

### Success Criteria

- All locators created once in each constructor.
- High-level `completeSubmission()` combines the atomic actions.
- Tests (in Task 3) can import and use these page objects without direct selectors in the test body.

---

## Task 3: Refactor Session Submission Tests to Use POM

### Objective

Refactor your Lecture 10 Session Submission tests to use `SessionFormPage` and `SessionConfirmationPage`, removing direct locator usage from tests.

### What You'll Build

- A new spec file that rewrites your Lecture 10 scenarios using POM:
  - Happy path (successful submission and confirmation)
  - Negative case (validation prevents submission and shows a dialog)

### Step-by-Step instructions

1. Create `lectures/11-page-object-model/homework/tests/submission-with-pom.spec.js`.
2. Import `{ test, expect }` from `@playwright/test`, `{ SessionFormPage }`, and `{ SessionConfirmationPage }`.
3. Write two tests mirroring your Lecture 10 HW:
   - Happy path:
     - Arrange: create `SessionFormPage`, call `navigate()`.
     - Act: call `completeSubmission({ format, topics, audience, files })`.
     - Assert: create `SessionConfirmationPage` (or navigate via URL), then use `expect(locator)` asserts for success message and summary values.
   - Negative path:
     - Arrange: `navigate()`.
     - Act: fill partially (omit one required input) and `clickSubmit()`.
     - Assert: handle the dialog with `page.on('dialog', ...)` and verify no navigation occurred (still on form page).
4. Keep tests readable; use business-level methods and `test.step(...)` only for high-level steps if desired.

### Expected Deliverables

- `lectures/11-page-object-model/homework/tests/submission-with-pom.spec.js`

### Success Criteria

- Zero direct references to form selectors in tests (only via page objects).
- Tests read like user stories: navigate → complete submission → verify confirmation.
- All assertions use locator-based `expect(...)` with automatic waiting.

---

## Task 4: Implement the SubmissionsTablePage (Table Moderation)

### Objective

Encapsulate the table moderation page to support counting, reading headers, approving, declining, and reading total submissions.

### What You'll Build

- One page object: `SubmissionsTablePage`.

### Step-by-Step instructions

1. Create `lectures/11-page-object-model/homework/page-objects/SubmissionsTablePage.js`.
2. Set `this.url` to the table page using module-relative URL.
3. In the constructor, define locator properties:
   - Table element, header cells, tbody rows, total count element, and common buttons within a row (Edit/Approve/Decline as applicable in your HW page).
4. Implement methods:
   - `navigate()` → go to `this.url`.
   - `getRowBySpeaker(name)` → returns a locator scoped to the row with the given speaker name.
   - `getHeaders()` → returns an array of header texts (`allTextContents()`).
   - `getTotalCount()` → returns the parsed number from the total count element.
   - `approve(name)` → click Approve within the targeted row (dialog handling stays in the test).
   - `decline(name)` → click Decline within the targeted row (dialog handling stays in the test).
   - `getStatus(name)` → returns the status text from the targeted row.

### Expected Deliverables

- `lectures/11-page-object-model/homework/page-objects/SubmissionsTablePage.js` (implemented)

### Success Criteria

- No direct table selectors in tests; actions go through `SubmissionsTablePage`.
- Methods support the same validations you wrote in Lecture 10 HW.

---

## Task 5: Refactor Table Tests to Use POM

### Objective

Refactor your Lecture 10 “Tables — Review & Moderate Submissions” tests to use `SubmissionsTablePage`.

### What You'll Build

- A spec file with three tests that mirror Lecture 10 HW:
  - Count and headers
  - Approve Session — alert dialog + status update (row remains; total unchanged)
  - Decline Session — confirm dialog + row removal (total decrements)

### Step-by-Step instructions

1. Create `lectures/11-page-object-model/homework/tests/tables-with-pom.spec.js`.
2. Import `{ test, expect }` and `{ SubmissionsTablePage }`.
3. For any test that triggers a dialog, register `page.once('dialog', ...)` before clicking Approve/Decline. Assertions remain in the test; actions route through page object methods.
4. Use only locator-based `expect(...)` for verification and keep tests free of raw selectors.

### Expected Deliverables

- `lectures/11-page-object-model/homework/tests/tables-with-pom.spec.js`

### Success Criteria

- Tests do not contain raw CSS/XPath/role/text selectors; they use page object properties/methods.
- Assertions cover the same outcomes as Lecture 10 HW.

---

## Integration Task: POM Regression Suite (Both Flows)

### Objective

Run both refactored flows (submission + tables) using your page objects with minimal additional code.

### What You'll Build

- One spec (or two tests in a single spec) that imports the page objects and executes both flows end-to-end.

### Step-by-Step instructions

1. Create `lectures/11-page-object-model/homework/tests/pom-regression.spec.js`.
2. Test A: Execute the happy path for submission using `SessionFormPage` → verify using `SessionConfirmationPage`.
3. Test B: Open the table page and perform one Approve and one Decline scenario using `SubmissionsTablePage` with dialog handlers.
4. Keep steps at business level via `test.step(...)` if you like.

### Expected Deliverables

- `lectures/11-page-object-model/homework/tests/pom-regression.spec.js`

### Success Criteria

- Minimal new logic outside of page objects; tests are orchestration and assertions only.

---

## Submission Guidelines

### What to Submit

Commit and push the following new/updated files:

- `lectures/11-page-object-model/homework/notes/pom-design.md`
- `lectures/11-page-object-model/homework/page-objects/SessionFormPage.js`
- `lectures/11-page-object-model/homework/page-objects/SessionConfirmationPage.js`
- `lectures/11-page-object-model/homework/page-objects/SubmissionsTablePage.js`
- `lectures/11-page-object-model/homework/tests/submission-with-pom.spec.js`
- `lectures/11-page-object-model/homework/tests/tables-with-pom.spec.js`
- `lectures/11-page-object-model/homework/tests/pom-regression.spec.js`

Organize commits clearly (one commit per task is recommended). Open a pull request titled “Lecture 11 Homework – POM”.

### How to Verify Your Work

- Run only your homework specs by file path to avoid mixing with demos (the lecture showed module-relative URLs and running specific files).
- All tests should pass repeatedly without flakiness. Assertions should use `expect(locator)` so Playwright can auto-wait.

---

## Time Management Tips

- Start with the design (Task 1). A clear API makes coding faster.
- Implement atomic actions first, then compose into one high-level method per flow.
- Keep page objects silent (no `expect` inside) and let tests assert.
- Use `test.step("...", async () => { ... })` sparingly to document business steps, as shown in the lecture examples.

### Common Issues

- Forgetting to use module-relative URLs: construct with `new URL("../../10-advanced-ui-interactions/homework/pages/....html", import.meta.url).href` (or reuse your `getLocalUrl` helper).
- Mixing selectors back into tests: all selectors should stay in page objects.
- Embedding assertions in page objects: expose locators and assert in tests.
- Overusing `waitFor(...)` when `expect(locator)` already auto-waits.

### Getting Help

- Revisit Lecture 11 examples (`RegistrationFormPage` pattern, naming conventions, locator exposure) for patterns and naming conventions.
- Compare your method names against the lecture’s best practices (verbs for actions; `is/has` for booleans; `waitFor...` for waits).

---

## Troubleshooting Support

### Common Issues

- Test hangs on dialog:
  - Register `page.once('dialog', ...)` before clicking the action that triggers it.
- Locators not found:
  - Double-check IDs against the HTML in `lectures/10-advanced-ui-interactions/homework/pages/`.
- Flakiness with manual waits:
  - Prefer locator-based `expect(...)` which auto-waits; remove redundant explicit waits.

### Getting Help

- Print small breadcrumbs with `console.log` in tests to locate where a failure occurs.
- If a selector breaks, fix it in one place: inside the page object’s constructor.

</homework_assignment>
