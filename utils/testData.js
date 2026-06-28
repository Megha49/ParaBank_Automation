import { faker } from '@faker-js/faker';

export function getUser() {
    const timestamp = Date.now();
    
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.string.numeric(9),
        username: `user_${timestamp}`,
        password: 'Password@123',
    };
}