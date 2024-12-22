package com.jhenck.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class HandleProperties {

    private static Properties properties;
    private static final String PROPERTIES_FILE_PATH = "src/test/resources/application-test.properties";

    private HandleProperties() {
        // Private constructor to prevent instantiation
    }

    public static Properties getInstance() {
        if (properties == null) {
            synchronized (HandleProperties.class) {
                if (properties == null) {
                    properties = new Properties();
                    try (FileInputStream input = new FileInputStream(PROPERTIES_FILE_PATH)) {
                        properties.load(input);
                    } catch (IOException e) {
                        throw new RuntimeException("Failed to load properties file", e);
                    }
                }
            }
        }
        return properties;
    }

    public static String getProperty(String key) {
        return getInstance().getProperty(key);
    }
}
