// File: lectures/10-advanced-interactions/tests/exercise.spec.js
import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;
const dynamicPageUrl = new URL("../pages/dynamic-page.html", import.meta.url)
  .href;
const framePageUrl = new URL("../pages/frame-page.html", import.meta.url).href;

// TODO: Exercise 1 - Complete Form Test
test("exercise 1: complete registration form with validation", async ({
  page,
}) => {
  // Your tasks:
  // 1. Navigate to complex-form.html
  // 2. Select "United Kingdom" from country dropdown using selectOption()
  // 3. Check "Coding" and "DevOps" checkboxes
  // 4. Select "Advanced" experience level radio button
  // 5. Upload a test file
  // 6. Check the terms checkbox
  // 7. Submit the form
  // 8. Verify the result section appears
  // 9. Verify all your selections are displayed correctly
  // 10. Use console.log to track each step
  // Write your solution here
});

// TODO: Exercise 2 - Form Validation Test
test("exercise 2: test form validation errors", async ({ page }) => {
  // Your tasks:
  // 1. Navigate to complex-form.html
  // 2. Try to submit without filling anything
  // 3. Handle the alert dialog that appears
  // 4. Verify you're still on the form page
  // 5. Fill only the country field
  // 6. Try to submit again
  // 7. Handle the alert and verify error
  // 8. Add console.log statements to track progress
  // Hint: Set up page.on('dialog') handler before clicking submit
  // Write your solution here
});

// TODO: Exercise 3 - Use Different Selector Strategies
test("exercise 3: find elements using multiple selector strategies", async ({
  page,
}) => {
  // Navigate to complex-form.html
  // Find and interact with the submit button using:
  // 1. By ID (#submit-button)
  // 2. By text (text=Submit Registration)
  // 3. By role (role=button)
  // 4. By CSS selector with attribute
  // 5. By XPath
  // After each selector, verify the element exists
  // Use console.log to show which strategy you're testing
  // Example structure:
  // console.log('Testing ID selector...');
  // const button1 = page.locator('#submit-button');
  // await expect(button1).toBeVisible();
  // ... continue for other strategies
});

// TODO: Exercise 4 - Table Data Extraction
test("exercise 4: extract and verify table data", async ({ page }) => {
  // Navigate to table-page.html
  // Your tasks:
  // 1. Count total rows in the table
  // 2. Extract all user names and store in an array
  // 3. Find the row for "Bob Johnson"
  // 4. Verify Bob's status is "Inactive"
  // 5. Count how many users have "User" role
  // 6. Click Edit button for "Alice Williams"
  // 7. Handle the alert dialog
  // 8. Use console.log to display extracted data
  // Hint: Use loops (from Lecture 3) and array methods (from Lecture 4)
});

// TODO: Exercise 5 - Dynamic Content Handling
test("exercise 5: handle dynamic loading content", async ({ page }) => {
  // Navigate to dynamic-page.html
  // Your tasks:
  // 1. Click "Load Content" button
  // 2. Wait for loading indicator to appear
  // 3. Wait for loading indicator to disappear
  // 4. Verify content div is now visible
  // 5. Verify content contains correct text
  // 6. Click "Show Hidden Element" button
  // 7. Wait for hidden element to become visible
  // 8. Verify it contains "I was hidden!"
  // 9. Add console.log statements for each wait
  // Use waitFor() with different states
});

// TODO: Exercise 6 - Frame Interaction
test("exercise 6: interact with iframe content", async ({ page }) => {
  // Navigate to frame-page.html
  // Your tasks:
  // 1. Click button on main page
  // 2. Get frame locator for #my-frame
  // 3. Fill input inside frame with "Testing frames!"
  // 4. Click button inside frame
  // 5. Verify result appears inside frame
  // 6. Verify result text contains your input
  // 7. Use console.log to track main page vs frame actions
  // Hint: Use frameLocator()
});

// TODO: Exercise 7 - Dialog Handling
test("exercise 7: handle multiple dialog types", async ({ page }) => {
  // Navigate to dynamic-page.html
  // Your tasks:
  // 1. Set up a dialog handler that:
  //    - Logs the dialog type and message
  //    - Accepts alerts
  //    - Accepts confirms
  // 2. Click "Show Alert" button
  // 3. Verify alert was handled (no hang)
  // 4. Click "Show Confirm" button
  // 5. Verify confirm was handled
  // 6. Use console.log to show dialog handling
  // Remember: Set up handler BEFORE clicking buttons
});

// BONUS: Exercise 8 - Complete Application Flow
test("bonus: complete multi-page flow with all techniques", async ({
  page,
}) => {
  // Create a comprehensive test that:
  // 1. Fills out the registration form (complex-form.html)
  // 2. Uses at least 3 different selector strategies
  // 3. Handles file upload
  // 4. Submits form and verifies results
  // 5. Uses waitFor() for dynamic content
  // 6. Handles any dialogs that appear
  // 7. Extracts data from result section and logs it
  // This combines everything you learned today!
  // Make it realistic - add comments explaining each step
  // Use console.log extensively to track progress
});
