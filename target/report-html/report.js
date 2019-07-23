$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("price_calculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 2,
  "name": "Price calculator",
  "description": "As a Cabify user app\nI want to estimate the price of the journeys with vehicle types\nTo get the journey value before order car",
  "id": "price-calculator",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 22422763900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate whether the order car button is not presented before the first journey estimative",
  "description": "",
  "id": "price-calculator;validate-whether-the-order-car-button-is-not-presented-before-the-first-journey-estimative",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@noOrderCarButton"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "selects the option \"Lite\" car",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the request car button should not be presented",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6738179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 162383900,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 627343100,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.theRequestCarButtonShouldNotBePresented()"
});
formatter.result({
  "duration": 5263602900,
  "status": "passed"
});
formatter.after({
  "duration": 4453720400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate whether a new estimative is allowed after a journey already estimated",
  "description": "",
  "id": "price-calculator;validate-whether-a-new-estimative-is-allowed-after-a-journey-already-estimated",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@estimateAgain"
    },
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "selects from \"\u003corigin1\u003e\" to \"\u003cdestination1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "selects the option \"\u003ctype\u003e\" car",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "selects from \"\u003corigin2\u003e\" to \"\u003cdestination2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "selects the option \"\u003ctype\u003e\" car",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "estimated price should be \"\u003cprice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-whether-a-new-estimative-is-allowed-after-a-journey-already-estimated;",
  "rows": [
    {
      "cells": [
        "origin1",
        "destination1",
        "type",
        "origin2",
        "destination2",
        "price"
      ],
      "line": 29,
      "id": "price-calculator;validate-whether-a-new-estimative-is-allowed-after-a-journey-already-estimated;;1"
    },
    {
      "cells": [
        "Atocha",
        "Calle Pradillo, 42",
        "Lite",
        "Calle Pradillo, 42",
        "Atocha",
        "14.2 €"
      ],
      "line": 30,
      "id": "price-calculator;validate-whether-a-new-estimative-is-allowed-after-a-journey-already-estimated;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6155818600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate whether a new estimative is allowed after a journey already estimated",
  "description": "",
  "id": "price-calculator;validate-whether-a-new-estimative-is-allowed-after-a-journey-already-estimated;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    },
    {
      "line": 17,
      "name": "@estimateAgain"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "selects from \"Calle Pradillo, 42\" to \"Atocha\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "estimated price should be \"14.2 €\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6279075800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 159037700,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 662102500,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 584059600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Calle Pradillo, 42",
      "offset": 14
    },
    {
      "val": "Atocha",
      "offset": 38
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 5817993800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 145326600,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 100035900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.2 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 3797465300,
  "status": "passed"
});
formatter.after({
  "duration": 4553299300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"\u003corigin\u003e\" to \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"\u003ctype\u003e\" car",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"\u003cprice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;",
  "rows": [
    {
      "cells": [
        "origin",
        "destination",
        "type",
        "price"
      ],
      "line": 41,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;1"
    },
    {
      "cells": [
        "Atocha",
        "Aeropuerto Madrid Barajas, T4",
        "Lite",
        "35.2 €"
      ],
      "line": 42,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;2"
    },
    {
      "cells": [
        "Atocha",
        "Aeropuerto Madrid Barajas, T4",
        "Executive",
        "38.72 €"
      ],
      "line": 43,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;3"
    },
    {
      "cells": [
        "Aeropuerto Madrid Barajas, T4",
        "Calle Pradillo, 42",
        "Lite",
        "15.6 €"
      ],
      "line": 44,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;4"
    },
    {
      "cells": [
        "Aeropuerto Madrid Barajas, T4",
        "Calle Pradillo, 42",
        "Executive",
        "17.16 €"
      ],
      "line": 45,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;5"
    },
    {
      "cells": [
        "Calle Pradillo, 42",
        "Calle Mejía Lequerica, 14",
        "Lite",
        "12.35 €"
      ],
      "line": 46,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;6"
    },
    {
      "cells": [
        "Calle Pradillo, 42",
        "Calle Mejía Lequerica, 14",
        "Executive",
        "13.59 €"
      ],
      "line": 47,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;7"
    },
    {
      "cells": [
        "Calle Mejía Lequerica, 14",
        "Atocha",
        "Lite",
        "12.0 €"
      ],
      "line": 48,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;8"
    },
    {
      "cells": [
        "Calle Mejía Lequerica, 14",
        "Atocha",
        "Executive",
        "13.2 €"
      ],
      "line": 49,
      "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5985119600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Atocha\" to \"Aeropuerto Madrid Barajas, T4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"35.2 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Aeropuerto Madrid Barajas, T4",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 5786874300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 1263157200,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 676230400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 576634000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35.2 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 4514113100,
  "status": "passed"
});
formatter.after({
  "duration": 4380190600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5615296000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Atocha\" to \"Aeropuerto Madrid Barajas, T4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Executive\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"38.72 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Aeropuerto Madrid Barajas, T4",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6308698100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executive",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 1137719600,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 1272187200,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 575718600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "38.72 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 4581887100,
  "status": "passed"
});
formatter.after({
  "duration": 4280592400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6543337900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Aeropuerto Madrid Barajas, T4\" to \"Calle Pradillo, 42\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"15.6 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Aeropuerto Madrid Barajas, T4",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 49
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6814899600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 177287400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 639277600,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 714798800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.6 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 1918693900,
  "status": "passed"
});
formatter.after({
  "duration": 4429144400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5791718400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Aeropuerto Madrid Barajas, T4\" to \"Calle Pradillo, 42\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Executive\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"17.16 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Aeropuerto Madrid Barajas, T4",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 49
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6882777900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executive",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 1052550000,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 1302333300,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 570649500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.16 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 2490500000,
  "status": "passed"
});
formatter.after({
  "duration": 4663588400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5887295200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Calle Pradillo, 42\" to \"Calle Mejía Lequerica, 14\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"12.35 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Calle Pradillo, 42",
      "offset": 14
    },
    {
      "val": "Calle Mejía Lequerica, 14",
      "offset": 38
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6475659700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 156889900,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 628540000,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 587160700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.35 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 1776729700,
  "status": "passed"
});
formatter.after({
  "duration": 4256646300,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5468553900,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Calle Pradillo, 42\" to \"Calle Mejía Lequerica, 14\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Executive\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"13.59 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Calle Pradillo, 42",
      "offset": 14
    },
    {
      "val": "Calle Mejía Lequerica, 14",
      "offset": 38
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6456073500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executive",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 1017035800,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 1210882000,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 575758800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.59 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 4545159400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c13.5[9] €\u003e but was:\u003c13.5[85] €\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.ce.jhenck.steps.PriceCalculator.estimatedPriceShouldBe(PriceCalculator.java:72)\r\n\tat ✽.Then estimated price should be \"13.59 €\"(price_calculator.feature:38)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4838530800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6104078900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Calle Mejía Lequerica, 14\" to \"Atocha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"12.0 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Calle Mejía Lequerica, 14",
      "offset": 14
    },
    {
      "val": "Atocha",
      "offset": 45
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6354931300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 206509400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 633166100,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 591373200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.0 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 3459616800,
  "status": "passed"
});
formatter.after({
  "duration": 4377586000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6062650100,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate the estimative value of the journeys with any type car",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-of-the-journeys-with-any-type-car;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@estimateJourneys"
    },
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "selects from \"Calle Mejía Lequerica, 14\" to \"Atocha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "selects the option \"Executive\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "estimated price should be \"13.2 €\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Calle Mejía Lequerica, 14",
      "offset": 14
    },
    {
      "val": "Atocha",
      "offset": 45
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6496139000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Executive",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 1021348400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 1228006500,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 582114500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.2 €",
      "offset": 27
    }
  ],
  "location": "PriceCalculator.estimatedPriceShouldBe(String)"
});
formatter.result({
  "duration": 3899899400,
  "status": "passed"
});
formatter.after({
  "duration": 4262235300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Validate whether view past presented has the same estimated price",
  "description": "",
  "id": "price-calculator;validate-whether-view-past-presented-has-the-same-estimated-price",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@pastJourneys"
    },
    {
      "line": 51,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "selects from \"\u003corigin\u003e\" to \"\u003cdestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "selects the option \"\u003ctype\u003e\" car",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "taps on request car button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "journey from \"\u003corigin\u003e\" to \"\u003cdestination\u003e\" with estimated price should be presented",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-whether-view-past-presented-has-the-same-estimated-price;",
  "rows": [
    {
      "cells": [
        "origin",
        "destination",
        "type"
      ],
      "line": 61,
      "id": "price-calculator;validate-whether-view-past-presented-has-the-same-estimated-price;;1"
    },
    {
      "cells": [
        "Atocha",
        "Calle Pradillo, 42",
        "Lite"
      ],
      "line": 62,
      "id": "price-calculator;validate-whether-view-past-presented-has-the-same-estimated-price;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5802145700,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Validate whether view past presented has the same estimated price",
  "description": "",
  "id": "price-calculator;validate-whether-view-past-presented-has-the-same-estimated-price;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@regression"
    },
    {
      "line": 51,
      "name": "@pastJourneys"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "taps on request car button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "journey from \"Atocha\" to \"Calle Pradillo, 42\" with estimated price should be presented",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6896093400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 174019400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 648644800,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 595735400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.userTapsOnRequestCarButton()"
});
formatter.result({
  "duration": 3301339500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.journeyFromToWithEstimatedPriceShouldBePresented(String,String)"
});
formatter.result({
  "duration": 2463827600,
  "status": "passed"
});
formatter.after({
  "duration": 4366247000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 65,
  "name": "Validate the invalid captchas return error message",
  "description": "",
  "id": "price-calculator;validate-the-invalid-captchas-return-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 64,
      "name": "@invalidCaptchas"
    },
    {
      "line": 64,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "selects the option \"Lite\" car",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "fills invalid captcha \"\u003ccaptcha\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "an alert with \"\u003cmessage\u003e\" should be presented",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-the-invalid-captchas-return-error-message;",
  "rows": [
    {
      "cells": [
        "captcha",
        "message"
      ],
      "line": 74,
      "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;1"
    },
    {
      "cells": [
        "000",
        "Captcha typed is wrong"
      ],
      "line": 75,
      "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;2"
    },
    {
      "cells": [
        "@$%",
        "Captcha typed is wrong"
      ],
      "line": 76,
      "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;3"
    },
    {
      "cells": [
        "",
        "Captcha typed is wrong"
      ],
      "line": 77,
      "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5895717300,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Validate the invalid captchas return error message",
  "description": "",
  "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 64,
      "name": "@regression"
    },
    {
      "line": 64,
      "name": "@invalidCaptchas"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "selects the option \"Lite\" car",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "fills invalid captcha \"000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "an alert with \"Captcha typed is wrong\" should be presented",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6572615100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 156222100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000",
      "offset": 23
    }
  ],
  "location": "PriceCalculator.fillsInvalidCaptcha(String)"
});
formatter.result({
  "duration": 645960700,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 580589900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Captcha typed is wrong",
      "offset": 15
    }
  ],
  "location": "PriceCalculator.anAlertWithShouldBePresented(String)"
});
formatter.result({
  "duration": 1297076900,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.priceShouldNotBeEstimated()"
});
formatter.result({
  "duration": 499485300,
  "status": "passed"
});
formatter.after({
  "duration": 4449057600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6108127300,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Validate the invalid captchas return error message",
  "description": "",
  "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 64,
      "name": "@regression"
    },
    {
      "line": 64,
      "name": "@invalidCaptchas"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "selects the option \"Lite\" car",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "fills invalid captcha \"@$%\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "an alert with \"Captcha typed is wrong\" should be presented",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6418950400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 163302200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@$%",
      "offset": 23
    }
  ],
  "location": "PriceCalculator.fillsInvalidCaptcha(String)"
});
formatter.result({
  "duration": 646016900,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 581223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Captcha typed is wrong",
      "offset": 15
    }
  ],
  "location": "PriceCalculator.anAlertWithShouldBePresented(String)"
});
formatter.result({
  "duration": 1358368300,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.priceShouldNotBeEstimated()"
});
formatter.result({
  "duration": 529735300,
  "status": "passed"
});
formatter.after({
  "duration": 4704491500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6511810600,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Validate the invalid captchas return error message",
  "description": "",
  "id": "price-calculator;validate-the-invalid-captchas-return-error-message;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 64,
      "name": "@regression"
    },
    {
      "line": 64,
      "name": "@invalidCaptchas"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "selects the option \"Lite\" car",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "fills invalid captcha \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "an alert with \"Captcha typed is wrong\" should be presented",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6764040300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 152279100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "PriceCalculator.fillsInvalidCaptcha(String)"
});
formatter.result({
  "duration": 637620500,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 569965900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Captcha typed is wrong",
      "offset": 15
    }
  ],
  "location": "PriceCalculator.anAlertWithShouldBePresented(String)"
});
formatter.result({
  "duration": 1454039500,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.priceShouldNotBeEstimated()"
});
formatter.result({
  "duration": 530285700,
  "status": "passed"
});
formatter.after({
  "duration": 4535410000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 80,
  "name": "Validate the journey estimated value without choosing any car type",
  "description": "",
  "id": "price-calculator;validate-the-journey-estimated-value-without-choosing-any-car-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@noCarType"
    },
    {
      "line": 79,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "selects from \"\u003corigin\u003e\" to \"\u003cdestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "selects no options of car",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "an alert with \"\u003cmessage\u003e\" should be presented",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-the-journey-estimated-value-without-choosing-any-car-type;",
  "rows": [
    {
      "cells": [
        "origin",
        "destination",
        "message"
      ],
      "line": 89,
      "id": "price-calculator;validate-the-journey-estimated-value-without-choosing-any-car-type;;1"
    },
    {
      "cells": [
        "Atocha",
        "Calle Pradillo, 42",
        "Select at least one type of car"
      ],
      "line": 90,
      "id": "price-calculator;validate-the-journey-estimated-value-without-choosing-any-car-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 5834350000,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Validate the journey estimated value without choosing any car type",
  "description": "",
  "id": "price-calculator;validate-the-journey-estimated-value-without-choosing-any-car-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@noCarType"
    },
    {
      "line": 79,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "selects no options of car",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "an alert with \"Select at least one type of car\" should be presented",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 7268406800,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.checksNoOptionsOfCar()"
});
formatter.result({
  "duration": 971193600,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 734719100,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 580905400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select at least one type of car",
      "offset": 15
    }
  ],
  "location": "PriceCalculator.anAlertWithShouldBePresented(String)"
});
formatter.result({
  "duration": 5157199800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat br.ce.jhenck.steps.PriceCalculator.anAlertWithShouldBePresented(PriceCalculator.java:115)\r\n\tat ✽.Then an alert with \"Select at least one type of car\" should be presented(price_calculator.feature:85)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PriceCalculator.priceShouldNotBeEstimated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5212611600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 93,
  "name": "Validate the journey estimated value choosing all type of cars",
  "description": "",
  "id": "price-calculator;validate-the-journey-estimated-value-choosing-all-type-of-cars",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@allCarType"
    },
    {
      "line": 92,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "selects from \"\u003corigin\u003e\" to \"\u003cdestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "selects all options of car",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "an alert with \"\u003cmessage\u003e\" should be presented",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-the-journey-estimated-value-choosing-all-type-of-cars;",
  "rows": [
    {
      "cells": [
        "origin",
        "destination",
        "message"
      ],
      "line": 102,
      "id": "price-calculator;validate-the-journey-estimated-value-choosing-all-type-of-cars;;1"
    },
    {
      "cells": [
        "Atocha",
        "Calle Pradillo, 42",
        "Select only one type of car"
      ],
      "line": 103,
      "id": "price-calculator;validate-the-journey-estimated-value-choosing-all-type-of-cars;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6670009800,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Validate the journey estimated value choosing all type of cars",
  "description": "",
  "id": "price-calculator;validate-the-journey-estimated-value-choosing-all-type-of-cars;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@regression"
    },
    {
      "line": 92,
      "name": "@allCarType"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "selects from \"Atocha\" to \"Calle Pradillo, 42\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "selects all options of car",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "an alert with \"Select only one type of car\" should be presented",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Calle Pradillo, 42",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 7627727500,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.checksAllOptionsOfCar()"
});
formatter.result({
  "duration": 409224300,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 1305231400,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 602447600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select only one type of car",
      "offset": 15
    }
  ],
  "location": "PriceCalculator.anAlertWithShouldBePresented(String)"
});
formatter.result({
  "duration": 5056492400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat br.ce.jhenck.steps.PriceCalculator.anAlertWithShouldBePresented(PriceCalculator.java:115)\r\n\tat ✽.Then an alert with \"Select only one type of car\" should be presented(price_calculator.feature:98)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PriceCalculator.priceShouldNotBeEstimated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5040780700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 106,
  "name": "Validate the estimative value selecting the same start and final locations",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-selecting-the-same-start-and-final-locations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@equalJourneyPoints"
    },
    {
      "line": 105,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "selects from \"\u003corigin\u003e\" to \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "selects the option \"\u003ctype\u003e\" car",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "an alert with \"\u003cmessage\u003e\" should be presented",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.examples({
  "line": 114,
  "name": "",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-selecting-the-same-start-and-final-locations;",
  "rows": [
    {
      "cells": [
        "origin",
        "destination",
        "type",
        "message"
      ],
      "line": 115,
      "id": "price-calculator;validate-the-estimative-value-selecting-the-same-start-and-final-locations;;1"
    },
    {
      "cells": [
        "Atocha",
        "Atocha",
        "Lite",
        "Initial and Final points should have different locations"
      ],
      "line": 116,
      "id": "price-calculator;validate-the-estimative-value-selecting-the-same-start-and-final-locations;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "Login on App",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is logged in app with \"user@qabify.com\" and \"1234Abc\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user@qabify.com",
      "offset": 28
    },
    {
      "val": "1234Abc",
      "offset": 50
    }
  ],
  "location": "PriceCalculator.userIsLoggedInAppWithAnd(String,String)"
});
formatter.result({
  "duration": 6465842700,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Validate the estimative value selecting the same start and final locations",
  "description": "",
  "id": "price-calculator;validate-the-estimative-value-selecting-the-same-start-and-final-locations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@regression"
    },
    {
      "line": 105,
      "name": "@equalJourneyPoints"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "selects from \"Atocha\" to \"Atocha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "selects the option \"Lite\" car",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "fills captcha with the previous generated one",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "taps on estimate button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "an alert with \"Initial and Final points should have different locations\" should be presented",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "price should not be estimated",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Atocha",
      "offset": 14
    },
    {
      "val": "Atocha",
      "offset": 26
    }
  ],
  "location": "PriceCalculator.userSelectsFromTo(String,String)"
});
formatter.result({
  "duration": 6194534300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite",
      "offset": 20
    }
  ],
  "location": "PriceCalculator.checkTheOptionCar(String)"
});
formatter.result({
  "duration": 175574800,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.fillCaptchaWithThePreviousGeneratedOne()"
});
formatter.result({
  "duration": 645742600,
  "status": "passed"
});
formatter.match({
  "location": "PriceCalculator.tapOnEstimateButton()"
});
formatter.result({
  "duration": 620478600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Initial and Final points should have different locations",
      "offset": 15
    }
  ],
  "location": "PriceCalculator.anAlertWithShouldBePresented(String)"
});
formatter.result({
  "duration": 5042102800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat br.ce.jhenck.steps.PriceCalculator.anAlertWithShouldBePresented(PriceCalculator.java:115)\r\n\tat ✽.Then an alert with \"Initial and Final points should have different locations\" should be presented(price_calculator.feature:111)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PriceCalculator.priceShouldNotBeEstimated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4927398200,
  "status": "passed"
});
});