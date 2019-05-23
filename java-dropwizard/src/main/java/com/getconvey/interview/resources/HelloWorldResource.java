package com.getconvey.interview.resources;


import com.getconvey.interview.model.Message;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/helloworld")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class HelloWorldResource {

    private final String messageText;

    public HelloWorldResource(String messageText) {
        this.messageText = messageText;
    }

    @GET
    public Response hello() {
        final Message message = new Message(messageText);

        return Response.ok(message, MediaType.APPLICATION_JSON).build();
    }
}
