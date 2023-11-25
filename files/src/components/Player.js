import React, {useContext} from 'react'
import "./Player.css"
import Music from "../music/otherside.mp3"
import AudioPlayer from 'react-h5-audio-player'
import request from '../services/services'
import { PlayerContext } from '../contexts/PlayerContext'

function Player () {

      const {dadosMusica} = useContext(PlayerContext)

     return (
        <AudioPlayer src={Music} onPlay={e =>  {
         //console.log("onPlay");
      }}/>
     )
}

export default Player