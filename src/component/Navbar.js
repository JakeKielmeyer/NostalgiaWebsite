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
    // color: "#DB7093",
    color: "#3fa9f5",
    fontSize: "1.18rem",
    fontFamily: "Leviathan",
    textTransform: "capitalize",
  },

  navContainer: {
    display: "flex",
    color: "#000",
    width: "60vw",
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
              Cherub
            </Button>
          
            <Button color="inherit" className={classes.navLink}>
              What is Cherub?{""}
            </Button>
                  
            <Button color="inherit" className={classes.navLink}>
              How it Works{" "}
            </Button>
          
            <Button color="inherit" className={classes.navLink}>
              The Science
            </Button>
    
            <Button color="inherit" className={classes.navLink}>
              Try It!
            </Button>

            <Button color="inherit" className={classes.navLink}>
              Login
            </Button>

        </ToolBar>
      </AppBar>
    );
  }

export default withStyles(styles)(Navbar);