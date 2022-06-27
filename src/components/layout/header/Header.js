import React from "react";
import {
  AppBar,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardMedia from "@mui/material/CardMedia";
import Logo from "../../../assets/Logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    backgroundColor: "#0a132b",
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          position: "relative",
          backgroundColor: "#0a132b",
          verticalAlign: "center",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Link to='/'>
              <Box sx={{ display: "flex", flexGrow: 0.1 }}>
                <CardMedia
                  component='img'
                  image={Logo}
                  height='50px'
                  sx={{
                    objectFit: "scale-down",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                flexGrow: 0.9,
              }}
            >
              <Button
                startIcon={<HomeIcon />}
                sx={{ px: 3, cursor: "pointer" }}
                component={Link}
                to={"/"}
              >
                Home
              </Button>

              <Button
                startIcon={<PersonIcon />}
                sx={{ px: 3, cursor: "pointer" }}
                component={Link}
                to={"/about"}
              >
                About
              </Button>

              <Button
                startIcon={<DeveloperBoardIcon />}
                sx={{ px: 3, cursor: "pointer" }}
                component={Link}
                to={"/projects"}
              >
                Projects
              </Button>
              <a href='https://github.com/ankush357159/folio'>
                <Button>
                  <GitHubIcon />
                </Button>
              </a>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
