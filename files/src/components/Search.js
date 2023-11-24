import BottomBar from './BottomBar'
import styles from './Search.module.css'
import {IoSearchOutline} from 'react-icons/io5'
import { useState } from 'react'
import axios from 'axios'
import request from "../services/services.js";
import React, {Component} from "react";
import Musics from './Musics.js'

function Search() {

    const [searchMusic, setSearchMusic] = useState();
    const [musicData, setMusicData] = useState();

    async function CallMusic() {
        try {
            const response = await request.getMusica(searchMusic);
            console.log(response.data[searchMusic-1]);

        } catch (error) {
            alert("Erro, não foi possível encontrar a busca realizada.");
        }
    }

    return (
        <div className={styles.container_main}>
            <div className={styles.containerSearch}>
                <IoSearchOutline className={styles.icon} onClick={CallMusic}/>
                <input type='text' className={styles.inputBar} placeholder='O que você deseja ouvir?' onChange={(e) => setSearchMusic(e.target.value)}/>
            </div>
            <BottomBar className={styles.containerBottom}/>
        </div>
    )
}

export default Search