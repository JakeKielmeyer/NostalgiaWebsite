import React,{useState}  from "react";
import iPadDashboard from "../../images/iPadDashboard.png";
import hugging from "../../images/bannermobile.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Cta from "../../component/ctaButton";
import Button from "@material-ui/core/Button";

import {CreateMore} from "../../component/ReadMore/CreateMore";

const styles = {
  about: {
    padding: "0 15% 5%", 
    display: "flex",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
head: {
},

textContainer: {
    // backgroundColor: " #3fa9f5" ,
    // overflow: "hidden",
    zIndex: "0",
    alignText: "center",
    position: "relative",
    width: "100%",
    height: "100%",
},

arrowLeft: {
    filter: "drop-shadow(0 0 0.5rem #8f8f8f)",
    zIndex: "1",
    position: "absolute",
    paddingLeft: "120px",
    width: "0",
    height: "0",
    borderTop: "0px solid transparent",
    borderBottom: "500px solid transparent",
    borderRight: "700px solid #3fa9f5",
},

arrowRight: {
    zIndex: "1",
    filter: "drop-shadow(0 0 0.5rem #8f8f8f)",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderTop: "500px solid transparent",
    borderBottom: "0px solid transparent",
    borderLeft: "700px solid #fff",
},
hugging: {
    position: "absolute",
    paddingRight: "1000px",
},
text: {
    zIndex: "2",
    // position: "absolute",
    bottom: "400px",
},
};

function How(props) {
  const { classes } = props;
  return (
    <div id="about">
    <div>
    <div  className={classes.about}>
        <div className= {classes.textContainer}>

            <div className = {classes.arrowRight} >
                <img className={classes.hugging} src={hugging}></img>
            </div>
            <div className = {classes.arrowLeft}>
            <Typography variant="h1" className={classes.text}>;alskjdf;alskjdf</Typography>
            </div>

        </div>
    </div>
     

</div>  
</div>
  );
};

export default withStyles(styles)(How);