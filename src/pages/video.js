import React from "react";
import iPadVideo from "../images/iPadVideo.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// Components
import AboutMore from "../component/about/portrait";
import AboutMoreLM from "../component/photo/landscape";

const styles = {
  video: {
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
  
  hero: {
    maxWidth: "80%",
    maxHeight: "80%",
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

function Video(props) {
  const { classes } = props;
  return (
    <div>
      <div  className={classes.video}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={7}>  
          <img 
            src = {iPadVideo}
            className={classes.hero}>
          </img>
          <Typography variant="h4" 
              className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Nostalgia TV</Typography>       
          <Typography variant="h4" className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>  
  
  </Grid>    
</div>
 <Grid 
      container
      direction="row"
      alignItems="center"></Grid>

    {/* Landscape Mode */}
    <Grid container item sm={12} style = {{background: "white"}}>
      <AboutMoreLM/>
    </Grid>
{/* Portrait Mode */}
<AboutMore/>
</div>
  );
};

export default withStyles(styles)(Video);