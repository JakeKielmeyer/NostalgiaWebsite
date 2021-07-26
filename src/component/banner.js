import React from "react";
import iPadDash from "../images/iPadDashboard.png";
import Banner1 from "../images/Banner1.jpg";
import BannerMobile from "../images/TabletUse.JPG";
import video from "../images/prez vid.mp4"

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Cta from "./ctaButton";


const styles = {
  banner: {
    paddingTop: "4rem",
    padding: "0 15%", 
    fontSize: "1.25rem",
    backgroundColor: "#282c34",
    backgroundColor: "#fff",
},

  heroText: {
    position: "relative",
    width: "100%",
    maxWidth: "950px",
    margin: "0 auto",
    textAlign: "center",
    zIndex: "1",
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      paddingTop: "10px",
  },
  },

  text: {
    color: "#8f8f8f", 
    fontSize: "2rem", 
    paddingTop: "40px",
    '@media (max-width:414px)': {
      fontSize: '1.25rem',
      marginBottom: "15px",
      paddingTop: "20px",
  },
  },

  textB: {
    color: "#000", 
    fontSize: "2rem", 
    paddingTop: "40px",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      paddingTop: "20px",
  },
  },


  head: {
    color: "#3fa9f5",
    marginTop: "1px",
    '@media (max-width: 768px)': {
      marginTop: "1px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginBottom: "25px",
  },
},
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "1rem",
    filter: "drop-shadow(0 0 0.1rem black)",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
};

function Banner(props) {
  const { classes } = props;
  return (
<div id="banner">
  <div className={classes.banner}>
  <div className={classes.heroText}>
  <Typography variant = "h3" className={classes.head}>
    Reconnecting families to loved ones with Alzheimer's
  </Typography>
  {/* <Typography variant="h3" className={classes.text}>
    Stream music, videos, and photos that help you reconnect 
    to a loved one with Alzheimer's
  </Typography>  */}
    <video controls className={classes.hero}>
    <source src = {video} type="video/mp4"/>
    </video>

    {/* <img src={BannerMobile} className={classes.hero}></img>   */}
  <Typography variant="h3" className={classes.textB}>
    Ready to try it? Sign up today to start your free two week trial
  </Typography>           
    <Cta/>
  </div>
  </div>
</div> 
  );
};

export default withStyles(styles)(Banner);