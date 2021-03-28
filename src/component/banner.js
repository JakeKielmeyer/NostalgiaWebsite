import React from "react";
import Cherub from "../images/Cherub.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Cta from "../component/ctaButton"

const styles = {
  banner: {
    backgroundImage: `url(${Cherub})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "90vh",
  },
  
  head: {
    color: "#fff",
    marginTop: "125px",
    marginLeft: "200px",
    marginBottom: "400px",
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

          <Typography variant="h3" className={classes.head}>Reminsicense Therapy Simplified</Typography>
            <Typography variant="h4"  style={{
            fontSize: "2rem", position: "absolute", 
            color:"#fff", 
            boxShadow: "white", 
            padding: "0 auto", 
            textShadow: "1px 1px 4px #000"}}>Therapy designed to reconnect families
            to loved ones with Alzheimer's.
            </Typography>   


      <Cta style = {{padding: "100rem 5rem 2rem 4rem"}}/>


  </Grid>
 </div>
</div>
  );
};

export default withStyles(styles)(Banner);