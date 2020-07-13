import React, { useEffect } from "react";
import TestComp from "./TestComp";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function MobileKofaLanding() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#b-m",
        pin: "#b-m",
        start: "top top",
        end: () => window.innerHeight * 2,
        scrub: true,
      },
    });
    tl.to("#a-m", {
      backgroundColor: "black",
    })
      .to("#c-m", {
        scale: 150,
        opacity: 0,
        display: "none",
      })
      .to("#g-m", {
        display: "block",
      });
  }, []);

  return (
    <div id="a-m">
      <div id="b-m">
        <h1 id="c-m">levkofa</h1>
        <h1 id="g-m">
          <TestComp />
        </h1>
      </div>
    </div>
  );
}

export default MobileKofaLanding;
