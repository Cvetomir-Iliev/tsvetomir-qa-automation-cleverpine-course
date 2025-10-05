# DevTools Step-by-Step Demo for QA Automation Students

**Demo sites:** [Google](https://www.google.com), [Example](https://example.com)

---

## Step 1: Open a Demo Site

- Suggested: https://www.google.com or https://example.com

## Step 2: Open DevTools

- Press **F12**, or
- Right-click anywhere on the page and select **Inspect**

## Step 3: Practice with the Console Tab

Type the following commands in the Console:

```javascript
console.log("Hello from DevTools!");
// Get the page title
console.log("Page title:", document.title);
// Get the current page URL
console.log("Current URL:", window.location.href);
// Count all links on the page
console.log("Total links:", document.querySelectorAll("a").length);
// Count all buttons on the page
console.log("Total buttons:", document.querySelectorAll("button").length);
// Get the text of the first heading (h1)
let firstHeading = document.querySelector("h1");
console.log(
  "First heading:",
  firstHeading ? firstHeading.textContent : "No h1 found"
);
```

## Step 4: Explore the Elements Tab

- Click the **Elements** tab
- Hover over HTML elements to see them highlighted on the page
- Right-click an element and select **Copy > Copy selector** (useful for Playwright selectors)

## Step 5: Check the Network Tab

- Use demo site: [ExpandTesting API Demo](https://practice.expandtesting.com/notes/api/api-docs/#/)
- Click the **Network** tab
- Reload the page (**F5**)
- Observe API calls, status codes, and loading times

## Step 6: Modify the Page (Temporary)

- In the Elements tab, double-click any text to edit it
- Change a button label or headline to see instant results

## Step 7: Debug JavaScript Errors

- In the Console, type: `console.error('This is a test error');`
- See how errors appear and can be used for troubleshooting

## Step 8: Find Selectors for Automation

- Use the Elements tab to inspect and copy selectors for Playwright tests

## Step 9: Summary

- DevTools help you inspect, debug, and understand web applications
- **Console tab:** Run code, view logs/errors
- **Elements tab:** Inspect HTML, find selectors
- **Network tab:** Monitor API calls
- Practice these steps on [Google](https://www.google.com) or [Example](https://example.com)
