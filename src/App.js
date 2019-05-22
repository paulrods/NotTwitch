import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import Stream from "./components/Stream/Stream";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/stream/:id" component={Stream} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
// export default hot(App);
export default App;
