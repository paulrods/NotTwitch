import React from "react";

const Search = props => {
  return (
    <>
      <form>
        <label htmlFor="Search">
          <input
            placeholder="find streams..."
            value={props.searchValue}
            onChange={props.handleSearch}
            bananas={props.bananas}
          />

          <input
            placeholder="results"
            value={props.limitValue}
            onChange={props.handleLimit}
          />
        </label>
      </form>
    </>
  );
};
export default Search;
