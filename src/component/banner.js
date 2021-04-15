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
    paddingTop: "4rem",
    padding: "0 15%", 
    fontSize: "1.25rem",
    // backgroundColor: "#282c34",
    backgroundColor: "#000",
    borderBottom: "8px solid #222",
},

  heroText: {
    position: "relative",
    width: "100%",
    maxWidth: "950px",
    margin: "0 auto",
    textAlign: "center",
    zIndex: "1",
  },
  head: {
    color: "#fff",
    marginTop: "1px",
    '@media (max-width: 768px)': {
      marginTop: "1px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      margin: "0",
  },
},

//   text: {
//     color: "#fff",
//     fontSize: "2rem",
//     lineHeight: "1.25",
//     padding: "10px",
//     '@media (max-width:414px)': {
//       fontSize: '1.5rem',
//   },
// },
  
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "1rem",
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
  <div className={classes.heroText}>
  <Typography variant = "h3" className={classes.head}>
  Reminscense Therapy for You and Your Family
  </Typography>
    <Typography variant="h3" 
      style={{color: "#fff", fontSize: "2rem", paddingTop: "40px",}}
      >Stream music, videos, and photos that help you reconnect to a loved one with Alzheimer's 
    </Typography> 
      <img src={BannerMobile} className={classes.hero}></img>  
        <Typography variant="h3" 
        style={{color: "#fff", fontSize: "1.5rem", paddingTop: "40px",}}>
        Ready to try it? Sign up today to start your free two week trial.
        </Typography>           
          <Button
            variant="contained"
            className={classes.cta}>
            Sign Up
          </Button>
  </div>
  </div>
</div> 
  );
};

export default withStyles(styles)(Banner);