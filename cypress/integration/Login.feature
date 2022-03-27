Feature: Login functionality

    I would like to test Hudl's login functionality using valid and invalid login credentials.

    Background: User visits login page
        Given I am on hudle login page

    Scenario Outline: Login by user "<email>"
        When I enter login credentials "<email>" and "<password>"
        And I click on login button
        Then I should be redirected to url "<url>"
        And Login should be "<status>"


        Examples:
            | email                   | password          | url   | status       |
            | ebonom.n.mfam@gmail.com | askmeforpassword  | /home | successful   |
            | test@example.com        | testing           | /     | unsuccessful |