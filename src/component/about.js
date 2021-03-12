import React,{useState}  from "react";
import iPadDashboard from "../images/iPadDashboard.png";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  about: {
    display: "flex",
    paddingLeft: "4rem",
    paddingRight: "5rem",
    minHeight: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: "#fff",
  },
  
  head: {
    color: "#000",
    marginTop: "125px",
    marginLeft: "260px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "0",
  },
    '@media (max-width: 768px)': {
      marginLeft: "125px",
      marginTop: "5px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.75rem',
      marginTop: "5px",
      marginLeft: "30px",
  },
},

  text: {
    color: "#8f8f8f",
    marginLeft: "70px",
    fontSize: "2rem",
    lineHeight: "1.25",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "20px",
  },
    '@media (max-width: 768px)': {
      display: "none",
  },
},

text1: {
  color: "#8f8f8f",
  marginLeft: "70px",
  fontSize: "2rem",
  lineHeight: "1.25",
  display: "none",
  '@media (max-width: 768px)': {
    marginLeft: "70px",
    marginTop: "5px",
    display: "block",
},
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    margin: "0",
    display: "block",
  },
},
  hero: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: ".5rem",
    marginLeft: "40px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "10px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
  cta: {
    textTransform: "none",
    fontSize: "1.5rem",
    fontFamily: "KOW",
    '@media (max-width: 1024px)': {
      marginLeft: "150px",
      marginTop: "10px",
  },
    marginLeft: "400px",
    '@media (max-width: 768px)': {
      marginLeft: "280px",
  },
  '@media (max-width:414px)': {
    fontSize: '1.5rem',
    marginLeft: "50px",
    },
  },
  more:{
    display: "none",
  },
};


// function myFunction() {

//   var more = document.getElementsByClassName("more");
//   var btnText = document.getElementById("myBtn");

//   if (more.display === "none") {
//     btnText.innerHTML = "Read Less"; 
//     more.display = "inline";
//   } else {
//     btnText.innerHTML = "Read More"; 
//     more.display = "none";
//   }

// }
function myFunction() {
  var x = document.getElementsByClassName("more");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function About(props) {
  const { classes } = props;
  return (
    <div className={classes.about}>
    <Grid 
      container
      direction="row"
      alignItems="center">

    <Grid container item sm={12} md={5}>  
          <Typography variant="h3" className={classes.head}>What is Nostalgia Therapy?</Typography>       
          <Typography variant="h4" className={classes.text}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
              <span className={classes.more}>
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
              Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
              </span>
              </Typography> 
             
              <button onClick={myFunction} id="myBtn">Read More</button>
    </Grid>  

    <Grid container item sm={12} md={7}>  
          <img 
            src = {iPadDashboard}
            className={classes.hero}>
          </img>
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
        <Button
          variant="contained"
          className={classes.cta}>Sign Up
      </Button>

    </Grid>        
  </Grid>    
  </div>
  );
};

export default withStyles(styles)(About);