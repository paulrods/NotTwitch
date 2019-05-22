// import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./lib/GlobalStyles";
import App from "./App.js";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
