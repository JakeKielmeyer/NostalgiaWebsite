import React,{useState}  from "react";
import iPadDashboard from "../../images/iPadDashboard.png";
import Photo from "../../images/photow.svg";
import Radio from "../../images/Radiow.svg";
import Tv from "../../images/TVw.svg";
//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {CreateMore, CreateMorePhoto, CreateMoreMusic, CreateMoreVideo} from "../../component/ReadMore/CreateMore";

const styles = {
  features: {
    padding: "5% 15%",
    display: "block",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
  text: {
    color: "#8f8f8f"
  },

  featureRow: {
    paddingTop: "2rem",
  },

  featuresText: {
    fontFamily: "Leviathan",
    marginLeft: "1rem",
    color: "#fff",
  },

  featuresText1: {
    color: "#3F4045",
    marginLeft: "1rem",
  },

  feature: {
    margin: "4% auto",
    filter: "drop-shadow(0 0 0.5rem #8f8f8f)",
    backgroundColor: "#3fa9f5",
    position: "relative",
    transistion: "transform 2.5s ease-in-out",
    '&:hover': {
      transform: "scale(1.04)",
    },
  },

head: {
  color: "#3fa9f5",
  marginBottom: "2rem",
 },
 icons: {
  height: "10%",
  width: "10%",
  margin: ".5rem 1rem",
 },
 learnMore: {
 },
};

function Features(props) {
  const { classes } = props;
  return (
  <div id ="features">
 <div className={classes.features}>
      <div>
        <Typography variant="h3" className={classes.head}>Designed for Reconnection</Typography>
        <Typography variant="h4" className={classes.text}>Designed for Reconnection Designed for Reconnection Designed for Reconnection</Typography>
      </div>
     
      <div className={classes.featureRow}>
        <div className={classes.feature}>
        <img src={Photo} className={classes.icons}></img>
        <Typography variant="h4" className={classes.featuresText}>Nostalgic Moments</Typography>
        <Typography variant="h4" className={classes.featuresText1}>Nostalgic Moments Nostalgic Moments Nostalgic</Typography>
    
          <CreateMorePhoto/>
      
        </div>

        <div className={classes.feature}>
        <img src={Radio} className={classes.icons}></img>
        <Typography variant="h4" className={classes.featuresText}>Nostalgia Radio</Typography>
        <Typography variant="h4" className={classes.featuresText1}>Nostalgic Moments Nostalgic Moments Nostalgic</Typography>
        
         
          <CreateMoreMusic/>
       
        </div>

        <div className={classes.feature}>
        <img src={Tv} className={classes.icons}></img>
        <Typography variant="h4" className={classes.featuresText}>Nostalgia TV</Typography>
        <Typography variant="h4" className={classes.featuresText1}>Nostalgic Moments 
   Nostalgic Moments Nostalgic</Typography>
   <CreateMoreVideo/>
        </div>

        </div>
    </div>
  </div>

  );
};

export default withStyles(styles)(Features);