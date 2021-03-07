
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "500px",
  },
};

function DenseAppBar(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Typography variant="h6">
            Photos
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(DenseAppBar);