# ParaBank Automation Assessment

## Overview

This project automates the user registration and login flow for the ParaBank application using Playwright and JavaScript.

**Application Under Test:**

https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC

---

## Requirement

**Objective**: Test the sign up flow.

**Task**: Automate creating an account on the [https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC](https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC) website and signing in with that account.

After signing in, log/print the amount displayed on the page post-login.

**Deliverables:**

- Test Cases: Document your test cases in an Excel file.

---

## Objective

Automate the following flow:

- Register a new user
- Verify successful registration
- Logout
- Login with the newly created credentials
- Verify the Accounts Overview page
- Capture and print the account balance

---

## Tech Stack

- Playwright
- playwright-bdd
- JavaScript (ES Modules)
- Faker.js
- Node.js

---

## Framework Design

The framework follows the **Page Object Model (POM)** design pattern and uses **BDD** with `playwright-bdd` for feature-driven scenarios.

### Project Structure

```
ParaBank_Automation
│
├── features/
│   └── registration.feature
│
├── step-definitions/
│   └── registration.steps.js
│
├── pages/
│   ├── LoginPage.js
│   ├── RegistrationPage.js
│   ├── WelcomePage.js
│   └── AccountsOverviewPage.js
│
├── utils/
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Prerequisites

- Node.js (v18 or above)
- npm

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/Megha49/ParaBankAutomation.git 
cd ParaBank_Automation
```

2. Install project dependencies

```bash
npm install
```

3. Install Playwright browsers

```bash
npx playwright install
```

4. Generate Playwright tests from feature files

```bash
npx bddgen
```

---

## Test Execution

Run all tests:

```bash
npm test
```
Run smoke tests:

```bash
npm run test:smoke
```
Run tests in headed mode:

```bash
npm run test:headed

```
----

## Test Report

View the HTML report:

```bash
npm run report
```

---

## Test Scenario

**User Registration and Login**

1. Navigate to the ParaBank application.
2. Click the Register link.
3. Register a new user with dynamically generated data.
4. Verify successful registration.
5. Logout.
6. Login using the newly created credentials.
7. Verify the Accounts Overview page.
8. Print the account balance.

---

## Deliverables

- `README.md` documenting the framework and setup.
- `features/registration.feature` describing the BDD scenario.
- `step-definitions/registration.steps.js` implementing the BDD steps.
- `utils/testData.js` generating dynamic user data.
- Excel test cases documenting the scenario coverage.

---

## Test Data

Test data is generated dynamically using **Faker.js** to ensure unique user details for each execution.

---

## Framework Features

- Page Object Model (POM)
- Reusable page classes
- Dynamic test data using Faker
- ES Module support
- Playwright auto-waiting
- HTML reporting
- Screenshot capture on test failure
- Video recording on test failure

---

## Notes

- Usernames are generated dynamically to minimize duplicate registration errors.
- Screenshots and videos are automatically captured for failed test executions.
- The application under test is a public demo site; intermittent failures may occur due to server availability or existing test data.

---

## Author

**Megha K**
