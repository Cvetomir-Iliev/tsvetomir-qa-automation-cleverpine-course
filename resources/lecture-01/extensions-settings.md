# Table of Contents

- [ESLint](#eslint)
  - [Why Use ESLint?](#why-use-eslint)
  - [Types of Mistakes ESLint Detects](#types-of-mistakes-eslint-detects)
  - [Installation](#installation)
  - [Testing ESLint Installation](#testing-eslint-installation)
  - [Installing the ESLint Extension](#installing-the-eslint-extension)
  - [Manual vs Automatic Error Detection](#manual-vs-automatic-error-detection)
  - [ESLint Configuration](#eslint-configuration)
- [Prettier](#prettier)
  - [Install Prettier](#install-prettier)
  - [Install Prettier Extension for VS Code](#install-prettier-extension-for-vs-code)
  - [Demo Prettier](#demo-prettier)
  - [Difference Between Prettier and ESLint](#difference-between-prettier-and-eslint)
- [JavaScript (ES6) Code Snippets](#javascript-es6-code-snippets)
- [Bracket Pair Colorizer](#bracket-pair-colorizer)
- [Git Graph Extension](#git-graph-extension)
- [The `.vscode/extensions.json` File](#the-vscodeextensionsjson-file)
- [The `settings.json` File in VS Code](#the-settingsjson-file-in-vs-code)

# ESLint

## Why Use ESLint?

- **Development Tools Only:** ESLint helps catch code issues during development and is not needed in production.
- **Better Organization:** Separates development tools (e.g., linters, testing frameworks) from core dependencies.

---

## Types of Mistakes ESLint Detects

1. **Syntax Errors:** Missing brackets, extra semicolons, or typos that break the code.
2. **Logical Errors:** Misused conditions, unreachable code, or incorrect assignments.
3. **Structural Issues:** Poor code organization, such as deeply nested blocks or inconsistent indentation.
4. **Best Practice Violations:** Using outdated patterns or ignoring modern JavaScript features.
5. **Code Style Problems:** Inconsistent spacing, naming conventions, or formatting that makes code harder to read.

## Installation

1. **Install ESLint locally in your project:**

   ```bash
   npm install eslint --save-dev
   ```

   - The `--save-dev` flag specifies that the package is only needed for development purposes, not for production.

2. **Initialize ESLint:**

   ```bash
   npx eslint --init
   ```

   - **Recommended Choice for Beginners:** Use JavaScript modules (ES Modules) with `import/export` instead of CommonJS (`require/module.exports`).
     - **Modern Standard:** ES Modules are the modern JavaScript standard and are supported natively in most environments, including modern browsers and Node.js (since version 12+).
     - **Future-Proof:** ES Modules are the future of JavaScript, while CommonJS is older and primarily used in legacy Node.js projects.

---

## Testing ESLint Installation

1. **Create a file named `test.js`.**
2. Add the following code:

   ```javascript
   const userName = "Dimitar";
   ```

3. Run ESLint on the file:

   ```bash
   npx eslint test.js
   ```

   - Inspect the terminal output. Errors are expected.

4. Add the following line to `test.js`:

   ```javascript
   console.log("My name is " + userName);
   ```

5. Run ESLint again:

   ```bash
   npx eslint test.js
   ```

---

## Installing the ESLint Extension

### Workflow with the ESLint Extension

1. **Write Code:** As you type, the extension runs ESLint in the background.
2. **Detect Errors Instantly:**
   - Errors are highlighted with red squiggly lines.
   - Hover over the squiggly line to see a popup explaining the error.
3. **Fix Errors Automatically:**
   - Use the "Quick Fix" lightbulb icon or a keyboard shortcut to fix many errors automatically.

---

## Manual vs Automatic Error Detection

### Without Extensions (The Manual Way)

| Pro/Con | Explanation                                                                                            |
| :------ | :----------------------------------------------------------------------------------------------------- |
| **CON** | **Slow & Annoying:** You must finish writing, then copy-paste your code into a separate linter.        |
| **CON** | **Hard to Fix:** Errors are listed separately, and you must manually locate and fix them in your code. |

---

### With Extensions (The Automatic Way)

| Pro/Con | Explanation                                                                                     |
| :------ | :---------------------------------------------------------------------------------------------- |
| **PRO** | **Instant Feedback:** Errors are highlighted as you type, allowing you to fix them immediately. |
| **PRO** | **Easy to Fix:** The extension suggests fixes with one click.                                   |

**In short:** Extensions make your code editor smarter, saving time and reducing frustration.

---

## ESLint Configuration

- The ESLint configuration file (`eslint.config.mjs`) defines rules, plugins, and environments.

---

# Prettier

Prettier is a code formatting tool that helps make your JavaScript (and other languages) code clean, consistent, and easy to read. It automatically enforces a specific style for your code, so you don’t have to worry about formatting details like spaces, indentation, or line breaks.

## Install Prettier

Open the terminal in your project folder and run:

```bash
npm install prettier --save-dev
```

This installs Prettier as a development dependency.

## Install Prettier Extension for VS Code

- Search for "Prettier - Code formatter" in the Extensions sidebar and install it.

## Demo Prettier

1. Add the following function in a `.js` file (all on one line):

   ```javascript
   function greet(name) {
     console.log("Hello, " + name);
   } //single line
   ```

2. Manually save the file (`Ctrl + S`).
3. Verify that the function is formatted correctly.

---

## Difference Between Prettier and ESLint

- **Prettier:** Focuses on code formatting (e.g., indentation, quotes).
- **ESLint:** Focuses on code quality, best practices, and potential bugs.

---

# JavaScript (ES6) Code Snippets

The JavaScript (ES6) code snippets extension is a tool for Visual Studio Code that provides pre-written, commonly used JavaScript code patterns (called "snippets") to help you write code faster and more efficiently.

Even if you use an AI assistant, the JavaScript (ES6) code snippets extension is still useful. Snippets are faster for small, repetitive tasks since they don’t require typing out full prompts or waiting for responses.

---

# Bracket Pair Colorizer

Bracket Pair Colorizer visually distinguishes matching brackets by coloring them in pairs. Instead of squinting at a wall of `{}` or `()` trying to figure out which one closes where, you get a rainbow of clarity.

**Add to `settings.json`:**

```json
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairs": true
```

**Test the settings with code:**

```javascript
function example() {
  if (true) {
    console.log("Hello");
  }
}
```

---

# Git Graph Extension

The Git Graph extension for VS Code is a tool that provides a visual representation of your Git repository's commit history and branches. It allows you to interact with your Git repository directly from the VS Code interface, making it easier to understand and manage your Git workflows.

1. Install the extension.
2. Initialize a Git repository.
3. Create a `.gitignore` file with the following content:

   ```
   node_modules/
   package-lock.json
   ```

---

# The `.vscode/extensions.json` File

- The `.vscode/extensions.json` file ensures team members use a consistent set of IDE extensions for the project.
- When someone opens the project in VS Code, they are prompted to install the recommended extensions.
- **Benefits:**
  - Maintains code quality.
  - Ensures a consistent development environment for all team members.

---

# The `settings.json` File in VS Code

The `settings.json` file in VS Code centralizes project-specific configurations, ensuring consistency and portability across machines and teams. It offers advantages over the UI, such as version control, fine-grained control, and support for advanced or automated setups.

- Use it for team collaboration, complex settings, or when you need project-specific configurations.
- The UI is better for quick, one-off changes.
