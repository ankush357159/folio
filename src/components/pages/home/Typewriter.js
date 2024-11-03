import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

function Type() {
  return (
    <div className="type-writer">
    <Typewriter
      options={{
        strings: [
          "Senior Full-stack Web Developer",
          "Spring-boot Developer",
          "React Developer",
          "NextJs Developer",
          "MERN Stack Developer",
          "NodeJs Developer",
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
