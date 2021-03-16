import React from "react";

// Compenents
import Banner from "../component/banner";
import About from "./about";
import Photos from "./photo";
import Music from "./music";
import Video from "./video";
import Puzzle from "./puzzle";
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