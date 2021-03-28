import React from "react";
import Banner1 from "../images/Banner1.jpg";
import BannerMobile from "../images/bannermobile.jpg";
//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const styles = {
  banner: {
    backgroundImage: `url(${Banner1})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "60vh",
    '@media (max-width: 768px)': {
      backgroundImage: `url(${BannerMobile})`,
  },
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
// cta: {
//   textTransform: "none",
//   fontSize: "2rem",
//   fontFamily: "KOW",
//   margin: "395px",
//   whiteSpace: "nowrap",
//   '@media (max-width:768px)': {
//     marginLeft: '18rem',
//     },
//   '@media (max-width:414px)': {
//   fontSize: '1.5rem',
//   },
// },
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

<Grid itm sm = {12}>
<Typography variant = "h3"
          style={{
          position: "absolute", 
          color:"white", 
          padding: "4.5rem 5rem 0 4rem", 
          textShadow: "1px 1px 4px #000" }}
          >
          Reminsicense Therapy Simplified</Typography>

          <Typography variant="h4" 
              style={{position: "absolute", 
              color:"white", 
              padding: "10rem 15rem 0 4rem", 
              textShadow: "1px 1px 4px #000"}}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
          {/* <Button
        variant="contained"
        className={classes.cta}>Sign Up
    </Button> */}
</Grid>



  </Grid>
 </div>
</div>
  );
};

export default withStyles(styles)(Banner);