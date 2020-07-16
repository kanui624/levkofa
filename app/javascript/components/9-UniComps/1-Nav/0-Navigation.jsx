import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { fadeMenuOut, fadeMenuIn } from "../../../gsap/Navigation";
import Collapse from "./1-Collapse";

const Navigation = ({ history }) => {
  const [clickState, setClickState] = useState({
    initial: false,
    clicked: null,
  });

  const [nameState, setNameState] = useState({
    menuName: "menu",
  });

  const [disabled, setDisabled] = useState(false);

  const timeOutMenu = () => {
    setTimeout(() => {
      setNameState({
        menuName: "menu",
      });
    }, 500);
  };

  const timeOutClose = () => {
    setTimeout(() => {
      setNameState({
        menuName: "close",
      });
    }, 500);
  };

  const transitionMenu = () => {
    fadeMenuOut("#ax");
    setTimeout(() => {
      fadeMenuIn("#ax");
    }, 500);
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const setNotClick = () => {
    setClickState({
      clicked: !clickState.clicked,
    });
  };

  useEffect(() => {
    history.listen(() => {
      timeOutMenu();
      transitionMenu();
      setClickState({ clicked: false });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();
    transitionMenu();
    if (clickState.initial === false) {
      timeOutClose();
      setClickState({
        initial: null,
        clicked: true,
      });
    } else if (clickState.clicked === true) {
      timeOutMenu();
      setNotClick();
    } else if (clickState.clicked === false) {
      timeOutClose();
      setNotClick();
    }
  };

  return (
    <div className="container mx-auto relative">
      <div
        id="ax"
        disabled={disabled}
        className="relative flex justify-between my-8"
      >
        <Link onClick={transitionMenu} to="/">
          kofa
        </Link>
        <button onClick={handleMenu} disabled={disabled}>
          {nameState.menuName}
        </button>
      </div>
      <Collapse clickState={clickState} />
    </div>
  );
};

export default withRouter(Navigation);
