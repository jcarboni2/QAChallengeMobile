package br.ce.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;

public class CaptchaScreen extends BaseScreen {

	// -----Set elements attributes-----//
	private static final By captchaText = MobileBy.id("captcha_text");
	private static final By nextButton = MobileBy.id("captcha_button");

	/**
	 * A method for getting captcha text.
	 * 
	 * @author Johnny Henck
	 * @return value of the generated captcha
	 */
	public String getCaptchaText() {
		return getElementTextBy(captchaText);
	}

	/**
	 * A method for tapping on Next button.
	 * 
	 * @author Johnny Henck
	 */
	public void tapNextButton() {
		clickElementBy(nextButton);
	}
}