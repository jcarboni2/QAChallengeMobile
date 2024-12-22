package com.jhenck.screens.android;

import org.openqa.selenium.By;
import io.appium.java_client.AppiumBy;

public class LoginScreen extends BaseScreen {

	private static final By username = AppiumBy.id("user_name_edit_text");
	private static final By password = AppiumBy.id("password_edit_text");
	private static final By loginButton = AppiumBy.id("login_button");

	public void fillUserPassword(String _user, String _pwd) {
		typeElementBy(username, _user);
		typeElementBy(password, _pwd);
	}

	public void tapLoginButton() throws Exception {
		clickElementBy(loginButton);
	}
}