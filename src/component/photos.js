import React from "react";
import iPadPhotos from "../images/iPadPhotos.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  photos: {
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
  },
  
  text: {
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
  },
  
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "2rem",
    marginLeft: "40px",
  },
  
  cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
  },
};

function Photos(props) {
  const { classes } = props;
  return (
<div>
  <div className={classes.photos}>
    <Grid 
      container
      direction="row"
      alignItems="center"
    >
    <Grid item item sm={6}>
      <Box mt={10} className={classes.head}>
          <Typography variant="h3">The Power of Photos
</Typography>
         <Box mt={5}>
            <Typography variant="h4" className={classes.text}>Built on trusted memory care processes, Cherub
            creates a personalized and fun experience for families to reconnect to a loved one
            with Alzheimer's disease.
            </Typography>
            <Button
              variant="contained"
              className={classes.cta}
              style={{ marginTop: "20px"}}
            >
              Try it!
            </Button>
          </Box>
        </Box>
    </Grid>      
    <Grid item sm={6}>
          <img src = {iPadPhotos}
          className={classes.hero}
          ></img>
    </Grid>
  </Grid>
 </div>
</div>
  );
};

export default withStyles(styles)(Photos);