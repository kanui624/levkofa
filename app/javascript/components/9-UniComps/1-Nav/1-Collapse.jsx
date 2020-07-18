import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  staggerReveal,
  staggerRevealClose,
  menuCssOut,
  menuCssIn,
  menuToggle,
  linkStaggerOpen,
} from "../../../gsap/G-Collapse";

const Collapse = ({ clickState }) => {
  let menu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenu = useRef(null);

  const linkList = [
    { i: 1, n: "writings", r: "/writings" },
    { i: 2, n: "audio", r: "/audio" },
    { i: 3, n: "video", r: "/video" },
    { i: 4, n: "design", r: "/design" },
    { i: 5, n: "interviews", r: "/interviews" },
    { i: 6, n: "kofastream", r: "/kofastream" },
    { i: 7, n: "the rest", r: "/therest" },
    { i: 8, n: "contact", r: "/aboutcontact" },
  ];

  useEffect(() => {
    if (clickState.clicked === false) {
      staggerRevealClose(revealMenu, revealMenuBackground);
      menuCssOut(menu);
    } else if (
      clickState.clicked === true ||
      (clickState.clicked === true && clickState.initial === null)
    ) {
      menuCssIn(menu);
      menuToggle(revealMenuBackground, revealMenu);
      staggerReveal(revealMenuBackground, revealMenu);
      linkStaggerOpen("#link-id");
    }
  }, [clickState]);

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
              <ul className="grid grid-rows-8 link-font o max-w-full">
                {linkList.map((l) => {
                  return (
                    <li className="bg-black px-4" id="link-id" key={l.i}>
                      <Link to={l.r}>{l.n}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
