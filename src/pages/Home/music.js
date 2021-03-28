import React from "react";
import JukeBox from "../../images/JukeBox.jpg";
import PopSocks from "../../images/PopSocks.png";
import BoomerHeyday from "../../images/BoomerHeyday.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Components
import {CreateMoreMusic} from "../../component/ReadMore/CreateMore";

const styles = {
  music: {
    backgroundImage: `url(${JukeBox})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "80vh",
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
 overlay: {
  zIndex: 2,
  position: "absolute",
  backgroundColor: "rgba(143, 143, 143, .6)",
  top: "2.25rem",
  marginLeft: "2.5rem",
  width: "44vw",
  height: "46vh",
  textAlign: "center",
  textTransform: "none",
  fontSize: "20px",
  '@media (max-width: 768px)': {
    zIndex: 2,
    position: "absolute",
    backgroundColor: "rgba(143, 143, 143, .6)",
    top: "2.25rem",
    marginLeft: "3rem",
    width: "71vw",
    height: "42vh",
    textAlign: "center",
    textTransform: "none",
    fontSize: "20px",
  },
},
overlayText: {
  color: "#fff",
  margin: "25px auto",
  disaply: "none",
},
};

function Music(props) {
  const { classes } = props;
  return (
    <div id="NostalgiaRadio">
      <div className={classes.music} >
    <Grid container direction="row" alignItems="center">

<Grid container item sm={12}
      style = {{position: "relative"}}>
 
      <Typography variant="h3"
        style={{
          position: "absolute", 
          color:"white", 
          padding: "4.5rem 5rem 0 4rem", 
          textShadow: "1px 1px 4px #000" }}>
          Nostalgia Radio
      </Typography>

          <img 
            src = {PopSocks}
            style={{position: "absolute", 
            width: "45%", 
            padding: "10rem 5rem 2rem 4rem" }}>
          </img>

          <img 
            src = {BoomerHeyday}
            style={{position: "absolute", width: "45%", padding: "20rem 5rem 2rem 4rem" }}>
          </img>

          <Typography variant="h4" 
              style={{position: "absolute", 
              color:"white", 
              padding: "30rem 15rem 2rem 4rem", 
              textShadow: "1px 1px 4px #000"}}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>   

  </Grid>    
</div>
{/* Landscape Mode */}
    <Grid container item sm={12}>
      <CreateMoreMusic/>
    </Grid>
</div>
  );
};


export default withStyles(styles)(Music);