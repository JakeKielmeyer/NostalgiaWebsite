import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

// Songs
import Beatles from "../../images/InMyLife.mp3";
import Elo from "../../images/MrBlueSky.mp3";
import Barb from "../../images/TheWayWeWere.mp3";

// Mui Stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    player: {
        position: "relative",
        border: "15px solid red",
        borderRadius: "25px",
        backgroundColor: "white",
        height: "13vh",
        width: "70vw",
        marginTop: "50px",
    },
    basic: {
        width: "30%",
    },
    basic1: {
        position: "absolute",
        width: "40%",
        marginLeft: "325px",
        marginBottom: "200px",
    },
    audio: {
        position: "absolute",
        marginLeft: "80px",
        marginBottom: "100px",
    },
    name: {
        fontFamily: "KOJ",
        marginLeft: "25px",
        marginTop: "5px",
        fontSize: "2rem",
    },
    album: {
        fontFamily: "KOJ",
        marginLeft: "25px",
        fontSize: "1.25rem",
    },
    artist: {
        fontFamily: "KOJ",
        marginLeft: "25px",
        fontSize: "1rem",
        marginTop: "5px",
    },
};

function MusicPlayer(props) {
const { classes } = props;


    return (

        <div className={classes.player}>

            <div className={classes.basic}>
                <Typography variant="h5" className={classes.name}>
                    In My Life
                </Typography>
                
                <div>
                <Typography variant="h7" className={classes.album}>
                    Revolver
                </Typography>
                </div>

                <div>
                <Typography variant="h7" className={classes.artist}>
                    Beatles
                </Typography>
                </div>
                
            <div className={classes.basic1}>
                <Typography variant="h5" className={classes.name}>
                    Boomer Heyday
                </Typography>
                
                <div>
                <Typography variant="h7" className={classes.album}>
                    60s Hits
                </Typography>
                </div>

            </div>

            </div>
            <audio controls className={classes.audio}>
            <source src={Beatles} type="audio/mp3"/>
            </audio>
        </div>
  );
};

export default withStyles(styles)(MusicPlayer);