import Footer from "../src/component/Footer";
import Navbar from "../src/component/Navbar/Navbar";
import MobileNavbar from "../src/component/Navbar/MobileNavbar"

import './App.css';

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

//pages
import Home from "./pages/home";

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
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}

export default App;