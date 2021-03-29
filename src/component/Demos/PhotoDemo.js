import React from 'react';

// Images
import Boomer from "../../images/radio/Boomer1-100.jpg";
import jakeAndGrandpa from "../ReadMore/Jake and Grandpa.png";
import Cherub from "../ReadMore/Cherub.png";
import Commercial from "../../images/tv/Commercial.PNG";
import Pumpkin from "../../images/puzzles/pumpkin.jpg";

//mui stuff
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";

const styles ={
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // marginLeft: "50px",
  },
  hero: {
    zIndex: 0,
    maxWidth: "70%",
    maxHeight: "70%",
    marginTop: ".5rem",
    marginLeft: "40px",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width: 1024px)': {
      marginLeft: "150px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
overlay: {
    zIndex: 2,
    backgroundColor: "rgba(143, 143, 143, .6)",
    marginTop: "8.25rem",
    marginLeft: "6.75rem",
    width: "65vw",
    height: "37vh",
    position: "absolute",
    textAlign: "center",
    textTransform: "none",
    fontSize: "20px",
    '@media (max-width: 768px)': {
      zIndex: 2,
      backgroundColor: "rgba(143, 143, 143, .6)",
      textAlign: "center",
      textTransform: "none",
      fontSize: "20px",
    },
  },
  overlayText: {
    color: "#fff",
    margin: "25px auto",
    disaply: "none",
  },
};

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});


function SpringModal(props) {
  const {classes} = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" 
        className = {classes.overlay}
        onClick={handleOpen}>
      <Typography variant = "h3" className= {classes.overlayText}>
          Preview
      </Typography>
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div>
          <Carousel
            autoPlay={false}
            fullHeightHover={false}
            animation={"fade"}
            timeout={12}
            navButtonsAlwaysVisible={true}
            indicatorContainerProps={{
          style: { width: "0px", height: "0px" },
        }}
          >
            <img src = {Boomer}className = {classes.hero}></img>   
            <img src = {Pumpkin}className = {classes.hero}></img>   
            <img src = {Cherub}className = {classes.hero}></img>   
            <img src = {Commercial}className = {classes.hero}></img>   
            <img src = {jakeAndGrandpa}className = {classes.hero}></img>   
            </Carousel>
        </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(SpringModal);