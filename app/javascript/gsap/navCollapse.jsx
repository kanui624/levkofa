import gsap from "gsap";

export const staggerReveal = (node1, node2) => {
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

export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

export const menuCssOut = (node1) => {
  gsap.to([node1], {
    duration: 1,
    css: { display: "none" },
  });
};

export const menuCssIn = (node1) => {
  gsap.to([node1], { duration: 0, css: { display: "block" } });
};

export const menuToggle = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%",
  });
};
