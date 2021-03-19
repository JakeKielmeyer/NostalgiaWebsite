import React,{useState}  from "react";
import iPadPhotos from "../images/iPadPhotos.png";
import iPadMusic from "../images/iPadMusic.png";
import iPadVideo from "../images/iPadVideo.png";
import iPadPuuzzle from "../images/iPadPuzzle.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";



const styles = {
  features: {
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
      margin: "15px auto",
  },
    '@media (max-width: 768px)': {
      marginLeft: "250px",
      marginTop: "5px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginTop: "5px",
      marginLeft: "30px",
  },
},

hero: {
  maxWidth: "90%",
  maxHeight: "90%",
  marginTop: ".5rem",
  marginLeft: "40px",
  position: "relative",
  zIndex: 1,
  '@media (max-width: 1024px)': {
    margin: "10px auto",
},
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    margin: "0",
  },
},

overHero: {
  background: "purple",
  position: "relative",
  zIndex: 2,
},


text: {
  margin: "15px auto",
  color: "#8f8f8f",
  fontSize: "2rem",
  lineHeight: "1.25",
  },
};

function Features(props) {
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
    <Grid container item sm={12} md={6}>  
     
    <a class="navLink" href="#photos">
      <Button>
          <img 
            src = {iPadPhotos}
            className={classes.hero}>
          </img>
      </Button>
    </a>
      <Typography variant="h3" className={classes.text}>Nostalgic Moments</Typography> 
    </Grid> 

    <Grid container item sm={12} md={6}>  
    <a class="navLink" href="#NostalgiaRadio">
      <Button>
          <img 
            src = {iPadMusic}
            className={classes.hero}>
          </img>
      </Button>
    </a>
      <Typography variant="h3" className={classes.text}>Nostalgia Radio</Typography> 
    </Grid> 
 
    <Grid container item sm={12} md={6}> 
    <a class="navLink" href="#video"> 
      <Button>
          <img 
            src = {iPadVideo}
            className={classes.hero}>
          </img>
      </Button>
    </a>
      <Typography variant="h3" className={classes.text}>Videos</Typography> 
    </Grid> 

    <Grid container item sm={12} md={6}>  
    <a class="navLink" href="#puzzle">
      <Button>
          <img 
            src = {iPadPuuzzle}
            className={classes.hero}>
          </img>
      </Button>
    </a>
      <Typography variant="h3" className={classes.text}>Puzzles</Typography> 
  </Grid> 
  
  </Grid>    
</div>
</div>
  );
};

export default withStyles(styles)(Features);