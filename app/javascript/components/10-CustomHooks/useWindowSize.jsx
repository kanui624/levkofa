// import React, { useState, useEffect, useContext } from "react";
// import Desktop from "./0-Desktop/Desktop";
// import Mobile from "./1-Mobile/Mobile";

// const viewportContext = React.createContext({});

// const ViewportProvider = ({ children }) => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);
//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return (
//     <viewportContext.Provider value={{ width, height }}>
//       {children}
//     </viewportContext.Provider>
//   );
// };

// const useViewport = () => {
//   const { width, height } = useContext(viewportContext);
//   return { width, height };
// };

// const MyComponent = () => {
//   const { width } = useViewport();
//   const breakpoint = 620;

//   return width < breakpoint ? <Mobile /> : <Desktop />;
// };

// export default function Global() {
//   return (
//     <ViewportProvider>
//       <MyComponent />
//     </ViewportProvider>
//   );
// }
