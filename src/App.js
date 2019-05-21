import React, { Component } from "react";
import styled from "styled-components";

// import Header from "./components/Header";
// import TopStreams from "./components/Streams/TopStreams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import GameCard from "./components/GameCard";
import Stream from "./components/Streams/Stream";
// import SearchResult from "./components/Search/SearchResult";
// import Search from "./components/Search";
// import { searchStreams } from "../lib/twitchApi";
import Main from "./components/Main";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     limit: 10,
  //     query: "",
  //     results: [],
  //   };

  //   this.handleSearch = this.handleSearch.bind(this);
  //   this.handleLimit = this.handleLimit.bind(this);
  // }

  // async getStreams() {
  //   try {
  //     const searchResults = await searchStreams(
  //       this.state.query,
  //       this.state.limit
  //     );
  //     this.setState({
  //       results: searchResults.data.streams,
  //       isLoading: false,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // handleSearch(event) {
  //   event.preventDefault();
  //   this.setState({ query: event.target.value }, () => {
  //     if (this.state.query && this.state.query.length > 2) {
  //       this.getStreams();
  //     }
  //   });
  // }

  // handleLimit(event) {
  //   this.setState({ limit: event.target.value });
  // }

  render() {
    // const { query, results } = this.state;

    return (
      <Router>
        {/* <Header>
          <Search
            searchValue={this.state.query}
            handleSearch={this.handleSearch}
            limitValue={this.state.limit}
            handleLimit={this.handleLimit}
          />
        </Header> */}

        {/* <SearchResult searching={query} results={results} /> */}

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/stream/:id" component={Stream} />
        </Switch>
      </Router>
    );
  }
}
