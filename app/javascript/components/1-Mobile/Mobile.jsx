import React from "react";
import { Route, Switch } from "react-router-dom";
import pageOneM from "./0-MobilePages/pageOneM";
import pageTwoM from "./0-MobilePages/pageTwoM";

class Mobile extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={pageOneM} />
        <Route exact path="/two" component={pageTwoM} />
      </Switch>
    );
  }
}

export default Mobile;
