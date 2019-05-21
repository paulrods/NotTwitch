import React, { Component } from "react";
import styled from "styled-components";
import StreamCard from "./Streams/StreamCard";
import { Route, Switch, Link } from "react-router-dom";
import twitchAPI, { getTopStreams, searchStreams } from "../../lib/twitchApi";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";

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

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [],
      limit: 10,
      query: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.getStreams = this.getStreams.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  async componentDidMount() {
    try {
      const topStreams = await getTopStreams();
      const { streams } = topStreams.data;
      this.setState({
        streams: streams,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getStreams() {
    try {
      const searchResults = await searchStreams(
        this.state.query,
        this.state.limit
      );
      this.setState({
        streams: searchResults.data.streams,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async resetSearch() {
    try {
      const topStreams = await getTopStreams();
      const { streams } = topStreams.data;
      this.setState({
        streams: streams,
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ query: event.target.value }, () => {
      if (this.state.query) {
        this.getStreams();
      } else if (this.state.query === "") {
        this.resetSearch();
      }
    });
  }

  handleLimit(event) {
    this.setState({ limit: event.target.value });
  }

  render() {
    console.log(this.state.results);

    return (
      <>
        <Header>
          <Search
            searchValue={this.state.query}
            handleSearch={this.handleSearch}
            limitValue={this.state.limit}
            handleLimit={this.handleLimit}
          />
        </Header>

        {/* (results || []).map(stream => {
        return <StreamCard stream={stream} key={stream._id} />;
      })} */}

        <Wrapper>
          {this.state.streams.map(stream => (
            <StreamCard stream={stream} key={stream._id} />
          ))}
        </Wrapper>
      </>
    );
  }
}
