package br.ce.jhenck.runners;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import br.ce.jhenck.core.DriverFactory;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/br/ce/jhenck/features/",
		glue = "br.ce.jhenck.steps",
		tags = {"@regression"},
		plugin = {"pretty", "html:target/report-html"},
		monochrome = true, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false,
		strict = false
		)
public class RunnerTest{
	
	/**
	 * A method for calling the stop Appium driver session after feature executed.
	 * 
	 * @author Johnny Henck
	 */
	@AfterClass
	public static void tearDown() {
		DriverFactory.stopDriver();
	}
}