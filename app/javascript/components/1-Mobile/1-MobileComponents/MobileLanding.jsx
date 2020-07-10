import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";

function MobileLanding() {
  let firstName = useRef(null);
  let lastName = useRef(null);

  useEffect(() => {
    gsap.from(firstName, {
      duration: 2,
      opacity: 0,
      x: 50,
      y: -100,
      ease: Power3.easeout,
    });

    gsap.from(lastName, {
      duration: 2,
      opacity: 0,
      x: -50,
      y: 100,
      ease: Power3.easeout,
    });
  }, []);

  return (
    <div id="mobile-landing">
      <div id="mobile-hero">
        <h1 ref={(e) => (firstName = e)}>lev</h1>
        <h1 ref={(e) => (lastName = e)}>kofa</h1>
      </div>
    </div>
  );
}

export default MobileLanding;
