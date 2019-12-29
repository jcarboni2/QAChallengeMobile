package br.ce.jhenck.core;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class DriverFactory {

	private static AndroidDriver<MobileElement> driver;

	/**
	 * A method for getting the Appium driver session.
	 * 
	 * @author Johnny Henck
	 */
	public static AndroidDriver<MobileElement> getDriver() {
		if (driver == null) {
			startDriver();
		}
		return driver;
	}

	/**
	 * A method for starting the Appium driver session.
	 * 
	 * @author Johnny Henck
	 */
	private static void startDriver() {
		DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
		desiredCapabilities.setCapability("udid", "emulator-5554");
		desiredCapabilities.setCapability("platformName", "Android");
		desiredCapabilities.setCapability("deviceName", "Any");
		desiredCapabilities.setCapability("automationName", "uiautomator2");
		desiredCapabilities.setCapability("appPackage", "com.cabify.qabify");
		desiredCapabilities.setCapability("appActivity", "com.cabify.qabify.MainActivity");
		desiredCapabilities.setCapability("MobileCapabilityType.APP", "src/test/resources/qabify2019.apk");
		try {
			driver = new AndroidDriver<MobileElement>(new URL("http://localhost:4723/wd/hub"), desiredCapabilities);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	/**
	 * A method for stopping the Appium driver session.
	 * 
	 * @author Johnny Henck
	 */
	public static void stopDriver() {
		if (driver != null) {
			driver.quit();
			driver = null;
		}
	}
}