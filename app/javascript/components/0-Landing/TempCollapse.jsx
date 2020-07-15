import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  staggerReveal,
  staggerRevealClose,
  menuCssOut,
  menuCssIn,
  menuToggle,
} from "../../gsap/navCollapse";

const TempCollapse = ({ state }) => {
  let menu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(revealMenu, revealMenuBackground);
      menuCssOut(menu);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      menuCssIn(menu);
      menuToggle(revealMenuBackground, revealMenu);
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [state]);

  return (
    <>
      <div
        ref={(e) => (menu = e)}
        id="bx"
        className="fixed inset-0 h-full max-w-full"
      >
        <div
          ref={(e) => (revealMenuBackground = e)}
          id="cx"
          className="fixed inset-0 h-full max-w-full bg-black"
        />
        <div
          ref={(e) => (revealMenu = e)}
          id="dx"
          className="relative overflow-hidden h-full"
        >
          <div className="realtive flex inset-0 h-full max-w-full justify-between items-center">
            <nav className="container mx-auto flex justify-center items-center">
              <ul className="link-font">
                <li>
                  <Link to="/writings">writings</Link>
                </li>
                <li>
                  <Link to="/audio">audio</Link>
                </li>
                <li>
                  <Link to="/video">video</Link>
                </li>
                <li>
                  <Link to="/design">design</Link>
                </li>
                <li>
                  <Link to="/interviews">interviews</Link>
                </li>
                <li>
                  <Link to="/kofastream">kofastream</Link>
                </li>
                <li>
                  <Link to="/rest">the rest</Link>
                </li>
                <li>
                  <Link to="/contact">about/contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempCollapse;
