package p44.interview.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

@Value
public class Message {

    String text;

    @JsonCreator
    public Message(@JsonProperty("text") String text) {
        this.text = text;
    }
}
