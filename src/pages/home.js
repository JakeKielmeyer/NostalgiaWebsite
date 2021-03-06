import React from "react";
import iPadDash from "../images/iPadDashboard.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  <div className="welcome" style={{ backgroundColor: "#fff" }}>
    <Grid 
      container
      direction="row"
      alignItems="center"
    >
    <Grid item item sm={6}>
      <Box mt={10}>
          <Typography variant="h3">Reconnect, reminisce, and bring joy back with Cherub</Typography>
         <Box mt={5}>
            <Typography variant="h4">Built on trusted memory care processes, Cherub
            creates a personalized and fun experience for families to reconnect to a loved one
            with Alzheimer's disease.
            </Typography>
            <Button
              variant="contained"
              style={{ marginTop: "20px", textTransform: "capitalize",}}
            >
              Try it!
            </Button>
          </Box>
        </Box>
    </Grid>      
    <Grid item sm={6}>
          <img src = {iPadDash}
          style={{ marginLeft: "40px"}}
          ></img>
    </Grid>
  </Grid>
 </div>
</div>
  );
};

export default withStyles(styles)(Home);