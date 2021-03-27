import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "./PhotosForDemo";

//mui stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { CenterFocusStrong } from "@material-ui/icons";

function PhotoDemoA(props) {
    const {classes} = props;

    return (
        <div>
            <Carousel>

                <Card number = "1"/>
                <Card number = "2"/>
                <Card number = "3"/>
                <Card number = "4"/>
                <Card number = "5"/>
                <Card number = "6"/>
                <Card number = "7"/>
                <Card number = "8"/>

            </Carousel>
        </div>
    )
}

export default PhotoDemoA;