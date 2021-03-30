import React,{useState}  from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";

// Components
import NewAbout from "./NewAbout";
import NewPhotos from "./NewPhoto";
import NewMusic from "./NewMusic";
import NewVideo from "./NewVideo";
import NewPuzzle from "./NewPuzzle";
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
            <NewAbout/>
            <NewPhotos/>
            <NewMusic/>          
            <NewVideo/>
            <NewPuzzle/>
        </Carousel>
  );
};

export default withStyles(styles)(New);