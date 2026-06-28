import { expect } from '@playwright/test';

class WelcomePage {
    constructor(page) {
        this.page = page;

        this.welcomeHeading = page.locator('h1.title');
        this.successMessage = page.getByText(
            'Your account was created successfully. You are now logged in.'
        );
        this.logoutLink = page.getByText('Log Out');
    }

    async verifyWelcomePage() {
        await expect(this.welcomeHeading).toContainText('Welcome');
    }

    async verifyRegistrationSuccessMessage() {
        await expect(this.successMessage).toBeVisible().toContainText(
            'Your account was created successfully. You are now logged in.'
        );
    }

    async clickLogout() {
        await this.logoutLink.click();
    }
}

export default WelcomePage;