import React,{useState}  from "react";
import iPadDashboard from "../../images/iPadDashboard.png";
import Photo from "../../images/photo.svg";
import Radio from "../../images/Radio_1.svg";
import Tv from "../../images/TV_1.svg";
//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {CreateMore} from "../../component/ReadMore/CreateMore";

const styles = {
  features: {
    padding: "5% 15%",
    // padding: "7% 15%", 
    display: "block",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
    // backgroundColor: "#282c34",
    backgroundColor: "#3fa9f5",
    // background: "linear-gradient(to left top,  #cbcbcb, white)",
  },
  
  text: {
    color: "#fff",
  },

  featureRow: {
    paddingTop: "2rem",
  },

  featuresText: {
    marginLeft: "1rem",
  },

  featuresText1: {
    marginLeft: "1rem",
    paddingBottom: "4rem",
  },

  photosFeature: {
    margin: "4% auto",
    filter: "drop-shadow(0 0 0.5rem #8f8f8f)",
    transistion: "transform 2.5s ease-in-out",
    '&:hover': {
      transform: "scale(1.1)",
    },
    // border: "1px solid black",
    // borderRadius: "12px",
    backgroundColor: "#fff",
  },

head: {
  color: "#fff",
  // color: "#000",
  // color: "#3fa9f5",
  marginBottom: "2rem",
 },
 icons: {
  height: "10%",
  width: "10%",
  margin: ".5rem 1rem",
 },
};

function NewFeatures(props) {
  const { classes } = props;
  return (
    <div className={classes.features}>
      <div>
        <Typography variant="h3" className={classes.head}>Designed for Reconnection</Typography>
        <Typography variant="h4" className={classes.text}>Designed for Reconnection esigned for Reconnectionesigned for Reconnection</Typography>
      </div>
     
      <div className={classes.featureRow}>
        <div className={classes.photosFeature}>
        <img src={Photo} className={classes.icons}></img>
        <Typography variant="h4" className={classes.featuresText}>Nostalgic Moments</Typography>
        <Typography variant="h4" className={classes.featuresText1}>Nostalgic Moments Nostalgic Moments Nostalgic</Typography>
        <Button style={{position: "absolute", left: "75%", top: "70%"}}><Typography variant="h7" style={{textTransform: "none", fontFamily: "KOW", fontSize:"1.25rem"}}>Learn More ⬇</Typography></Button>
        </div>

        <div className={classes.photosFeature}>
        <img src={Radio} className={classes.icons}></img>
        <Typography variant="h4" className={classes.featuresText}>Nostalgic Moments</Typography>
        <Typography variant="h4" className={classes.featuresText1}>Nostalgic Moments Nostalgic Moments Nostalgic</Typography>
        <Button style={{position: "absolute", left: "75%", top: "70%"}}><Typography variant="h7" style={{textTransform: "none", fontFamily: "KOW", fontSize:"1.25rem"}}>Learn More ⬇</Typography></Button>
        </div>

        <div className={classes.photosFeature}>
        <img src={Tv} className={classes.icons}></img>
        <Typography variant="h4" className={classes.featuresText}>Nostalgic Moments</Typography>
        <Typography variant="h4" className={classes.featuresText1}>Nostalgic Moments Nostalgic Moments Nostalgic</Typography>
        <Button style={{position: "absolute", left: "75%", top: "70%"}}><Typography variant="h7" style={{textTransform: "none", fontFamily: "KOW", fontSize:"1.25rem"}}>Learn More ⬇</Typography></Button>
        </div>

        </div>
    </div>

  );
};

export default withStyles(styles)(NewFeatures);