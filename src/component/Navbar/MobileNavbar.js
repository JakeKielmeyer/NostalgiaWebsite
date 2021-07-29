import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button";

import {Link, NavLink} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    '@media (min-width:770px)': {
      display: "none",
    },
    '@media (max-width:768px)': {
      display: "flex",
    },
  },
  appBar: {
    boxShadow: "drop-shadow(0 0 0.1rem #8f8f8f)",
    paddingLeft: "2rem",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },

  title: {
    boxShadow: "none",
    flexGrow: 1,
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Leviathan",
    textTransform: "capitalize",
    marginRight: "45rem",
    '@media (max-width:812px)': {
      width: "30%",
      marginRight: "30rem",
    },
    '@media (max-width:770px)': {
      width: "30%",
      marginRight: "30rem",
    },
    '@media (max-width:740px)': {
      marginRight: "27rem",
    },
    '@media (max-width:667px)': {
      marginRight: "24rem",
    },
    '@media (max-width:414px)': {
      width: "60%",
      marginRight: "8rem",
    },
    '@media (max-width:375px)': {
      width: "70%",
      marginRight: "6rem",
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  navLink: {
    padding: "0 2rem",
    margin: "50px 0",
    fontFamily: "KOJ",
    display: "flex",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1.5rem',
   },
  },
  
  special: {
    fontFamily: "KOJ",
    display: "inline",
    padding: "0 1.5rem",
    margin: "0",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1.5rem',
   },
  },
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style = {{
          // background: "linear-gradient(to left top,  #cbcbcb, white)",
          background: "#3fa9f5"
        }}
      >
        <Toolbar>
        <Link to="/">
        <Typography variant="h6" noWrap className={classes.title}>
            Nostalgia Therapy
          </Typography>
        </Link>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            style = {{color: "#fff"}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <ul>

          <a href="#banner">
          <Button color="inherit" className={classes.navLink}>
               Home
             </Button>
          </a>

          <a class="navLink" href="#features">
              <Button className={classes.navLink}>
                Features
              </Button>
          </a>

            <a class="navLink" href="#about">
              <Button className={classes.navLink}>
                About
              </Button>
            </a>

          <a href="https://nostalgiadev-1f319.web.app/" target="_blank">
              <Button className={classes.navLink}>
                Sign Up
              </Button>
          </a>

          <a href="https://nostalgiadev-1f319.web.app/signin" target="_blank">
              <Button  className={classes.navLink}>
                Sign In
              </Button>
          </a>
{/* 
          <Link to="/HowTo">
             <Button color="inherit" className={classes.navLink}>
               How To
             </Button>
           </Link>
    
          <Link to  = "/caregiver">
           <Button className={classes.special}>
              Caregiver <br></br> Corner
            </Button>
          </Link> */}
        
        </ul>

      </Drawer>

    </div>
  );
}