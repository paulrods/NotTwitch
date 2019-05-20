import React, { Component } from "react";
import styled from "styled-components";
import StreamCard from "./StreamCard";
import { Route, Switch, Link } from "react-router-dom";
import twitchAPI, { getTopStreams } from "../../../lib/twitchApi";
import axios from "axios";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: top;
  margin: 0;
  padding: 2rem 32px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class TopStreams extends Component {
  state = {
    topStreams: [],
  };

  async componentDidMount() {
    try {
      const topStreams = await getTopStreams();
      const { streams } = topStreams.data;
      this.setState({
        topStreams: streams,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.topStreams.map(stream => (
          <StreamCard stream={stream} key={stream._id} />
        ))}
      </Wrapper>
    );
  }
}
