import React, {useState} from "react";
import navSlide from "./navbarAnimation";

// Mui Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';

const styles = {

    nav: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "8vh",
        backgroundColor: "#000",
        color: "white",
        fontFamily: "KOJ",
    },
    logo: {
        fontFamily: "Leviathan",
        fontSize: "22px",
        color: "#3fa9f5",
    },
    navlinks: {
        display: "flex",
        justifyContent: "space-around",
        width: "40%",
        listStyleType: "none",
        '@media (max-width:820px)': {
            width: "60%",
         },
        '@media (max-width:820px)': {
            zIndex: "2",
            position: "absolute",
            right: "0px",
            top: "6vh",
            height: "92vh",
            backgroundColor: "black",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            transform: "translateX(100%)",
            transition: "transform 0.5s ease-in",
         },
    },

    navActive: {
        transform: "translateX(0%)",
    },

    burger: {
        display: "none",
        cursor: "pointer",
        '@media (max-width:820px)': {
            display: 'block',
         },
    },

    burgerLine: {
        width: "25px",
        height: "3px",
        background: "white",
        margin: "5px",
    },
  };


function NewNavbar(props) {
const { classes } = props;

    return (

        <nav className = {classes.nav}>
            <div>
                <Typography variant = "h6" className={classes.logo}>Nostalgia Therapy</Typography>
            </div>
            <ul className= {classes.navlinks}>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#" >Home</a>
                </li>
            </ul>
            <div className={classes.burger}>
                <div className={classes.burgerLine}></div>
                <div className={classes.burgerLine}></div>
                <div className={classes.burgerLine}></div>
            </div>
        </nav>
    );
  }

//   navSlide();

  export default withStyles(styles)(NewNavbar);