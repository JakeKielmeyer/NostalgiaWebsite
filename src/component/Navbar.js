//mui stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  appBar: {
    background: "transparent",
    boxShadow: "none",
    paddingLeft: "2rem",
  },

  brandName: {
    color: "#3fa9f5",
    fontSize: "1.18rem",
    fontFamily: "Leviathan",
    textTransform: "capitalize",
  },

  navContainer: {
    display: "flex",
    color: "#fff",
    width: "75vw",
    justifyContent: "space-between",
  },

  navLink: {
    fontFamily: "KOJ",
    fontSize: "1.15rem",
    textTransform: "capitalize",
  },
};

function Navbar(props) {
    const { classes } = props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <ToolBar className={classes.navContainer}>

            <Button color="inherit" className={classes.brandName}>
              Nostalgia Therapy
            </Button>
          
            <Button color="inherit" className={classes.navLink}>
              About{""}
            </Button>
                  
            <Button color="inherit" className={classes.navLink}>
              How it Works
            </Button>
    
            <Button color="inherit" className={classes.navLink}>
              Try It
            </Button>

            <Button color="inherit" className={classes.navLink}>
              Login
            </Button>

        </ToolBar>
      </AppBar>
    );
  }

export default withStyles(styles)(Navbar);