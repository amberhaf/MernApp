import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/screens/Home";
import Results from "./components/screens/Results";
import NotFound from "./components/screens/NotFound";
import Events from "./components/screens/Events";
import Blogs from "./components/screens/Blogs";
import Steps from "./components/screens/Steps";
import News from "./components/screens/News";

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Events} path="/events" />
        <Route component={Results} path="/result"/>
        <Route component={Blogs} path="/blogs" />
        <Route component={Steps} path="/steps" />
        <Route component={News} path="/news"/>
        <Route component={NotFound} path="*" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
