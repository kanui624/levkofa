import { useState, useEffect } from "react";

function getBreakPoint(windowWidth) {
  if (windowWidth) {
    return windowWidth < 620 ? "0" : "1";
  } else {
    return undefined;
  }
}

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? getBreakPoint(window.innerWidth) : undefined
  );

  useEffect(() => {
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth));
    }

    if (isWindowClient) {
      window.addEventListener("resize", setSize);

      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;

// if (windowWidth < 480) {
//   return "0";
//   // } else if (windowWidth < 1024) {
//   //   return "md";
//   // } else if (windowWidth < 1200) {
//   //   return "lg";
// } else {
//   return "1";
// }
