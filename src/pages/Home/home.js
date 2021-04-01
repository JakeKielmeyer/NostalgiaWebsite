import React from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";

// Compenents

// Page Sections
import New from "../NewHome/New";

const styles = {
};

const Home = (props) => {
  const { classes } = props;
  return (
<div>
  <New/>
</div>
  );
};

export default withStyles(styles)(Home);