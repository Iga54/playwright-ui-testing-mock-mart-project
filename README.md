# Mock Mart store - UI & API automation tests (Playwright, TypeScript)

This project contains automated tests for an online store application - Mock Mart. The goal is to ensure the most critical user journeys work as expected, covering end-to-end, functional, smoke test types and API tests. Some files, such as README.md are in progress.

## Tech Stack

- **Test Runner:** Playwright
- **Language:** TypeScript
- **Assertion Library:** Built-in Playwright

## Local recommended tools:

- VS Code
- Git
- Node.js ≥ 20
- Docker Desktop (to run Mock Mart app)

## Features

1. UI:

- Functional tests
- Smoke tests
- Page Object Model structure
- Session handling with storageState

2. API:

- GET /api/products — list (pagination, sorting, filtering, contract)

- GET /api/products/:id — details (minimal contract, key fields)

- POST /api/comments, PUT /api/comments/:id, DELETE /api/comments/:id

- POST /auth/login — positive & negative (401/422)

- BASE_URL is set in .env.

- API returns Content-Type: application/json (for both success and error responses).

- Common headers like Accept: application/json are configured for the api project (see playwright.config.ts).

- Use Authorization: Bearer <token> only on endpoints that require it.

## Getting Started

Repository: https://github.com/Iga54/playwright-ui-testing-mock-mart-project

Follow instructions in app README

## Project configuration

1. Copy repository to your project folder using:

```bash
git clone https://github.com/Iga54/playwright-ui-testing-mock-mart-project.git
```

2. Type commands in terminal within mock_mart folder

```bash
docker compose build
```

```bash
docker compose up
```

3. Switch back to the project folder with mock_mart tests
4. The first step is to run a command `npm install` in console
5. Docker should be enabled on computer
6. The next issue is running scripts mentioned below:

- to run all tests `npx playwright test`

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

Run API-only:

```
npx playwright test --project=api
```

Run all tests without tags:

```
npx playwright test --grep-invert "@logged"
```

Open the HTML report:

```
npx playwright show-report
```
