import React,{useState}  from "react";
import iPadDashboard from "../../images/iPadPuzzle.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import {CreateMore} from "../../component/ReadMore/CreateMore";

const styles = {
  puzzle: {
    padding: "7% 15%", 
    display: "flex",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    background: "linear-gradient(to left top,  #cbcbcb, white)",
  },
  
head: {
    color: "#000",
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
};

function NewAbout(props) {
  const { classes } = props;
  return (
    <div id="features">
      <div  className={classes.puzzle}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Puzzle Fun</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  

    <Grid container item sm={12} md={5}>  
          <img 
            src = {iPadDashboard}
            className={classes.hero}>
          </img>
          <Typography variant="h4" className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 
    </Grid> 
  </Grid>   

</div>  
</div>
  );
};

export default withStyles(styles)(NewAbout);
