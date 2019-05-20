import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: rgb(44, 62, 80);
  background: linear-gradient(
    90deg,
    rgba(44, 62, 80, 1) 0%,
    rgba(52, 73, 94, 1) 40%,
    rgba(52, 73, 94, 1) 60%,
    rgba(44, 62, 80, 1) 100%
  );
  display: grid;
  grid: 360px / repeat(auto-fill, minmax(204px, 1fr));
  grid-gap: 2rem;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  color: white;
  margin: 0;
  padding: 0 32px;
  height: 360px;
  overflow-x: scroll;
  overflow-y: hidden;

  opacity: ${props => (props.searching ? 1 : 0)};
  height: ${props => (props.searching ? 360 : 0)}px;

  ::-webkit-scrollbar {
    background: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const SearchResult = props => {
  return <Wrapper searching={props.searching}>{props.children}</Wrapper>;
};
export default SearchResult;
