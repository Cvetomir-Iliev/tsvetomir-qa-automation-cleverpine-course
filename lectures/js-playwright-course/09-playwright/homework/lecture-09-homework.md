# Lecture 9 Homework Assignment: Playwright Introduction & First Test

## Overview

In this homework, you will set up Playwright and write your first positive and negative UI tests against a public demo site (http://training.skillo-bg.com:4300). All tasks stay strictly within Lecture 9 content and reuse artifacts you create along the way.

Estimated total time: about 4 h (≤ 4.5 h)

## Assignment structure

- Task 1 (Setup): Install Playwright and configure project (60 min)
- Task 2 (Positive path): First successful login test (90 min)
- Task 3 (Negative path): Error and empty-field scenarios (90 min)

---

## Task 1: Project Setup and First Sanity Run

### Objective

Install Playwright, confirm the repository configuration, and run a short sanity test against the public demo site.

### What You'll Build

- A working Playwright setup at the repository root
- A short sanity spec that opens the public demo and navigates to the login page

### Step-by-Step instructions

1. In the project root, install Playwright and browser binaries.
   - Use the commands shown in Lecture 9 to install the test runner and browsers.
2. Ensure `playwright.config.js` exists at repo root and `testDir` points to `lectures/09-playwright/tests` (as demonstrated in Lecture 9). Do not add any new options beyond what the lecture showed.
3. Create `lectures/09-playwright/homework/task01/setup-sanity.spec.js` with one short test that:
   - Imports `{ test, expect }` from Playwright.
   - Uses `await page.goto("http://training.skillo-bg.com:4300/posts/all")`.
   - Verifies the URL equals `http://training.skillo-bg.com:4300/posts/all`.
   - Clicks the Login link in the top navigation bar.
   - Verifies the URL equals `http://training.skillo-bg.com:4300/users/login`.
4. Run just this test in headed mode and confirm it passes.

Note: Running specs outside testDir

If you place a spec outside the configured `testDir` (for example, in `lectures/09-playwright/homework/`), run it by file path:

```bash
npx playwright test lectures/09-playwright/homework/task02/login-positive.spec.js --headed
```

### Expected Deliverables

- `lectures/09-playwright/homework/task01/setup-sanity.spec.js`

### Success Criteria

- Playwright is installed and browsers are available.
- The sanity test opens the public site, navigates to login, and verifies both URLs.

---

## Task 2: Positive Path — Successful Login (Public Site)

### Objective

Write your first complete UI test against the public site that performs a successful login and verifies navigation to the profile page and basic profile info.

### What You'll Build

- A positive login test that logs into the public site and opens the profile page

### Step-by-Step instructions

1. Create `lectures/09-playwright/homework/task02/login-positive.spec.js`.
2. Import `{ test, expect }` from `@playwright/test`.
3. In a single test:
   - Navigate to `http://training.skillo-bg.com:4300/posts/all`.
   - Click the Login link in the top navigation bar.
   - Assert URL equals `http://training.skillo-bg.com:4300/users/login`.
   - Verify the Sign in button is visible (avoid non-lectured matchers like toBeEnabled).
   - Fill the Username or email field with your email and the Password field with your password.
   - Click the Sign in button.
   - Assert the Profile link in the navbar is visible, then click it.
   - Assert the profile URL matches a numeric id pattern: `await expect(page).toHaveURL(/\/users\/\d+$/);`
   - Assert the profile heading `h2` is visible; optionally verify it contains your username.
4. Run this test by file path in headed mode:
   ```bash
   npx playwright test lectures/09-playwright/homework/task02/login-positive.spec.js --headed
   ```

### Expected Deliverables

- `lectures/09-playwright/homework/task02/login-positive.spec.js`

### Success Criteria

- The test performs a successful login using only actions and assertions demonstrated in Lecture 9.
- All assertions pass and the browser visibly navigates to the profile page.

Success Tips

- Use only page, locator, expect, async/await as shown in Lecture 9.
- Prefer `toBeVisible()` over `toBeEnabled()` to stay within the lecture’s covered assertions.
- Use a regex URL assertion instead of hardcoding a user id.
  - Example (hint): `await expect(page).toHaveURL(/\/users\/\d+$/);`

---

## Task 3: Negative Path — Invalid Credentials and Empty Fields (Public Site)

### Objective

Create tests that validate error handling and form validation behavior for the login page.

### What You'll Build

- A small negative test suite covering invalid credentials and empty-field submission on the public site

### Step-by-Step instructions

1. Create `lectures/09-playwright/homework/task03/login-negative.spec.js`.
2. Test A — Invalid credentials:
   - Navigate to `http://training.skillo-bg.com:4300/users/login`.
   - Fill the Username or email field with an invalid email (for example, `wrong@example.com`).
   - Fill the Password field with an invalid password (for example, `badpassword`).
   - Click the Sign in button.
   - Assert you remain on the login page: `await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login")`.
   - Assert the Sign in button is visible and the Profile link in the navbar is not visible.
   - Optional: Assert that an error message "Wrong username or password!" is shown (if the site displays it).
3. Test B — Empty field submission:
   - Navigate to `http://training.skillo-bg.com:4300/users/login`.
   - Click the Sign in button without typing anything.
   - Assert that you remain on the login page URL and that the Sign in button is disabled.
   - Assert the Profile link in the navbar is not visible.
   - Optionally try only username or only password and confirm you still don’t navigate away.
4. Keep the actions and assertions exactly as shown in Lecture 9 (no methods beyond those demonstrated).

### Expected Deliverables

- `lectures/09-playwright/homework/task03/login-negative.spec.js`

### Success Criteria

- Both tests reliably assert error visibility and login-page stay when inputs are invalid or empty.
- No navigation to the home page occurs in negative scenarios.

---

## Submission Guidelines

### What to Submit

- The following files added/updated in your repo:
  - `lectures/09-playwright/homework/task01/setup-sanity.spec.js`
  - `lectures/09-playwright/homework/task02/login-positive.spec.js`
  - `lectures/09-playwright/homework/task03/login-negative.spec.js`

### How to Verify Your Work

- Run each file (or the whole lecture folder) in headed mode to observe actions.
- Ensure the positive test reaches the profile page and shows the expected profile UI (e.g., profile heading or visible Profile link in the navbar).
- Ensure negative tests keep you on the login page and show the error.
- Run `lectures/09-playwright/homework/task02/LoginTest.spec.js` by file path in headed mode and verify profile navigation works with your credentials.

---

## Time Management Tips

### Common Issues

- Forgetting to use `await` for Playwright actions and expect assertions.
- Using selectors that don’t exist in the provided HTML (double-check IDs and text).
- Not using headed mode when learning; it’s harder to see what’s happening.
- Error: "No tests found." Try:
  - Make sure you're running the correct path. If the spec is outside `testDir`, run it by file path (see note above), for example:
    - `npx playwright test lectures/09-playwright/homework/task02/login-positive.spec.js --headed`
  - Ensure the filename matches Playwright's default pattern (ends with `.spec.js/.ts`) or your `testMatch` config.
  - If running without a file path, ensure the file is inside the configured `testDir` (`lectures/09-playwright/tests` per lecture).
  - Confirm the file contains at least one `test(...)` and it isn't skipped with `test.skip(...)`.
  - If you use `-g` or "grep" filters, verify the pattern matches an existing test name.

### Getting Help

- Add `console.log` statements before and after each action to understand flow.
- If an assertion fails, log the current URL and page title to confirm where you are.

---

## Troubleshooting Support

### Common Issues

- Cannot find module `@playwright/test`: reinstall dev dependency and browsers at repo root.
- Test timeout exceeded: keep your tests small and ensure selectors match; increase timeout only if needed as shown in the lecture examples.
- Element not found: confirm the selector using the browser's dev tools and ensure the element is visible.
- Browser not showing: add the headed flag from the lecture when running tests.
- Error: "No tests found." Try:
  - Verify you're pointing the runner at an existing test file. If your spec is outside `testDir`, run it by file path, e.g.:
    - `npx playwright test lectures/09-playwright/homework/task01/setup-sanity.spec.js --headed`
  - Ensure the file ends with `.spec.js/.ts` (or matches `testMatch`) and resides under `testDir` when not specifying a path.
  - Confirm you actually have a `test(...)` defined (not commented or skipped).
  - Check any name filters (`-g`, `--grep`) to ensure they match an existing test name.

### Getting Help

- Revisit Lecture 9 sections on page, locator, and expect.
- Use Playwright’s official docs pages referenced in the lecture for the same APIs you used here.
- Keep your tests independent and small; fix one failure at a time.
