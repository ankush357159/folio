import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FindMe = () => {
  return (
    <Box sx={{ textAlign: "center", mt: '10em', mb: '5em', color: '#ffffff' }}>
      <Typography sx={{ fontSize: "2.4em" }}>FIND ME ON</Typography>
      <Box component='span' >
        <Typography component='span'>Feel Free to </Typography>
        <Typography component='span'>connect </Typography>
        <Typography component='span'>with me </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: 1 }}>
        <Box component='span' sx={{ mx: 1 }}>
          <GitHubIcon />
        </Box>
        <Box component='span' sx={{ mx: 1 }}>
          <TwitterIcon />
        </Box>
        <Box component='span' sx={{ mx: 1 }}>
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default FindMe;
