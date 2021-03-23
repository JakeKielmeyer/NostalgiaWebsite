import React,{useState}  from "react";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import ReadMore from "./ReadMoreButton";

const styles = {
    readA: {
    padding: "1rem 5rem 1rem 4rem",
  },
  readTextA: {
    margin: "50px 50px 10px",
  },
  hero: {
    maxWidth: "80%",
    maxHeight: "80%",
    marginTop: ".5rem",
    marginLeft: "40px",
  },
}

function More2(props) {
  const { classes } = props;
    return (
      <div>
        <Grid container direction="row" alignItems="center">

   <Grid container item sm={12}>
      <div className={classes.readA}>
        <ReadMore>
            {props.key}
              <Typography variant="h4" className={classes.readTextA}>
                {props.text1}
              </Typography>
              <div>
              <img className={classes.hero} src={props.img}></img>
              </div>
              <Typography variant="h4" className={classes.readTextA}>
                {props.text2}
              </Typography>
        </ReadMore>
      </div> 
    </Grid>
  </Grid>    
</div>
  );
};
export default withStyles(styles)(More2);