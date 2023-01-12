package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Node {
    @JsonProperty("id")
    String id;

    @JsonProperty("text")
    Text text;

    public String getId() {
        return id;
    }

    public Text getText() {
        return text;
    }
    public String getFunc(){
        return getText().getValue();
    }
}
