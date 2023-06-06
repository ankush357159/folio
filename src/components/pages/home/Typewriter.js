import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

function Type() {
  return (
    <div className="type-writer">
    <Typewriter
      options={{
        strings: [
          "Full-stack Web Developer",
          "MERN Stack Developer",
          "NextJs Developer",
          "NodeJs Developer",
          "Spring-boot Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
