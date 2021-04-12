import React from "react";
import iPadDash from "../images/iPadDashboard.png";
import Banner1 from "../images/Banner1.jpg";
import BannerMobile from "../images/TabletUse.JPG";
//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  banner: {
    padding: "0 15%", 

    // padding: "7% 15%", 
    // background: "linear-gradient(to left bottom,  #cbcbcb, black)",
    // background: "linear-gradient(to left, #303030, #414141)", 
    
    fontFamily:"Segoe UI",
    fontSize: "1.25rem",
},

  head: {
    position: "absolute",
    color: "#000",
    marginTop: "1px",
    // textShadow: "1px 1px 4px #000",
    '@media (max-width: 768px)': {
      marginTop: "1px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      margin: "0",
  },
},

  text: {
    color: "#fff",
    marginLeft: "70px",
    fontSize: "2rem",
    lineHeight: "1.25",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
  
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "5rem",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
cta: {
  textTransform: "none",
  fontSize: "2rem",
  fontFamily: "KOW",
  margin: "75px 40%",
  whiteSpace: "nowrap",
  '@media (max-width:768px)': {
    marginLeft: '',
    },
  '@media (max-width:414px)': {
  fontSize: '1.5rem',
  },
},
};

function Banner(props) {
  const { classes } = props;
  return (
<div id="banner">
  <div className={classes.banner}>

<Grid itm sm = {12} style={{paddingTop: "4rem",}}>
  <Typography variant = "h3" className={classes.head}>
          Reminsicense Therapy Simplified</Typography>
          <Typography variant="h4" 
              style={{
              color:"#000", 
              paddingTop: "70px", }}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
        <img src={BannerMobile} className={classes.hero}>

        </img>  
          <Button
            variant="contained"
            className={classes.cta}>Sign Up
          </Button>
        </Grid>

    </div>
  </div>
  );
};

export default withStyles(styles)(Banner);