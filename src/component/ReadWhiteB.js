// Portrait

import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
}));

function ReadWhiteB({ children }) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className={isHidden ? classes.hidden : null}>{children}</div>
      <Button 
      size="Large"
      style = {{marginLeft: "68px", color: "white"}}
      onClick={() => 
      setIsHidden(!isHidden)}>{isHidden ? "Learn More ⬇" : "Collapse ⬆"}
      </Button>
    </>
  );
}

export default ReadWhiteB;