import React,{useState}  from "react";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";
import GridList from "@material-ui/core/GridList";

// Components
import HowToBanner from "./HowToBanner";
import HowToUse from "./HowToUse";
import CreateAccount from "./AccountCreation";

const styles = {
};

function How(props) {
  const { classes } = props;
  return (

    <div>
    <HowToBanner/>
    <HowToUse/>
    <CreateAccount/> 
    </div>
  );
};

export default withStyles(styles)(How);