import React from "react";
import Navigation from "./9-UniComps/1-Nav/0-Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Global = () => {
  return (
    <Router>
      <div id="global-stack-context">
        <div id="nav-stack-context">
          <Navigation />
        </div>
        <div id="page-stack-context">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/writings" component={TempWriting} />
            <Route exact path="/audio" component={TempAudio} />
            <Route exact path="/video" component={TempVideo} />
            <Route exact path="/design" component={TempDesign} />
            <Route exact path="/interviews" component={TempInterview} />
            <Route exact path="/kofastream" component={TempStream} />
            <Route exact path="/therest" component={TempRest} />
            <Route exact path="/aboutcontact" component={TempAboutContact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div id="initializer" className="fixed inset-0 h-full max-w-full">
      <div id="page-outter" className="flex h-full max-w-full">
        <div
          id="page-container"
          className="flex justify-center items-center container mx-auto"
        >
          <p id="page-item">temp kofahome page</p>
        </div>
      </div>
    </div>
  );
};

const TempWriting = () => {
  return (
    <p id="writing-color" className="flex justify-center container mx-auto">
      temp writing page
    </p>
  );
};

const TempAudio = () => {
  return (
    <p className="flex justify-center container mx-auto">temp audio page</p>
  );
};

const TempVideo = () => {
  return (
    <p className="flex justify-center container mx-auto">temp video page</p>
  );
};
const TempDesign = () => {
  return (
    <p className="flex justify-center container mx-auto">temp design page</p>
  );
};

const TempInterview = () => {
  return (
    <p className="flex justify-center container mx-auto">temp interview page</p>
  );
};

const TempStream = () => {
  return (
    <p className="flex justify-center container mx-auto">
      temp kofastream page
    </p>
  );
};

const TempRest = () => {
  return (
    <p className="flex justify-center container mx-auto">temp rest page</p>
  );
};

const TempAboutContact = () => {
  return (
    <p className="flex justify-center container mx-auto">temp contact page</p>
  );
};

export default Global;
