import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import KofaHome from "./0-RootHome/0-KofaHome";
import AudioComps from "./2-Audio/0-AudioComps";
import Navigation from "./9-UniComps/1-Nav/0-Navigation";
import AdminLogin from "./11-Admin/0-AdminLogin";

const Global = () => {
  const [loginState, setLoginState] = useState({
    loggedInStatus: null,
    user: {},
  });

  const checkLoginStatus = () => {
    axios
      .get("/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          (loginState.loggedInStatus === "LOGGED_OUT" ||
            loginState.loggedInStatus === null)
        ) {
          setLoginState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          (loginState.loggedInStatus === "LOGGED_IN" ||
            loginState.loggedInStatus === null)
        ) {
          setLoginState({
            loggedInStatus: "LOGGED_OUT",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  useLayoutEffect(() => {
    checkLoginStatus();
  }, [loginState]);

  const handleLogin = (data) => {
    setLoginState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };

  const handleLogout = () => {
    setLoginState({
      loggedInStatus: "LOGGED_OUT",
      user: {},
    });
  };

  return (
    <Router>
      <div id="global-stack-context">
        <div id="nav-stack-context">
          <Navigation />
        </div>
        <div id="page-stack-context">
          <Switch>
            <Route
              exact
              path="/adminlogin"
              render={(props) => (
                <AdminLogin
                  {...props}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                  loggedInStatus={loginState.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <KofaHome
                  {...props}
                  loggedInStatus={loginState.loggedInStatus}
                />
              )}
            />
            <Route exact path="/writings" component={TempWriting} />
            <Route exact path="/audio" component={AudioComps} />
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
