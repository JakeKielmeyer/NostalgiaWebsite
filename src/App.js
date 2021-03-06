import Footer from "../src/component/Footer";
import Navbar from "../src/component/Navbar";
import './App.css';
import './index.css';

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

//pages
import Home from "./pages/home";
import About from "../src/component/about";
import Photos from "../src/component/photos";
import Music from "../src/component/music";
import Video from "../src/component/video";
import Puzzle from "../src/component/puzzle";
import Science from "../src/component/science";
// import Call from "../src/component/cta";
// import Call2 from "../src/component/cta2";

const theme = createMuiTheme({
  typography: {
    fontFamily: "KOW, sans-serif",
  },
  palette: {
    primary: {
      main: "#0f499d",
    },
    secondary: {
      main: "#18a3f8",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <Navbar />
      <Home />
      <About />
      <Photos />
      <Music />
      <Video />
      <Puzzle />
      <Science />
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}

export default App;