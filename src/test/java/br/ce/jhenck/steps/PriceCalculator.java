package br.ce.jhenck.steps;

import org.junit.Assert;

import br.ce.jhenck.core.BaseTest;
import br.ce.jhenck.core.DriverFactory;
import br.ce.jhenck.screens.android.CaptchaScreen;
import br.ce.jhenck.screens.android.JourneyScreen;
import br.ce.jhenck.screens.android.LoginScreen;
import br.ce.jhenck.screens.android.PastJourneysScreen;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PriceCalculator {

	private LoginScreen login = new LoginScreen();
	private CaptchaScreen captcha = new CaptchaScreen();
	private JourneyScreen journey = new JourneyScreen();
	private PastJourneysScreen pastJourneys = new PastJourneysScreen();

	private static String captchaValue;
	private static String estimatedValue;

	@Given("^user is logged in app with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void userIsLoggedInAppWithAnd(String usr, String pwd) throws Throwable {
		login.fillUserPassword(usr, pwd);
		login.tapLoginButton();
		captchaValue = captcha.getCaptchaText();
		captcha.tapNextButton();
	}

	@Given("^selects from \"([^\"]*)\" to \"([^\"]*)\"$")
	public void userSelectsFromTo(String _origin, String _destination) throws Throwable {
		journey.selectPickUpPointOption(_origin);
		journey.selectDropOffPointOption(_destination);
	}

	@Given("^selects the option \"([^\"]*)\" car$")
	public void checkTheOptionCar(String _type) throws Throwable {
		if (_type.equals("Lite")) {
			if (journey.isRadioLiteChecked() == false) {
				journey.checkCarTypeLite();
			}
			if (journey.isRadioExecutiveChecked() == true) {
				journey.checkCarTypeExecutive();
			}
		} else if (_type.equals("Executive")) {
			if (journey.isRadioExecutiveChecked() == false) {
				journey.checkCarTypeExecutive();
			}
			if (journey.isRadioLiteChecked() == true) {
				journey.checkCarTypeLite();
			}
		}
	}

	@Given("^fills captcha with the previous generated one$")
	public void fillCaptchaWithThePreviousGeneratedOne() throws Throwable {
		journey.typeCaptcha(captchaValue);
	}

	@Given("^taps on estimate button$")
	public void tapOnEstimateButton() throws Throwable {
		journey.tapEstimateButton();
	}

	@Then("^estimated price should be \"([^\"]*)\"$")
	public void estimatedPriceShouldBe(String _price) throws Throwable {
		Assert.assertEquals(_price, journey.getEstimatedPrice());
	}

	@When("^taps on request car button$")
	public void userTapsOnRequestCarButton() throws Throwable {
		estimatedValue = journey.getEstimatedPrice();
		journey.tapRequestCarButton();
	}

	@Then("^journey from \"([^\"]*)\" to \"([^\"]*)\" with estimated price should be presented$")
	public void journeyFromToWithEstimatedPriceShouldBePresented(String _origin, String _destination) throws Throwable {
		Assert.assertTrue(pastJourneys.getJourneyOriginDestination().startsWith(_origin));
		Assert.assertTrue(pastJourneys.getJourneyOriginDestination().endsWith(_destination));
		Assert.assertEquals(estimatedValue, pastJourneys.getJourneyEstimatedPrice());
	}

	@When("^fills invalid captcha \"([^\"]*)\"$")
	public void fillsInvalidCaptcha(String _invaliCaptcha) throws Throwable {
		journey.typeCaptcha(_invaliCaptcha);
	}

	@When("^selects no options of car$")
	public void checksNoOptionsOfCar() throws Throwable {
		if (journey.isRadioLiteChecked() == true) {
			journey.checkCarTypeLite();
		}
		if (journey.isRadioExecutiveChecked() == true) {
			journey.checkCarTypeExecutive();
		}
	}

	@When("^selects all options of car$")
	public void checksAllOptionsOfCar() throws Throwable {
		if (journey.isRadioLiteChecked() == false) {
			journey.checkCarTypeLite();
		}
		if (journey.isRadioExecutiveChecked() == false) {
			journey.checkCarTypeExecutive();
		}
	}

	@Then("^an alert with \"([^\"]*)\" should be presented$")
	public void anAlertWithShouldBePresented(String _message) throws Throwable {
		Assert.assertTrue(journey.validateExhibitonAlertMessage());
		Assert.assertEquals(_message, journey.getAlertText());
		journey.clickOutOfAlert();
	}

	@Then("^the request car button should not be presented$")
	public void theRequestCarButtonShouldNotBePresented() throws Throwable {
		Assert.assertFalse(journey.validateExhibitonRequestCarButton());
	}

	@Then("^price should not be estimated$")
	public void priceShouldNotBeEstimated() throws Throwable {
		Assert.assertEquals("null €", journey.getEstimatedPrice());
	}

	@After
	public static void finishScenario(Scenario _cenario) {
		BaseTest.screenshot(_cenario);
		DriverFactory.getDriver().resetApp();
	}
}