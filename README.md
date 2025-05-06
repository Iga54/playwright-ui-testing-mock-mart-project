# Mock mart store Testing Project

This project contains automated tests for an online store application. The goal is to ensure the most critical user journeys work as expected, covering end-to-end, functional, and smoke test types.


---

## Tech Stack

- **Test Runner:** Playwright
- **Language:** TypeScript
- **Assertion Library:** Built-in Playwright
- **CI Integration:** GitHub Actions / GitLab CI (optional)

---

## Getting Started

Repository: https://github.com/jaktestowac/gad-gui-api-demo
Follow instructions in app README

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

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
npx playwright test --grep "@GAD-R01-01"
```

Run all tests without tags:

```
npx playwright test --grep-invert "@GAD"
```

For more usage cases look in `package.json` scripts section.


### 1. Clone the repository

```bash
git clone https://github.com/your-username/webstore-tests.git
cd webstore-tests