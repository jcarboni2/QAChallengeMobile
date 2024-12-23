package com.jhenck.screens.android;

import io.appium.java_client.AppiumBy;
import org.openqa.selenium.By;

public class JourneyScreen extends BaseScreen {

	private static final By titletext = AppiumBy.xpath("//android.widget.TextView[@text=\"Choose your journey settings\"]");
	private static final By originField = AppiumBy.id("pick_up_point");
	private static final By destinationField = By.id("drop_off_point");
	private static final By liteType = AppiumBy.id("liteCheckBox");
	private static final By executiveType = AppiumBy.id("executiveCheckBox");
	private static final By captchaField = AppiumBy.id("captcha_text");
	private static final By priceField = AppiumBy.id("price_text");
	private static final By estimateButton = AppiumBy.id("estimate_button");
	private static final By requestCarButton = AppiumBy.id("request_button");
	private static final By alertMessage = By.id("android:id/message");

	public Boolean existsJourneysTitle() { return existsElementTextBy(titletext);}

	public void selectPickUpPointOption(String _origin) {selectComboText(originField, _origin);}

	public void selectDropOffPointOption(String _destination) {
		selectComboText(destinationField, _destination);
	}

	public boolean isRadioLiteChecked() {
		return isCheckSet(liteType);
	}

	public boolean isRadioExecutiveChecked() {
		return isCheckSet(executiveType);
	}

	public void checkCarTypeLite() {
		clickElementBy(liteType);
	}

	public void checkCarTypeExecutive() {
		clickElementBy(executiveType);
	}

	public void typeCaptcha(String _captcha) {
		typeElementBy(captchaField, _captcha);
	}

	public void tapEstimateButton() {
		clickElementBy(estimateButton);
	}

	public String getEstimatedPrice() {
		return getElementTextBy(priceField);
	}

	public void tapRequestCarButton() {
		clickElementBy(requestCarButton);
	}

	public boolean validateExhibitonRequestCarButton() {
		return exhibitionElementBy(requestCarButton);
	}

	public boolean validateExhibitonAlertMessage() {
		return exhibitionElementBy(alertMessage);
	}

	public String getAlertText() {
		return getElementTextBy(alertMessage);
	}

	public void getOutOfAlert() {pressEscKey();}
}
