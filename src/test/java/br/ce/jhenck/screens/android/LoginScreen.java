package br.ce.jhenck.screens.android;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;

public class LoginScreen extends BaseScreen {

	// -----Set elements attributes-----//
	private static final By username = MobileBy.id("user_name_edit_text");
	private static final By password = MobileBy.id("password_edit_text");
	private static final By loginButton = MobileBy.id("login_button");

	/**
	 * A method for typing the User and Password.
	 * 
	 * @author Johnny Henck
	 * @param _user
	 * @param _pwd
	 */
	public void fillUserPassword(String _user, String _pwd) {
		typeElementBy(username, _user);
		typeElementBy(password, _pwd);
	}

	/**
	 * A method for tapping on Login button.
	 * 
	 * @author Johnny Henck
	 */
	public void tapLoginButton() throws Exception {
		clickElementBy(loginButton);
	}
}