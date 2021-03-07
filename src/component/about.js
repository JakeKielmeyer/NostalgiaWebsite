import React from "react";
import Cherub from "../images/Cherub.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  about: {
    // display: "flex",
    paddingTop: "6rem",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#ffff",
  },
  
  big: {
    textAlign: "center",
    color: "#000",
    fontSize: "4rem",
  },

   head: {
    textAlign: "left",
    color: "#000",
    fontSize: "4rem",
  },
  
  slogan: {
    margin: "35px 0 50px",
    textAlign: "center",
    color: "#000",
    fontSize: "2.5rem",
    fontFamily: "KOJ",
    fontWeight: "lighter",
  },

   text: {
    color: "#8f8f8f",
  },
  
   hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "2rem",
  },
  
   cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
  },
};

function About(props) {
  const { classes } = props;
  return (

    <div className={classes.about}>
    <Typography variant = "h3" className={classes.big}>How it Works</Typography>
    <Typography variant = "h4" className={classes.slogan}>Simple reminscense therapy</Typography>
      <Grid 
      container
      direction="row"
      alignItems="center"
      mt={50}
    >
    <Grid item sm={5}>
        <img className={classes.hero} src = {Cherub}></img>
    </Grid>

    <Grid item item sm={7}>
      <Box mt={10} 
        style={{ marginLeft: "40px"}}
      >
            <Box mt={5}>
            <Typography variant = "h4" className={classes.slogan}>Effective and simple reminscense therapy </Typography>
            <Typography variant="h4" className={classes.text}
            >Nostalgia Therapy combines photos, music, videos and activities like puzzles into a personalized
            and effective reminscense therapy experience. Use Nostalgia Therapy to improve quality of time spent togehter with a loved
            who has Alzheimer's or another form of Dementia.
            </Typography>

            <Button
              variant="contained"
              className={classes.cta}
              style={{ margin: "20px"}}
            >
              Try it!
            </Button>
          </Box>
        </Box>
    </Grid>      
  </Grid>    
  </div>
  );
};

export default withStyles(styles)(About);