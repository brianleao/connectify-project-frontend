import React, {useContext} from 'react'
import "./Player.css"
import AudioPlayer from 'react-h5-audio-player'
import request from '../services/services'
import { PlayerContext } from '../contexts/PlayerContext'

function Player () {
      const { dadosMusica } = useContext(PlayerContext)
      //console.log(dadosMusica)
     return (
        <AudioPlayer src={`/${dadosMusica.path_musica}`}/>
     )
}

export default Player