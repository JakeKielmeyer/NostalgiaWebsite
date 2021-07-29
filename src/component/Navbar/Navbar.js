//mui stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Link, NavLink} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  appBar: {
    // background: "linear-gradient(to left top,  #cbcbcb, white)",
    backgroundColor: "#3fa9f5",
    boxShadow: "drop-shadow(0 0 0.1rem #8f8f8f)",
    // filter: "drop-shadow(0 0 0.1rem #8f8f8f)",
    paddingLeft: "2rem",
    position: "sticky",
    '@media (max-width:760px)': {
      display: "none",
    },
  },

  brandName: {
    // color: "#3fa9f5",
    color: "#fff",
    fontSize: "1.18rem",
    fontFamily: "Leviathan",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1rem',
   },
  },

  navContainer: {
    display: "flex",
    color: "#fff",
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

<AppBar position="absolute" className={classes.appBar}>
       <ToolBar className={classes.navContainer}>

           <a href="#banner">
             <Button color="inherit" className={classes.brandName}>
               Nostalgia Therapy
             </Button>
           </a>

            <a href="#banner">
            <Button color="inherit" className={classes.navLink}>
               Home
             </Button>
            </a>
        
         <a href="#features">
           <Button color="inherit" className={classes.navLink}>
             Features
           </Button>
         </a>

         <a href="#about">
           <Button color="inherit" className={classes.navLink}>
             About
           </Button>
         </a>

         <a class="navLink" href="https://nostalgiadev-1f319.web.app/signup">
           <Button color="inherit" className={classes.navLink}>
             Sign Up
           </Button>
         </a>

         <a class="navLink" href="https://nostalgiadev-1f319.web.app/">
           <Button color="inherit" className={classes.navLink}>
             Sign In
           </Button>
         </a>
        
         {/* <Link to="/how">
           <Button color="inherit" className={classes.navLink}>
           How To
           </Button>
         </Link>
        
         <Link to = "caregiver">
           <Button color="inherit" className={classes.navLink}>
             Caregiver Corner
           </Button>
        </Link> */}

       </ToolBar>
     </AppBar>
    
  );
}

export default withStyles(styles)(Navbar);