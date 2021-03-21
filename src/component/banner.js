import React from "react";
import iPadDash from "../images/iPadDashboard.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Cta from "../component/ctaButton"

const styles = {
  banner: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#000",
  },
  
  head: {
    color: "#fff",
    marginTop: "125px",
    marginLeft: "200px",
    '@media (max-width: 768px)': {
      marginLeft: "70px",
      marginTop: "80px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginTop: "115px",
      margin: "0",
  },
},

  text: {
    color: "#8f8f8f",
    marginLeft: "70px",
    fontSize: "2rem",
    lineHeight: "1.25",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
  
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: ".5rem",
    marginLeft: "40px",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
};

function Banner(props) {
  const { classes } = props;
  return (
<div id="banner">
  <div className={classes.banner}>
    <Grid 
      container
      direction="row"
      alignItems="center"
    >
    <Grid item item sm={12}>
      <Box mt={10}>
          <Typography variant="h3" className={classes.head}>Reminsicense Therapy Simplified</Typography>
         <Box mt={5}>
            <Typography variant="h4" className={classes.text}>Therapy designed to reconnect families
            to loved ones with Alzheimer's.
            </Typography>
          </Box>
        </Box>
    </Grid>      
    <Grid item sm={12}>
          <img src = {iPadDash}
          className={classes.hero}
          ></img>
    </Grid>

    <Grid item sm={12}>
      <Cta/>
    </Grid>
  </Grid>
 </div>
</div>
  );
};

export default withStyles(styles)(Banner);