package com.getconvey.interview.configuration;

import io.dropwizard.Configuration;

public class AppConfiguration extends Configuration {

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
