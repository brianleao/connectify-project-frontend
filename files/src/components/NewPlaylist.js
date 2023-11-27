import { Link } from "react-router-dom"
import styles from "./NewPlaylist.module.css"
import React, {useState} from 'react'

export default function NewPlaylist () {
    
    const [createPlaylist, setCreatePlaylist] = useState();
    
    return (
        <div>
            <h1>De um nome à sua Playlist</h1>
            <input type="text" onChange={(e) => setCreatePlaylist(e.target.value)}/>
            <button>Criar</button>
        </div>
    )
}