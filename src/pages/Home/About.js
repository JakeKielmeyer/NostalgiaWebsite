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
    padding: "5% 20%",
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
  margin: "2rem auto",
  filter: "drop-shadow(0 0 0.1rem black)",
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
          <Typography variant="h4" className={classes.text}>
          The emotional disconnect that families experience with loved ones with Alzheimer’s disease is incredibly painful, and I know this firsthand.
          My grandfather was diagnosed with Alzheimer's when I was five years old, and because of that, I never had the relationship that I wanted to have 
          with him. The disconnect I felt with my grandfather was hard as a child, and it stayed with me long after his passing. This feeling of disconnect 
          inspired me to find a way to help families reconnect to loved ones with Alzheimer's disease, and that idea is Nostalgia Therapy. I hope that it can help 
          you and your family reconnect to a loved one.
          </Typography> 

    </div>
     

</div>  
</div>
  );
};

export default withStyles(styles)(NewAbout);