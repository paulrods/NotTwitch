import React, { Component } from "react";
import styled from "styled-components";
import StreamCard from "./components/Streams/StreamCard";
import Header from "./components/Header";
import TopGames from "./components/Games/TopGames";
import TopStreams from "./components/Streams/TopStreams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import GameCard from "./components/GameCard";
import Stream from "./components/Streams/Stream";
import axios from "axios";
import twitch from "../lib/twitchApi";
import SearchResult from "./components/Search/SearchResult";
import Search from "./components/Search/Search";
import twitchAPI, { searchStreams } from "../lib/twitchApi";

const { TWITCH_CLIENT_ID } = process.env;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      query: "",
      results: [],
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.updateLimit = this.updateLimit.bind(this);
  }

  updateSearch(_State) {
    this.setState({
      query: this.query,
    });
    console.log(this.state.query);
  }
  updateLimit(_State) {
    this.setState({
      limit: this.limit,
    });
    console.log(this.state.limit);
  }

  // async getStreams() {
  //   try {
  //     const searchResults = await searchStreams(
  //       this.state.query,
  //       this.state.limit
  //     );
  //     this.setState({
  //       results: searchResults.data,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // handleCounter(_State) {
  //   console.log(_State);

  //   this.setState(
  //     {
  //       query: _State.query,
  //       limit: _State.limit,
  //     },
  //     () => {
  //       if (this.state.query && this.state.query.length > 2) {
  //         this.getStreams();
  //       }
  //     }
  //   );
  // }

  // clearResults = () => {
  //   this.setState({ results: [] });
  // };

  render() {
    const { query, results } = this.state;
    return (
      <Router>
        <Header>
          <Search
            updateSearch={this.updateSearch}
            updateLimit={this.updateLimit}
          />
        </Header>

        <SearchResult searching={query} />
        {results.map(stream => {
          <StreamCard stream={stream} />;
        })}
        <SearchResult />

        <Switch>
          <Route exact path="/" component={TopStreams} />
          <Route exact path="/stream/:id" component={Stream} />
        </Switch>
      </Router>
    );
  }
}
