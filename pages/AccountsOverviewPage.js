import { expect } from '@playwright/test';

export default class AccountsOverviewPage {

    constructor(page) {

        this.page = page;

        this.accountsOverview =
            page.locator('#overviewAccountsApp');


        this.accountBalance =
            page.locator('#accountTable > tbody > tr:nth-child(2) > td:nth-child(2) > b');

    }

    async verifyAccountsOverviewPage() {

        await expect(this.accountsOverview).toBeVisible();

    }

    async verifyAccountBalanceDisplayed() {

        await expect(this.accountBalance).toBeVisible();
        await expect(this.accountBalance).toContainText('$');

    }

    async getAccountBalance() {

        return (await this.accountBalance.textContent()).trim();

    }

}