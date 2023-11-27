import { Link } from "react-router-dom"
import styles from "./NewPlaylist.module.css"
import React, {useState} from 'react'
import NavBar from './NavBar'
import BottomBar from "./BottomBar"
import request from "../services/services"

export default function NewPlaylist () {
    
    const [createPlaylist, setCreatePlaylist] = useState("Minha Playlist!");
    
    return (
        <div>
            <NavBar/>
            <div className={styles.containerMain}>
                <h1>De um nome à sua Playlist</h1>
                <input type="text" className={styles.inputNamePlaylist} placeholder={createPlaylist} onChange={(e) => setCreatePlaylist(e.target.value)}/>
                <button className={styles.buttonStyle} onClick={() =>{
                    const params = {
                        nome: createPlaylist,
                        idUsuario: 1
                    }
                    console.log(params);
                    request.insertPlaylist(params)
                    window.location.href="/playlist"
                    }}>
                Criar</button>
            </div>
            <BottomBar/>
        </div>
    )
}