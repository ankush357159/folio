import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import Img from "../../../assets/who.png";

const WhoAmI = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "space-around",
        color: "#ffffff",
        mt:10,
        mb:12,
        position:'relative'
      }}
    >
      <Box sx={{ml:5}}>
        <Box sx={{ textAlign: "left",  }}>
          <Typography component='span' sx={{ fontSize: "2em" }}>
            Who Am
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: "2em", color: "#cd5ff8" }}
          >
            {" "}
            I
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography component='span' sx={{ fontSize: "1.5em" }}>
            Hello Everyone, I am
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: "1.5em", color: "#cd5ff8" }}
          >
            {" "}
            Ankush Wankar
          </Typography>
          <Typography component='span' sx={{ fontSize: "1.5em" }}>
            {" "}
            from
          </Typography>
          <Typography component='span' sx={{ fontSize: "1.5em" }}>
            {" "}
            Mumbai, India
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "1.5em" }}>
            I am a Mechanical Engineering with over 7.5 years of experience
          </Typography>
          <Typography sx={{ fontSize: "1.5em" }}>
            in Web Development.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "1.5em", mt: 2.5 }}>
            Apart from coding, some other activities I love to do!
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <PanToolAltIcon
                  sx={{ transform: "rotate(90deg)", color: "#ffffff" }}
                />
              </ListItemIcon>
              <ListItemText primary='Reading'  />
            </ListItemButton>
            <ListItemButton sx={{ mt: -2 }}>
              <ListItemIcon>
                <PanToolAltIcon
                  sx={{ transform: "rotate(90deg)", color: "#ffffff" }}
                />
              </ListItemIcon>
              <ListItemText primary='Jogging, Running' />
            </ListItemButton>
            <ListItemButton sx={{ mt: -2 }}>
              <ListItemIcon>
                <PanToolAltIcon
                  sx={{ transform: "rotate(90deg)", color: "#ffffff" }}
                />
              </ListItemIcon>
              <ListItemText primary='Travelling' />
            </ListItemButton>
          </List>
        </Box>
      </Box>
      <Box>
        <CardMedia
          component='img'
          src={Img}
          sx={{
            width: { xs: "200px", sm: "300px", md: "350px", lg: "450px" },
            objectFit: "scale-down",
          }}
        />
      </Box>
    </Box>
  );
};

export default WhoAmI;
