import React from "react";
import PopSocks from "../../images/PopSocks.png";
import BoomerHeyday from "../../images/BoomerHeyday.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";


const styles = {
  radio: {
    padding: "0 15%", 
    display: "flex",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#000",
    borderBottom: "8px solid #222",
},

hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "2.5rem",
    marginLeft: "2.5rem",
    '@media (max-width: 768px)': {
      marginLeft: "0",
  },
},

head: {
  color: "#fff",
  // color: "#000",
  marginBottom: "50px",
  // marginLeft: "40px",
  '@media (max-width: 768px)': {
    display: "none",
},
},

headp: {
  color: "#fff",
  marginTop: "5px",
  // marginLeft: "100px",
  display: "none",
  '@media (max-width: 768px)': {
    display: "block",
  },
},

  text1: {
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
    // marginLeft: "40px",
    '@media (max-width: 1024px)': {
      marginTop: "5px",
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
      // marginLeft: "20px",
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
// {/* <div id="features"> */}
  <div className={classes.radio}>
    <Grid container direction="row" alignItems="center">

    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Nostalgia Radio</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  

    <Grid container item sm={12} md={7}>  
    <Typography variant="h3" className={classes.headp}>Nostalgia Radio</Typography>       

      <img src = {BoomerHeyday} className={classes.hero}></img>

    <img src = {PopSocks} className={classes.hero}></img>
    <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>
    
  </Grid>
  </div>      
  );
};

// export default withStyles(styles)(NewMusic);