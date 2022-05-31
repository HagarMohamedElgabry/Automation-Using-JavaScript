Feature: Login  

  As a user, I want to be able to login to my account to view account details

  @invalidCredentials
  Scenario Outline:Login with invalid credentials
    Given the browser is at the "Login" page
    When the user logged to website useing "invalid" credentials, "<email>" to login
    Then the title of the page should be "Login - My Store"
    And an authentication error message should say "<error>"

    Examples:
      | email               | error                     |
      | 123_test@gmail.com  | Authentication failed.    |
      | 459_auto@gmail.com  | Authentication failed.    |
      | just  empty email   | Invalid email address.     |
      |                     | An email address required. |

  Scenario Outline: Login with valid credentials; <email>
    Given the browser is at the "Login" page
    When the user logged to website useing "valid" credentials, "<email>" to login
    Then the title of the page should be "My account - My Store"
    
    @validCredentials
    Examples:
      | email                    |
      | performanceTest@gmail.com|