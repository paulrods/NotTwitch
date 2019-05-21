import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../assets/nottwitch_logo.png";
import { Route, Switch, Link } from "react-router-dom";

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

const Wrapper = styled.header`
  top: 0;
  background: rgb(100, 65, 164);
  background: linear-gradient(
    90deg,
    rgba(100, 65, 164, 1) 0%,
    rgba(137, 99, 208, 1) 40%,
    rgba(137, 99, 208, 1) 60%,
    rgba(100, 65, 164, 1) 100%
  );
  display: grid;
  grid: auto / 50px auto 50px;
  grid-gap: 0px;
  justify-content: space-between;
  align-content: center;
  padding: 0 32px;
  margin: 0;
  height: 52px;
  max-height: 52px;
  align-items: center;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const Header = props => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      {props.children}
    </Wrapper>
  );
};

export default Header;
