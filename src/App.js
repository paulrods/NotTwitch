import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stream from "./components/Stream/Stream";
import Main from "./components/Main/Main";
// import { hot } from "react-hot-loader/root";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/stream/:id" component={Stream} />
      </Switch>
    </Router>
  );
};
// export default hot(App);
export default App;
