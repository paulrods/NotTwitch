import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   query: this.props.search,
      //   limit: this.props.limit,
      query: "",
      limit: 10,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.updateParentSearch = this.updateParentSearch.bind(this);
    this.updateParentLimit = this.updateParentLimit.bind(this);
  }

  updateParentSearch() {
    this.props.updateSearch(this.state.query);
    // console.log(this.state.query);
  }

  updateParentLimit() {
    this.props.updateLimit(this.state.limit);
    // console.log(this.state.limit);
  }

  handleSearch(event) {
    this.setState({ query: event.target.value }, this.updateParentSearch);
  }

  handleLimit(event) {
    this.setState({ limit: event.target.value }, this.updateParentLimit);
  }

  //   handleInputChange = () => {
  //     this.setState(
  //       {
  //         query: this.search.value,
  //       },
  //       () => {
  //         if (this.state.query && this.state.query.length > 2) {
  //           this.getUsers();
  //         }
  //       }
  //     );
  //   };

  render() {
    return (
      <>
        <form>
          <label htmlFor="Search">
            <input
              placeholder="find streams..."
              value={this.state.query}
              onChange={this.handleSearch}
            />

            <input
              placeholder="results"
              value={this.state.limit}
              onChange={this.handleLimit}
            />
          </label>
        </form>
      </>
    );
  }
}
