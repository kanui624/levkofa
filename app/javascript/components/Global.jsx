import React from "react";
import Navigation from "./9-UniComps/1-Nav/0-Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Global = () => {
  return (
    <Router>
      <Navigation />
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
    </Router>
  );
};

const Home = () => {
  return (
    <p className="flex justify-center container mx-auto">temp kofahome page</p>
  );
};

const TempWriting = () => {
  return (
    <p className="flex justify-center container mx-auto">temp writing page</p>
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
