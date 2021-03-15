import React from "react";
import iPadMusic from "../images/iPadMusic.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ReadMore from "./ReadMore";

const styles = {
  music: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
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
      marginLeft: "125px",
      marginTop: "5px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginTop: "5px",
      marginLeft: "30px",
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
    marginBottom: "15px",
    '@media (max-width: 1024px)': {
      marginLeft: "150px",
      marginTop: "10px",
  },
    '@media (max-width: 768px)': {
      marginLeft: "280px",
  },
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    marginLeft: "50px",
    },
  },

  readA: {
  '@media (max-width: 768px)': {
    display: "none",
  }, 
},
  readB: {
    display: "none",
    '@media (max-width: 768px)': {
      display: "block",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      display: "block",
    },
  }, 

  textA: {
    color: "#8f8f8f",
    marginLeft: "70px",
    fontSize: "2rem",
    lineHeight: "1.25",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "20px",
  },
    '@media (max-width: 768px)': {
      display: "none",
  },
},

textB: {
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

 readTextB: {
   margin: "10px 50px",
 }
};

function Music(props) {
  const { classes } = props;
  return (
    <div>
      <div  className={classes.music}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Nostalgia Radio</Typography>       
          <Typography variant="h4" className={classes.readTextA}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.</Typography> 
      
      {/* Landscape Mode */}
      <div className={classes.readA}>
        <ReadMore>
              <Typography variant="h4" className={classes.textA} style={{backgroundColor: "#8f8f8f", color: "#000",}}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
              </Typography>
        </ReadMore>
      </div>
    </Grid>  

    <Grid container item sm={12} md={7}>  
          <img 
            src = {iPadMusic}
            className={classes.hero}>
          </img>
          <Typography variant="h4" 
              className={classes.textB}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
  </Grid>    
  </div>
  {/* Portrait Mode */}
  <div className={classes.readB}>
    <ReadMore>
          <Typography variant="h4" className={classes.readTextB}>
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
            <img 
              src = {iPadMusic}
              className={classes.hero}>
            </img>
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          </Typography>
    </ReadMore>
    
      <Button
        variant="contained"
        className={classes.cta}>Sign Up
      </Button>
  </div>
</div>
  );
};


export default withStyles(styles)(Music);