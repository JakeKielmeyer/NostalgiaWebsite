import React,{useState}  from "react";


//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";


// Components
import About from "../Home/about";
import Photo from "../Home/photo";
import Music from "../Home/music";
import Video from "../Home/video";
import Puzzle from "../Home/puzzle"; 

import Carousel from "react-material-ui-carousel";

const styles = {
};

function New(props) {
  const { classes } = props;
  return (


        <Carousel
            autoPlay={false}
            fullHeightHover={false}
            animation={"fade"}
            timeout={12}
            navButtonsAlwaysVisible={true}
            indicatorContainerProps={{
            style: {  },
        }}
        
        >
            <About/>
            <Music/>

            <Photo/>
           
            <Video/>
            <Puzzle/>
        </Carousel>
  );
};

export default withStyles(styles)(New);