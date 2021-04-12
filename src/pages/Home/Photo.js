import React from "react";
import Cat from "../../images/moments/erik.jpg";
import Dog from "../../images/moments/Animals.jpg";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// Components
import {CreateMorePhoto} from "../../component/ReadMore/CreateMore";
import SpringModalDog from "../../component/Demos/PhotoDemoDog";
import SpringModalCat from "../../component/Demos/PhotoDemoCat";

const styles = {
  photo: {
    padding: "0 15%", 
    display: "flex",
    minHeight: "63vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
},

hero: {
    maxWidth: "90%",
    maxHeight: "90%",
    marginTop: ".5rem",
    marginLeft: "40px",
    border: "2px solid white",
    borderRadius: "12px",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "10px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},

  head: {
    color: "#000",
    marginBottom: "50px",
    marginLeft: "40px",
    '@media (max-width: 768px)': {
      display: "none",
  },
},

headp: {
  color: "#000",
  marginTop: "5px",
  marginBottom: "20px",
  marginLeft: "100px",
  display: "none",
  '@media (max-width: 768px)': {
    display: "block",
  },
},

  text1: {
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
    marginLeft: "40px",
    '@media (max-width: 1024px)': {
      marginTop: "5px",
  },
    '@media (max-width: 768px)': {
      display: "none",
  },
},
  
  text2: {
    color: "#8f8f8f",
    fontSize: "2rem",
    lineHeight: "1.25",
    display: "none",
    '@media (max-width: 768px)': {
      marginLeft: "20px",
      marginTop: "30px",
      display: "block",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
      display: "block",
    },
   },

   landscape: {
     '@media (max-width: 768px)': {
      display: "none",
  },
   },
};

function NewPhotos(props) {
  const { classes } = props;
    return (
<div id="features">
  <div className={classes.photo}>
    <Grid container direction="row" alignItems="center">
    <Typography variant="h3" className={classes.headp}>Nostalgic Moments</Typography>       
    <Grid container item sm={12}
    style = {{  marginRight: "50px",}}
    >  
      <SpringModalDog/>
    </Grid> 
    <Grid container item sm = {12} style = {{ marginRight: "50px",}}>
      <SpringModalCat/>
    </Grid>
    <Typography variant="h4" className={classes.text2}>
    Nostalgia Therapy is based on proven reminsicense
    therapy tools that are designed to increase quality of life and time 
    spent together.</Typography> 
  </Grid>  
  <Grid container direction="row" alignItems="center" className={classes.landscape}>
  <Grid container item sm={12} md={12}>  
          <Typography variant="h3" className={classes.head}>Nostalgic Moments</Typography>       
          <Typography variant="h4" 
              className={classes.text1}>Nostalgia Therapy is based on proven reminsicense therapy tools 
              that are designed to increase quality of life and time spent together.
          </Typography> 
    </Grid>  
  </Grid>
  </div> 
  </div>     
  );
};

export default withStyles(styles)(NewPhotos);