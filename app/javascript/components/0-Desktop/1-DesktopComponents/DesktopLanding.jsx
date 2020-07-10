// import React, { useState, useRef } from "react";
// import { Canvas, useRender } from "react-three-fiber";
// import { useSpring, a } from "react-spring/three";

// const Box = () => {
//   const meshRef = useRef();
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const props = useSpring({
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     color: hovered ? "white" : "grey",
//   });

//   useRender(() => {
//     meshRef.current.rotation.y += 0.01;
//   });

//   return (
//     <a.mesh
//       ref={meshRef}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       scale={props.scale}
//     >
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <a.meshBasicMaterial attach="material" color={props.color} />
//     </a.mesh>
//   );
// };

// function DesktopLanding() {
//   return (
//     <div id="desktop-landing">
//       <Canvas>
//         <Box />
//       </Canvas>
//     </div>
//   );
// }

// export default DesktopLanding;

import React, { useEffect, useRef } from "react";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DesktopLanding() {
  let firstName = useRef(null);
  let lastName = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hello",
          pin: true,
          start: "top top",
          end: "+=150%",
        },
      })
      .to(".hello", {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: "power1.inOut",
        stagger: { amount: 1 },
      })
      .to(".hello", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
      .to(".hello", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

    //   .to(".hello", {
    //     force3D: true,
    //     duration: 1,
    //     xPercent: 100,
    //     ease: "power1.inOut",
    //     stagger: { amount: 1 }
    //   })
    //   .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
    //   .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1)

    // gsap.from(firstName, {
    //   duration: 2,
    //   opacity: 0,
    //   x: 50,
    //   y: -100,
    //   ease: Power3.easeout,
    //   scrollTrigger: {
    //     trigger: ".hello",
    //     markers: true,
    //     start: "top 50%",
    //     end: "bottom 25%",
    //     toggleActions: "restart pause reverse reset",
    //   },
    // });
    // gsap.from(lastName, {
    //   duration: 2,
    //   opacity: 0,
    //   x: -50,
    //   y: 100,
    //   ease: Power3.easeout,
    // });
  }, []);

  return (
    <div id="desktop-landing">
      <div id="desktop-hero">
        <h1 className="hello" ref={(e) => (firstName = e)}>
          Fuck
        </h1>
        <h1 className="hello" ref={(e) => (lastName = e)}>
          Science
        </h1>
      </div>
    </div>
  );
}

export default DesktopLanding;
