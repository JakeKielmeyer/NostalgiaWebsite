import React,{useState}  from "react";
import More2 from "./More2";

import copy from "./Copy";
import { photoSection, musicSection, videoSection, puzzleSection } from "./Copy";

const styles = {
}

function loadText(photoSection) {
    return (
        <More2 
            key={photoSection.id}
            text1={photoSection.text1}
            text2={photoSection.text2}
            img={photoSection.src}
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

function CreateMorePhoto() {
    return (
        <div>
            {photoSection.map(loadText)}
        </div>
    )
}

function CreateMoreMusic() {
    return (
        <div>
            {musicSection.map(loadText)}
        </div>
    )
}

function CreateMoreVideo() {
    return (
        <div>
            {videoSection.map(loadText)}
        </div>
    )
}

function CreateMorePuzzle() {
    return (
        <div>
            {puzzleSection.map(loadText)}
        </div>
    )
}

export {
    CreateMore,
    CreateMorePhoto,
    CreateMoreMusic,
    CreateMoreVideo,
    CreateMorePuzzle,
};