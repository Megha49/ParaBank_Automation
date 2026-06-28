import { expect } from '@playwright/test';

export default class AccountsOverviewPage {

    constructor(page) {

        this.page = page;

        this.accountsOverviewHeading =
            page.getByText('Accounts Overview');


        this.accountBalance =
            page.locator('#accountTable > tbody > tr:nth-child(2) > td:nth-child(2) > b');

    }

    async verifyAccountsOverviewPage() {

        await expect(this.accountsOverviewHeading).toBeVisible();

    }

    async verifyAccountBalanceDisplayed() {

        await expect(this.accountBalance).toBeVisible().toContainText('$');

    }

    async getAccountBalance() {

        return (await this.accountBalance.textContent()).trim();

    }

}