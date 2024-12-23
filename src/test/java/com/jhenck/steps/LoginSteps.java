package com.jhenck.steps;

import com.jhenck.screens.android.CaptchaScreen;
import com.jhenck.screens.android.LoginScreen;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.jupiter.api.Assertions;

public class LoginSteps {

    private final CaptchaScreen captchaScreen = new CaptchaScreen();
    private final LoginScreen loginScreen = new LoginScreen();

    @Given("user fill {string} and {string}")
    public void userFillInvalidCredentialsApp(String user, String password) throws Throwable {
        loginScreen.fillUserPassword(user, password);
    }

    @Then("the captcha title text should be presented")
    public void titleCaptchaTextDisplayed() throws Throwable {
        Assertions.assertTrue(captchaScreen.existsCaptchaTitle());
    }

    @Then("should be presented the message {string}")
    public void validateInvalidCredentialsMessage(String message) throws Throwable {
        Assertions.assertEquals(message, loginScreen.getInvalidCredentiasMessage());
    }
}
