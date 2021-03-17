import React,{useState}  from "react";
import jakeAndGrandpa from "./Jake and Grandpa.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ReadMore from "../ReadMore";

const styles = {
  readA: {
    '@media (max-width: 768px)': {
      display: "none",
    }, 
  },
  readTextA: {
    margin: "50px 50px 10px",
  },
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: ".5rem",
    marginLeft: "40px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "10px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
    },
  },
  cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
    marginBottom: "15px",
    '@media (max-width: 1024px)': {
      marginLeft: "350px",
      marginTop: "10px",
  },
    '@media (max-width: 768px)': {
      marginLeft: "280px",
  },
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    marginLeft: "50px",
    },
  },
}


// {/* Landscape Mode */}

function AboutMoreL(props) {
  const { classes } = props;
    return (
      <div>
        <Grid 
          container
          direction="row"
          alignItems="center">

   <Grid container item sm={12}>
      <div className={classes.readA}>
        <ReadMore>
              <Typography variant="h4" className={classes.readTextA}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
            <img 
              src = {jakeAndGrandpa}
              className={classes.hero}>
            </img>
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
              </Typography>
        </ReadMore>
        
        <Button
          variant="contained"
          className={classes.cta}>Sign Up
        </Button>

      </div> 
    </Grid>
  </Grid>    
</div>
  );
};
export default withStyles(styles)(AboutMoreL);