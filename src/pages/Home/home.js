import React,{useState}  from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import GridList from "@material-ui/core/GridList";

// Components
import About from "./About";
import Photos from "./Photo";
import Music from "./Music";
import Video from "./Video";
import Puzzle from "./Puzzle";
import Carousel from "react-material-ui-carousel";
import Banner from "../../component/banner";
import Call from "../../component/callToAction";
import Features from "./Features";
const styles = {
};

function New(props) {
  const { classes } = props;
  return (

      <div>
        <Banner/>
        <About/>
        <Features/> 
        <Call/>
        </div>
  );
};

export default withStyles(styles)(New);