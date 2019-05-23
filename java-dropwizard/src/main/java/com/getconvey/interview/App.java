package com.getconvey.interview;

import com.getconvey.interview.configuration.AppConfiguration;
import com.getconvey.interview.resources.HelloWorldResource;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;

public class App extends Application<AppConfiguration> {

    public static void main(String[] args) throws Exception {
        new App().run(args);
    }

    public void run(AppConfiguration configuration, Environment environment) throws Exception {

        environment.jersey().register(new HelloWorldResource(configuration.getMessage()));
    }
}
