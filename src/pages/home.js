import React from "react";
import pupper from "../images/Pupper.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseLine from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  welcome: {
    color: "white",
    display: "flex",
    paddingLeft: "4rem",
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundImage: `url(${pupper})`,
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

  <div className="welcome" style={{ backgroundImage: `url(${pupper})` }}>
        <CssBaseLine />
        <Box mt={9}>
          <Typography variant="h3">Dashing Dogs</Typography>
          <Box mt={5}>
            <Typography variant="h4">Do you and your loved one have a soft spot for dogs?</Typography>
            <Typography variant="h4">Check out out this new Nostalgic Moments album</Typography>
            <Typography variant="h4">and reminsice about four legged friends!</Typography>
          </Box>
        </Box>
  </div>

  );
};

export default withStyles(styles)(Home);