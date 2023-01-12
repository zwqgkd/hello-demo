package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class demoMessage {
    @JsonProperty("edges")
    List<Edge> edges;

    @JsonProperty("nodes")
    List<Node> nodes;

    public List<Edge> getEdges() {
        return edges;
    }

    public List<Node> getNodes() {
        return nodes;
    }

    public int getEdgesNum()
    {
        return getEdges().size();
    }
    public int getNodesNum()
    {
        return getNodes().size();
    }
}
