import React from "react";
import Brain from "../images/science.jpg";

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

const Science = (props) => {
    const { classes } = props;
    return (
  <div>
    <div className="about" style={{ backgroundColor: "#fff" }}>
      <Grid 
        container
        direction="row"
        alignItems="center"
      >
      <Grid item item sm={6}>
        <Box mt={10}>
            <Typography variant="h3">
            The Science Behind Nostalgia Therapy
            </Typography>
           <Box mt={5}>
              <Typography variant="h4">
              I’m the queen of cuddles, a master of food snatching, and through warm love
            and care I helped make Alzheimer’s a little better for my family.
            <br></br><br></br>
            Now I help other families and their loved ones with Alzheimer’s with my app. 
            I use photos to create conversation, classic shows to help you laugh, play music 
            for you to sing along  to and give you puzzles to play to help keep your brain active. 
              </Typography>
              <Button
                variant="contained"
                style={{ margin: "30px", textTransform: "capitalize",}}
              >
                Try it!
              </Button>
            </Box>
          </Box>
      </Grid>      
      <Grid item sm={6}>
            <img src = {Brain}
            style={{ marginLeft: "40px"}}
            ></img>
      </Grid>
    </Grid>
   </div>
  </div>
    );
  };

export default withStyles(styles)(Science);