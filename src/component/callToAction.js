import React,{useState}  from "react";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Cta from "../component/ctaButton";

const styles = {
  call: {
    display: "flex",
    minHeight: "20vh",
    backgroundColor: "#000",
    // background: "linear-gradient(to left bottom,  #cbcbcb, black)",
  },

  head: {
    // color: "#3fa9f5",
    color: "#fff",
    margin: "10px auto",
    display: "block",
    '@media (max-width: 1024px)': {
  },
  '@media (max-width:414px)': {
    margin: "5px auto",
    fontSize: '1.3rem',
    },
  },

  text: {
    // color: "#000",
    color: "#8f8f8f",
    margin: "10px auto",
    '@media (max-width: 1024px)': {
        display: "block",
  },
  '@media (max-width:414px)': {
    margin: "5px auto",
    fontSize: '1.3rem',
    },
  },
  cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
    margin: "10px auto",
    // left: "450%",
    // tranform: "translate(-50%, -50%)",
  },
};

function Call(props) {
  const { classes } = props;
  return (
    <div  className={classes.call}>
        <Grid 
            container
            direction="row"
            alignItems="center">

        <Grid container item sm={12}>  
          <Typography variant="h3" className={classes.head}>Start Your Free Two Week Trial Today</Typography>       
        </Grid>  
        
        <Grid container item sm={12}>  
          <Typography variant="h6" className={classes.text}>Only $15 a month</Typography>       
        </Grid>

  
    <Button
      variant="contained"
      className={classes.cta}
      >
       <a href="https://nostalgiadev-1f319.web.app/" target="_blank">Sign Up</a>
    </Button>
    </Grid>

    </div>
  );
};

export default withStyles(styles)(Call);