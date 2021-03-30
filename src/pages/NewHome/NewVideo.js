import React from "react";
import iPadVideo from "../../images/iPadVideo.png";
import tv from "../../images/tv.jpg"

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Components
import {CreateMoreVideo} from "../../component/ReadMore/CreateMore";

const styles = {
  video: {
    backgroundImage: `url(${tv})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "80vh",
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
    backgroundColor: "#000",
    opacity: ".85",
    top: "2.5rem",
    marginLeft: "4.5rem",
    width: "36vw",
    height: "58vh",
    textAlign: "center",
    textTransform: "none",
    fontSize: "20px",
    border: "2px",
    borderRadius: "12px",
    '@media (max-width: 768px)': {
      zIndex: 2,
      position: "absolute",
      top: "15.5rem",
      marginLeft: "5.5rem",
      width: "40vw",
      height: "35vh",
    },
  },
  overlayText: {
    color: "#fff",
    margin: "25px auto",
    disaply: "none",
  },
 };

function NewVideo(props) {
  const { classes } = props;
  return (
    <div id="video">
      <div  className={classes.video}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12}
    style = {{position: "relative"}}
    >  
   <Typography variant="h3"
        style={{
          position: "absolute", 
          color:"white", 
          padding: "4.5rem 5rem 0 20rem", 
          textShadow: "1px 1px 4px #000" }}>
          Nostalgia TV
      </Typography>

      <Typography variant="h4" 
              style={{position: "absolute", 
              color:"white", 
              padding: "10rem 4rem 2rem 20rem", 
              textShadow: "1px 1px 4px #000"}}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
  
  </Grid>    
</div>
 {/* <Grid 
      container
      direction="row"
      alignItems="center"></Grid> */}

    {/* <Grid container item sm={12} style = {{background: "white"}}>
      <CreateMoreVideo/>
    </Grid> */}

</div>
  );
};

export default withStyles(styles)(NewVideo);