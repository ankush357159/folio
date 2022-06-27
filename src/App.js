import "./App.css";
import Header from "./components/layout/header/Header";
import "./fonts/Lato-Regular.ttf";
import "./fonts/Lato-Light.ttf";
import Home from "./components/pages/home/Home";
import {  createTheme, ThemeProvider } from "@mui/material";
import Footer from "./components/layout/footer/Footer";
import { grey } from "@mui/material/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
   
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
