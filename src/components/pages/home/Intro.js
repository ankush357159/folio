import React from "react";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Img from "../../../assets/developer.png";
import Tilt from "react-parallax-tilt";

const Intro = () => {
  return (
    <Box
      sx={{        
        pt: "8em",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "space-around",
        color: '#ffffff'
      }}
    >
      <Box sx={{ marginLeft: "4em" }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography component='span' sx={{ fontSize: "2.4em" }}>
            Let Me &nbsp;
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: "2.4em", color: "#cd5ff8" }}
          >
            Introduce &nbsp;
          </Typography>
          <Typography component='span' sx={{ fontSize: "2.4em" }}>
            Myself
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "1.2em" }}>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography component='span' sx={{ fontSize: "1.2em" }}>
            I Apply my passion for developing products with {""}
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
          >
            React, SpringBoot and {""}
          </Typography>

          <Typography
            component='span'
            sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
          >
            NodeJs
          </Typography>
          <Box>
            <Typography
              component='span'
              sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
            >
              Libraries and Frameworks{" "}
            </Typography>

            <Typography component='span' sx={{ fontSize: "1.2em" }}>
              like{" "}
            </Typography>
            <Typography
              component='span'
              sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
            >
              NextJs, Angular, Django
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography component='span' sx={{ fontSize: "1.2em" }}>
            I am fluent in classics like &nbsp;
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
          >
            C, JavaScript and Python
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography component='span' sx={{ fontSize: "1.2em" }}>
            My field of Interest's are building new{" "}
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
          >
            Web Technologies and Produdcts {""}
          </Typography>
          <Typography component='span' sx={{ fontSize: "1.2em" }}>
            and also in
          </Typography>
          <Box>
            <Typography component='span' sx={{ fontSize: "1.2em" }}>
              areas related to
            </Typography>
            <Typography
              component='span'
              sx={{ fontSize: "1.2em", color: "#cd5ff8" }}
            >
              {" "}
              Machine Learning.
            </Typography>
          </Box>
        </Box>

        
      </Box>
      <Box item xs={12} sm={12} md={4} lg={4}>
        <Box>
          <Tilt>
            <CardMedia
              component='img'
              src={Img}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "250px" },
                objectFit: "scale-down",
              }}
            />
          </Tilt>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
