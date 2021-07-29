import React,{useState, useEffect}  from "react";
import iPadDashboard from "../../images/iPadDashboard.png";
import hugging from "../../images/Jake and Grandpa.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Cta from "../../component/ctaButton";
import Button from "@material-ui/core/Button";

import Aos from "aos";
import "aos/dist/aos.css";

import {CreateMore} from "../../component/ReadMore/CreateMore";

const styles = {
  about: {
    padding: "5% 15% 0",
    display: "block",
    minHeight: "45vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
    overflowX: "hidden",
  },
  
  head: {
    color: "#3fa9f5",
    // marginBottom: "2rem",
   },

hero: {
  maxWidth: "50%",
  maxHeight: "50%",
  // margin:"4% auto", 
  border: ".5px solid white",
  borderRadius: "6px",
},

text: {
  color: "#8f8f8f",
},


};

function NewAbout(props) {
  const { classes } = props;
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <div id="about">
    <div>
    <div  className={classes.about}>

          <Typography variant="h3" className={classes.head}>About Us</Typography>       

          <img 
            src = {hugging}
            className={classes.hero}>
          </img>
          <Typography variant="h4" className={classes.text}>Nostalgia Therapy is based on proven reminsicense therapy tools that are designed to increase quality of life and time spent together.</Typography> 

    </div>
     

</div>  
</div>
  );
};

export default withStyles(styles)(NewAbout);