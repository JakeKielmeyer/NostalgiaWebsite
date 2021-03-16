// Portrait

import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

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
      <div className={isHidden ? classes.hidden : null}>{children}</div>
      <Button 
      size="Large"
      style = {{margin: "15px 80px", backgroundColor: "#DCDCDC", fontFamily: "KOW", fontSize: "1.5rem", textTransform: "none"}}
      onClick={() => 
      setIsHidden(!isHidden)}>{isHidden ? "Learn More ⬇" : "Collapse ⬆"}
      </Button>
    </>
  );
}

export default ReadMore;