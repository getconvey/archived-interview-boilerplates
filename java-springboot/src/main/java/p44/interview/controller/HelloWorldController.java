package p44.interview.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import p44.interview.model.Message;

@Slf4j
@RestController
@RequestMapping("/helloworld")
public class HelloWorldController {
    
    private final String messageText;

    public HelloWorldController(@Value("${hello-world.message}") String messageText) {
        this.messageText = messageText;
    }

    @GetMapping()
    public ResponseEntity<Message> hello() {
        return new ResponseEntity<>(new Message(messageText), HttpStatus.OK);
    }
}
