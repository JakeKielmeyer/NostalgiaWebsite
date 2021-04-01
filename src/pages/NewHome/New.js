import React,{useState}  from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import GridList from "@material-ui/core/GridList";

// Components
import NewAbout from "./NewAbout";
import NewPhotos from "./NewPhoto";
import NewMusic from "./NewMusic";
import NewVideo from "./NewVideo";
import NewPuzzle from "./NewPuzzle";
import Carousel from "react-material-ui-carousel";
import Banner from "../../component/banner";
import Call from "../../component/callToAction";
import NewFeatures from "./NewFeatures";

const styles = {
};

function New(props) {
  const { classes } = props;
  return (

      <div>
        <Banner/>
        <NewAbout/>
        <Call/>
          <Carousel
            autoPlay={false}
            fullHeightHover={false}
            animation={"fade"}
            timeout={12}
            navButtonsAlwaysVisible={true}
            indicatorContainerProps={{style: {  },}}>
            
            {/* <NewFeatures/> 
            <NewPhotos/> */}
            <NewMusic/>          
            {/* <NewVideo/>
            <NewPuzzle/> */}
          </Carousel>
        </div>
  );
};

export default withStyles(styles)(New);