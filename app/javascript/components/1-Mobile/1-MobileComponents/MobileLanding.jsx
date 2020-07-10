import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function MobileLanding() {
  let fName = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(fName, {
      duration: 3,
      opacity: 0,
    }).to(fName, { duration: 3, y: -800 });
  }, []);

  return (
    <div id="mobile-landing">
      <div id="mobile-hero">
        <h1 ref={(e) => (fName = e)}>levkofa</h1>
      </div>
    </div>
  );
}

export default MobileLanding;
