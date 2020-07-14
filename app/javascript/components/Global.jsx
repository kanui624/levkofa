import React from "react";
import Navigation from "./0-Landing/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Global = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/writings" component={TempWriting} />
                <Route exact path="/audio" component={TempAudio} />
                <Route exact path="/video" component={TempVideo} />
                <Route exact path="/design" component={TempDesign} />
                <Route exact path="/interviews" component={TempInterview} />
                <Route exact path="/kofastream" component={TempStream} />
                <Route exact path="/rest" component={TempRest} />
                <Route exact path="/contact" component={TempAboutContact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return <p>temp kofahome page</p>;
};

const TempWriting = () => {
  return <p>temp writing page</p>;
};

const TempAudio = () => {
  return <p>temp audio page</p>;
};

const TempVideo = () => {
  return <p>temp video page</p>;
};
const TempDesign = () => {
  return <p>temp design page</p>;
};

const TempInterview = () => {
  return <p>temp interview page</p>;
};

const TempStream = () => {
  return <p>temp kofastream page</p>;
};

const TempRest = () => {
  return <p>temp rest page</p>;
};

const TempAboutContact = () => {
  return <p>temp contact page</p>;
};

export default Global;
