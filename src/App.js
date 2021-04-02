import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import './App.css';

// Material UI
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

// Components
import Footer from "../src/component/Footer";
import Navbar from "../src/component/Navbar/Navbar";
import MobileNavbar from "../src/component/Navbar/MobileNavbar";
import Scroll from "../src/component/scroll";

//pages
import Home from "./pages/Home/home";
import HowTo from "./pages/How To/HowTo";
import Caregiver from "./pages/CaregiverCorner/caregiver";

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
      <Router>
        <Navbar />
          <MobileNavbar/>
            <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/HowTo" component = {HowTo}/>
            <Route exact path = "/caregiver" component = {Caregiver}/>
          </Switch>

      <Navbar />
      <MobileNavbar/>
      <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/HowTo" component = {HowTo}/>
      <Route exact path = "/caregiver" component = {Caregiver}/>
      </Switch>

        <Scroll/>
        <Footer />
      </Router>
  </MuiThemeProvider>
  );
}

export default App;