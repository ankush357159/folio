import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import Img1 from "../../../assets/mern1.png";
import Img2 from "../../../assets/img2.png";
import Img3 from "../../../assets/Img3.png";
import Img4 from "../../../assets/alibag-holidays-thumb.png";
import Img5 from "../../../assets/horizon.png";
import Img6 from "../../../assets/singingsuperstar.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", color: "#ffffff", pt: 3 }}>
        <Typography component='span' sx={{ fontSize: "2.5em" }}>
          Some of My
        </Typography>
        <Typography
          component='span'
          sx={{ fontSize: "2.5em", color: "#cd5ff8" }}
        >
          {" "}
          Work
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "space-evenly",
          mt: 10,
          mb: 10,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "2em", color: "#ffffff", textAlign: "center" }}
          >
            MERN Ecommerce{" "}
          </Typography>
          <a href='https://github.com/ankush357159/mern-ecommerce/tree/main'>
            <CardMedia
              component='img'
              src={Img1}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "350px" },
                height: "250px",
                // objectFit: "scale-down",
              }}
            />
          </a>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "2em", color: "#ffffff", textAlign: "center" }}
          >
            Django-React Ecommerce{" "}
          </Typography>

          <a href='https://github.com/ankush357159/ivymart_backend.git'>
            <CardMedia
              component='img'
              src={Img2}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "350px" },
                height: "250px",
                // objectFit: "scale-down",
              }}
            />
          </a>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "2em", color: "#ffffff", textAlign: "center" }}
          >
            Flipcart clone{" "}
          </Typography>

          <a href='https://github.com/ankush357159/flipcart-clone'>
            <CardMedia
              component='img'
              src={Img3}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "350px" },
                height: "250px",
                // objectFit: "scale-down",
              }}
            />
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "space-evenly",
          mt: 10,
          mb: 10,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "2em", color: "#ffffff", textAlign: "center" }}
          >
            Alibag Holidays{" "}
          </Typography>

          <a href='https://www.techspiron.com/alibag-holiday.html'>
            <CardMedia
              component='img'
              src={Img4}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "350px" },
                height: "250px",
                // objectFit: "scale-down",
              }}
            />
          </a>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "2em", color: "#ffffff", textAlign: "center" }}
          >
            Horizon Diagnostic{" "}
          </Typography>

          <a href='https://www.techspiron.com/horizon.html'>
            <CardMedia
              component='img'
              src={Img5}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "350px" },
                height: "250px",
                // objectFit: "scale-down",
              }}
            />
          </a>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "2em", color: "#ffffff", textAlign: "center" }}
          >
            SWAR RANGMANCH{" "}
          </Typography>

          <a href='https://www.techspiron.com/design-development-portfolio.html'>
            <CardMedia
              component='img'
              src={Img6}
              sx={{
                width: { xs: "100px", sm: "200px", md: "250px", lg: "350px" },
                height: "250px",
                // objectFit: "scale-down",
              }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
