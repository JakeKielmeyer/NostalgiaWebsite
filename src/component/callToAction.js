import React,{useState}  from "react";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const styles = {
  call: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "20vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#8f8f8f",
  },
  head: {
    color: "#fff",
    '@media (max-width: 1024px)': {
        margin: "10px 20px",
        display: "block",
  },
},
textB: {
    color: "#000",
    fontSize: "2rem",
    lineHeight: "1.25",
    display: "none",
    '@media (max-width: 768px)': {
      marginBottom: "15px",
      display: "block",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
      display: "block",
    },
   },
   cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
    marginBottom: "15px",
    '@media (max-width: 1024px)': {
      marginLeft: "150px",
      marginTop: "0",
  },
    marginLeft: "400px",
    '@media (max-width: 768px)': {
      marginLeft: "280px",
  },
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    marginLeft: "50px",
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
            <Typography variant="h4" className={classes.textB}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.</Typography> 
        </Grid>
        
        <Button
            variant="contained"
            className={classes.cta}>Sign Up
        </Button>
        </Grid>

    </div>
  );
};

export default withStyles(styles)(Call);