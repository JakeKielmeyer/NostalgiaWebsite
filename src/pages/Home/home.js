import React from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";

// Compenents
import Banner from "../../component/banner";
import Call from "../../component/callToAction";

// Page Sections
import About from "./about";
// import FeaturesP from "./featuresP";
// import FeaturesL from "./featuresL";
import Photo from "./photo";
import Music from "./music";
import Video from "./video";
import Puzzle from "./puzzle"; 
const styles = {
};

const Home = (props) => {
  const { classes } = props;
  return (
<div>
  <Banner/>
  <About/>
  <Call/>
  {/* <FeaturesP/>
  <FeaturesL/> */}
  {/* <Call/> */}
  <Photo/>
  <Call/>
  <Music/>
  <Call/>
  <Video/>
  <Call/>
  <Puzzle/>
</div>
  );
};

export default withStyles(styles)(Home);