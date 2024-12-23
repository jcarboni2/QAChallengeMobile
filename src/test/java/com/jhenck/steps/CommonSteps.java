package com.jhenck.steps;

import com.jhenck.screens.android.CaptchaScreen;
import com.jhenck.screens.android.JourneyScreen;
import com.jhenck.screens.android.LoginScreen;
import com.jhenck.utils.HandleProperties;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;

public class CommonSteps {

    private final LoginScreen loginScreen = new LoginScreen();
    private final CaptchaScreen captchaScreen = new CaptchaScreen();
    public static String captchaValue;
    private final JourneyScreen journey = new JourneyScreen();

    @Given("user fill the credentials app")
    public void userFillCredentialsApp() throws Throwable {
        String usr = HandleProperties.getProperty("user");
        String pwd = HandleProperties.getProperty("password");
        loginScreen.fillUserPassword(usr, pwd);
    }

    @And("user log in app")
    public void userLogInApp() throws Throwable {
        loginScreen.tapLoginButton();
    }

    @And("user gets captcha value")
    public void getCaptchaValue() throws Throwable {
        captchaValue = captchaScreen.getCaptchaText();
    }

    @And("user tap on the next button")
    public void tapOnTheNextButton() throws Throwable {
        captchaScreen.tapNextButton();
    }
}
