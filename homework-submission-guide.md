## Homework Submission Guide — Lecture 02: JavaScript Fundamentals for Testing

This guide explains exactly what to submit, how your files must be organized, and how to verify your solution locally before sending it for review.

### What you must submit

- A single folder named `homework` for the current lecture that follows the structure defined in the assignment.
- Do not rename files or folders provided by the template or assignment. Keep names exactly as instructed.
- If you add helper files, place them inside the relevant `task0x` folder and use ES module imports/exports.
- If the assignment defines an entry-point script, include it at `homework/` with the exact filename specified.

### Required folder and file structure

Use this template as a reference for all lectures. Replace placeholders with the lecture’s folder name and the exact filenames required by that homework.

```
lectures/
  <lecture-folder-name>/
    homework/
      <entry-point-file>.js            # only if required by the assignment; keep exact name
      task01/
        <your-task01-files>.js        # keep filenames as instructed in the task
      task02/
        <your-task02-files>.js
      task03/
        <your-task03-files>.js
```

Example using Lecture 01 (concrete names):

```
lectures/
  01-development-env-basics/
    homework/
      foundation-demo.js               # Entry point / master script for the homework
      README.md                         # Homework-specific README or instructions (optional)
      task01/
        environment-setup-guide.md      # Task 1: environment setup documentation
        verify-setup.js                 # Task 1: verification script
      task02/
        environment-config.js           # Task 2: configuration helpers
        test-data-config.js             # Task 2: test data configuration
      task03/
        devtools-practice-log.md        # Task 3: notes / practice log
        test-execution-helpers.js       # Task 3: helper functions for execution
```

### Naming and code rules

- Keep provided file/folder names exactly as specified by the assignment.
- Use ES Modules (import/export). The course repo is configured with `"type": "module"`.
- Do not change entry-point filenames or relative import paths defined in the starter/template.
- Additional helpers are allowed inside the corresponding `task0x` folder; import them using relative paths.
- Keep code readable and formatted (use ESLint/Prettier if available).

### Submitting your homework via GitHub (branch + PR)

Use a dedicated branch created from the latest `main`. The branch name must correspond to the lecture folder name. Open a single Pull Request only after you’ve committed and pushed all tasks for the lecture.

Template steps (replace placeholders with the current lecture):

```bash
# 1) Update local main
git checkout main
git pull --ff-only

# 2) Create a branch that matches the lecture folder name
git checkout -b <lecture-folder-name>

# 3) Work through tasks and commit in small units (repeat per task)
#    Example sequence for task01, task02, task03:
git add lectures/<lecture-folder-name>/homework/task01
git commit -m "feat(task01): implement <short-description>"

git add lectures/<lecture-folder-name>/homework/task02
git commit -m "feat(task02): implement <short-description>"

git add lectures/<lecture-folder-name>/homework/task03
git commit -m "feat(task03): implement <short-description>"

# 4) Push AFTER you’ve committed all tasks for the lecture
git push -u origin <lecture-folder-name>

# 5) Open ONE Pull Request from <lecture-folder-name> to main
```

PR title suggestion:

- `<lecture-folder-name>: <short summary> — <your name>`

Scope of the PR:

- Include only files under `lectures/<lecture-folder-name>/homework/` (and any intentionally related shared files if the assignment requires it).
- Do not include editor-specific, OS-generated, or dependency files (e.g., `.DS_Store`, `node_modules/`).

Example using Lecture 01:

```bash
git checkout main
git pull --ff-only
git checkout -b 01-development-env-basics

# Commit per task
git add lectures/01-development-env-basics/homework/task01
git commit -m "feat(task01): add verify-setup script"

git add lectures/01-development-env-basics/homework/task02
git commit -m "feat(task02): add environment-config and test-data-config"

git add lectures/01-development-env-basics/homework/task03
git commit -m "feat(task03): implement test-execution-helpers"

# Push once you’re done with all tasks, THEN open the PR
git push -u origin 01-development-env-basics
```

### Commit organization best practices

Organize commits in small, meaningful units that reflect the homework structure (tasks, docs, helpers).

Guidelines (template):

- 1 commit per logical change; avoid bundling unrelated tasks.
- Use the format: `<type>(<scope>): <short summary>`
  - Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.
  - Scope typically matches a task folder: `task01`, `task02`, `task03`, or `homework` for entry points.
- Keep summaries in the imperative mood and under ~72 characters.
- Follow up with separate commits for fixes or refactors instead of amending unrelated changes.
- Stage only relevant files from the current lecture’s `homework` folder.

Examples using Lecture 01:

- `feat(homework): add foundation-demo entry script`
- `docs(task01): write environment-setup-guide`
- `feat(task01): implement verify-setup checks`
- `feat(task02): add environment-config and test-data-config`
- `docs(task03): add devtools-practice-log`
- `feat(task03): implement test-execution-helpers`
- `fix(task01): correct path resolution in verify-setup`
- `refactor(task02): normalize naming for config constants`
