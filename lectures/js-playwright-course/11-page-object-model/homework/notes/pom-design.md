# Lecture 11 Homework — POM Design

## Scope
Refactor Lecture 10 HW tests into Page Objects for:
- **Session submission & confirmation**
- **Submissions table moderation**

## Duplication Identified (from Lecture 10 HW)
### Repeated locators
- `#session-format` (format dropdown) — used 2–3 times across positive/negative flows.
- Topic checkboxes by label (e.g., “Automated Testing”, “Visual Regression”) — used 2+ times.
- Audience radio by label (Introductory, Intermediate) — used 2+ times.
- `#materials` (file input) — 1 time (but verbose setup).
- Code of conduct checkbox (by label) — 2 times.
- Submit button (role/button or `[data-testid="submit-proposal"]`) — 2+ times.
- Confirmation page summary texts (format label, topics list, audience label, file names) — multiple assertions.

**Tables page**
- Headers: `thead th` — asserted once but selector knowledge is duplicated in similar tests.
- Rows: `tbody > tr` — counted, then row-scoped finds by speaker (John Doe, Jane Smith).
- Status pill: `[data-label="Status"] .pill` — read/verify multiple times.
- Action buttons within a row: Approve / Decline — clicked with dialog handling multiple times.
- Total count: `#total-count` — read in several tests.

### Repeated action sequences
- Navigate → select format → set topics → select audience → upload files → accept CoC → submit.
- Negative case: partial fill → click submit → handle dialog → stay on form.
- Tables: locate row by speaker → click Approve/Decline with dialog handler → verify status/row/total count.

### Business-level intents
- “Complete a session submission and verify the confirmation reflects chosen values.”
- “Surface a validation dialog if a required field is missing (no navigation).”
- “Approve a specific speaker’s submission (row remains, status updates, total unchanged).”
- “Decline a specific speaker’s submission (row removed, total decremented).”

## Proposed POM APIs

### `SessionFormPage`
- **Props/Locators**: `formatSelect`, `topics`, `audience`, `filesInput`, `cocCheckbox`, `submitButton`, `titleHeading`.
- **Methods**:
  - `navigate()`
  - `selectFormat(valueOrLabel)`
  - `setTopics(items, shouldCheck = True)`
  - `selectAudience(levelLabel)`
  - `uploadFiles(files)`
  - `acceptCodeOfConduct()` / `unacceptCodeOfConduct()`
  - `clickSubmit()`
  - `completeSubmission({ format, topics, audience, files, acceptCoC = true })`

### `SessionConfirmationPage`
- **Props/Locators**: `successHeading`, `summaryFormat`, `summaryTopics`, `summaryAudience`, `summaryFiles`.
- **Methods**:
  - `isLoaded()` (optional, via heading visibility)
  - Accessors return locators for assertions (assert in tests, not inside POM).

### `SubmissionsTablePage`
- **Props/Locators**: `table`, `headers`, `rows`, `totalCount`.
- **Methods**:
  - `navigate()`
  - `getHeaders()` → `string[]`
  - `getTotalCount()` → `number`
  - `getRowBySpeaker(name)` → `Locator`
  - `approve(name)` → click Approve for row (no dialog logic)
  - `decline(name)` → click Decline for row (no dialog logic)
  - `getStatus(name)` → `string` from row’s status pill
