package com.jhenck.screens.android;

import static com.jhenck.core.DriverFactory.getDriver;

import java.util.List;

import io.appium.java_client.PerformsTouchActions;
import org.openqa.selenium.By;

import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.WebElement;

public class BaseScreen {

	public void typeElementBy(By _attribute, String _text) {
		getDriver().findElement(_attribute).sendKeys(_text);
	}

	public String getElementTextBy(By _attribute) {
		return getDriver().findElement(_attribute).getText();
	}

	public void clickElementBy(By _attribute) {
		getDriver().findElement(_attribute).click();
	}

	public void clickElementText(String _text) {
		getDriver().findElement(By.xpath("//*[@text='" + _text + "']")).click();
	}

	public void selectComboText(By _attribute, String _text) {
		clickElementBy(_attribute);
		clickElementText(_text);
	}

	public boolean isCheckSet(By _attribute) {
		return getDriver().findElement(_attribute).getAttribute("checked").equals("true");
	}

	public boolean exhibitionElementBy(By _attribute) {
		List<WebElement> element = getDriver().findElements(_attribute);
		return element.size() > 0;
	}

	public void tap(int _x, int _y) {
		new TouchAction<>((PerformsTouchActions) getDriver()).tap(PointOption.point(_x, _y)).perform();
	}
}
