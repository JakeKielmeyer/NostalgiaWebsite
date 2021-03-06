import React from "react";
import iPadPuzzle from "../images/iPadPuzzle.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const styles = {
  puzzle: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#ffff",
  },
  
   head: {
    color: "#000",
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

function Puzzle(props) {
  const { classes } = props;
  return (
    
  <div className={classes.puzzle}>
    <Grid 
      container
      direction="row"
      alignItems="center"
    >
    <Grid item sm={6}>
        <img 
        className={classes.hero}
        src = {iPadPuzzle}></img>
    </Grid>

    <Grid item item sm={6}>
      <Box mt={10} 
        style={{ marginLeft: "40px"}}
      >
        <Typography variant="h3"
        className={classes.head}
        >Puzzles to Stimulate</Typography>
            <Box mt={5}>
            
            <Typography variant="h4"
            className={classes.text}
            >I’m the queen of cuddles, a master of food snatching, and through warm love
            and care I helped make Alzheimer’s a little better for my family.
            <br></br><br></br>
            Now I help other families and their loved ones with Alzheimer’s with my app. 
            I use photos to create conversation, classic shows to help you laugh, play music 
            for you to sing along  to and give you puzzles to play to help keep your brain active. 
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

export default withStyles(styles)(Puzzle);