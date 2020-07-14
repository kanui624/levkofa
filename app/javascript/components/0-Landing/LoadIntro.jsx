import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function LoadIntro() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#a-m",
        pin: true,
        start: "top top",
        end: () => window.innerHeight * 2,
        scrub: true,
        markers: true,
      },
    });
    tl.to("#c-m", {
      scale: 350,
      display: "none",
    })
      .to(
        "#a-m",
        {
          backgroundColor: "yellow",
        },
        0
      )
      .to("#g-m", {
        display: "block",
        opacity: 1,
      });
  }, []);

  return (
    <div id="a-m">
      <div id="b-m">
        <h1 id="c-m">levkofa</h1>
      </div>
    </div>
  );
}

export default LoadIntro;
