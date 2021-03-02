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
};

const How = (props) => {
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
            <Typography variant="h3">How it Works</Typography>
        </Grid>

        <Grid item sm={6} lg={3}>
        <Typography variant="h4">Nostalgic Moments</Typography>
            <img src = {camera}></img>
            <Typography variant="h5">Look at all of these cute photos</Typography>
        </Grid>        

         <Grid item sm={6} lg={3}>
         <Typography variant="h4">Nostalgia Radio</Typography>
            <img src = {record}></img>
            <Typography variant="h5">Listen to hits of the day</Typography>
        </Grid>    

        <Grid item sm={6} lg={3}>
        <Typography variant="h4">Nostalgia TV</Typography>
            <img src = {video}></img>
            <Typography variant="h5">Watch hours of classic tv</Typography>
        </Grid>        

        <Grid item sm={6} lg={3}>
        <Typography variant="h4">Puzzle Fun</Typography>
            <img src = {puzzle}></img>
        <Typography variant="h5">Make a moment come to life</Typography>
        </Grid>
    </Grid>
    
  </div>
  );
};

export default withStyles(styles)(How);