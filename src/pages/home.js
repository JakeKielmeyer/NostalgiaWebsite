import React from "react";

// Compenents
import Banner from "../component/banner";
import About from "../component/about";
import Photos from "../component/photos";
import Music from "../component/music";
import Video from "../component/video";
import Puzzle from "../component/puzzle";
import Call from "../component/callToAction";
// import Science from "../component/science";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  
};

const Home = (props) => {
  const { classes } = props;
  return (
<div>
  <Banner/>
  <About/>
  <Call/>
  <Photos />
  <Call/>
  <Music />
  <Call/>
  <Video />
  <Call/>
  <Puzzle />

</div>
  );
};

export default withStyles(styles)(Home);