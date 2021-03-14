// Portrait Mode

import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
}));

function ReadB({ children }) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className={isHidden ? classes.hidden : null}>{children}</div>
      <Button 
      size="small"
      style = {{marginLeft: "65px"}}
      onClick={() => 
      setIsHidden(!isHidden)}>{isHidden ? "Learn More ⬇" : "Collapse ⬆"}
      </Button>
    </>
  );
}

export default ReadB;