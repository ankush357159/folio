import React from "react";
import { Box } from "@mui/material";
import Myself from "./Myself";
import Intro from "./Intro";
import FindMe from "./FindMe";
import Particle from "../../../utils/Particle";
const Home = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Myself sx={{ position: "absolute" }} />
      <Intro sx={{ position: "absolute" }} />
      <Particle />
      <FindMe sx={{ position: "absolute" }} />
    </Box>
  );
};

export default Home;
