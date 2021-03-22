//mui stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  appBar: {
    background: "black",
    boxShadow: "none",
    paddingLeft: "2rem",
    position: "sticky",
    '@media (max-width:812px)': {
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

    <AppBar position="absolute" className={classes.appBar}>
      <ToolBar className={classes.navContainer}>
        <a href= "#banner">
        <Button color="inherit" className={classes.brandName}>
            Nostalgia Therapy
          </Button>
        </a>
        
        <a class="navLink" href="#about">
          <Button color="inherit" className={classes.navLink}>
            About
          </Button>
        </a>
        
        <a class="navLink" href="#features">
          <Button color="inherit" className={classes.navLink}>
            Features
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
        <a>
          <Button color="inherit" className={classes.navLink}>
          How To
          </Button>
        </a>
        
        <a>
          <Button color="inherit" className={classes.navLink}>
            Caregiver Corner
          </Button>
       </a>
 
      </ToolBar>
    </AppBar>


  );
}

export default withStyles(styles)(Navbar);