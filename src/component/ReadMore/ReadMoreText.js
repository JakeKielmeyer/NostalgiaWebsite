import React,{useState}  from "react";
import jakeAndGrandpa from "./Jake and Grandpa.png";

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
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: ".5rem",
    marginLeft: "40px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "10px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
    },
  },
}


// {/* Landscape Mode */}

function More(props) {
  const { classes } = props;
    return (
      <div>
        <Grid 
          container
          direction="row"
          alignItems="center">

   <Grid container item sm={12}>
      <div className={classes.readA}>
        <ReadMore>
              <Typography variant="h4" className={classes.readTextA}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
            <img 
              src = {jakeAndGrandpa}
              className={classes.hero}>
            </img>
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
          that are designed to increase quality of life and time spent together.
          Nostalgia Therapy is based on proven reminsicense therapy tools 
          that are designed to increase quality of life and time spent together.
              </Typography>
        </ReadMore>
      </div> 
    </Grid>
  </Grid>    
</div>
  );
};
export default withStyles(styles)(More);