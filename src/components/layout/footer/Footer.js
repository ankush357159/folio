import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterContainer = styled("div")`  
  // position: absolute;
  
  bottom: 0;
  width: 100% !important;
  background: #0a132b;
  color: #ffffff;
  // verticalalign: center;
  display: flex;
  flexDirection:row;
  justify-content: space-between;
  flexGrow: 1;
  padding-top: 1em !important;
  padding-bottom: 1em !important;  
`;

const Footer = () => {
  return (
    <FooterContainer >
      <Box component='span'>
        <Typography component='span' sx={{ml: '3em'}}>
          Designed and Developed by Ankush Wankar
        </Typography>
      </Box>
      <Box>
        <Typography component='span'>Copyright AW©️2022</Typography>
      </Box>
      <Box component='span' sx={{mr: '3em'}}>
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
    </FooterContainer>
  );
};

export default Footer;
