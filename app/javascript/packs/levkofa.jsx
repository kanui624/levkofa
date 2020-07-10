import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Global from "../components/Global";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={Global} />
    </Router>,
    document.body.appendChild(document.getElementById("root-levkofa"))
  );
});
