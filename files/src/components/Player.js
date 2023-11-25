import React, {useContext} from 'react'
import "./Player.css"
import AudioPlayer from 'react-h5-audio-player'
import request from '../services/services'
import { PlayerContext } from '../contexts/PlayerContext'

function Player () {
      const { dadosMusica } = useContext(PlayerContext)

     return (
        <AudioPlayer src={`/${dadosMusica.path_musica}`} onPlay={e =>  {
         //console.log("onPlay");
      }}/>
     )
}

export default Player