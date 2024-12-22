package com.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.AppiumBy;

public class PastJourneysScreen extends BaseScreen {

	private static final By jorneyTitle = AppiumBy.id("journeyTitle");
	private static final By journeyPrice = AppiumBy.id("journeyPrice");

	public String getJourneyOriginDestination() {
		return getElementTextBy(jorneyTitle);
	}

	public String getJourneyEstimatedPrice() {
		return getElementTextBy(journeyPrice);
	}
}
