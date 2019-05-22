import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Logo } from "./styles";
import logo from "../../../assets/nottwitch_logo.png";

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
