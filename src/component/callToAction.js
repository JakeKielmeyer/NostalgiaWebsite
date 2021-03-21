import React,{useState}  from "react";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Cta from "../component/ctaButton";

const styles = {
  call: {
    display: "flex",
    padding: "1.25rem 4rem",
    minHeight: "20vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#8f8f8f",
  },

  head: {
    color: "#fff",
    '@media (max-width: 1024px)': {
        margin: "10px auto",
        display: "block",
  },
  '@media (max-width:414px)': {
    margin: "5px auto",
    fontSize: '1.3rem',
    },
  },
};

function Call(props) {
  const { classes } = props;
  return (
    <div  className={classes.call}>
        <Grid 
            container
            direction="row"
            alignItems="center">

        <Grid container item sm={12}>  
          <Typography variant="h3" className={classes.head}>Start Your Free Two Week Trial Today</Typography>       
        </Grid>  
        
        <Grid container item sm={12}>  
          <Typography variant="h6" className={classes.head}>Only $15 a month</Typography>       
        </Grid>  
          <Cta/>
        </Grid>

    </div>
  );
};

export default withStyles(styles)(Call);