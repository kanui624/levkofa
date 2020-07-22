import React, { useState } from "react";

const AudioComps = () => {
  const audioLinks = [
    {
      i: 0,
      n: "name1",
      l:
        "https://static1.squarespace.com/static/5a4e725bf14aa13c996f40a6/t/5d25e13083988b0001f11900/1562763650742/Music-Centre-Story.mp3/original/Music-Centre-Story.mp3",
    },
  ];

  return (
    <div id="initializer" className="fixed inset-0 h-full max-w-full">
      <div id="page-outter" className="grid h-full max-w-full">
        <div
          id="page-container"
          className="container mx-auto flex justify-center items-center"
        >
          <div className="flex justify-center items-center">
            <h1>hey</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioComps;
