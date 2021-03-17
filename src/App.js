import Footer from "../src/component/Footer";
import Navbar from "../src/component/Navbar/Navbar";
import MobileNavbar from "../src/component/Navbar/MobileNavbar";

import './App.css';

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Photos from "./pages/photo";
import Music from "./pages/music";
import Video from "./pages/video";
import Puzzle from "./pages/puzzle";
import Call from "../src/component/callToAction";

const theme = createMuiTheme(); {
  theme.typography.h3 = {
    fontFamily: "KOW, sans-serif",
    fontSize: '2.8rem',
  };

  theme.typography.h4 = {
    fontFamily: "KOJ, sans-serif",
    fontSize: '1.5rem',
    lineHeight: '1.5',
  };
}

theme.typography.h6 = {
  fontFamily: "KOJ, sans-serif",
  fontSize: '1.5rem',
  lineHeight: '1.5',
};

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <MobileNavbar/>
      <Navbar />
      <Home />
      <About/>
  <Call/>
  <Photos />
  <Call/>
  <Music />
  <Call/>
  <Video />
  <Call/>
  <Puzzle />
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}

export default App;