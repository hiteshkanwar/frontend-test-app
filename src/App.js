import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./containers/dashboard/";
import notFound from "./containers/notFound"
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route component={notFound} />
            />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
