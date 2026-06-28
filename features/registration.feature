Feature: User Registration and Login to view balance

  As a new ParaBank user
  I want to register and login
  So that I can access my account

  Scenario: Successfully register a new user and view the account balance

     Given I navigate to the ParaBank application
    When I click on the Register link
    And I register a new user with valid details

    Then I should be redirected to the Welcome page
    And I should see a welcome message

    When I click on the Logout link
    And I login using the newly registered credentials

    Then I should be redirected to the Accounts Overview page
    And I should see the account balance displayed