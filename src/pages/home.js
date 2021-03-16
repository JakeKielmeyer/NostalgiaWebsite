import React from "react";

// Compenents
import Banner from "../component/banner";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
};

const Home = (props) => {
  const { classes } = props;
  return (
<div>
  <Banner/>
</div>
  );
};

export default withStyles(styles)(Home);