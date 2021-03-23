import React,{useState}  from "react";
import More2 from "./More2";
import copy, {PhotoSection} from "./Copy";

//mui stuff
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
}

function loadText(copy, index) {
    return (
        <More2 
            key={copy.id}
            text1={copy.text1}
            text2={copy.text2}
            img={copy.src}
        />
    )
}

function CreateMore() {
    return (
        <div>
            {copy.map(loadText)}
        </div>
    )
}

export default withStyles(styles)(CreateMore);