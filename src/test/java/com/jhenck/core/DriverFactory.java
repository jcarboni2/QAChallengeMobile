package com.jhenck.core;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.logging.Level;
import java.util.logging.Logger;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class DriverFactory {

	private static final String DEVICE_NAME = "Samsung Galaxy S23";
	private static final String PLATFORM_NAME = "Android";
	private static final String UDID = "127.0.0.1:6555";
	private static final String APP_PACKAGE = "com.cabify.qabify";
	private static final String APP_ACTIVITY = "com.cabify.qabify.MainActivity";
	private static final String AUTOMATION_NAME = "UiAutomator2";
	private static final String APP_PATH = "src/test/resources/qabify2019.apk";
	private static final String APPIUM_SERVER_URL = "http://127.0.0.1:4723/wd/hub";
	private static final String MALFORMED_URL_ERROR = "Appium server URL is malformed";
	private static final String DRIVER_CLOSE_ERROR = "Error closing AppiumDriver";
	private static AndroidDriver app;

	public static DesiredCapabilities getCapabilities() {
		File appPath = new File(APP_PATH);

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("appium:deviceName", DEVICE_NAME);
		capabilities.setCapability("platformName", PLATFORM_NAME);
		capabilities.setCapability("appium:udid", UDID);
		capabilities.setCapability("appium:appPackage", APP_PACKAGE);
		capabilities.setCapability("appium:appActivity", APP_ACTIVITY);
		capabilities.setCapability("appium:automationName", AUTOMATION_NAME);
		capabilities.setCapability("appium:app", appPath.getAbsolutePath());

		return capabilities;
	}

	public static AndroidDriver getDriver() {
		if (app == null) {
			startDriver();
		}

		return app;
	}

	public static void startDriver() {
		try {
			app = new AndroidDriver(new URL(APPIUM_SERVER_URL), getCapabilities());
			app.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		} catch (MalformedURLException e) {
			throw new RuntimeException(MALFORMED_URL_ERROR, e);
		}
	}

	public static void stopDriver() {
		if (app != null) {
			try {
				app.quit();
			} catch (Exception e) {
				Logger.getLogger(DriverFactory.class.getName()).log(Level.SEVERE, DRIVER_CLOSE_ERROR, e);
			} finally {
				app = null;
			}
		}
	}
}