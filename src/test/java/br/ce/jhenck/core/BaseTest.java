package br.ce.jhenck.core;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;

public class BaseTest {
	
	/**
	 * A method for taking the screenshots after each failed scenario.
	 * 
	 * @author Johnny Henck
	 */
	public static void screenshot(Scenario _cenario) {
		if (_cenario.isFailed()) {
			File image = ((TakesScreenshot) DriverFactory.getDriver()).getScreenshotAs(OutputType.FILE);
			String timestamp = new SimpleDateFormat("yyyy-MM-dd__HH-mm-ss").format(new Date());
			try {
				new File("/target/screenshots").mkdir();
				FileUtils.copyFile(image, new File("target/screenshots/"+_cenario.getName()+"_"+timestamp+".png"));
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}