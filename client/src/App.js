import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/screens/Home";
import Results from "./components/screens/Results";
import NotFound from "./components/screens/NotFound";
import Events from "./components/screens/Events";
import Blogs from "./components/screens/Blogs";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/result">
            <Results />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
