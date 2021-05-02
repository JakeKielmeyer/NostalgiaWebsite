import React from "react";
import Flash from "../../images/Flash Gordon.jpg";
import Bonanza from "../../images/tv/Bonanza.jpg";
import Commercial from "../../images/tv/Commercial.PNG";
import Beaver from "../../images/tv/LeaveItToBeaver.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// Components
import {CreateMorePhoto} from "../../component/ReadMore/CreateMore";

const styles = {
  video: {
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
    marginTop: ".5rem",
    marginLeft: "40px",
    border: "2px solid white",
    borderRadius: "6px",
    '@media (max-width: 768px)': {
      marginLeft: "0",
  },
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
    // color: "#000",
    color: "#fff",
    marginBottom: "50px",
    marginLeft: "40px",
    '@media (max-width: 768px)': {
      display: "none",
  },
},

headp: {
  // color: "#000",
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
    marginLeft: "40px",
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

function NewVideo(props) {
  const { classes } = props;
    return (
{/* <div id="features"> */}
  <div className={classes.video}>
    <Grid container direction="row" alignItems="center">

    <Grid container item sm={5}>  
    <Typography variant="h3" className={classes.headp}>Nostalgia TV</Typography>       
      <img src = {Flash} className={classes.hero}></img>
    </Grid> 

    <Grid container item sm = {7}>
    {/* <img src = {Beaver} className={classes.hero}></img> */}
    <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>
{/*     
    <Grid container item sm = {6}>
    <img src = {Commercial} className={classes.hero}></img>
    <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>
    
    <Grid container item sm = {6}>
    <img src = {Bonanza} className={classes.hero}></img>
    <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid> */}
  </Grid>  
  
  <Grid container direction="row" alignItems="center" className={classes.landscape}>
  
  <Grid container item sm={12} md={12}>  
          <Typography variant="h3" className={classes.head}>Nostalgia TV</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
  </Grid>
  </div>      
  {/* </div> */}
  );
};

export default withStyles(styles)(NewVideo);