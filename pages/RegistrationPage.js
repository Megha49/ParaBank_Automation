import { expect } from '@playwright/test';

export default class RegistrationPage {

    constructor(page) {

        this.page = page;

        this.firstName = page.locator('[id="customer.firstName"]');
        this.lastName = page.locator('[id="customer.lastName"]');
        this.address = page.locator('[id="customer.address.street"]');
        this.city = page.locator('[id="customer.address.city"]');
        this.state = page.locator('[id="customer.address.state"]');
        this.zipCode = page.locator('[id="customer.address.zipCode"]');
        this.phone = page.locator('[id="customer.phoneNumber"]');
        this.ssn = page.locator('[id="customer.ssn"]');
        this.username = page.locator('[id="customer.username"]');
        this.password = page.locator('[id="customer.password"]');
        this.confirmPassword = page.locator('#repeatedPassword'); 
        this.registerButton = page.locator('input[value="Register"]');

    }

    async registerUser(user) {

        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.address.fill(user.address);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zipCode.fill(user.zipCode);
        await this.phone.fill(user.phone);
        await this.ssn.fill(user.ssn);
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);

        await this.registerButton.click();

    }

}