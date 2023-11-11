import React from 'react'
import "./Player.module.css"
import Music from "../music/otherside.mp3"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Player () {


     return (
        <AudioPlayer src={Music} onPlay={e => console.log("onPlay")}/>
     )
}

export default Player