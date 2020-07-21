import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { arrowLeft, arrowRight } from "../../../gsap/G-Navigation";
import Collapse from "./1-Collapse";

const Navigation = ({ history }) => {
  const [clickState, setClickState] = useState({
    initial: false,
    clicked: null,
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      flipRight();
      setClickState({ clicked: false });
    });
  }, [history]);

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

  const flipLeft = () => {
    arrowLeft("#fade-flip-arrow");
  };

  const flipRight = () => {
    arrowRight("#fade-flip-arrow");
  };

  const handleArrow = () => {
    disableMenu();
    if (clickState.initial === false) {
      flipLeft();
      setClickState({
        initial: null,
        clicked: true,
      });
    } else if (clickState.clicked === true) {
      flipRight();
      setNotClick();
    } else if (clickState.clicked === false) {
      flipLeft();
      setNotClick();
    }
  };

  return (
    <div className="container mx-auto relative my-8">
      <div className="grid">
        <div
          id="arrow-z-index"
          className="relative flex justify-start items-center"
        >
          <button
            id="fade-flip-arrow"
            className="flex justify-center items-center"
            onClick={handleArrow}
            disabled={disabled}
          >
            <TrendingFlatIcon style={{ fontSize: 30 }} />
          </button>
        </div>
      </div>
      <Collapse clickState={clickState} />
    </div>
  );
};

export default withRouter(Navigation);
