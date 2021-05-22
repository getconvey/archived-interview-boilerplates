package com.getconvey.interview.configuration;

import io.dropwizard.Configuration;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class AppConfiguration extends Configuration {

    private String message;
}
