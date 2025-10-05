# CleverPine QA Automation Academy

A learning repository for the QA Automation Academy. It contains lecture materials, examples, practice tasks, and homework guidelines to help you build a solid foundation in JavaScript and testing workflows.

## Quick start

Prerequisites:

- Node.js 18.18+ (ESLint v9 requires Node 18.18 or newer)
- npm 9+
- VS Code (recommended) with ESLint and Prettier extensions

Setup:

```bash
# Install dependencies
npm install
```

Open in VS Code and install the recommended extensions when prompted.

## Repository structure

Top-level layout and where to look for things:

```
lectures/
	01-development-env-basics/
		examples/                 # Small runnable JS examples from the lecture
			02-javascript-variables.js
			03-javascript-functions.js
			04-devtools-practice.md
		homework/                 # Homework brief for this lecture
			lecture-01-homework.md
		practice/                 # Practice tasks and helper functions
			first-test-functions.js

resources/
	lecture-01/                 # Extra reading, tips, and settings
		extensions-settings.md
		lecture-01.md
		npm-npx.md

homework-submission-guide.md  # Branch/PR workflow, folder structure, naming
eslint.config.mjs             # ESLint flat config (ES Modules)
package.json                  # Dev tooling (ESLint, Prettier); type: module
LICENSE
```

## Linting and formatting

This repo uses ESLint and Prettier for code quality and formatting.

- ESLint config: `eslint.config.mjs`
- Prettier: installed as a dev dependency; use default settings unless the course adds a config file later.

Run locally:

```bash
# Check lint errors
npx eslint .

# Auto-fix lint issues where possible
npx eslint . --fix

# Check formatting
npx prettier . --check

# Format files in place
npx prettier . --write
```

Tip: Install the "ESLint" and "Prettier - Code formatter" VS Code extensions for on-save feedback and formatting. See `resources/lecture-01/extensions-settings.md` for more details and helpful extensions.

## Run the example code

You can run the JS examples directly with Node:

```bash
node lectures/01-development-env-basics/examples/02-javascript-variables.js
node lectures/01-development-env-basics/examples/03-javascript-functions.js
```

If you prefer, open the files in VS Code and use the built-in Run/Debug features.

## Homework workflow

Read `homework-submission-guide.md` thoroughly. In short:

- Keep your work inside `lectures/<lecture-folder-name>/homework/` following the exact structure required by the assignment.
- Use ES Modules (`import`/`export`), as the project is configured with `"type": "module"`.
- Create a dedicated branch for each lecture. The branch name must match the lecture folder, e.g. `01-development-env-basics`.
- Commit in small, meaningful units. Suggested format: `<type>(<scope>): <summary>` where scope often matches `task01`, `task02`, etc.

Example (abbreviated):

```bash
git checkout main
git pull --ff-only
git checkout -b 01-development-env-basics

# Work and commit per task
git add lectures/01-development-env-basics/homework/task01
git commit -m "feat(task01): implement verify-setup checks"

# Push once all tasks are done, then open ONE PR to main
git push -u origin 01-development-env-basics
```

## Scripts

Currently, `package.json` only contains a placeholder `test` script. You can still run linters and formatters via `npx` (see commands above). If you want to add convenience scripts later, consider:

- `"lint": "eslint ."`
- `"lint:fix": "eslint . --fix"`
- `"format": "prettier . --write"`

Note: Don’t modify shared tooling unless instructed by the course.

## Troubleshooting

- ESLint not running? Ensure Node is >= 18.18: `node -v`.
- VS Code not showing lint errors? Make sure the ESLint extension is enabled and the workspace trust is granted.
- Prettier not formatting on save? Check that the Prettier extension is installed and selected as the default formatter, and that Format on Save is enabled.

## License

This project is licensed under the ISC License. See `LICENSE` for details.
