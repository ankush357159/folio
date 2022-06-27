import { Box, CardMedia, Grid, keyframes, Typography } from "@mui/material";
import React from "react";
import Type from "./Typewriter";
import Img from "../../../assets/bg.png";
import styled from "@emotion/styled";



const wave = keyframes`
0% {
  transform: rotate(0deg);
}
10% {
  transform: rotate(14deg);
} /* The following five values can be played with to make the waving more or less extreme */
20% {
  transform: rotate(-8deg);
}
30% {
  transform: rotate(14deg);
}
40% {
  transform: rotate(-4deg);
}
50% {
  transform: rotate(10deg);
}
60% {
  transform: rotate(0deg);
} /* Reset for the last half to pause */
100% {
  transform: rotate(0deg);
}
`;
const WaveBox = styled("span")({
  animation: `${wave} 2.1s infinite`,
  transformOrigin: "70% 70%",
  display: "inline-block",
});

const Myself = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ pt: "8em", color: '#ffffff' }}
    >
      
      <Grid item xs={12} sm={12} md={7} lg={7}>
        {/* Grid Item 1 */}
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "2.4em", mt: 5 }}>
            Hi there! <WaveBox component='span'>👋🏻</WaveBox>
          </Typography>
          <Box>
            <Typography component='span' sx={{ fontSize: "2.4em" }}>
              I'm &nbsp;
            </Typography>
            <Typography
              component='span'
              sx={{ fontSize: "2.4em", color: "#cd5ff8" }}
            >
              Ankush Wankar
            </Typography>
          </Box>
          <Type />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        {/* Grid Item 2 */}        
          <CardMedia
            component='img'
            src={Img}
            sx={{
              width: { xs: "100px", sm: "200px", md: "300px", lg: "350px" },
              objectFit: "scale-down",
            }}
          />
        
      </Grid>
    </Grid>
  );
};

export default Myself;
