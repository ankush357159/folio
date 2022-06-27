import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

function Type() {
  return (
    <div className="type-writer">
    <Typewriter
      options={{
        strings: [
          "Developer",
          "MERN Stack Developer",
          "Django-React Developer",
          "Machine Learning Enthusiast",
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
