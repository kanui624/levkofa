import gsap from "gsap";

export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    width: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.05,
    },
  });
};

export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    width: 0,
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
    width: "100%",
  });
};

export const linkStaggerOpen = (node1) => {
  gsap.from(node1, {
    duration: 1.2,
    opacity: 0,
    rotateY: 180,
    ease: "power3.inOut",
    stagger: {
      amount: 0.8,
    },
  });
};
