import React, { Component } from "react";

export default class Search extends Component {
  state = {
    limit: "",
    query: [],
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="Search">
            <input
              placeholder="find streams..."
              value={this.props.searchValue}
              onChange={this.props.handleSearch}
              bananas={this.props.bananas}
            />

            <input
              placeholder="results"
              value={this.props.limitValue}
              onChange={this.props.handleLimit}
            />
          </label>
        </form>
      </>
    );
  }
}
