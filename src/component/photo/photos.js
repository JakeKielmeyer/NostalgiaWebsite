import React from "react";
import iPadPhotos from "../images/iPadPhotos.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ReadMore from "../ReadMore";

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
      marginTop: "0",
      marginLeft: "45px",
  },
    '@media (max-width: 768px)': {
      display: "none",
  },
},

head1: {
  display: "none",
  '@media (max-width: 768px)': {
    color: "#fff",
    marginTop: "5px",
    marginLeft: "180px",
    display: "block",
},
'@media (max-width:414px)': {
  fontSize: '1.75rem',
  marginTop: "5px",
  marginLeft: "50px",
  },
},
  
  hero: {
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

hero2: {
  maxWidth: "70%",
  maxHeight: "70%",
  filter: "drop-shadow(0 0 0.1rem white)",
  '@media (max-width: 1024px)': {
    margin: "10px 75px",
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
        marginLeft: "45px",
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

function Photos(props) {
  const { classes } = props;
  return (
  <div>
    <div className={classes.photo}>
 
 <Grid 
      container
      direction="row"
      alignItems="center"
    >
    <Grid container item sm={12} md={7}>  
    <Typography variant="h3" className={classes.head1}>Nostalgic Moments</Typography>  
          <img src = {iPadPhotos}
          className={classes.hero}>
          </img>
          <Typography variant="h4" className={classes.textB}>Nostalgia Therapy is based on proven reminsicense therapy tools 
            that are designed to increase quality of life and time spent together.
          </Typography>
    </Grid>     
    <Grid container item sm={12}>
          {/* Landscape Mode */}
      <div className={classes.readA}>
        <ReadMore>
              <Typography variant="h4" className={classes.readTextA}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
            <img 
              src = {iPadPhotos}
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
              <img 
                src = {iPadPhotos}
                className={classes.hero2}>
              </img>
            Nostalgia Therapy is based on proven reminsicense therapy tools 
            that are designed to increase quality of life and time spent together.
            Nostalgia Therapy is based on proven reminsicense therapy tools 
            that are designed to increase quality of life and time spent together.
            Nostalgia Therapy is based on proven reminsicense therapy tools 
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

// export default withStyles(styles)(Photos);