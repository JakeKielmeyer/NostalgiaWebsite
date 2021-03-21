// Portrait

import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Cta from "../ctaButton";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
}));

function ReadMore({ children }) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
    <div>
    <Grid 
          container
          direction="row"
          alignItems="center">

    <div className={isHidden ? classes.hidden : null}>
    {children}
    </div>

    <Grid container item sm={6}>
      <Button 
        size="Large"
        style = {{ backgroundColor: "#DCDCDC", fontFamily: "KOW", fontSize: "1.5rem", textTransform: "none"}}
        onClick={() => 
        setIsHidden(!isHidden)}>{isHidden ? "Learn More ⬇" : "Collapse ⬆"}
      </Button>
    </Grid>
    
    <Grid container item sm ={6}>
      <Cta/>
    </Grid>
  </Grid>
</div>
</>
  );
}

export default ReadMore;