import React from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = {
  cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
    left: "50%",
    top: "50%",
    tranform: "translate(-50%, -50%)",
  //   '@media (max-width:768px)': {
  //     marginLeft: '18rem',
  //     },
  //   '@media (max-width:414px)': {
  //   fontSize: '1.5rem',
  //   marginLeft: "50px",
  //   },
  },
};

const Cta = (props) => {
  const { classes } = props;
  return (
  <div>
  <a href="https://nostalgiadev-1f319.web.app/" target="_blank">
  <Button
      variant="contained"
      className={classes.cta}>Sign Up
    </Button>
  </a>
  </div>
  );
};

export default withStyles(styles)(Cta);