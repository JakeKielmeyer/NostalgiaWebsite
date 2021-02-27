import React from "react";
import pupper from "../images/HorizontalDashboard.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
  welcome: {
    color: "white",
    display: "flex",
    paddingLeft: "4rem",
    minHeight: "600px",
    backgroundSize: "cover",
    BackgroundColor: "#000",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  contents: {
    color: "white",
    minHeight: "800px",
    paddingLeft: "4rem",
    paddingTop: "3rem",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
   
  },

  rows: {
    paddingBottom: "50px",
    
  },

  rowsTitle: {
    paddingBottom: "40px",
    justifyContent: "space-around",
    
  },
};

const Home = (props) => {
  const { classes } = props;
  return (
<div>
  <div className="welcome" style={{ backgroundColor: "#000" }}>
    <Grid 
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
    <Grid item >
      <Box mt={10}>
          <Typography variant="h3">Bridge the Gap</Typography>
         <Box mt={5}>
            <Typography variant="h4">Reminisce to classic moments, timeless songs, and iconic videos. Use Nostalgia Therapy to easily provide reminiscence therapy to a loved one with Alzheimer's disease.</Typography>
            </Box>
        </Box>
    </Grid>      
    <Grid item>
          <img src = {pupper}></img>
    </Grid>
  </Grid>
 </div>
</div>
  );
};

export default withStyles(styles)(Home);