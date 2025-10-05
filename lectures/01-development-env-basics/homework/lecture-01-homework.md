# Lecture 1 Homework Assignment: Foundation Building for QA Automation

## Overview

Welcome to your first homework assignment! This assignment is designed to reinforce the core concepts from Lecture 1 while building reusable components you'll use throughout the course. Each task creates practical files and functions that will serve as building blocks for more advanced automation work.

**Estimated Total Time: 7.5 hours** (broken down per task)

## Assignment Structure

This assignment follows a progressive building approach:
- **3 Core Tasks** - Each builds reusable components
- **1 Integration Task** - Combines your work into a complete QA workspace
- No copy/paste code blocks - you'll write everything step-by-step

---

## Task 1: Professional QA Environment Setup & Documentation
**Estimated Time: 2 hours**

### Objective
Create a professional development environment with proper documentation that any QA team member could follow.

### What You'll Build
- Complete project structure following industry standards
- Environment verification scripts
- Setup documentation for team sharing

### Step-by-Step Instructions

#### Step 1.1: Create Your QA Automation Project Structure (30 minutes)

1. Open your terminal or command prompt
2. Navigate to a location where you want to create your course projects (like Desktop or Documents)
3. Create a new directory called `qa-automation-course`
4. Navigate into this directory using the `cd` command
5. Create the following folder structure using `mkdir` commands:
   - `resources`
   - `lectures`
   - Inside the `lectures` folder, create: `01-development-env-basics`
   - Inside `01-development-env-basics`, create: `examples`, `practice`, `homework`

#### Step 1.2: Initialize Your Project with NPM (15 minutes)

1. While in your `qa-automation-course` directory, run the npm initialization command
2. When prompted, provide these details:
   - Name: Use your directory name (qa-automation-course)
   - Version: Keep default (1.0.0)
   - Description: "QA automation course project for learning JavaScript and Playwright"
   - Entry point: Keep default (index.js)
   - Test command: Leave empty for now
   - Git repository: Leave empty for now
   - Keywords: "qa automation testing javascript"
   - Author: Your name
   - License: Keep default

#### Step 1.3: Create Environment Verification Script (45 minutes)

1. Navigate to the `lectures/01-development-env-basics/homework/task01` folder
2. Create a new file called `verify-setup.js`
3. In this file, create a function called `checkNodeVersion` that:
   - Uses `process.version` to get the Node.js version
   - Uses `console.log` to display "Node.js version: [version]"
   - Returns the version string
4. Create a function called `checkNpmVersion` that:
   - Uses `process.env.npm_version || 'Not available'` to get NPM version
   - Logs the NPM version using console.log
   - Returns the version information
5. Create a function called `displayEnvironmentInfo` that:
   - Calls both previous functions
   - Uses `process.platform` to get the operating system
   - Uses `process.cwd()` to get current working directory
   - Logs all this information with clear labels
6. At the bottom of the file, call `displayEnvironmentInfo()` to run when the script executes

#### Step 1.4: Create Professional Documentation (30 minutes)

1. Navigate to the `lectures/01-development-env-basics/homework/task01` folder
2. Create a file called `environment-setup-guide.md`
3. Write a step-by-step guide that includes:
   - A heading "QA Automation Environment Setup Guide"
   - Prerequisites section listing Node.js and VS Code requirements
   - Installation verification steps using your script
   - Troubleshooting section with at least 3 common issues and solutions
   - A "Project Structure" section explaining what each folder is for
   - Use proper Markdown formatting (headers, code blocks, lists)

#### Step 1.5: Configure Professional VS Code Workspace (45 minutes)

1. In your root `qa-automation-course` directory, create a `.vscode` folder
2. Inside the `.vscode` folder, create `extensions.json` with the following content:
   ```json
   {
     "recommendations": [
       "esbenp.prettier-vscode",
       "dbaeumer.vscode-eslint", 
       "xabikos.javascriptsnippets",
       "mhutchie.git-graph"
     ]
   }
   ```
3. Create `settings.json` in the `.vscode` folder with these professional settings:
   ```json
   {
       "editor.formatOnSave": true,
       "editor.codeActionsOnSave": {
           "source.fixAll.eslint": "explicit"
       },
       "javascript.preferences.quoteStyle": "double",
       "files.autoSave": "afterDelay",
       "editor.defaultFormatter": "esbenp.prettier-vscode",
       "editor.bracketPairColorization.enabled": true,
       "editor.guides.bracketPairs": true
   }
   ```
4. Install ESLint and Prettier as development dependencies:
   ```bash
   npm install eslint --save-dev
   npm install prettier --save-dev
   ```
5. Run ESLint initialization:
   ```bash
   npx eslint --init
   ```
6. Follow the prompts to create an appropriate ESLint configuration for your project

### Expected Deliverables
- Organized project folder structure following course standards
- Working `verify-setup.js` script that runs without errors
- Professional documentation in Markdown format
- Initialized package.json file
- Configured VS Code workspace with extensions and settings
- Installed and configured ESLint and Prettier

### Success Criteria
- Your verification script displays all environment information correctly
- Your project structure follows professional QA standards
- Your documentation is clear enough for a teammate to follow

---

## Task 2: JavaScript Test Data Management System
**Estimated Time: 2.5 hours**

### Objective
Build a reusable system for managing test data using JavaScript variables, constants, and basic validation functions.

### What You'll Build
- Test data configuration files
- Data validation functions
- Environment-specific configurations

### Step-by-Step Instructions

#### Step 2.1: Create Test Data Configuration (45 minutes)

1. Navigate to your `lectures/01-development-env-basics/homework/task02` folder
2. Create a file called `test-data-config.js`
3. At the top of the file, create constants for:
   - `BASE_URL` set to 'https://demo-qa-site.com'
   - `DEFAULT_TIMEOUT` set to 30000
   - `API_ENDPOINTS` as an object with keys for 'login', 'users', 'products' (assign placeholder URLs)
4. Create variables for common test data:
   - `testUserEmail` using a descriptive email address
   - `testUserPassword` with a secure password
   - `adminUserEmail` for admin testing scenarios
   - `expectedWelcomeMessage` with text like "Welcome to your dashboard"
5. Create boolean flags for:
   - `debugMode` set to true
   - `runSlowTests` set to false
   - `useTestData` set to true

#### Step 2.2: Build Data Validation Functions (60 minutes)

1. In the same file, create a function called `validateEmail` that:
   - Takes an email parameter
   - Uses the `includes` method to check if the email contains '@' and '.'
   - Returns true if both are present, false otherwise
   - Uses console.log to display the validation result
2. Create a function called `validatePassword` that:
   - Takes a password parameter
   - Checks if the password length is at least 8 characters
   - Returns a boolean result
   - Logs whether the password meets requirements
3. Create a function called `generateUniqueEmail` that:
   - Takes a baseName parameter (like 'testuser')
   - Uses `Date.now()` to get current timestamp
   - Combines baseName + timestamp + '@testmail.com'
   - Returns the generated email
   - Logs the generated email for verification
4. Create a function called `logTestConfiguration` that:
   - Displays all your constants and variables using console.log
   - Formats the output clearly with labels
   - Shows the current timestamp when the configuration was loaded

#### Step 2.3: Create a Default Environment Configuration (45 minutes)

1.  Create a new file in your `lectures/01-development-env-basics/homework/task02` folder and name it `environment-config.js`.
2.  Inside this file, declare a `const` object named `defaultEnvironmentConfig`.
3.  Populate this object with the following key-value pairs, which represent a standard development setup:
    -   `baseUrl`: `'https://demo-qa-site.com/development'`
    -   `timeout`: `15000` (representing milliseconds)
    -   `debugMode`: `true`
4.  Create a function named `loadEnvironmentConfig` that performs the following actions:
    -   It should not accept any parameters.
    -   It should log a message to the console indicating that the default configuration is being loaded.
    -   It should then log the entire `defaultEnvironmentConfig` object for verification.
    -   Finally, it should `return` the `defaultEnvironmentConfig` object.
5.  At the very end of the file, call the `loadEnvironmentConfig()` function to execute it when the script is run.

### Expected Deliverables
- Complete test data configuration system
- Working validation functions for common test scenarios
- A default environment configuration file
- All functions demonstrating proper console output

### Success Criteria
- All validation functions work correctly with both valid and invalid data
- Environment configurations return appropriate settings
- Code follows naming conventions and best practices
- Functions are reusable and well-documented through console output

---

## Task 3: QA Test Helper Functions & DevTools Practice
**Estimated Time: 2 hours**

### Objective
Create a library of reusable helper functions for common QA tasks and practice using browser DevTools for debugging.

### What You'll Build
- Test execution helper functions
- Debugging utilities
- Browser DevTools proficiency

### Step-by-Step Instructions

#### Step 3.1: Create Test Execution Helpers (60 minutes)

1. Navigate to your `lectures/01-development-env-basics/homework/task03` folder
2. Create a file called `test-execution-helpers.js`
3. Create a function called `startTestSuite` that:
   - Takes a suiteName parameter
   - Logs a formatted header with the suite name
   - Records the start time using `new Date().toISOString()`
   - Logs the start time
   - Returns the start time for later use
4. Create a function called `endTestSuite` that:
   - Takes suiteName and startTime parameters
   - Calculates duration by getting current time and subtracting startTime
   - Logs the suite completion with duration information
   - Returns the duration
5. Create a function called `logTestStep` that:
   - Takes stepNumber, description, and status parameters
   - Formats and logs each test step clearly
   - Uses different console methods based on status (console.log for 'pass', console.error for 'fail')
   - Includes timestamp for each step
6. Create a function called `generateTestReport` that:
   - Takes testResults parameter (assume it's an object with passed, failed, skipped counts)
   - Calculates total tests
   - Calculates pass percentage
   - Displays a formatted summary report
   - Returns the summary object

#### Step 3.2: Create Debugging Utilities (30 minutes)

1. In the same file, create a function called `debugVariable` that:
   - Takes variableName and variableValue parameters
   - Displays the variable name, value, and type using `typeof`
   - Formats output clearly for easy reading
2. Create a function called `compareExpectedActual` that:
   - Takes expected and actual parameters
   - Compares the values using strict equality
   - Logs both values and the comparison result
   - Returns true if they match, false otherwise
3. Create a function called `logSystemInfo` that:
   - Uses `Date.now()` to get current timestamp
   - Uses `typeof` to check types of different test variables
   - Displays system information useful for debugging
   - Returns an info object with key details

#### Step 3.3: DevTools Practice & Documentation (30 minutes)

1. Open your web browser and navigate to any website (try example.com)
2. Open DevTools using F12 or right-click → Inspect
3. In the Console tab, practice these commands and document your results:
   - Type `console.log('QA DevTools Practice')` and press Enter
   - Type `document.title` to get the page title
   - Type `window.location.href` to get the current URL
   - Try `document.querySelectorAll('p')` to find all paragraph elements
4. Create a new file called `devtools-practice-log.md` in your `lectures/01-development-env-basics/homework/task03` folder
5. Document your DevTools practice session:
   - What website you used
   - What commands you tried
   - What results you got
   - How this might help with future testing work
   - Include screenshots if possible

### Expected Deliverables
- Complete test helper function library
- Working debugging utilities
- DevTools practice documentation
- All functions tested and working correctly

### Success Criteria
- All helper functions execute without errors
- Functions provide useful, well-formatted output
- DevTools commands work and are documented
- Code demonstrates understanding of function parameters and return values

---

## Integration Task: Complete QA Foundation Workspace
**Estimated Time: 1 hour**

### Objective
Integrate all your previous work into a cohesive QA automation foundation workspace that demonstrates your learning.

### What You'll Build
- Master integration script that uses all your components
- Complete workspace demonstration
- Professional project ready for team sharing

### Step-by-Step Instructions

#### Integration Step 1: Create Master Demo Script (30 minutes)

1. In your `lectures/01-development-env-basics/homework/` directory, create a file called `foundation-demo.js`
2. At the top of the file, add comments explaining what this script demonstrates
3. Create a function called `runFoundationDemo` that:
   - Calls your environment verification functions from Task 1
   - Uses your test data and validation functions from Task 2
   - Executes your test helper functions from Task 3
   - Demonstrates a complete workflow from setup to test execution
4. Create a demo test scenario function called `simulateLoginTest` that:
   - Uses `startTestSuite` to begin a "Login Test Suite"
   - Uses `generateUniqueEmail` to create test data
   - Uses `validateEmail` to verify the test data
   - Uses `logTestStep` multiple times to simulate test steps
   - Uses `endTestSuite` to complete the suite
   - Uses `generateTestReport` with sample results
5. Call `runFoundationDemo()` at the bottom of your script

#### Integration Step 2: Create Project README (30 minutes)

1. In your `lectures/01-development-env-basics/homework/` directory, create a file called `README.md`
2. Structure your README with these sections:
   - **Project Title**: "QA Automation Course Workspace"
   - **Description**: Explain what this project demonstrates
   - **Prerequisites**: List Node.js and VS Code requirements
   - **Setup Instructions**: Step-by-step setup for new team members
   - **Usage**: How to run your demo script and verification tools
   - **Project Structure**: Explain each folder and its purpose
   - **Key Features**: Highlight the reusable components you built
   - **Next Steps**: How this foundation prepares for advanced topics

#### Integration Step 3: Modernizing to ES Modules (Optional but Recommended)

To keep your code organized, you'll often write functions in separate files. To use a function from one file in another, you need to `export` it from its source file and `import` it where you need it. This is the modern way to handle modules in JavaScript.

**1. Configure Your Project for ES Modules**

The first step is to tell Node.js to treat your `.js` files as ES Modules.

-   Open your `package.json` file in the root of your `qa-automation-course` project.
-   Add the following line to it:

    ```json
    {
      "name": "qa-automation-course",
      "version": "1.0.0",
      "description": "...",
      "main": "index.js",
      "type": "module",
      "scripts": { "...": "..." },
      "..."
    }
    ```
-   **Note**: You do not need to run any special commands (like `npm install`) after making this change.

**2. Using `export` and `import`**

Here is a simple example of how to share a function between two files.

-   **In your helper file (e.g., `test-execution-helpers.js`)**:
    Use the `export` keyword to make a function available to other files.
    ```javascript
    // ... function definitions ...

    // Make this function available for import
    export {
      startTestSuite,
    };
    ```

-   **In your main script (e.g., `foundation-demo.js`)**:
    Use the `import` keyword to use the function. Remember to include the full file path and extension (`.js`).
    ```javascript
    // Import the function from the helper file
    import { startTestSuite } from './lectures/01-development-env-basics/homework/task03/test-execution-helpers.js';

    // Now you can use the function
    startTestSuite("My Test");
    ```
By applying this pattern, you can update all your files to use the modern ES Module syntax.

### Final Integration Test

1. Run your environment verification script: `node lectures/01-development-env-basics/homework/task01/verify-setup.js`
2. Run your foundation demo: `node lectures/01-development-env-basics/homework/foundation-demo.js`
3. Verify all functions execute without errors
4. Check that all output is professional and informative

### Expected Deliverables
- Working master demo script that showcases all components
- Professional README documentation
- Complete, organized project structure
- All scripts executable and error-free

### Success Criteria
- Demo script runs successfully and showcases all your work
- Project structure is professional and well-organized
- Documentation is clear and comprehensive
- Workspace ready for team collaboration and future development

---

## Submission Guidelines

### What to Submit
1. Your complete `qa-automation-course` project folder
2. Confirmation that all scripts run without errors
3. Screenshots of your DevTools practice (optional but encouraged)

### How to Verify Your Work
Before submission, run these commands from your root directory:
```bash
node lectures/01-development-env-basics/homework/task01/verify-setup.js
node lectures/01-development-env-basics/homework/foundation-demo.js
```
Both should execute successfully with clear, professional output.

### Professional Context
This assignment mirrors real-world QA automation setup tasks. The components you've built are similar to what QA teams create for:
- Onboarding new team members
- Standardizing development environments
- Managing test data and configurations
- Creating reusable test utilities

---

## Time Management Tips

- **Task 1 (2.75 hours)**: Focus on getting environment setup correct first, including VS Code configuration
- **Task 2 (2.5 hours)**: Take time to understand JavaScript data types and validation
- **Task 3 (2 hours)**: Practice DevTools thoroughly - it's crucial for future work
- **Integration (1 hour)**: If running short on time, focus on getting the demo script working

## Troubleshooting Support

### Common Issues
1. **Script won't run**: Verify you're in the correct directory and file exists
2. **Function not defined**: Check function names match exactly (case-sensitive)
3. **Package.json issues**: Re-run `npm init -y` if needed
4. **DevTools console errors**: Try refreshing the page and reopening DevTools

### Getting Help
- Review lecture materials and examples
- Use console.log liberally to debug your functions
- Test functions one at a time before integrating
- Check that all file paths and names match instructions exactly

---
