import React from "react";
import { Input, Dropdown } from "semantic-ui-react";
import { StyledMenu } from "./styles";

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
    </>
  );
};
export default Search;
