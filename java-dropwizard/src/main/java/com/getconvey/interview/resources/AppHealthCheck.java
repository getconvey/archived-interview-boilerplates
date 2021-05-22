package com.getconvey.interview.resources;

import com.codahale.metrics.health.HealthCheck;

/**
 * A health check for the app that just says all is well.
 */
public class AppHealthCheck extends HealthCheck {

    @Override
    protected Result check() throws Exception {
        return Result.healthy();
    }
}
