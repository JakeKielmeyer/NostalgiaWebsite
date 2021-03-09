import React from "react";
import iPadPhotos from "../images/iPadPhotos.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  photo: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#000",
  },
  
  head: {
    color: "#fff",
    marginTop: "125px",
    marginLeft: "260px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "0",
  },
    '@media (max-width: 768px)': {
      marginLeft: "175px",
      marginTop: "5px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginTop: "115px",
      margin: "0",
  },
},

  text: {
    color: "#8f8f8f",
    marginLeft: "70px",
    fontSize: "2rem",
    lineHeight: "1.25",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "100px",
  },
    '@media (max-width: 768px)': {
      marginLeft: "70px",
      marginTop: "5px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
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
    '@media (max-width: 1024px)': {
      marginLeft: "150px",
      marginTop: "0",
  },
    marginLeft: "400px",
    '@media (max-width: 768px)': {
      marginLeft: "280px",
  },
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    marginLeft: "50px",
    },
  },
};



function Photos(props) {
  const { classes } = props;
  return (
    <div className={classes.photo}>
 
 <Grid 
      container
      direction="row"
      alignItems="center"
    >
   
    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Nostalgic Moments</Typography>       
          <Typography variant="h4" className={classes.text}>Nostalgia Therapy is based on proven reminsicense therapy tools 
        that are designed to increase quality of life and time spent together.
        </Typography>
    </Grid>      

    <Grid container item sm={12} md={7}>  
          <img src = {iPadPhotos}
          className={classes.hero}
          ></img>
            <Button
        variant="contained"
        className={classes.cta}>Sign Up
      </Button>
    </Grid>  

  </Grid>
  </div>
  );
};

export default withStyles(styles)(Photos);