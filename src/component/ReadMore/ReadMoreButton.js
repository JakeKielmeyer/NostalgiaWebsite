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

    <div className={isHidden ? classes.hidden : null}>
    {children}
    </div>

      <Button 
        size="Large"
        style = {{ textTransform: "none",
        fontFamily: "KOW",
        fontSize:"1.25rem",
        color: "#fff",
        left:"75%", 
        bottom:"90%",}}
        onClick={() => 
        setIsHidden(!isHidden)}>{isHidden ? "Learn More ⬇" : "Collapse ⬆"}
      </Button>
 

</div>
</>
  );
}

export default ReadMore;