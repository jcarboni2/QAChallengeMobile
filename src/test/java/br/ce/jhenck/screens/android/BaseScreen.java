package br.ce.jhenck.screens.android;

import static br.ce.jhenck.core.DriverFactory.getDriver;

import java.util.List;

import org.openqa.selenium.By;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;

public class BaseScreen {

	/**
	 * A method for sending text to the element by the specified attribute.
	 * 
	 * @author Johnny Henck
	 */
	public void typeElementBy(By _attribute, String _text) {
		getDriver().findElement(_attribute).sendKeys(_text);
	}

	/**
	 * A method for getting text of the element by the specified attribute.
	 * 
	 * @author Johnny Henck
	 * @param _attribute
	 * @return text of element
	 */
	public String getElementTextBy(By _attribute) {
		return getDriver().findElement(_attribute).getText();
	}

	/**
	 * A Method for clicking on the element by the specified attribute.
	 * 
	 * @author Johnny Henck
	 * @param _attribute
	 */
	public void clickElementBy(By _attribute) {
		getDriver().findElement(_attribute).click();
	}

	/**
	 * A method for clicking on the element text.
	 * 
	 * @author Johnny Henck
	 * @param _text
	 */
	public void clickElementText(String _text) {
		getDriver().findElement(By.xpath("//*[@text='" + _text + "']")).click();
	}

	/**
	 * A method for selecting the element text by the specified attribute.
	 * 
	 * @author Johnny Henck
	 * @param _attribute
	 * @param _text
	 */
	public void selectComboText(By _attribute, String _text) {
		clickElementBy(_attribute);
		clickElementText(_text);
	}

	/**
	 * A method for verifying if element is selected by the specified attribute.
	 * 
	 * @author Johnny Henck
	 * @param _attribute
	 * @return true or false if element is selected or not
	 */
	public boolean isCheckSet(By _attribute) {
		return getDriver().findElement(_attribute).getAttribute("checked").equals("true");
	}

	/**
	 * A method for verifying if element is being presented by specified attribute.
	 * 
	 * @author Johnny Henck
	 * @param _attribute
	 * @return true or false if element is found or not
	 */
	public boolean exhibitionElementBy(By _attribute) {
		List<MobileElement> element = getDriver().findElements(_attribute);
		return element.size() > 0;
	}

	/**
	 * A method for clicking by coordinates.
	 * 
	 * @author Johnny Henck
	 * @param _x
	 * @param _y
	 */
	public void tap(int _x, int _y) {
		new TouchAction<>(getDriver()).tap(PointOption.point(_x, _y)).perform();
	}
}