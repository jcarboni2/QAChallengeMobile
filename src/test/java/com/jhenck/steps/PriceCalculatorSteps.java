package com.jhenck.steps;

import static com.jhenck.steps.CommonSteps.captchaValue;

import com.jhenck.core.BaseTest;
import com.jhenck.core.DriverFactory;
import com.jhenck.screens.android.JourneyScreen;
import com.jhenck.screens.android.PastJourneysScreen;
import io.cucumber.java.After;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;

public class PriceCalculatorSteps {

	private final JourneyScreen journeyScreen = new JourneyScreen();
	private final PastJourneysScreen pastJourneysScreen = new PastJourneysScreen();
	private static String estimatedValue;

	@Then("the journey title text should be presented")
	public void existsTitleJorneysText() throws Throwable {
		Assertions.assertTrue(journeyScreen.existsJourneysTitle());
	}

	@Given("selects from {string} to {string}")
	public void userSelectsFromTo(String origin, String destination) throws Throwable {
		journeyScreen.selectPickUpPointOption(origin);
		journeyScreen.selectDropOffPointOption(destination);
	}

	@Given("selects the option {string} car")
	public void checkTheOptionCar(String type) throws Throwable {
		if (type.equals("Lite")) {
			if (!journeyScreen.isRadioLiteChecked()) {
				journeyScreen.checkCarTypeLite();
			}
			if (journeyScreen.isRadioExecutiveChecked()) {
				journeyScreen.checkCarTypeExecutive();
			}
		} else if (type.equals("Executive")) {
			if (!journeyScreen.isRadioExecutiveChecked()) {
				journeyScreen.checkCarTypeExecutive();
			}
			if (journeyScreen.isRadioLiteChecked()) {
				journeyScreen.checkCarTypeLite();
			}
		}
	}

	@Given("fills captcha with the previous generated one")
	public void fillCaptchaWithThePreviousGeneratedOne() throws Throwable {
		journeyScreen.typeCaptcha(captchaValue);
	}

	@Given("taps on estimate button")
	public void tapOnEstimateButton() throws Throwable {
		journeyScreen.tapEstimateButton();
	}

	@Then("estimated price should be {string}")
	public void estimatedPriceShouldBe(String price) throws Throwable {
		Assertions.assertEquals(price, journeyScreen.getEstimatedPrice());
	}

	@When("taps on request car button")
	public void userTapsOnRequestCarButton() throws Throwable {
		estimatedValue = journeyScreen.getEstimatedPrice();
		journeyScreen.tapRequestCarButton();
	}

	@Then("journey from {string} to {string} with estimated price should be presented")
	public void journeyFromToWithEstimatedPriceShouldBePresented(String origin, String destination) throws Throwable {
		Assertions.assertTrue(pastJourneysScreen.getJourneyOriginDestination().startsWith(origin));
		Assertions.assertTrue(pastJourneysScreen.getJourneyOriginDestination().endsWith(destination));
		Assertions.assertEquals(estimatedValue, pastJourneysScreen.getJourneyEstimatedPrice());
	}

	@When("fills invalid captcha {string}")
	public void fillsInvalidCaptcha(String invalidCaptcha) throws Throwable {
		journeyScreen.typeCaptcha(invalidCaptcha);
	}

	@When("selects no options of car")
	public void checksNoOptionsOfCar() throws Throwable {
		if (journeyScreen.isRadioLiteChecked()) {
			journeyScreen.checkCarTypeLite();
		}
		if (journeyScreen.isRadioExecutiveChecked()) {
			journeyScreen.checkCarTypeExecutive();
		}
	}

	@When("selects all options of car")
	public void checksAllOptionsOfCar() throws Throwable {
		if (!journeyScreen.isRadioLiteChecked()) {
			journeyScreen.checkCarTypeLite();
		}
		if (!journeyScreen.isRadioExecutiveChecked()) {
			journeyScreen.checkCarTypeExecutive();
		}
	}

	@Then("an alert with {string} should be presented")
	public void anAlertWithShouldBePresented(String message) throws Throwable {
		Assertions.assertTrue(journeyScreen.validateExhibitonAlertMessage());
		Assertions.assertEquals(message, journeyScreen.getAlertText());
		journeyScreen.getOutOfAlert();
	}

	@Then("the request car button should not be presented")
	public void theRequestCarButtonShouldNotBePresented() throws Throwable {
		Assertions.assertFalse(journeyScreen.validateExhibitonRequestCarButton());
	}

	@Then("price should not be estimated")
	public void priceShouldNotBeEstimated() throws Throwable {
		Assertions.assertEquals("null €", journeyScreen.getEstimatedPrice());
	}

	@After
	public static void finishScenario(Scenario scenario) {
		BaseTest.takeScreenshot(scenario);
		DriverFactory.stopDriver();
	}
}
