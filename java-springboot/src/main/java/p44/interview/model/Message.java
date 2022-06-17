package p44.interview.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Message {

    private final String text;

    @JsonCreator
    public Message(@JsonProperty("text") String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }
}
