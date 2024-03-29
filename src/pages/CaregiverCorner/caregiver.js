import React,{useState}  from "react";
import iPadDash from "../../images/iPadDashboard.png";

// Components
import Call from "../../component/callToAction";

// Sections
import Articles from "./articles";

//mui stuff
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Cta from "../../component/ctaButton"

const styles = {
  caregiver: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
  head: {
    color: "#000",
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
  },
},
  
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginLeft: "40px",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
};

function Caregiver(props) {
  const { classes } = props;
  return (
  <div>
    <div id="HowTo">
    <div className={classes.caregiver}>
    <Grid 
      container
      direction="row"
      alignItems="center"
    >
    <Grid item item sm={12}>
      <Box mt={10}>
          <Typography variant="h3" className={classes.head}>The Caregiver's Corner</Typography>
         <Box mt={5}>
            <Typography variant="h4" className={classes.text}>Resources for Caregivers</Typography>
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
<Articles/>
</div>
  );
};

export default withStyles(styles)(Caregiver);