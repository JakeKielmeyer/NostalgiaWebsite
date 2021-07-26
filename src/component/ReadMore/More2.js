import React,{useState}  from "react";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import ReadMore from "./ReadMoreButton";

const styles = {
    readA: {
    padding: "1rem 1rem",
    color: "#fff",
  },
  readTextA: {
    color: "#fff",
  },

  hero: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "2% auto",
  },
};

function More2(props) {
  const { classes } = props;
    return (
      <div>
        
      <div className={classes.readA}>
        <ReadMore>
                {props.key}
              <Typography variant="h4" className={classes.readTextA}>
                {props.text1}
              </Typography>
              <div style={{textAlign: "center"}}>
              <video controls className={classes.hero} src={props.img}></video>
              </div>
              <Typography variant="h4" className={classes.readTextA}>
                {props.text2}
              </Typography>
        </ReadMore>
      </div> 

</div>
  );
};
export default withStyles(styles)(More2);