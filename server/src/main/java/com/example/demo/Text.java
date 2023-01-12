package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Text {
    @JsonProperty("value")
    private String value;

    public String getValue() {
        return value;
    }
}
