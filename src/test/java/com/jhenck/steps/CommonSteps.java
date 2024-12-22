package com.jhenck.steps;

import com.jhenck.screens.android.CaptchaScreen;
import com.jhenck.screens.android.JourneyScreen;
import com.jhenck.screens.android.LoginScreen;
import com.jhenck.utils.HandleProperties;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;

public class CommonSteps {

    private final LoginScreen login = new LoginScreen();
    private final CaptchaScreen captcha = new CaptchaScreen();
    public static String captchaValue;
    private final JourneyScreen journey = new JourneyScreen();

    @Given("user is logged in app with valid credentials")
    public void userIsLoggedInAppWithAnd() throws Throwable {
        String usr = HandleProperties.getProperty("user");
        String pwd = HandleProperties.getProperty("password");
        login.fillUserPassword(usr, pwd);
        login.tapLoginButton();
    }

    @And("user get the captcha value")
    public void getCaptchaValue() throws Throwable {
        captchaValue = captcha.getCaptchaText();
        captcha.tapNextButton();
    }
}
