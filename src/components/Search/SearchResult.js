import React, { Component } from "react";
import styled from "styled-components";
import StreamCard from "../Streams/StreamCard";

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
  const { searching, results } = props;

  console.log(props.results);
  return (
    <Wrapper searching={searching}>
      {// * There are no results on mount time so i'm comparing results to an empty array. .map will not complain this way
      (results || []).map(stream => {
        return <StreamCard stream={stream} key={stream._id} />;
      })}
    </Wrapper>
  );
};
export default SearchResult;
