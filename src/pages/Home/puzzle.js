import React from "react";
import iPadPuzzle from "../../images/iPadPuzzle.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {CreateMorePuzzle} from "../../component/ReadMore/CreateMore"
const styles = {
  puzzle: {
    display: "flex",
    padding: "6rem 5rem 2rem 4rem",
    minHeight: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
  head: {
    color: "#000",
    marginTop: "125px",
    marginLeft: "260px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "0",
  },
    '@media (max-width: 768px)': {
      margin: "15px auto",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginTop: "5px",
      marginLeft: "30px",
  },
},

hero: {
  maxWidth: "80%",
  maxHeight: "80%",
  margin: ".5rem auto",
  filter: "drop-shadow(0 0 0.1rem white)",
  '@media (max-width: 1024px)': {
},
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    margin: "0",
},
},

text1: {
  color: "#8f8f8f",
  fontSize: "2rem",
  lineHeight: "1.25",
  '@media (max-width: 1024px)': {
    margin: "15px",
},
  '@media (max-width: 768px)': {
    display: "none",
},
},

text2: {
  color: "#8f8f8f",
  fontSize: "2rem",
  lineHeight: "1.25",
  display: "none",
  '@media (max-width: 768px)': {
    marginLeft: "20px",
    marginTop: "30px",
    display: "block",
},
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    margin: "0",
    display: "block",
  },
 },
 overlay: {
  zIndex: 2,
  position: "absolute",
  backgroundColor: "rgba(143, 143, 143, .6)",
  top: "2.5rem",
  marginLeft: "4.75rem",
  width: "36vw",
  height: "59vh",
  textAlign: "center",
  textTransform: "none",
  fontSize: "20px",
  '@media (max-width: 768px)': {
    zIndex: 2,
    position: "absolute",
    backgroundColor: "rgba(143, 143, 143, .6)",
    top: "2.75rem",
    marginLeft: "5.75rem",
    width: "58.5vw",
    height: "54vh",
    textAlign: "center",
    textTransform: "none",
    fontSize: "20px",
  },
},
overlayText: {
  color: "#fff",
  margin: "25px auto",
  disaply: "none",
},
};

function Puzzle(props) {
  const { classes } = props;
  return (
    <div id="puzzle">
      <div  className={classes.puzzle}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Puzzle Fun</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  

    <Grid container item sm={12} md={7}
        style = {{position: "relative"}}
    >  
          <img 
            src = {iPadPuzzle}
            className={classes.hero}>
          </img>
          <Button className = {classes.overlay}>
        <Typography variant = "h3" className= {classes.overlayText}>
          Try It!
        </Typography>
      </Button>
          <Typography variant="h4" 
              className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid> 
  </Grid>    
</div>
{/* Landscape Mode */}
    <Grid container item sm={12}>
      <CreateMorePuzzle/>
    </Grid>
</div>
  );
};

export default withStyles(styles)(Puzzle);