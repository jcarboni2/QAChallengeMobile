package com.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.AppiumBy;

public class CaptchaScreen extends BaseScreen {

	private static final By captchaText = AppiumBy.id("captcha_text");
	private static final By nextButton = AppiumBy.id("captcha_button");

	public String getCaptchaText() {
		return getElementTextBy(captchaText);
	}

	public void tapNextButton() {
		clickElementBy(nextButton);
	}
}
