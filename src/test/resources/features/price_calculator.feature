#language: en

Feature: Price calculator
  As a Cabify user app
  I want to estimate the price of the journeys with vehicle types
  To get the journey value before order car

  Background: Log in the app and capture captcha value
    Given user is logged in app with valid credentials
    And user get the captcha value

  @noOrderCarButton @regression
  Scenario: Validate whether the order car button is not presented before the first journey estimative
    When selects from "Atocha" to "Calle Pradillo, 42"
    And selects the option "Lite" car
    And fills captcha with the previous generated one
    Then the request car button should not be presented

  @estimateAgain @regression
  Scenario Outline: Validate whether a new estimative is allowed after a journey already estimated
    And selects from "<origin1>" to "<destination1>"
    And selects the option "<type>" car
    And fills captcha with the previous generated one
    And taps on estimate button
    When selects from "<origin2>" to "<destination2>"
    And selects the option "<type>" car
    And taps on estimate button
    Then estimated price should be "<price>"

    Examples: 
      | origin1 | destination1       | type | origin2            | destination2 | price  |
      | Atocha  | Calle Pradillo, 42 | Lite | Calle Pradillo, 42 | Atocha       | 14.2 € |

  @estimateJourneys @regression
  Scenario Outline: Validate the estimative value of the journeys with any type car
    When selects from "<origin>" to "<destination>"
    And selects the option "<type>" car
    And fills captcha with the previous generated one
    And taps on estimate button
    Then estimated price should be "<price>"

    Examples:
      | origin                        | destination                   | type      | price    |
      | Atocha                        | Aeropuerto Madrid Barajas, T4 | Lite      | 35.2 €   |
      | Atocha                        | Aeropuerto Madrid Barajas, T4 | Executive | 38.72 €  |
      | Aeropuerto Madrid Barajas, T4 | Calle Pradillo, 42            | Lite      | 15.6 €   |
      | Aeropuerto Madrid Barajas, T4 | Calle Pradillo, 42            | Executive | 17.16 €  |
      | Calle Pradillo, 42            | Calle Mejía Lequerica, 14     | Lite      | 12.35 €  |
      | Calle Pradillo, 42            | Calle Mejía Lequerica, 14     | Executive | 13.585 € |
      | Calle Mejía Lequerica, 14     | Atocha                        | Lite      | 12.0 €   |
      | Calle Mejía Lequerica, 14     | Atocha                        | Executive | 13.2 €   |

  @pastJourneys @regression
  Scenario Outline: Validate whether view past presented has the same estimated price
    And selects from "<origin>" to "<destination>"
    And selects the option "<type>" car
    And fills captcha with the previous generated one
    And taps on estimate button
    When taps on request car button
    Then journey from "<origin>" to "<destination>" with estimated price should be presented

    Examples: 
      | origin | destination        | type |
      | Atocha | Calle Pradillo, 42 | Lite |

  @invalidCaptchas @regression
  Scenario Outline: Validate the invalid captchas return error message
    And selects from "Atocha" to "Calle Pradillo, 42"
    And selects the option "Lite" car
    When fills invalid captcha "<captcha>"
    And taps on estimate button
    Then an alert with "<message>" should be presented
    And price should not be estimated

    Examples: 
      | captcha | message                |
      | 000 	| Captcha typed is wrong |
      | @$%     | Captcha typed is wrong |
      |         | Captcha typed is wrong |

  @noCarType @regression
  Scenario Outline: Validate the journey estimated value without choosing any car type
    And selects from "<origin>" to "<destination>"
    When selects no options of car
    And fills captcha with the previous generated one
    And taps on estimate button
    Then an alert with "<message>" should be presented
    And price should not be estimated

    Examples: 
      | origin | destination        | message                         |
      | Atocha | Calle Pradillo, 42 | Select at least one type of car |

  @allCarType @regression
  Scenario Outline: Validate the journey estimated value choosing all type of cars
    And selects from "<origin>" to "<destination>"
    When selects all options of car
    And fills captcha with the previous generated one
    And taps on estimate button
    Then an alert with "<message>" should be presented
    And price should not be estimated

    Examples: 
      | origin | destination        | message                     |
      | Atocha | Calle Pradillo, 42 | Select only one type of car |

  @equalJourneyPoints @regression
  Scenario Outline: Validate the estimative value selecting the same start and final locations
    When selects from "<origin>" to "<destination>"
    And selects the option "<type>" car
    And fills captcha with the previous generated one
    And taps on estimate button
    Then an alert with "<message>" should be presented
    And price should not be estimated

    Examples: 
      | origin | destination | type | message                                                  |
      | Atocha | Atocha      | Lite | Initial and Final points should have different locations |
