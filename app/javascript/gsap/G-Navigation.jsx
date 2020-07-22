import gsap from "gsap";

export const arrowLeft = (node1) => {
  let tl = gsap.timeline();
  tl.to(node1, {
    duration: 0.3,
    opacity: 0,
  }).to(node1, {
    duration: 0.3,
    rotateY: 180,
    opacity: 1,
    color: "black",
  });
};

export const arrowRight = (node1) => {
  let tl = gsap.timeline();
  tl.to(node1, {
    duration: 0.3,
    opacity: 0,
  })
    .to(node1, {
      rotateY: 0,
      color: "rgb(183, 184, 159)",
    })
    .to(node1, {
      duration: 0.2,
      opacity: 1,
    });
};
