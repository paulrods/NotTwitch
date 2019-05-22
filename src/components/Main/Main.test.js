import React from "react";
import { render, cleanup } from "react-testing-library";
import Main from "./Main";

it("<Main />", () => {
  const wrapper = render(<Main />);
});
