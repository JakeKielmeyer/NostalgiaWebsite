import React,{useState}  from "react";
import hugging from "../../images/bannermobile.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Cta from "../../component/ctaButton";
import Button from "@material-ui/core/Button";

import {CreateMore} from "../../component/ReadMore/CreateMore";

const styles = {
  about: {
    padding: "0 15% 5%", 
    display: "flex",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
head: {
    color: "#3fa9f5",
    marginTop: "5px",
    marginBottom: "50px",
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
  border: ".5px solid white",
  borderRadius: "6px",
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
  fontSize: "2rem",
  lineHeight: "1.25",
  '@media (max-width: 1024px)': {
    margin: "15px",
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
 Lm: {
  textTransform: "none",
  fontSize: "2rem",
  fontFamily: "KOW",
  color: "#3fa9f5",
  backgroundColor: "#fff",
  filter: "drop-shadow(0 0 0.1rem #8f8f8f)",
  whiteSpace: "nowrap",
    '&:hover': {
      color: "#fff",
      backgroundColor: "#3fa9f5",
    },
  },
};

function HowToUse(props) {
  const { classes } = props;
  return (
    <div id="about">
    <div>
    <div  className={classes.about}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={7}>  
          <Typography variant="h3" className={classes.head}>What is Nostalgia Therapy?</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  

    <Grid container item sm={12} md={5}>  
          <img 
            src = {hugging}
            className={classes.hero}>
          </img>
          <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid> 
    <Button
      variant="contained"
      className={classes.Lm}>Learn More
    </Button>
    <Cta/>
  </Grid>   
    </div>
     

</div>  
</div>
  );
};

export default withStyles(styles)(HowToUse);