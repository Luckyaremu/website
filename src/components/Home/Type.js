import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Designs",
          "Front-End Web Development",
          "Full-Stack Web Development",
          "Open Source Contribution",
          "Freelancing",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
