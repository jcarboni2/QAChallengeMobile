package com.jhenck.screens.android;

import static com.jhenck.core.DriverFactory.getDriver;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class BaseScreen {

	public void typeElementBy(By _attribute, String _text) {
		getDriver().findElement(_attribute).sendKeys(_text);
	}

	public Boolean existsElementTextBy(By _attribute) {
		return getDriver().findElement(_attribute).isDisplayed();
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
		return !element.isEmpty();
	}

	public void pressEscKey() {
		Actions actions = new Actions(getDriver());
		actions.sendKeys(Keys.ESCAPE).perform();
	}
}
