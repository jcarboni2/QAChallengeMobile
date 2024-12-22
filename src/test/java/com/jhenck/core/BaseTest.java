package com.jhenck.core;

import static com.jhenck.core.DriverFactory.getDriver;

import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import java.util.logging.Level;
import java.util.logging.Logger;

public class BaseTest {

	private static final Logger LOGGER = Logger.getLogger(BaseTest.class.getName());

	public static void takeScreenshot(Scenario scenario) {
		try {
			byte[] image = getDriver().getScreenshotAs(OutputType.BYTES);
			scenario.attach(image, "image/png", "Screenshot_" + scenario.getName());
		} catch (Exception e) {
			LOGGER.log(Level.SEVERE, "Error taking screenshot", e);
		}
	}
}
