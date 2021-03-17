//mui stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  appBar: {
    background: "#333333",
    boxShadow: "none",
    paddingLeft: "2rem",
    '@media (max-width:414px)': {
      display: "none",
    },
  },

  brandName: {
    color: "#3fa9f5",
    fontSize: "1.18rem",
    fontFamily: "Leviathan",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1rem',
   },
  },

  navContainer: {
    display: "flex",
    color: "white",
    width: "88vw",
    justifyContent: "space-between",
  },

  navLink: {
    padding: "0 1rem",
    fontFamily: "KOJ",
    fontSize: "1.15rem",
    display: "flex",
    textTransform: "capitalize",
    '@media (min-width:760px)': {
      fontSize: '1rem',
   },
  },
};

function Navbar(props) {
  const { classes } = props;
  return (

    <AppBar position="absolute" className={classes.appBar}>
      <ToolBar className={classes.navContainer}>

          <Button color="inherit" className={classes.brandName}>
            Nostalgia Therapy
          </Button>
        
        <a class="navLink" href="#about">
          <Button color="inherit" className={classes.navLink}>
            About
          </Button>
        </a>
        
        <a class="navLink" href="#photos">
          <Button color="inherit" className={classes.navLink}>
            Nostalgic Moments
          </Button>
        </a>

        <a class="navLink" href="#NostalgiaRadio">
          <Button color="inherit" className={classes.navLink}>
            Music
          </Button>
        </a>

        <a class="navLink" href="#video">
          <Button color="inherit" className={classes.navLink}>
            Nostalgia TV
          </Button>
        </a>
    
        <a class="navLink" href="#puzzle">
          <Button color="inherit" className={classes.navLink}>
            Puzzle
          </Button>
       </a>
 
      </ToolBar>
    </AppBar>


  );
}

<a class="Class-Name" href="#The-ID-Name">Music</a>

// function Navbar(props) {
//   const { classes } = props;
//   return (
//     <AppBar position="absolute" className={classes.appBar}>
//       <ToolBar className={classes.navContainer}>
//         <Link to = "/home">
//         <Button color="inherit" className={classes.brandName}>
//             Nostalgia Therapy
//           </Button>
//         </Link>

//           <Button color="inherit" className={classes.navLink}>
//             About{""}
//           </Button>


//           <Button color="inherit" className={classes.navLink}>
//             Features
//           </Button>


//           <Button color="inherit" className={classes.navLink}>
//             Sign Up{" "}
//           </Button>


//           <Button color="inherit" className={classes.navLink}>
//             Sign In
//           </Button>

//       </ToolBar>
//     </AppBar>
//   );
// }

export default withStyles(styles)(Navbar);