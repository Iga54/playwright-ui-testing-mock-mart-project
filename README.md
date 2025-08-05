# Mock mart store Testing Project

This project contains automated tests for an online store application - Mock Mart. The goal is to ensure the most critical user journeys work as expected, covering end-to-end, functional, and smoke test types. Some files, such as README.md are in progress.

---

## Tech Stack

- **Test Runner:** Playwright
- **Language:** TypeScript
- **Assertion Library:** Built-in Playwright

---

## Getting Started

Repository: https://github.com/Iga54/PW-mock-mart
Follow instructions in app README

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js, v20.10.0

### Installation and setup

## Use

Install dependencies:

```
npm install
```

Run all tests:

```
npx playwright test
```

Run all tests with tag:

```
npx playwright test --grep "@logged"
```

Run all tests without tags:

```
npx playwright test --grep-invert "@logged"
```

For more usage cases look in `package.json` scripts section.

### 1. Clone the repository

```bash
git clone https://github.com/Iga54/PW-mock-mart.git
```
