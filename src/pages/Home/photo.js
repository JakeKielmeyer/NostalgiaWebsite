import React from "react";
import iPadPhotos from "../../images/iPadPhotos.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Components
import {CreateMorePhoto} from "../../component/ReadMore/CreateMore";
import SpringModal from "../../component/Demos/PhotoDemo";

const styles = {
  photo: {
    display: "flex",
    padding: "6rem 5rem 0 4rem",
    minHeight: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#000",
  },
  
    
  headp: {
    color: "#fff",
    margin: "25px auto",
    disaply: "none",
    '@media (max-width: 1024px)': {
      display: "none",
  },
    '@media (max-width: 768px)': {
      display: "block",
  },
},

  head: {
    color: "#fff",
    marginTop: "125px",
    marginLeft: "260px",
    '@media (max-width: 1024px)': {
      marginTop: "0",
      marginLeft: "45px",
  },
    '@media (max-width: 768px)': {
      display: "none",
  },
},
  
  hero: {
    zIndex: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: ".5rem",
    marginLeft: "40px",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "10px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
  
text1: {
      color: "#8f8f8f",
      marginLeft: "70px",
      fontSize: "2rem",
      lineHeight: "1.25",
      '@media (max-width: 1024px)': {
        marginLeft: "45px",
        marginRight: "15px",
        marginTop: "20px",
    },
      '@media (max-width: 768px)': {
        display: "none",
    },
  },
  text2: {
    color: "#8f8f8f",
    marginLeft: "70px",
    fontSize: "2rem",
    lineHeight: "1.25",
    display: "none",
    '@media (max-width: 768px)': {
      marginLeft: "70px",
      marginTop: "5px",
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
    top: "2.75rem",
    marginLeft: "3.5rem",
    width: "43vw",
    height: "44vh",
    textAlign: "center",
    textTransform: "none",
    fontSize: "20px",
    '@media (max-width: 768px)': {
      zIndex: 2,
      position: "absolute",
      backgroundColor: "rgba(143, 143, 143, .6)",
      top: "9.25rem",
      marginLeft: "4rem",
      width: "70vw",
      height: "40vh",
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

function Photos(props) {
  const { classes } = props;
  return (
    <div id="photos">
      <div  className={classes.photo}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={7} 
    style = {{position: "relative"}}
    >  
    <Typography variant="h3" className={classes.headp}>Nostalgic Moments</Typography>
      
      <img
        src = {iPadPhotos}
        className={classes.hero}>
      </img>

      {/* <Button className = {classes.overlay}>
        <Typography variant = "h3" className= {classes.overlayText}>
          Preview
        </Typography>
      </Button> */}
      <SpringModal/>
          <Typography variant="h4" 
              className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
    <Grid container item sm={12} md={5}
      style = {{position: "relative"}}
    >  
          <Typography variant="h3" className={classes.head}>Nostalgic Moments</Typography>    
          <Typography variant="h4" className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>  
  </Grid>    
</div>      
      <Grid container item sm={12} style = {{background: "white"}}>
      <CreateMorePhoto/>
    </Grid>
</div>
  );
};

export default withStyles(styles)(Photos);