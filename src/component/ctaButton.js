import React from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = {
  cta: {
    textTransform: "none",
    fontSize: "2rem",
    fontFamily: "KOW",
    margin: "75px 40%",
    color: "#fff",
    backgroundColor: "#3fa9f5",
    whiteSpace: "nowrap",
      '&:hover': {
        color: "#3fa9f5",
        backgroundColor: "#fff",
        filter: "drop-shadow(0 0 0.1rem #8f8f8f)",
      },
        '@media (max-width:414px)': {
          fontSize: '1.75rem',
          margin: "35px",
      },
    
    },
};

const Cta = (props) => {
  const { classes } = props;
  return (
  <div>
  <a href="https://app.nostalgiatherapies.com/signup" target="_blank">
    <Button
      variant="contained"
      className={classes.cta}>Sign Up
    </Button>
  </a>
  </div>
  );
};

export default withStyles(styles)(Cta);