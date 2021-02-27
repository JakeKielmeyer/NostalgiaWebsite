import React from "react";
import pupper from "../images/HorizontalDashboard.jpg";
import puzzle from "../images/puzzle-04.png";
import record from "../images/record-01.png";
import video from "../images/Video-02.png";
import camera from "../images/camera-03.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
  welcome: {
    color: "white",
    display: "flex",
    paddingLeft: "4rem",
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  contents: {
    color: "white",
    minHeight: "800px",
    paddingLeft: "4rem",
    paddingTop: "3rem",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
   
  },

  rows: {
    paddingBottom: "50px",
    
  },

  rowsTitle: {
    paddingBottom: "40px",
    justifyContent: "space-around",
    
  },
};

const About = (props) => {
  const { classes } = props;
  return (
  <div className="about" style={{ backgroundColor: "#ffff" }}>

    <Grid 
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
    >      
        <Grid item xs={12}>
            <Typography variant="h3">About Nostalgia</Typography>
        </Grid>            
        <Grid item xs={3}>
            <img src = {camera}></img>
        </Grid>        
         <Grid item xs={3}>
            <img src = {record}></img>
        </Grid>    
        <Grid item xs={3}>
            <img src = {video}></img>
        </Grid>        
        <Grid item xs={3}>
            <img src = {puzzle}></img>
        </Grid>
    </Grid>
    
  </div>
  );
};

export default withStyles(styles)(About);