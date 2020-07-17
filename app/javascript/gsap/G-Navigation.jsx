import gsap from "gsap";

export const fadeMenuOut = (node1) => {
  gsap.to(node1, {
    duration: 0.3,
    opacity: 0,
  });
};

export const fadeMenuIn = (node1) => {
  gsap.to(node1, {
    duration: 0.5,
    opacity: 1,
  });
};
