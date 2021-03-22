import React from "react";
import iPadMusic from "../../images/iPadMusic.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// Components
import More from "../../component/ReadMore/ReadMoreText";

const styles = {
  music: {
    display: "flex",
    padding: "6rem 5rem 2rem 4rem",
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
      margin: "5px auto",
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

// href="#The_ID_Name"
function Music(props) {
  const { classes } = props;
  return (
    <div id="NostalgiaRadio">
      <div  className={classes.music}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>Nostalgia Radio</Typography>       
          <Typography variant="h4" className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.</Typography> 
    </Grid>  

    <Grid container item sm={12} md={7}>  
          <img 
            src = {iPadMusic}
            className={classes.hero}>
          </img>
          <Typography variant="h4" 
              className={classes.text2}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>   
  </Grid>    
</div>
{/* Landscape Mode */}
    <Grid container item sm={12}>
      <More/>
    </Grid>
</div>
  );
};


export default withStyles(styles)(Music);