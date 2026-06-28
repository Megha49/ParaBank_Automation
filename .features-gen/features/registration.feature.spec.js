// Generated from: features\registration.feature
import { test } from "playwright-bdd";

test.describe('User Registration and Login', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the ParaBank application', null, { page }); 
  });
  
  test('Successfully register a new user and view the account balance', { tag: ['@smoke'] }, async ({ When, Then, And }) => { 
    await When('I click on the Register link'); 
    await And('I register a new user with valid details'); 
    await Then('I should be redirected to the Welcome page'); 
    await And('I should see a welcome message'); 
    await When('I click on the Logout link'); 
    await And('I login using the newly registered credentials'); 
    await Then('I should be redirected to the Accounts Overview page'); 
    await And('I should see the account balance displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\registration.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to the ParaBank application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on the Register link","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I register a new user with valid details","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the Welcome page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I should see a welcome message","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I click on the Logout link","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And I login using the newly registered credentials","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the Accounts Overview page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And I should see the account balance displayed","stepMatchArguments":[]}]},
]; // bdd-data-end