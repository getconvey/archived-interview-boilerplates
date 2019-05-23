package com.getconvey.interview;

import static org.assertj.core.api.Assertions.assertThat;

import com.getconvey.interview.configuration.AppConfiguration;
import com.getconvey.interview.model.Message;
import io.dropwizard.jersey.jackson.JacksonMessageBodyProvider;
import io.dropwizard.testing.ResourceHelpers;
import io.dropwizard.testing.junit.DropwizardAppRule;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.client.ClientConfig;
import org.junit.ClassRule;
import org.junit.Test;

/**
 * Happy path integration test.
 */
public class AppIT {

    @ClassRule
    public static final DropwizardAppRule<AppConfiguration> RULE =
            new DropwizardAppRule<AppConfiguration>(App.class, ResourceHelpers.resourceFilePath("it.yaml"));

    @Test
    public void helloWorld() {
        final Client client =
                ClientBuilder.newClient(new ClientConfig().register(new JacksonMessageBodyProvider(RULE.getObjectMapper())));

        final Response response = client.target(
                String.format("http://localhost:%d/helloworld", RULE.getLocalPort()))
                .request()
                .get();

        assertThat(response.getStatus()).isEqualTo(200);
        final Message message = response.readEntity(Message.class);
        assertThat(message.getText()).isEqualTo("Hello world");

    }
}
