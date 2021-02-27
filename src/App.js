import Animals from '../src/images/moments/Animals.jpg';
import Footer from "../src/component/Footer";
import Navbar from "../src/component/Navbar";
import './App.css';
import './index.css';

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

//pages
import Home from "./pages/home";

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
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}

export default App;