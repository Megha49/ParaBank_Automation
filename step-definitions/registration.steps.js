import { test, createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage.js';
import RegistrationPage from '../pages/RegistrationPage.js';
import WelcomePage from '../pages/WelcomePage.js';
import AccountsOverviewPage from '../pages/AccountsOverviewPage.js';

import { getUser } from '../utils/testData.js';
const { Given, When, Then } = createBdd(test);

let loginPage;
let registrationPage;
let welcomePage;
let accountsOverviewPage;

let user;

//Happy Path: User Registration, logout, login, and account balance verification

Given('I navigate to the ParaBank application', async ({ page }) => {
    loginPage = new LoginPage(page);
    registrationPage = new RegistrationPage(page);
    welcomePage = new WelcomePage(page);
    accountsOverviewPage = new AccountsOverviewPage(page);

    await loginPage.navigate();
});

When('I click on the Register link', async () => {
    await loginPage.clickRegister();
});

When('I register a new user with valid details', async () => {
    user = getUser();
    // console.log('Generated User:', user);
    await registrationPage.registerUser(user);
});

Then('I should be redirected to the Welcome page', async () => {
    await welcomePage.verifyWelcomePage();
});

Then('I should see a welcome message', async () => {
    await welcomePage.verifyRegistrationSuccessMessage();
});

When('I click on the Logout link', async () => {
    await welcomePage.clickLogout();
});

When('I login using the newly registered credentials', async () => {
    await loginPage.login(user.username, user.password);
});

Then('I should be redirected to the Accounts Overview page', async () => {
    await accountsOverviewPage.verifyAccountsOverviewPage();
});

Then('I should see the account balance displayed', async () => {
    await accountsOverviewPage.verifyAccountBalanceDisplayed();

    const balance = await accountsOverviewPage.getAccountBalance();
    console.log(`Account Balance: ${balance}`);
});