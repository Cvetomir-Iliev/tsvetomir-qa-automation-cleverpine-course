## **npm**
- **Main use:** Installs and manages packages (libraries/tools).
- **Scripts:** Runs custom scripts defined in your package.json using `npm run <script-name>`.
- **Script commands:** Scripts can use commands from locally installed packages.
- **Example:**  
  ```
  npm install eslint
  npm run lint
  ```

---

## **npx**
- **Main use:** Runs package commands/tools directly from the terminal.
- **No need for scripts:** You don’t need to define anything in package.json.
- **Temporary use:** Can run packages even if they’re not installed locally (downloads them temporarily).
- **Example:**  
  ```
  npx eslint .
  ```

---

## **Common Things**
- Both can run package commands/tools.
- Both work with packages from the npm registry.
- Both can produce the same output if running the same tool with the same arguments.

---

## **Key Differences**
| Feature                | npm                              | npx                              |
|------------------------|----------------------------------|----------------------------------|
| Installs packages      | Yes                              | No                               |
| Runs scripts           | Yes (`npm run <script>`)         | No                               |
| Runs package commands  | Through scripts                  | Directly from terminal           |
| Needs script defined   | Yes                              | No                               |
| Temporary package use  | No                               | Yes                              |

---

**In short:**  
- Use **npm** to install/manage packages and run project scripts.
- Use **npx** to quickly run package commands/tools without scripts.