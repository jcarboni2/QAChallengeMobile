package com.jhenck.steps;

import static com.jhenck.steps.CommonSteps.captchaValue;

import com.jhenck.core.BaseTest;
import com.jhenck.core.DriverFactory;
import com.jhenck.screens.android.JourneyScreen;
import com.jhenck.screens.android.PastJourneysScreen;
import io.cucumber.java.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;

public class PriceCalculator {

	private JourneyScreen journey = new JourneyScreen();
	private PastJourneysScreen pastJourneys = new PastJourneysScreen();
	private static String estimatedValue;

	@Given("selects from {string} to {string}")
	public void userSelectsFromTo(String origin, String destination) throws Throwable {
		journey.selectPickUpPointOption(origin);
		journey.selectDropOffPointOption(destination);
	}

	@Given("selects the option {string} car")
	public void checkTheOptionCar(String type) throws Throwable {
		if (type.equals("Lite")) {
			if (!journey.isRadioLiteChecked()) {
				journey.checkCarTypeLite();
			}
			if (journey.isRadioExecutiveChecked()) {
				journey.checkCarTypeExecutive();
			}
		} else if (type.equals("Executive")) {
			if (!journey.isRadioExecutiveChecked()) {
				journey.checkCarTypeExecutive();
			}
			if (journey.isRadioLiteChecked()) {
				journey.checkCarTypeLite();
			}
		}
	}

	@Given("fills captcha with the previous generated one")
	public void fillCaptchaWithThePreviousGeneratedOne() throws Throwable {
		journey.typeCaptcha(captchaValue);
	}

	@Given("taps on estimate button")
	public void tapOnEstimateButton() throws Throwable {
		journey.tapEstimateButton();
	}

	@Then("estimated price should be {string}")
	public void estimatedPriceShouldBe(String price) throws Throwable {
		Assertions.assertEquals(price, journey.getEstimatedPrice());
	}

	@When("taps on request car button")
	public void userTapsOnRequestCarButton() throws Throwable {
		estimatedValue = journey.getEstimatedPrice();
		journey.tapRequestCarButton();
	}

	@Then("journey from {string} to {string} with estimated price should be presented")
	public void journeyFromToWithEstimatedPriceShouldBePresented(String origin, String destination) throws Throwable {
		Assertions.assertTrue(pastJourneys.getJourneyOriginDestination().startsWith(origin));
		Assertions.assertTrue(pastJourneys.getJourneyOriginDestination().endsWith(destination));
		Assertions.assertEquals(estimatedValue, pastJourneys.getJourneyEstimatedPrice());
	}

	@When("fills invalid captcha {string}")
	public void fillsInvalidCaptcha(String invalidCaptcha) throws Throwable {
		journey.typeCaptcha(invalidCaptcha);
	}

	@When("selects no options of car")
	public void checksNoOptionsOfCar() throws Throwable {
		if (journey.isRadioLiteChecked()) {
			journey.checkCarTypeLite();
		}
		if (journey.isRadioExecutiveChecked()) {
			journey.checkCarTypeExecutive();
		}
	}

	@When("selects all options of car")
	public void checksAllOptionsOfCar() throws Throwable {
		if (!journey.isRadioLiteChecked()) {
			journey.checkCarTypeLite();
		}
		if (!journey.isRadioExecutiveChecked()) {
			journey.checkCarTypeExecutive();
		}
	}

	@Then("an alert with {string} should be presented")
	public void anAlertWithShouldBePresented(String message) throws Throwable {
		Assertions.assertTrue(journey.validateExhibitonAlertMessage());
		Assertions.assertEquals(message, journey.getAlertText());
		journey.clickOutOfAlert();
	}

	@Then("the request car button should not be presented")
	public void theRequestCarButtonShouldNotBePresented() throws Throwable {
		Assertions.assertFalse(journey.validateExhibitonRequestCarButton());
	}

	@Then("price should not be estimated")
	public void priceShouldNotBeEstimated() throws Throwable {
		Assertions.assertEquals("null €", journey.getEstimatedPrice());
	}

	@After
	public static void finishScenario(Scenario scenario) {
		BaseTest.takeScreenshot(scenario);
		DriverFactory.stopDriver();
	}
}
