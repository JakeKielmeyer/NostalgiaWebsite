// Landscape Mode

import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
}));

function ReadWhiteA({ children }) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className={isHidden ? classes.hidden : null}>{children}</div>
      <Button 
      size="small"
      style = {{marginLeft: "42px", color: "white"}}
      onClick={() => 
      setIsHidden(!isHidden)}>{isHidden ? "Learn More ⬇" : "⬆"}
      </Button>
    </>
  );
}

export default ReadWhiteA;