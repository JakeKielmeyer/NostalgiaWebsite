import React from "react";
import iPadPhotos from "../images/iPadPhotos.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  photos: {
    paddingTop: "6rem",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#000",
  },
  
  big: {
    textAlign: "center",
    color: "#fff",
    fontSize: "4rem",
  },

  head: {
    textAlign: "left",
    color: "#fff",
    fontSize: "4rem",
    margin: "35px 0 50px",
  },
  
  slogan: {
    margin: "35px 0 50px",
    textAlign: "center",
    color: "#fff",
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
    marginLeft: "40px",
  },
  
  cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
  },
};

function Photos(props) {
  const { classes } = props;
  return (

  <div className={classes.photos}>
    <Typography variant = "h3" className={classes.big}>How it Works</Typography>
    <Typography variant = "h4" className={classes.slogan}>Simple reminscense therapy</Typography>
    
    <Grid 
      container
      direction="row"
      alignItems="center"
    >
   
    <Grid item item sm={5}>
      <Box mt={10}>
          <Typography variant="h3" className={classes.head}>Nostalgic Moments</Typography>
         <Box mt={5}>
            <Typography variant="h4" className={classes.text}>Built on trusted memory care processes, Cherub
            creates a personalized and fun experience for families to reconnect to a loved one
            with Alzheimer's disease.
            </Typography>
            <Button
              variant="contained"
              className={classes.cta}
              style={{ marginTop: "20px"}}
            >
              Try it!
            </Button>
          </Box>
        </Box>
    </Grid>      
    <Grid item sm={7}>
          <img src = {iPadPhotos}
          className={classes.hero}
          ></img>
    </Grid>
  </Grid>
 </div>

  );
};

export default withStyles(styles)(Photos);