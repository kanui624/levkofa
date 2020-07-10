import React from "react";
import useWindowSize from "./2-CustomHooks/useWindowSize";
import Desktop from "./0-Desktop/Desktop";
import Mobile from "./1-Mobile/Mobile";

export default function Global() {
  const windowSize = useWindowSize();
  return <>{windowSize === "0" ? <Mobile /> : <Desktop />}</>;
}
