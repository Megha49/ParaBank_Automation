import { expect } from '@playwright/test';

export default class LoginPage {

    constructor(page) {

        this.page = page;

        this.registerLink = page.getByRole('link', { name: 'Register' });

        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');

    }

    async navigate() {

        await this.page.goto('/');

    }

    async clickRegister() {

        await this.registerLink.click();

    }

    async login(username, password) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }

}