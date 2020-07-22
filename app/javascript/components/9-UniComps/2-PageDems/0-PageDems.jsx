import React from "react";

const PageDems = ({ children }) => {
  return (
    <div id="initializer" className="fixed inset-0 h-full max-w-full">
      <div id="page-container" className="container mx-auto h-full">
        {children}
      </div>
    </div>
  );
};

export default PageDems;
