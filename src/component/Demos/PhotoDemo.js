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
    maxWidth: "90%",
    maxHeight: "90%",
    marginTop: ".5rem",
    marginLeft: "40px",
    filter: "drop-shadow(0 0 0.1rem white)",
    '@media (max-width: 1024px)': {
      marginLeft: "15px",
      marginTop: "10px",
  },
    '@media (max-width:414px)': {
      fontSize: '1.5rem',
      margin: "0",
  },
},
overlay: {
    zIndex: 2,
    position: "absolute",
    backgroundColor: "rgba(143, 143, 143, .6)",
    top: "2.75rem",
    marginLeft: "3.5rem",
    width: "43vw",
    height: "44vh",
    textAlign: "center",
    textTransform: "none",
    fontSize: "20px",
    '@media (max-width: 768px)': {
      zIndex: 2,
      position: "absolute",
      backgroundColor: "rgba(143, 143, 143, .6)",
      top: "9.25rem",
      marginLeft: "4rem",
      width: "70vw",
      height: "40vh",
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
            <Carousel>
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