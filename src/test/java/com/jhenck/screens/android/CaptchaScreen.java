package com.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.AppiumBy;

public class CaptchaScreen extends BaseScreen {

	private static final By titleText = AppiumBy.xpath("//android.widget.TextView[@text=\"Remember this code for requesting a Taxi\"]");
	private static final By captchaText = AppiumBy.id("captcha_text");
	private static final By nextButton = AppiumBy.id("captcha_button");

	public Boolean existsCaptchaTitle() { return existsElementTextBy(titleText);}

	public String getCaptchaText() {return getElementTextBy(captchaText);}

	public void tapNextButton() {
		clickElementBy(nextButton);
	}
}
