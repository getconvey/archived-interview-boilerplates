package p44.interview.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import p44.interview.model.Message;

public class HelloWorldControllerTest {
    
    @Test
    public void simple() {
        final var controller = new HelloWorldController("My Message");
        
        assertEquals(new ResponseEntity<>(new Message("My Message"), HttpStatus.OK), controller.hello());
    }
}
