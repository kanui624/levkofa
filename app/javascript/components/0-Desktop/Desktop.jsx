import React from "react";
import { Route, Switch } from "react-router-dom";
import SecOneD from "./0-DesktopPages/pageOneD";
import SecTwoD from "./0-DesktopPages/pageTwoD";

class Desktop extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SecOneD} />
        <Route exact path="/two" component={SecTwoD} />
      </Switch>
    );
  }
}

export default Desktop;
