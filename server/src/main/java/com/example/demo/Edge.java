package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Edge {
    @JsonProperty("sourceNodeId")
    String sourceNodeId;

    @JsonProperty("targetNodeId")
    String targetNodeId;

    public String getSourceNodeId() {
        return sourceNodeId;
    }

    public String getTargetNodeId() {
        return targetNodeId;
    }
}
