#language: en

Feature: Login Price calculator
  As a Cabify user app
  I want to log in the journey calculator app
  To estimate the journeys value before order car

  @loginJourneys @regression
  Scenario: Validate log in the app
    Given user fill the credentials app
    When user log in app
    Then the captcha title text should be presented

  @loginJourneys @regression
  Scenario: Validate access the journey calculator screen
    Given user fill the credentials app
    When user log in app
    And user tap on the next button
    Then the journey title text should be presented

  @loginJourneys @regression
  Scenario Outline: Validate log in the app with invalid credentials
    Given user fill "<user>" and "<password>"
    When user log in app
    Then should be presented the message "<message>"

    Examples:
      | user            | password | message                              |
      | user@qabify.com |          | User name or Password is not correct |
      |                 | 1234Abc  | User name or Password is not correct |
      |                 |          | User name or Password is not correct |