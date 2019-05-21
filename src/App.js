import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stream from "./components/Stream";
import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/stream/:id" component={Stream} />
      </Switch>
    </Router>
  );
};
export default App;
