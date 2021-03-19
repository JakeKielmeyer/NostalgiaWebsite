import React,{useState}  from "react";
import iPadPhotos from "../images/iPadPhotos.png";
import iPadMusic from "../images/iPadMusic.png";
import iPadVideo from "../images/iPadVideo.png";
import iPadPuzzle from "../images/iPadPuzzle.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  features: {
    display: "flex",
    padding: "4rem 5rem 2rem 4rem",
    minHeight: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
    '@media (max-width: 768px)': {
     display: "none",
  },
},
  
head: {
      color: "#000",
      margin: "15px auto",
      marginBottom: "2rem",
},

hero: {
  maxWidth: "90%",
  maxHeight: "90%",
  marginTop: ".5rem",
  marginLeft: "40px",
  marginBottom: "1.1rem",
},

moments: {
  marginLeft: "140px",
  color: "#8f8f8f",
  fontSize: "2rem",
  lineHeight: "1.25",
},

  radio: {
    marginLeft: "155px",
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
  },

  tv: {
    marginLeft: "160px",
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
  },

  puzzle: {
    marginLeft: "185px",
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
  },
};

function FeaturesL(props) {
  const { classes } = props;
  return (
    <div id="features">
      <div  className={classes.features}>
    <Grid 
      container
      direction="row"
      alignItems="center">
    <Grid container item sm={12}>  
          <Typography variant="h3" className={classes.head}>Features</Typography>       
    </Grid>  

{/* Portrait Mode */}
<Grid contianer item sm= {6}>
    <a class = "navLink" href = "#photos">
      <Typography variant = "h3" className={classes.moments}>
        Nostalgic Moments
      </Typography>
      <Button>
          <img 
            src = {iPadPhotos}
            className={classes.hero}>
          </img>
      </Button>
    </a> 
  </Grid>
    
  <Grid contianer item sm= {6}>
    <a class = "navLink" href = "#NostalgiaRadio">
      <Typography variant = "h3" className={classes.radio}>
        Nostalgia Radio
      </Typography>
    <Button>
    <img 
      src = {iPadMusic}
      className={classes.hero}>
    </img>
    </Button>
    </a> 
  </Grid>

    <Grid contianer item sm= {6}>
    <a class = "navLink" href = "#video">
      <Typography variant = "h3" className={classes.tv}>
        Nostalgia TV
      </Typography>
      <Button>
          <img 
            src = {iPadVideo}
            className={classes.hero}>
          </img>
      </Button>
    </a> 
  </Grid>
    
    <Grid contianer item sm= {6}>
    <a class = "navLink" href = "#puzzle">
      <Typography variant = "h3"  className={classes.puzzle}>
        Puzzle Fun
      </Typography>
      <Button>
          <img 
            src = {iPadPuzzle}
            className={classes.hero}>
          </img>
      </Button>
    </a> 
  </Grid>
  </Grid>    
</div>
</div>
  );
};

export default withStyles(styles)(FeaturesL);