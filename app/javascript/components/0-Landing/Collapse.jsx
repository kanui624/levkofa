import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Collapse = ({ state }) => {
  let menu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenu = useRef(null);
  let picBackground = useRef(null);

  const linksList = [
    { i: 1, r: "/writings", n: "writings", rf: useRef(null) },
    { i: 2, r: "/audio", n: "audio", rf: useRef(null) },
    { i: 3, r: "/video", n: "video", rf: useRef(null) },
    { i: 4, r: "/design", n: "design", rf: useRef(null) },
    { i: 5, r: "/interviews", n: "interviews", rf: useRef(null) },
    { i: 6, r: "/kofastream", n: "kofastream", rf: useRef(null) },
    { i: 7, r: "/rest", n: "the rest", rf: useRef(null) },
    { i: 8, r: "/contact", n: "about and contact", rf: useRef(null) },
  ];

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, { duration: 0, css: { display: "block" } });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  return (
    <div ref={(e) => (menu = e)} className="coll-menu">
      <div
        ref={(e) => (revealMenuBackground = e)}
        className="coll-secondary-color"
      ></div>
      <div ref={(e) => (revealMenu = e)} className="menu-layer">
        <div
          ref={(e) => (picBackground = e)}
          className="menu-pic-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  {linksList.map((l) => {
                    return (
                      <li key={l.i}>
                        <Link ref={(e) => (l.rf = e)} to={l.r}>
                          {l.n}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
