import React from "react";
import iPadPhotos from "../../images/iPadPhotos.png";
import photos from "../../images/photos.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";


// Components
import {CreateMorePhoto} from "../../component/ReadMore/CreateMore";
import SpringModal from "../../component/Demos/PhotoDemo";

const styles = {
  photo: {
    backgroundImage: `url(${photos})`,
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
};

function Photos(props) {
  const { classes } = props;
  return (
    <div id="photos">
      <div  className={classes.photo}>
    <Grid 
      container
      direction="row"
      alignItems="center"
      style = {{
        position: "relative",
      }}
      >

    
    <Typography variant="h3" 
     style={{
          position: "absolute", 
          color:"white", 
          padding: "4.5rem 5rem 0 4rem", 
          textShadow: "1px 1px 4px #000" }}
    >Nostalgic Moments</Typography>
      
      <img
        src = {iPadPhotos}
        style={{position: "absolute", 
            width: "75%", 
            padding: "42rem 5rem 2rem 4rem" }}>
      </img>

      <SpringModal/>
          <Typography variant="h4" 
              style={{position: "absolute", 
              color:"white", 
              padding: "80rem 15rem 2rem 4rem", 
              textShadow: "1px 1px 4px #000"}}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 

  </Grid>    
</div>      
      <Grid container item sm={12} style = {{background: "white"}}>
      <CreateMorePhoto/>
    </Grid>
</div>
  );
};

export default withStyles(styles)(Photos);