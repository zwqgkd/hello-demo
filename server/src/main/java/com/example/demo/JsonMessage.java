package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JsonMessage {
    @JsonProperty("Text")
    private String Text;
    @JsonProperty("Number")
    private int num;
    public JsonMessage(int n,String t)
    {
        this.num = n;
        this.Text = t;
    }
    public int getNum() {
        return num;
    }

    public String getText() {
        return Text;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public void setText(String text) {
        Text = text;
    }
}

