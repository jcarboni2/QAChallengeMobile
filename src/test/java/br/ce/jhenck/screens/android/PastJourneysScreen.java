package br.ce.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;

public class PastJourneysScreen extends BaseScreen {

	// -----Set elements attributes-----//
	private static final By jorneyTitle = MobileBy.id("journeyTitle");
	private static final By journeyPrice = MobileBy.id("journeyPrice");

	/**
	 * A method for getting the Origin and Destination locations of the Past
	 * Journeys.
	 * 
	 * @author Johnny Henck
	 */
	public String getJourneyOriginDestination() {
		return getElementTextBy(jorneyTitle);
	}

	/**
	 * A method for getting the Past Journeys Estimated price of the Past Journeys.
	 * 
	 * @author Johnny Henck
	 */
	public String getJourneyEstimatedPrice() {
		return getElementTextBy(journeyPrice);
	}
}