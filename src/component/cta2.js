import React from "react";


//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { FormControlLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = {
  welcome: {
    color: "white",
    display: "flex",
    paddingLeft: "4rem",
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  contents: {
    color: "white",
    minHeight: "800px",
    paddingLeft: "4rem",
    paddingTop: "3rem",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
   
  },

  rows: {
    paddingBottom: "50px",
    
  },

  rowsTitle: {
    paddingBottom: "40px",
    justifyContent: "space-around",
    
  },
};

const Call2 = (props) => {
  const { classes } = props;
  return (
  <div className="cta" style={{ backgroundColor: "#000" }}>
        <Typography variant="h3">Reconnect, Reminisce, and Bridge the Gap.</Typography>
        <Typography variant="h4" 
        style={{ marginTop: "20px" }}
        >Get Nostalgia Therapy free for two weeks</Typography>
    <Button
        variant="contained"
        style={{ marginTop: "40px"}}
    >
    Signup
    </Button>
    <Typography variant="h6" 
        style={{ marginTop: "20px" }}
        >only $15 a month</Typography>
  </div>
  );
};

export default withStyles(styles)(Call2);