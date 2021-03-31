import React from "react";
import PopSocks from "../../images/PopSocks.png";
import BoomerHeyday from "../../images/BoomerHeyday.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";


const styles = {
  photo: {
    position: "relative",
    display: "flex",
    padding: "6rem 5rem 2rem 4rem",
    display: "flex",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    background: "linear-gradient(to left top,  #cbcbcb, white)",
},

hero: {
    maxWidth: "90%",
    maxHeight: "90%",
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

  head: {
    color: "#000",
    marginTop: "5px",
    marginLeft: "40px",
    '@media (max-width: 768px)': {
      display: "none",
  },
},

headp: {
  color: "#000",
  marginTop: "5px",
  marginLeft: "100px",
  display: "none",
  '@media (max-width: 768px)': {
    display: "block",
  },
},

  text1: {
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
    '@media (max-width: 1024px)': {
      marginTop: "5px",
      marginLeft: "40px",
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

   landscape: {
     '@media (max-width: 768px)': {
      display: "none",
  },
   },
};

function NewMusic(props) {
  const { classes } = props;
    return (

  <div className={classes.photo}>
    <Grid container direction="row" alignItems="center">

    <Grid container item sm={12}>  
    <Typography variant="h3" className={classes.headp}>Nostalgic Moments</Typography>       

      <img src = {BoomerHeyday} className={classes.hero}></img>
    </Grid> 
    <Grid container item sm = {12}>

    <img src = {PopSocks} className={classes.hero}></img>
    <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>
  </Grid>  
  <Grid container direction="row" alignItems="center" className={classes.landscape}>
  <Grid container item sm={12} md={12}>  
          <Typography variant="h3" className={classes.head}>Nostalgic Moments</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
  </Grid>
  </div>      
  );
};

export default withStyles(styles)(NewMusic);