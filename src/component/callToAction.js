import React,{useState}  from "react";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  call: {
    display: "flex",
    minHeight: "20vh",
    backgroundColor: "#fff",
  },

  head: {
    color: "#3fa9f5",
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
    fontSize: "2rem",
    fontFamily: "KOW",
    margin: "5px auto 30px",
    color: "#fff",
    backgroundColor: "#3fa9f5",
    whiteSpace: "nowrap",
      '&:hover': {
        color: "#3fa9f5",
        backgroundColor: "#fff",
        filter: "drop-shadow(0 0 0.1rem #8f8f8f)",
      },
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
      className={classes.cta}>
       <a href="https://nostalgiadev-1f319.web.app/" target="_blank">Sign Up</a>
    </Button>
    </Grid>

    </div>
  );
};

export default withStyles(styles)(Call);