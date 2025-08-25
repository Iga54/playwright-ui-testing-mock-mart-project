# Mock Mart store - Testing Project

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

## Project configuration

1. Copy repository to your project folder using:
```bash
git clone https://github.com/Iga54/PW-mock-mart.git
```
2. Type commands in terminal within mock_mart folder
```bash
docker compose build
```
```bash
docker compose up
```
3. Switch back to the project folder with mock_mart tests
4. The first step is to run a command ```npm install``` in console
5. Docker should be enabled on computer
6. The next issue is running scripts mentioned below:
- to run all tests ```npx playwright test```

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


