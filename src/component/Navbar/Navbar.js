//mui stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  appBar: {
    background: "#333333",
    boxShadow: "none",
    paddingLeft: "2rem",
    '@media (max-width:414px)': {
      display: "none",
    },
  },

  brandName: {
    color: "#3fa9f5",
    fontSize: "1.18rem",
    fontFamily: "Leviathan",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1rem',
   },
  },

  navContainer: {
    display: "flex",
    color: "white",
    width: "88vw",
    justifyContent: "space-between",
  },

  navLink: {
    padding: "0 1rem",
    fontFamily: "KOJ",
    fontSize: "1.15rem",
    display: "flex",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1rem',
   },
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
  <Router>
    <AppBar position="absolute" className={classes.appBar}>
      <ToolBar className={classes.navContainer}>
        <Link to="/home">
          <Button color="inherit" className={classes.brandName}>
            Nostalgia Therapy
          </Button>
        </Link>
        <Link to="./pages/music"> 
          <Button color="inherit" className={classes.navLink}>
            Music
          </Button>
        </Link>
        <Link to="./pages/video">
          <Button color="inherit" className={classes.navLink}>
            Video
          </Button>
        </Link>
        <Link to="/photo">
          <Button color="inherit" className={classes.navLink}>
            Photos
          </Button>
        </Link>
        <Link to="./pages/puzzle">
          <Button color="inherit" className={classes.navLink}>
            Puzzle
          </Button>
        </Link>

      </ToolBar>
    </AppBar>
  </Router>

  );
}


// function Navbar(props) {
//   const { classes } = props;
//   return (
//     <AppBar position="absolute" className={classes.appBar}>
//       <ToolBar className={classes.navContainer}>
//         <Link to = "/home">
//         <Button color="inherit" className={classes.brandName}>
//             Nostalgia Therapy
//           </Button>
//         </Link>

//           <Button color="inherit" className={classes.navLink}>
//             About{""}
//           </Button>


//           <Button color="inherit" className={classes.navLink}>
//             Features
//           </Button>


//           <Button color="inherit" className={classes.navLink}>
//             Sign Up{" "}
//           </Button>


//           <Button color="inherit" className={classes.navLink}>
//             Sign In
//           </Button>

//       </ToolBar>
//     </AppBar>
//   );
// }

export default withStyles(styles)(Navbar);