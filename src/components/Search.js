import React from "react";
import styled from "styled-components";
import { Input, Dropdown, Menu } from "semantic-ui-react";

const StyledMenu = styled(Menu)`
  font-size: 1.5rem !important;
  > div {
    font-size: 1.5rem !important;
  }
`;

const searchLimits = [
  { key: 1, text: "10", value: 10 },
  { key: 2, text: "20", value: 20 },
  { key: 3, text: "50", value: 50 },
  { key: 4, text: "YOLO", value: 100 },
];

const Search = props => {
  return (
    <>
      <StyledMenu compact>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Find streams..."
          value={props.searchValue}
          onChange={props.handleSearch}
          labelPosition="right"
        />

        <Dropdown
          text="How many results?"
          options={searchLimits}
          defaultValue={props.limitValue}
          onChange={props.handleLimit}
          button
          basic
        />
      </StyledMenu>

      {/* <input
            placeholder="results"
            value={props.limitValue}
            onChange={props.handleLimit}
          /> */}

      {/* <Dropdown
            options={searchLimits}
            defaultValue={props.limitValue}
            onChange={props.handleLimit}
          /> */}
    </>
  );
};
export default Search;
