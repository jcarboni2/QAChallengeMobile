package br.ce.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;

public class JourneyScreen extends BaseScreen {

	// -----Set elements attributes-----//
	private static final By originField = MobileBy.id("pick_up_point");
	private static final By destinationField = By.id("drop_off_point");
	private static final By liteType = MobileBy.id("liteCheckBox");
	private static final By executiveType = MobileBy.id("executiveCheckBox");
	private static final By captchaField = MobileBy.id("captcha_text");
	private static final By priceField = MobileBy.id("price_text");
	private static final By estimateButton = MobileBy.id("estimate_button");
	private static final By requestCarButton = MobileBy.id("request_button");
	private static final By alertMessage = By.id("android:id/message");

	/**
	 * A method for selecting a location of the Pick Up point.
	 * 
	 * @author Johnny Henck
	 * @param _origin
	 */
	public void selectPickUpPointOption(String _origin) {
		selectComboText(originField, _origin);
	}

	/**
	 * A method for selecting a location of the Drop Off point.
	 * 
	 * @author Johnny Henck
	 * @param _destination
	 */
	public void selectDropOffPointOption(String _destination) {
		selectComboText(destinationField, _destination);
	}

	/**
	 * A method for validating if Lite type of car is selected.
	 * 
	 * @author Johnny Henck
	 * @return true or false if Lite type of car is being selected or not
	 */
	public boolean isRadioLiteChecked() {
		return isCheckSet(liteType);
	}

	/**
	 * A method for validating if Executive type of car is selected.
	 * 
	 * @author Johnny Henck
	 * @return true or false if Executive type of car is being selected or not
	 */
	public boolean isRadioExecutiveChecked() {
		return isCheckSet(executiveType);
	}

	/**
	 * A method for selecting the Lite type of car.
	 * 
	 * @author Johnny Henck
	 */
	public void checkCarTypeLite() {
		clickElementBy(liteType);
	}

	/**
	 * A method for selecting the Executive type of car.
	 * 
	 * @author Johnny Henck
	 */
	public void checkCarTypeExecutive() {
		clickElementBy(executiveType);
	}

	/**
	 * A method for typing the Captcha value generated.
	 * 
	 * @author Johnny Henck
	 * @param _captcha
	 */
	public void typeCaptcha(String _captcha) {
		typeElementBy(captchaField, _captcha);
	}

	/**
	 * A method for tapping on the Estimate button.
	 * 
	 * @author Johnny Henck
	 */
	public void tapEstimateButton() {
		clickElementBy(estimateButton);
	}

	/**
	 * A method for getting the Estimated price.
	 * 
	 * @author Johnny Henck
	 * @return value of estimated price
	 */
	public String getEstimatedPrice() {
		return getElementTextBy(priceField);
	}

	/**
	 * A method for tapping on the Request Car button.
	 * 
	 * @author Johnny Henck
	 */
	public void tapRequestCarButton() {
		clickElementBy(requestCarButton);
	}

	/**
	 * A method for validating if the Request Car button is presented.
	 * 
	 * @author Johnny Henck
	 * @return true or false if the request button is presented or not
	 */
	public boolean validateExhibitonRequestCarButton() {
		return exhibitionElementBy(requestCarButton);
	}
	
	/**
	 * A method for validating if the Alert message is being presented.
	 * 
	 * @author Johnny Henck
	 * @return true or false if the Alert message is being presented or not
	 */
	public boolean validateExhibitonAlertMessage() {
		return exhibitionElementBy(alertMessage);
	}

	/**
	 * A method for getting the generic Alert text.
	 * 
	 * @author Johnny Henck
	 * @return message of the alert
	 */
	public String getAlertText() {
		return getElementTextBy(alertMessage);
	}

	/**
	 * A method for clicking out of alert message.
	 * 
	 * @author Johnny Henck
	 */
	public void clickOutOfAlert() {
		tap(250, 1400);
	}
}