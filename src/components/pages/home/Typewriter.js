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
          "Spring Boot Developer",
          "React Developer",
          "NextJs Developer",
          "NodeJs Developer",
          "AWS Certified Solutions Architect Associate",
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
