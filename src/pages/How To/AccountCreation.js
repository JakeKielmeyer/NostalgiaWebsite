import React from "react";
import iPadPhotos from "../../images/iPadPhotos.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// Components
import More from "../../component/ReadMore/ReadMoreText";

const styles = {
  use: {
    display: "flex",
    padding: "0 15%",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
  head: {
    color: "#3fa9f5",
    marginLeft: "42px",
    '@media (max-width: 768px)': {
      display: "none",
  },
},
    
  headp: {
    color: "#000",
    margin: "25px auto",
    disaply: "none",
    '@media (max-width: 1024px)': {
      display: "none",
  },
    '@media (max-width: 768px)': {
      display: "block",
  },
},
  
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: ".5rem",
    // marginLeft: "40px",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width: 1024px)': {
      // marginLeft: "15px",
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

function HowToUse(props) {
  const { classes } = props;
  return (
    <div id="photos">
      <div  className={classes.use}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={7}>  
    <Typography variant="h3" className={classes.headp}>Creating Your Accout</Typography>
          <img 
            src = {iPadPhotos}
            className={classes.hero}>
          </img>
          <Typography variant="h4" 
              className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Creating Your Account</Typography>       
          <Typography variant="h4" className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>  
  </Grid>    
</div>      
      {/* Landscape Mode */}
      <Grid container item sm={12} style = {{background: "white"}}>
      <More/>
    </Grid>
</div>
  );
};

export default withStyles(styles)(HowToUse);